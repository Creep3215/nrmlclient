const fs=require('fs'),path=require('path'),os=require('os'),crypto=require('crypto');
const AdmZip=require('adm-zip');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'t7-'));const pd=path.join(root,'p1');fs.mkdirSync(path.join(pd,'mods'),{recursive:true});
const H=b=>crypto.createHash('sha512').update(b).digest('hex');
const jar=(id,ver,dep)=>{const z=new AdmZip();z.addFile('fabric.mod.json',Buffer.from(JSON.stringify({id,version:ver,depends:dep||{}})));return z.toBuffer();};
const ver=(id,pid,num,buf,name,type)=>({id,project_id:pid,version_number:num,version_type:type||'release',game_versions:['26.3'],files:[{primary:true,filename:name,url:'https://cdn.modrinth.com/'+name,size:buf.length,hashes:{sha512:H(buf)}}]});
const bufs={};const reg=(b,n)=>{bufs[n]=b;return b;};
// installed: sodium beta 0.9.3-beta.5, nvidium 0.4.4 (needs sodium =0.9.2), ferritecore 6.0 (newer 6.1 exists)
const sB=reg(jar('sodium','0.9.3-beta.5'),'sodium-beta.jar'),s2=reg(jar('sodium','0.9.2'),'sodium-0.9.2.jar');
const nv=reg(jar('nvidium','0.4.4',{sodium:'0.9.2'}),'nvidium.jar');
const f0=reg(jar('ferritecore','6.0.0'),'ferrite-6.0.jar'),f1=reg(jar('ferritecore','6.1.0'),'ferrite-6.1.jar');
fs.writeFileSync(path.join(pd,'mods','sodium-beta.jar'),sB);fs.writeFileSync(path.join(pd,'mods','nvidium.jar'),nv);fs.writeFileSync(path.join(pd,'mods','ferrite-6.0.jar'),f0);
const vSB=ver('sB','PS','0.9.3-beta.5',sB,'sodium-beta.jar','beta'),vS2=ver('s2','PS','0.9.2',s2,'sodium-0.9.2.jar'),vNV=ver('nv','PN','0.4.4',nv,'nvidium.jar'),vF0=ver('f0','PF','6.0',f0,'ferrite-6.0.jar'),vF1=ver('f1','PF','6.1',f1,'ferrite-6.1.jar');
const cur={[H(sB)]:vSB,[H(nv)]:vNV,[H(f0)]:vF0};
const candsBy={PS:[vSB,vS2],PN:[vNV],PF:[vF1,vF0]};
const profs=[{id:'p1',mc:'26.3',loader:'fabric'}];let status=[];
const ctx={require,fs,path,AdmZip,pdir:()=>pd,FOLDER:{mod:'mods',shader:'shaderpacks',resourcepack:'resourcepacks'},profiles:()=>profs,PF:'x',
 rd:(f,d)=>{try{return JSON.parse(fs.readFileSync(f,'utf8'))}catch{return d}},wr:(f,o)=>fs.writeFileSync(f,JSON.stringify(o)),
 __cap:(s,n)=>String(s||'').slice(0,n),__UPC:{},send:(c,d)=>status.push(d),
 dl:async(u,d)=>{fs.writeFileSync(d,bufs[path.basename(u)]);},
 api:async p=>{const m=/project\/(\w+)\/version/.exec(p);if(m)return candsBy[m[1]]||[];throw 1},
 __mrGet:async p=>[{id:'PS',title:'Sodium',game_versions:['26.3','26.2']},{id:'PN',title:'Nvidium',game_versions:['26.3']},{id:'PF',title:'FerriteCore',game_versions:['26.3','26.2']}],
 __mrPost:async(p,b)=>cur,
 ipcMain:{handle:(n,f)=>ctx.H[n]=f,removeHandler(){}},H:{}};
const src=fs.readFileSync(__dirname+'/../p3/add_main7.js','utf8');
new Function(...Object.keys(ctx),src+';return 1')(...Object.values(ctx));
(async()=>{let bad=0;const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)bad++;};
 const r=await ctx.H['sync:analyze']({},'p1');
 ok(r.conflicts.length===1&&r.conflicts[0].mod==='Nvidium'&&r.conflicts[0].dep==='Sodium','analyze finds Nvidium/Sodium clash '+JSON.stringify(r.conflicts));
 ok(r.rows.find(x=>x.title==='FerriteCore').status==='upd','ferrite update planned');
 ok(r.candidates.join()==='26.3','best version 26.3');
 const o=await ctx.H['sync:apply']({},'p1','26.3',false);
 const fl=fs.readdirSync(path.join(pd,'mods')).sort();
 ok(fl.includes('sodium-0.9.2.jar')&&!fl.includes('sodium-beta.jar'),'sodium rolled to 0.9.2 so Nvidium works '+fl);
 ok(fl.includes('ferrite-6.1.jar')&&!fl.includes('ferrite-6.0.jar'),'ferrite updated');
 ok(o.unresolved.length===0&&o.fixed.length===1,'fixed note '+JSON.stringify(o.fixed));
 ok(!fs.existsSync(path.join(pd,'mods','.nrml-stage')),'stage cleaned');
 const r2=await ctx.H['sync:analyze']({},'p1');
 ok(r2.conflicts.length===0,'no clashes afterwards (cur map static in mock: '+r2.conflicts.length+')');
 process.exit(bad?1:0);})().catch(e=>{console.log('ERR',e);process.exit(1)});
