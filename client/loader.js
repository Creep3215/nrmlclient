// NRML Client loader: starts the newest verified update from %AppData%, falls back to the bundled version.
'use strict';
const fs=require('fs'),path=require('path'),Module=require('module');
function sealOk(ud,dir,ver){
  // the update on disk must be byte-identical to the zip that carries our signature (stops anyone/anything dropping code into %AppData%)
  const crypto=require('crypto');
  const cfg=JSON.parse(fs.readFileSync(path.join(__dirname,'update-config.json'),'utf8'));
  const m=JSON.parse(fs.readFileSync(path.join(ud,ver+'.json'),'utf8'));
  if(m.version!==ver)return false;
  const zip=fs.readFileSync(path.join(ud,ver+'.zip'));
  if(zip.length!==m.size||crypto.createHash('sha256').update(zip).digest('hex')!==m.sha256)return false;
  const key=crypto.createPublicKey({key:Buffer.from(cfg.publicKey,'base64'),format:'der',type:'spki'});
  if(!crypto.verify(null,Buffer.from(m.version+'\n'+m.file+'\n'+m.size+'\n'+m.sha256),key,Buffer.from(String(m.sig),'base64')))return false;
  const AdmZip=require(path.join(__dirname,'node_modules','adm-zip')),want=new Map();
  for(const e of new AdmZip(zip).getEntries())if(!e.isDirectory)want.set(e.entryName.replace(/\\/g,'/'),e.getData());
  const walk=(d,rel)=>{for(const x of fs.readdirSync(d,{withFileTypes:true})){const r=rel?rel+'/'+x.name:x.name;if(!rel&&x.name==='node_modules')continue;
    if(x.isDirectory())walk(path.join(d,x.name),r);else{const w=want.get(r);if(!w||!w.equals(fs.readFileSync(path.join(d,x.name))))throw new Error('tampered');want.delete(r);}}};
  walk(dir,'');
  return want.size===0;
}
function load(){
  try{
    const {app}=require('electron');
    const ud=path.join(app.getPath('appData'),'NRML Client','updates'),cf=path.join(ud,'current.json');
    const cur=JSON.parse(fs.readFileSync(cf,'utf8'));
    const bundled=require('./package.json').version;
    const num=v=>String(v).split('.').map(x=>parseInt(x,10)||0);
    const newer=(a,b)=>{const A=num(a),B=num(b);for(let i=0;i<3;i++){if((A[i]||0)!==(B[i]||0))return(A[i]||0)>(B[i]||0);}return false;};
    const dir=path.join(ud,String(cur.version));
    if(/^\d+\.\d+\.\d+$/.test(String(cur.version))&&newer(cur.version,bundled)&&fs.existsSync(path.join(dir,'main.js'))&&fs.existsSync(path.join(dir,'package.json'))){
      let ok=false;try{ok=sealOk(ud,dir,String(cur.version));}catch{}
      if(!ok){try{fs.rmSync(cf,{force:true});}catch{}}
      else if((cur.boots|0)>=3){try{fs.rmSync(cf,{force:true});}catch{}}  // 3 starts without a confirmed good start: roll back
      else{
        cur.boots=(cur.boots|0)+1;fs.writeFileSync(cf,JSON.stringify(cur));
        process.env.NODE_PATH=[path.join(__dirname,'node_modules'),process.env.NODE_PATH||''].filter(Boolean).join(path.delimiter);Module._initPaths();
        process.env.NRML_UPDATE_DIR=dir;
        return require(path.join(dir,'main.js'));
      }
    }
  }catch(e){try{console.error('update loader:',e&&e.message);}catch{}}
  return require('./main.js');
}
load();
