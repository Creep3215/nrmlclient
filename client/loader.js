// NRML Client loader: starts the newest verified update from %AppData%, falls back to the bundled version.
'use strict';
const fs=require('fs'),path=require('path'),Module=require('module');
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
      if((cur.boots|0)>=3){try{fs.rmSync(cf,{force:true});}catch{}}  // 3 starts without a confirmed good start: roll back
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
