const fs=require('fs'),path=require('path'),os=require('os'),crypto=require('crypto');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'t7-'));const pd=path.join(root,'p1');fs.mkdirSync(path.join(pd,'mods'),{recursive:true});
const H=b=>crypto.createHash('sha512').update(b).digest('hex');
const A1=Buffer.from('A-old'),B1=Buffer.from('B-old'),A2=Buffer.from('A-new'),B2=Buffer.from('B-new-27');
fs.writeFileSync(path.join(pd,'mods','a-1.jar'),A1);fs.writeFileSync(path.join(pd,'mods','b-1.jar.disabled'),B1);fs.writeFileSync(path.join(pd,'mods','mystery.jar'),'zz');
const ver=(id,pid,num,buf,name,gv)=>({id,project_id:pid,version_number:num,game_versions:gv,files:[{primary:true,filename:name,url:'https://cdn.modrinth.com/'+name,size:buf.length,hashes:{sha512:H(buf)}}]});
const bufs={};
const cur={[H(A1)]:ver('a1','PA','1',A1,'a-1.jar',['26.1','26.2']),[H(B1)]:ver('b1','PB','1',B1,'b-1.jar',['26.1'])};
const upd={'26.1':{[H(A1)]:ver('a1x','PA','1.5',A2,'a-1.5.jar',['26.1']),[H(B1)]:cur[H(B1)]},'26.2':{[H(A1)]:cur[H(A1)]}};
bufs['a-1.5.jar']=A2;
const profs=[{id:'p1',mc:'26.3',loader:'fabric'}];let status=[];
const ctx={fs,path,pdir:()=>pd,FOLDER:{mod:'mods',shader:'shaderpacks',resourcepack:'resourcepacks'},profiles:()=>profs,PF:'x',
 rd:(f,d)=>{try{return JSON.parse(fs.readFileSync(f,'utf8'))}catch{return d}},wr:(f,o)=>fs.writeFileSync(f,JSON.stringify(o)),
 sha512:f=>H(fs.readFileSync(f)),__cap:(s,n)=>String(s||'').slice(0,n),__UPC:{},send:(c,d)=>status.push(d),
 dl:async(u,d)=>{fs.writeFileSync(d,bufs[path.basename(u)]);},api:async()=>{throw 1},
 __mrGet:async p=>[{id:'PA',title:'Alpha',game_versions:['1.20','26.1','26.2']},{id:'PB',title:'Beta',game_versions:['26.1','1.21']}],
 __mrPost:async(p,b)=>p==='/version_files'?cur:(upd[b.game_versions[0]]||{}),
 ipcMain:{handle:(n,f)=>ctx.H[n]=f},H:{}};
const wr=(f,o)=>fs.writeFileSync(f,JSON.stringify(o));
const src=fs.readFileSync(__dirname+'/../p3/add_main7.js','utf8');
new Function(...Object.keys(ctx),src+';return 1')(...Object.values(ctx));
(async()=>{let bad=0;const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)bad++;};
 const r=await ctx.H['sync:analyze']({},'p1');
 ok(r.candidates.join()==='26.1','intersection of all mods = 26.1 ('+r.candidates+')');
 ok(r.target==='26.1'&&r.rows.find(x=>x.title==='Alpha').status==='upd'&&r.rows.find(x=>x.title==='Beta').status==='ok'&&r.rows.find(x=>x.file==='mystery.jar').status==='unk','row statuses');
 const r2=await ctx.H['sync:analyze']({},'p1','26.2');
 ok(r2.rows.find(x=>x.title==='Beta').status==='none'&&r2.rows.find(x=>x.title==='Alpha').status==='ok','26.2: Beta incompatible');
 const o=await ctx.H['sync:apply']({},'p1','26.1',true);
 const fl=fs.readdirSync(path.join(pd,'mods')).sort();
 ok(o.updated.join()==='Alpha'&&fl.includes('a-1.5.jar')&&!fl.includes('a-1.jar')&&fl.includes('b-1.jar.disabled'),'applied; old removed, disabled kept '+fl);
 ok(profs[0].mc==='26.1','profile mc switched');
 ok(JSON.parse(fs.readFileSync(path.join(pd,'.prism-index.json')))['a-1.5.jar']==='PA','index updated');
 process.exit(bad?1:0);})().catch(e=>{console.log('ERR',e);process.exit(1)});
