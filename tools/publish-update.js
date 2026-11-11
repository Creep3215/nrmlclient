#!/usr/bin/env node
// Usage: node publish-update.js <path-to-resources/app> <private-key.pem> [notes] [--release]
// Builds app-<ver>.zip (without node_modules), signs it (Ed25519) and writes version.json.
// With --release and an authenticated `gh` it also creates the GitHub Release.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),cp=require('child_process');
const [,,appDir,keyFile,notesArg='']=process.argv;
let notes=notesArg;try{if(/^\s*\{/.test(notesArg))notes=JSON.parse(notesArg);}catch{}  // plain text or JSON {"en":"..","hu":"..","es":..,"pt":..,"fr":..}
if(!appDir||!keyFile){console.log('Usage: node publish-update.js <resources/app> <private-key.pem> [notes] [--release]');process.exit(1);}
const AdmZip=require('adm-zip');
const ver=JSON.parse(fs.readFileSync(path.join(appDir,'package.json'),'utf8')).version;
const z=new AdmZip();
(function add(d,rel){for(const f of fs.readdirSync(d,{withFileTypes:true})){
  if(f.name==='node_modules'&&!rel)continue;
  const p=path.join(d,f.name),r=rel?rel+'/'+f.name:f.name;
  if(f.isDirectory())add(p,r);else z.addFile(r,fs.readFileSync(p));}})(appDir,'');
const file='app-'+ver+'.zip',buf=z.toBuffer();
const sha=crypto.createHash('sha256').update(buf).digest('hex');
const sig=crypto.sign(null,Buffer.from(ver+'\n'+file+'\n'+buf.length+'\n'+sha),crypto.createPrivateKey(fs.readFileSync(keyFile))).toString('base64');
const out=path.resolve('release-'+ver);fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,file),buf);
fs.writeFileSync(path.join(out,'version.json'),JSON.stringify({version:ver,file,size:buf.length,sha256:sha,sig,notes},null,2));
console.log('Ready:',out);
if(process.argv.includes('--release')){
  cp.execFileSync('gh',['release','create','v'+ver,path.join(out,file),path.join(out,'version.json'),'--title','NRML Client '+ver,'--notes',typeof notes==='string'?(notes||('NRML Client '+ver)):(notes.en||('NRML Client '+ver))],{stdio:'inherit'});
}else console.log('Upload '+file+' and version.json as assets of a GitHub Release tagged v'+ver);
