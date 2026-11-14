const fs=require('fs'),path=require('path'),os=require('os'),crypto=require('crypto');
const AdmZip=require(process.argv[2]+'/node_modules/adm-zip');let bad=0;const ok=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)bad++;};
// --- token encryption (fake safeStorage = base64 reversal) ---
const root=fs.mkdtempSync(path.join(os.tmpdir(),'t8-')),ACC=path.join(root,'account.json');
const ss={isEncryptionAvailable:()=>true,encryptString:s=>Buffer.from('ENC'+s),decryptString:b=>b.toString().slice(3)};
const src=fs.readFileSync(__dirname+'/../p3/add_main8.js','utf8');
const ctx={require:n=>n==='electron'?{safeStorage:ss,session:{defaultSession:{setPermissionRequestHandler(){},setPermissionCheckHandler(){}}}}:require(n),fs:Object.assign({},fs),path,ACC,app:{whenReady:()=>Promise.resolve()},rd:(f,d)=>{try{return JSON.parse(ctx.fs.readFileSync(f,'utf8'))}catch{return d}},wr:(f,o)=>ctx.fs.writeFileSync(f,JSON.stringify(o))};
new Function(...Object.keys(ctx),src)(...Object.values(ctx));
ctx.wr(ACC,{token:'SECRET-REFRESH',name:'x',id:'1'});
const raw=fs.readFileSync(ACC,'utf8');ok(!raw.includes('SECRET-REFRESH')&&raw.includes('enc'),'token not on disk in plain text');
ok(ctx.rd(ACC,null).token==='SECRET-REFRESH'&&ctx.rd(ACC,null).name==='x','token decrypts transparently');
// --- loader seal ---
const ud=path.join(root,'updates');fs.mkdirSync(path.join(ud,'9.9.9'),{recursive:true});
const z=new AdmZip();z.addFile('main.js',Buffer.from('console.log(1)'));z.addFile('package.json',Buffer.from('{"version":"9.9.9"}'));const buf=z.toBuffer();
const {publicKey,privateKey}=crypto.generateKeyPairSync('ed25519');
const m={version:'9.9.9',file:'app-9.9.9.zip',size:buf.length,sha256:crypto.createHash('sha256').update(buf).digest('hex')};
m.sig=crypto.sign(null,Buffer.from(m.version+'\n'+m.file+'\n'+m.size+'\n'+m.sha256),privateKey).toString('base64');
fs.writeFileSync(path.join(ud,'9.9.9.zip'),buf);fs.writeFileSync(path.join(ud,'9.9.9.json'),JSON.stringify(m));
fs.writeFileSync(path.join(ud,'9.9.9','main.js'),'console.log(1)');fs.writeFileSync(path.join(ud,'9.9.9','package.json'),'{"version":"9.9.9"}');
const ldr=fs.readFileSync(__dirname+'/../p3/loader.js','utf8');const fnSrc=ldr.slice(ldr.indexOf('function sealOk'),ldr.indexOf('function load'));
const dd=fs.mkdtempSync(path.join(os.tmpdir(),'ld-'));fs.mkdirSync(dd+'/node_modules');fs.symlinkSync(process.argv[2]+'/node_modules/adm-zip',dd+'/node_modules/adm-zip');
fs.writeFileSync(dd+'/update-config.json',JSON.stringify({publicKey:publicKey.export({type:'spki',format:'der'}).toString('base64')}));
const sealOk=new Function('fs','path','__dirname','require',fnSrc+';return sealOk')(fs,path,dd,require);
ok(sealOk(ud,path.join(ud,'9.9.9'),'9.9.9')===true,'genuine update passes');
fs.appendFileSync(path.join(ud,'9.9.9','main.js'),';evil()');let r;try{r=sealOk(ud,path.join(ud,'9.9.9'),'9.9.9');}catch{r=false;}ok(r===false,'modified file is rejected');
fs.writeFileSync(path.join(ud,'9.9.9','main.js'),'console.log(1)');fs.writeFileSync(path.join(ud,'9.9.9','extra.js'),'x');try{r=sealOk(ud,path.join(ud,'9.9.9'),'9.9.9');}catch{r=false;}ok(r===false,'extra dropped file is rejected');
fs.rmSync(path.join(ud,'9.9.9','extra.js'));const m2={...m,sig:Buffer.alloc(64).toString('base64')};fs.writeFileSync(path.join(ud,'9.9.9.json'),JSON.stringify(m2));try{r=sealOk(ud,path.join(ud,'9.9.9'),'9.9.9');}catch{r=false;}ok(r===false,'forged signature rejected');
process.exit(bad?1:0);
