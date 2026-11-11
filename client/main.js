const _0x5dd4ae=_0x2de6;(function(_0x47514e,_0x23fa4c){const _0x576e08=_0x2de6,_0x1b9a0c=_0x47514e();while(!![]){try{const _0x165f96=parseInt(_0x576e08(0x2ce))/(0x4*0x6b6+-0xaee+-0xfe9)*(parseInt(_0x576e08(0x2c2))/(-0x9e4+0x1a44+-0x346*0x5))+parseInt(_0x576e08(0x196))/(-0x269*0xd+-0x1ba*0x4+0x90*0x44)*(parseInt(_0x576e08(0x24a))/(0xa1a*0x2+-0x68*-0x37+-0x2a88))+-parseInt(_0x576e08(0x436))/(-0x49d*0x5+0xcc7+0xd*0xcb)+-parseInt(_0x576e08(0x2d3))/(0xb74*0x1+0xe52+-0x19c0)+-parseInt(_0x576e08(0x2e9))/(0x2262+-0x1*0x22e1+0x2*0x43)*(-parseInt(_0x576e08(0x369))/(0x15e5+0x1bfe+-0x31db))+-parseInt(_0x576e08(0x41a))/(0x1*0xb8d+0x1355*-0x2+0x1b26)+-parseInt(_0x576e08(0x1c3))/(0xc89+-0x369*-0x4+0x1*-0x1a23)*(-parseInt(_0x576e08(0x3f4))/(-0x1*-0xced+-0x1ef*0xa+-0xe*-0x76));if(_0x165f96===_0x23fa4c)break;else _0x1b9a0c['push'](_0x1b9a0c['shift']());}catch(_0x11c8bb){_0x1b9a0c['push'](_0x1b9a0c['shift']());}}}(_0x50b6,0x1131c3+-0x81aa*-0x2+-0x75f06));const {app,BrowserWindow,ipcMain,dialog,shell,screen}=require(_0x5dd4ae(0x19f)),path=require(_0x5dd4ae(0x44b)),fs=require('fs'),os=require('os'),cp=require(_0x5dd4ae(0x1d7)+_0x5dd4ae(0x39e)),_spawn=cp[_0x5dd4ae(0x28e)],_exec=cp['exec'];cp[_0x5dd4ae(0x28e)]=function(_0x13475c,_0x159ea0,_0x22a27a){return!Array['isArray'](_0x159ea0)&&(_0x22a27a=_0x159ea0,_0x159ea0=[]),_spawn(_0x13475c,_0x159ea0,{..._0x22a27a,'windowsHide':!![]});},cp[_0x5dd4ae(0x3a3)]=function(_0x5f4659,_0x42f8fa,_0x4a6ba5){const _0x132947=_0x5dd4ae;return typeof _0x42f8fa===_0x132947(0x379)?_exec(_0x5f4659,{'windowsHide':!![]},_0x42f8fa):_exec(_0x5f4659,{..._0x42f8fa,'windowsHide':!![]},_0x4a6ba5);};const {Client}=require('minecraf'+_0x5dd4ae(0x1ef)+_0x5dd4ae(0x400)),{Auth}=require(_0x5dd4ae(0x43d)),AdmZip=require(_0x5dd4ae(0x1af));try{
  // keep existing data folders of older builds; fresh installs get "NRML Client"
  const ad=app.getPath('appData');
  const found=['prism-launcher','nrml-launcher'].map(n=>path.join(ad,n)).find(p=>fs.existsSync(p));
  app.setPath('userData',found||path.join(ad,'NRML Client'));
  app.setName('NRML Client');
}catch{}
const ROOT=path[_0x5dd4ae(0x372)](app[_0x5dd4ae(0x186)](_0x5dd4ae(0x228)),_0x5dd4ae(0x229)),PF=path[_0x5dd4ae(0x372)](ROOT,_0x5dd4ae(0x320)+_0x5dd4ae(0x45e)),CF=path[_0x5dd4ae(0x372)](ROOT,'config.j'+'son'),ACC=path[_0x5dd4ae(0x372)](ROOT,_0x5dd4ae(0x1c5)+_0x5dd4ae(0x41b));fs[_0x5dd4ae(0x2bf)+'c'](ROOT,{'recursive':!![]});const rd=(()=>{const _f=(_0x19fb8f,_0x11851c)=>{const _0x51d4bd=_0x5dd4ae;try{return JSON['parse'](fs[_0x51d4bd(0x2b9)+_0x51d4bd(0x1ad)](_0x19fb8f,_0x51d4bd(0x3d3)));}catch{return _0x11851c;}};return(f,d)=>{const v=_f(f,d);if(f===ACC&&v&&typeof v.enc==='string'){try{return{name:v.name,id:v.id,token:require('electron').safeStorage.decryptString(Buffer.from(v.enc,'base64'))};}catch{return d;}}return v;};})(),wr=(()=>{const _f=(_0x5df7f3,_0x5d8305)=>fs[_0x5dd4ae(0x234)+_0x5dd4ae(0x27d)](_0x5df7f3,JSON[_0x5dd4ae(0x3b9)+'y'](_0x5d8305,null,0x929*0x3+-0x1564+-0x615));return(f,v)=>{try{const ss=require('electron').safeStorage;if(f===ACC&&v&&typeof v.token==='string'&&ss&&ss.isEncryptionAvailable())v={name:v.name,id:v.id,enc:ss.encryptString(v.token).toString('base64')};}catch{}return _f(f,v);};})(),pdir=(f=>id=>{if(!/^[A-Za-z0-9_-]{1,64}$/.test(String(id)))throw new Error('E:id');return f(id);})(_0x5b01e9=>path[_0x5dd4ae(0x372)](ROOT,_0x5dd4ae(0x2c7)+'s',_0x5b01e9)),UA=({'User-Agent':'nrml-client/2.0 (Developed by Nermal)'}),FOLDER={'mod':_0x5dd4ae(0x1b7),'shader':_0x5dd4ae(0x264)+'cks','resourcepack':_0x5dd4ae(0x1df)+_0x5dd4ae(0x25e)},send=(_0x5ce438,_0xaa553)=>win&&!win[_0x5dd4ae(0x1cd)+_0x5dd4ae(0x232)]()&&win[_0x5dd4ae(0x308)+_0x5dd4ae(0x418)][_0x5dd4ae(0x45d)](_0x5ce438,_0xaa553),safe=(_0x50ad06,_0x5bed5d)=>{const _0x3e64ef=_0x5dd4ae,_0x4ae451=path[_0x3e64ef(0x244)](_0x50ad06,_0x5bed5d);if(!_0x4ae451[_0x3e64ef(0x327)+'th'](path[_0x3e64ef(0x244)](_0x50ad06)+path[_0x3e64ef(0x201)]))throw new Error(_0x3e64ef(0x283));return _0x4ae451;};let win;{
  // central IPC firewall: only our own window, only known channels, strictly validated arguments
  const h=ipcMain.handle.bind(ipcMain);
  const ID=/^[A-Za-z0-9_-]{1,64}$/,SLUG=/^[\w!@$()`.+,"'-]{1,64}$/;
  const DIRS=['mods','shaderpacks','resourcepacks'],TYPES=['mod','shader','resourcepack'],ALLOW=new Set();
  const bad=()=>{throw new Error('E:arg');};
  const id=(v,opt)=>{if(v==null||v===''||v===false){if(opt)return;bad();}if(typeof v!=='string'||!ID.test(v))bad();};
  const oneOf=(v,l,opt)=>{if(v==null&&opt)return;if(!l.includes(v))bad();};
  const str=(v,max,opt)=>{if(v==null&&opt)return;if(typeof v!=='string'||v.length>max)bad();};
  const file=v=>{str(v,255);if(!v||/[\\/\0]/.test(v)||v==='..'||v==='.')bad();};
  const bool=v=>{if(typeof v!=='boolean')bad();};
  const obj=v=>{if(!v||typeof v!=='object'||Array.isArray(v))bad();};
  const CFG={
    lang:v=>oneOf(v,['en','hu','es','pt','fr']),close:v=>oneOf(v,['ask','keep','hide']),gpu:bool,overlay:bool,overlayWelcome:bool,
    overlayMode:v=>oneOf(v,['precise','standard']),discord:bool,discordProfile:bool,
    discordId:v=>{if(typeof v!=='string'||!/^\d{0,20}$/.test(v))bad();},
    accent:v=>{if(typeof v!=='string'||!/^(#[0-9a-fA-F]{6})?$/.test(v))bad();}
  };
  const none=()=>{};
  const R={
    credits:none,state:none,versions:none,login:none,logout:none,'import:scan':none,'import:pick':none,'import:file':none,plog:none,pdebug:none,
    openurl:a=>str(a[0],300),
    cfgset:a=>{obj(a[0]);for(const k of Object.keys(a[0])){if(!Object.prototype.hasOwnProperty.call(CFG,k))bad();CFG[k](a[0][k]);}},
    psave:a=>{const o=a[0];obj(o);if(o.id!=null)id(o.id);for(const k of Object.keys(o))if(!['id','name','mc','loader','ram','fast','stable','jvm','last'].includes(k))bad();
      str(o.name,200,true);str(o.mc,40,true);str(o.jvm,1000,true);if(o.loader!=null)oneOf(o.loader,['fabric','vanilla','other']);if(o.ram!=null&&!Number.isFinite(o.ram))bad();},
    pdel:a=>id(a[0]),flist:a=>id(a[0]),pdup:a=>id(a[0]),pexport:a=>id(a[0]),'mods:clean':a=>id(a[0]),'mods:update':a=>id(a[0]),'mods:check':a=>id(a[0]),popen:a=>id(a[0],true),
    fdel:a=>{id(a[0]);oneOf(a[1],DIRS);file(a[2]);},ftoggle:a=>{id(a[0]);oneOf(a[1],DIRS);file(a[2]);},
    fadd:a=>{id(a[0]);oneOf(a[1],DIRS);if(!Array.isArray(a[2])||a[2].length>500)bad();a[2].forEach(p=>str(p,1024));},
    local:a=>{id(a[0]);oneOf(a[1],TYPES);},
    search:a=>{oneOf(a[0],[...TYPES,'modpack']);str(a[1],200,true);id(a[2],true);if(a[3]!=null&&!(Number.isInteger(a[3])&&a[3]>=0&&a[3]<=10000))bad();},
    install:a=>{oneOf(a[2],[...TYPES,'modpack']);id(a[0],a[2]==='modpack');if(typeof a[1]!=='string'||!SLUG.test(a[1]))bad();},
    'import:run':a=>{if(typeof a[0]!=='string'||!ALLOW.has(a[0]))bad();obj(a[1]);str(a[1].name,200,true);str(a[1].mc,40,true);},
    optimize:a=>{id(a[0]);},
    finfo:a=>{id(a[0]);oneOf(a[1],DIRS);},fmeta:a=>{id(a[0]);oneOf(a[1],DIRS);},
    fdetail:a=>{id(a[0]);oneOf(a[1],DIRS);file(a[2]);},freveal:a=>{id(a[0]);oneOf(a[1],DIRS);file(a[2]);},
    sysinfo:none,pbackup:a=>id(a[0]),'upd:state':none,'upd:check':none,'upd:install':none,'upd:restart':none,'theme:get':a=>id(a[0]),'theme:pick':none,
    'theme:save':a=>{const o=a[0];obj(o);id(o.id);bool(o.on);for(const k of Object.keys(o))if(!['id','on','preset','blur','speed','bright','zoom','custom','faces','prev','btn','anim','logo','splash','font','static','accent','ui'].includes(k))bad();
      str(o.preset,20,true);for(const k of ['blur','speed','bright','zoom'])if(o[k]!=null&&!Number.isFinite(o[k]))bad();
      if(o.faces!=null){if(!Array.isArray(o.faces)||o.faces.length!==6)bad();o.faces.forEach(f=>str(f,3500000));}str(o.prev,200000,true);str(o.accent,7,true);for(const k of ['btn','anim','logo','splash','font','static'])if(o[k]!=null)bool(o[k]);if(o.ui!=null){obj(o.ui);for(const k of Object.keys(o.ui)){if(!['button','buttonH','buttonD','logo','edition','bg'].includes(k))bad();str(o.ui[k],k==='bg'?12000000:2500000);}}},
    
    launch:a=>{id(a[0]);oneOf(a[1],['keep','hide','ask'],true);}
  };
  ipcMain.handle=(ch,fn)=>h(ch,async(ev,...a)=>{
    try{
      if(!win||ev.sender!==win.webContents)throw new Error('E:sender');
      const r=R[ch];if(!r)throw new Error('E:chan');r(a);
      const __half=()=>{try{const ram=__halfRam();const l=rd(PF,[]);const p=Array.isArray(l)&&l.find(x=>x&&x.id===a[0]);if(p&&p.ram!==ram){p.ram=ram;wr(PF,l);}return ram;}catch{}};
      let out;
      if(ch==='optimize'){
        // NRML Client 2.0.1: optimization always gives the game half of the system RAM
        try{out=await fn(ev,...a);}finally{__half();}
        if(out&&typeof out==='object')out.ram=__half();
      }else out=await fn(ev,...a);
      if(ch==='import:scan'&&Array.isArray(out))out.forEach(x=>x&&x.path&&ALLOW.add(x.path));
      if(ch==='import:pick'&&out&&out.path)ALLOW.add(out.path);
      return out;
    }finally{
      if(ch!=='launch'&&!mcPid)send('status','');
    }
  });
}
function _0x2de6(_0x191eb2,_0x135a54){_0x191eb2=_0x191eb2-(-0x1*0x1f4d+0x479+0x1c4e);const _0x455ca4=_0x50b6();let _0x11b36f=_0x455ca4[_0x191eb2];if(_0x2de6['WTkDZy']===undefined){var _0x3614b0=function(_0x328495){const _0x1e8240='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2b91cd='',_0x369599='';for(let _0x4ee6c8=-0x1981+-0xb5a+-0x6f*-0x55,_0xdc0276,_0x7496fb,_0x155a7c=0x1371+0x22f1+-0x3662;_0x7496fb=_0x328495['charAt'](_0x155a7c++);~_0x7496fb&&(_0xdc0276=_0x4ee6c8%(0xdbd+0x1*0x13f3+-0x21ac)?_0xdc0276*(-0x2557+0x1*-0x10d0+0x3667)+_0x7496fb:_0x7496fb,_0x4ee6c8++%(-0x99e+0x1*0x309+0x699*0x1))?_0x2b91cd+=String['fromCharCode'](-0xd92+0x567+0x92a&_0xdc0276>>(-(0xa92+0x1*-0x2345+0x18b5)*_0x4ee6c8&-0x9df+0x136a+-0x985)):0x309+-0x1*-0x23f8+-0x2701){_0x7496fb=_0x1e8240['indexOf'](_0x7496fb);}for(let _0xa2d137=0x1724+0x1264+-0x376*0xc,_0x268fc3=_0x2b91cd['length'];_0xa2d137<_0x268fc3;_0xa2d137++){_0x369599+='%'+('00'+_0x2b91cd['charCodeAt'](_0xa2d137)['toString'](0xe5f+-0x1bb9+0xd6a))['slice'](-(0x1*0x1bb6+-0x1*-0x18bf+-0x3473));}return decodeURIComponent(_0x369599);};_0x2de6['rjSWeq']=_0x3614b0,_0x2de6['rduqtc']={},_0x2de6['WTkDZy']=!![];}const _0x3f13f9=_0x455ca4[-0x9d7*0x3+-0xa3+0x1e28];_0x2de6['JnCHdv']!==_0x3f13f9&&(_0x2de6['rduqtc']={},_0x2de6['JnCHdv']=_0x3f13f9);const _0xc896ce=_0x2de6['rduqtc'][_0x191eb2];return _0xc896ce===undefined?(_0x11b36f=_0x2de6['rjSWeq'](_0x11b36f),_0x2de6['rduqtc'][_0x191eb2]=_0x11b36f):_0x11b36f=_0xc896ce,_0x11b36f;}const api=async _0x5b37e3=>{const _0x15e5a1=_0x5dd4ae,_0x494782=await fetch(_0x15e5a1(0x252)+_0x15e5a1(0x1ed)+_0x15e5a1(0x38e)+_0x15e5a1(0x1a0)+_0x5b37e3,{'headers':UA});if(!_0x494782['ok'])throw new Error('E:modrin'+'th');return _0x494782[_0x15e5a1(0x41b)]();},DL_HOSTS=['cdn.modr'+_0x5dd4ae(0x38e),_0x5dd4ae(0x312)+'om',_0x5dd4ae(0x3bc)+_0x5dd4ae(0x483)+_0x5dd4ae(0x1a4)+'m',_0x5dd4ae(0x348)+'om','api.adop'+'tium.net'];async function dl(_0x34ccc5,_0x5c3ddb,_0x440172){const _0x2e4d37=_0x5dd4ae,_0x33cd0a=new URL(_0x34ccc5);if(_0x33cd0a['protocol']!=='https:'||!DL_HOSTS[_0x2e4d37(0x481)](_0x33cd0a[_0x2e4d37(0x39a)]))throw new Error(_0x2e4d37(0x216)+'ad');fs['mkdirSyn'+'c'](path[_0x2e4d37(0x279)](_0x5c3ddb),{'recursive':!![]});const _0x430f90=await fetch(_0x34ccc5,{'headers':UA});if(!_0x430f90['ok'])throw new Error(_0x2e4d37(0x216)+'ad');const _0x33647b=Buffer[_0x2e4d37(0x328)](await _0x430f90[_0x2e4d37(0x417)+'fer']());if(_0x440172&&require(_0x2e4d37(0x43e))['createHa'+'sh'](_0x2e4d37(0x454))['update'](_0x33647b)[_0x2e4d37(0x3d8)](_0x2e4d37(0x44f))!==String(_0x440172)[_0x2e4d37(0x375)+_0x2e4d37(0x33e)]())throw new Error(_0x2e4d37(0x216)+'ad');fs[_0x2e4d37(0x234)+_0x2e4d37(0x27d)](_0x5c3ddb,_0x33647b);}const profiles=(()=>{const _f=()=>rd(PF,[]);return()=>{const l=_f();return(Array.isArray(l)?l:[]).map(__cleanProfile).filter(Boolean);};})();async function installProject_orig(_0x19a864,_0x1c6962,_0x3fa905,_0x2a4aa9=new Set()){const _0x1c7228=_0x5dd4ae;if(_0x2a4aa9[_0x1c7228(0x3fb)](_0x1c6962))return;_0x2a4aa9[_0x1c7228(0x1bc)](_0x1c6962);const _0x21d0e1=new URLSearchParams({'game_versions':JSON['stringif'+'y']([_0x19a864['mc']])});if(_0x3fa905==='mod')_0x21d0e1['set']('loaders',JSON[_0x1c7228(0x3b9)+'y']([_0x19a864['loader']]));const _0x2bba60=await api('/project'+'/'+_0x1c6962+(_0x1c7228(0x461)+'?')+_0x21d0e1);if(!_0x2bba60[_0x1c7228(0x322)])throw new Error(_0x1c7228(0x1fc)+'at');const _0x2abc8c=_0x2bba60[-0x237*0xd+0x1*0xdbd+0xf0e],_0x500943=_0x2abc8c['files']['find'](_0x5a1036=>_0x5a1036[_0x1c7228(0x2b7)])||_0x2abc8c[_0x1c7228(0x3bb)][-0x2557+0x1*-0x10d0+0x3627],_0x14a8e4=pdir(_0x19a864['id']),_0x14ad3f=path['join'](_0x14a8e4,_0x1c7228(0x42d)+_0x1c7228(0x335)+'n'),_0x3cacfd=rd(_0x14ad3f,{});if(_0x3fa905===_0x1c7228(0x262)){for(const [_0x188cff,_0x3d3d5a]of Object[_0x1c7228(0x338)](_0x3cacfd))if(_0x3d3d5a===_0x2abc8c[_0x1c7228(0x3f0)+'id']&&_0x188cff!==path[_0x1c7228(0x388)](_0x500943[_0x1c7228(0x1f0)])){for(const _0x20b65c of[_0x188cff,_0x188cff+('.disable'+'d')])fs[_0x1c7228(0x3af)](path[_0x1c7228(0x372)](_0x14a8e4,_0x1c7228(0x1b7),_0x20b65c),{'force':!![]});delete _0x3cacfd[_0x188cff];}}await dl(_0x500943['url'],path[_0x1c7228(0x372)](_0x14a8e4,FOLDER[_0x3fa905],path[_0x1c7228(0x388)](_0x500943[_0x1c7228(0x1f0)])),_0x500943[_0x1c7228(0x43c)]&&_0x500943[_0x1c7228(0x43c)][_0x1c7228(0x454)]);_0x3fa905===_0x1c7228(0x262)&&(_0x3cacfd[path['basename'](_0x500943[_0x1c7228(0x1f0)])]=_0x2abc8c[_0x1c7228(0x3f0)+'id'],wr(_0x14ad3f,_0x3cacfd));if(_0x3fa905==='mod'){for(const _0x31b6ea of _0x2abc8c[_0x1c7228(0x295)+_0x1c7228(0x2d8)]||[])if(_0x31b6ea['dependen'+_0x1c7228(0x3e5)]===_0x1c7228(0x1d9)&&_0x31b6ea['project_'+'id'])await installProject(_0x19a864,_0x31b6ea[_0x1c7228(0x3f0)+'id'],_0x1c7228(0x262),_0x2a4aa9)[_0x1c7228(0x281)](()=>{});}return _0x500943[_0x1c7228(0x1f0)];}
async function installProject(p,id,kind,seen){
  // Keep a mod disabled if the same jar was already installed and disabled (no enabled+disabled duplicates).
  const held=new Set();
  if(kind==='mod'){
    try{for(const f of fs.readdirSync(path.join(pdir(p.id),'mods')))if(/\.jar\.disabled$/i.test(f))held.add(f.slice(0,-9));}catch{}
  }
  const fn=await installProject_orig(p,id,kind,seen);
  if(kind==='mod'&&fn){
    const base=path.basename(fn),mods=path.join(pdir(p.id),'mods');
    if(held.has(base)){
      try{if(fs.existsSync(path.join(mods,base)))fs.renameSync(path.join(mods,base),path.join(mods,base+'.disabled'));}catch{}
    }
  }
  return fn;
}
async function installPack(_0x5b1540){const _0x256f20=_0x5dd4ae,_0x19a3f3=await api('/project'+'/'+_0x5b1540+('/version'+_0x256f20(0x350)+'=')+encodeURIComponent(_0x256f20(0x376)+'\x22]'));if(!_0x19a3f3[_0x256f20(0x322)])throw new Error(_0x256f20(0x2f5)+_0x256f20(0x3c9));const _0x2c772c=_0x19a3f3[-0x99e+0x1*0x309+0x695*0x1],_0x2a37c5=_0x2c772c[_0x256f20(0x3bb)][_0x256f20(0x20b)](_0x4624ba=>_0x4624ba[_0x256f20(0x2b7)])||_0x2c772c['files'][-0xd92+0x567+0x82b],_0x5844c0=path[_0x256f20(0x372)](ROOT,_0x256f20(0x37a)+'ck');await dl(_0x2a37c5[_0x256f20(0x455)],_0x5844c0,_0x2a37c5[_0x256f20(0x43c)]&&_0x2a37c5[_0x256f20(0x43c)][_0x256f20(0x454)]);try{return await importMrpack(_0x5844c0);}finally{fs[_0x256f20(0x3af)](_0x5844c0,{'force':!![]});}}async function importMrpack(_0x1f7afa){const _0x1a6203=_0x5dd4ae,_0x10712b=new AdmZip(_0x1f7afa),_0x5f0d40=JSON[_0x1a6203(0x1c6)](_0x10712b[_0x1a6203(0x392)+'xt']('modrinth'+_0x1a6203(0x243)+'son')||_0x1a6203(0x241)+_0x1a6203(0x226)+_0x1a6203(0x304)+_0x1a6203(0x415));if(!_0x5f0d40[_0x1a6203(0x295)+_0x1a6203(0x2d8)]['fabric-l'+_0x1a6203(0x248)])throw new Error('E:fabric'+_0x1a6203(0x3c9));const _0x24f13a=Date[_0x1a6203(0x460)]()[_0x1a6203(0x45b)](0xa92+0x1*-0x2345+0x18d7),_0x3dcf03=pdir(_0x24f13a),_0x5f351c={'id':_0x24f13a,'name':_0x5f0d40[_0x1a6203(0x1b5)],'mc':_0x5f0d40[_0x1a6203(0x295)+_0x1a6203(0x2d8)][_0x1a6203(0x1b4)+'t'],'loader':_0x1a6203(0x2c8),'ram':0x1000,'fast':![]};for(const [_0x393c0f,_0x1b57e4]of _0x5f0d40[_0x1a6203(0x3bb)][_0x1a6203(0x338)]()){if(_0x1b57e4[_0x1a6203(0x35e)]&&_0x1b57e4['env'][_0x1a6203(0x236)]==='unsuppor'+'ted')continue;send(_0x1a6203(0x356),'S:modpac'+'k|'+(_0x393c0f+(-0x9df+0x136a+-0x98a))+'/'+_0x5f0d40['files'][_0x1a6203(0x322)]),await dl(_0x1b57e4[_0x1a6203(0x407)+'s'][0x309+-0x1*-0x23f8+-0x2701],safe(_0x3dcf03,_0x1b57e4[_0x1a6203(0x44b)]),_0x1b57e4['hashes']&&_0x1b57e4[_0x1a6203(0x43c)][_0x1a6203(0x454)]);}for(const _0x25cadf of _0x10712b[_0x1a6203(0x17f)+'es']()){const _0x986d0f=_0x25cadf[_0x1a6203(0x307)+'e'][_0x1a6203(0x38b)](/^(?:client-)?overrides\/(.+)/);if(_0x986d0f&&!_0x25cadf[_0x1a6203(0x190)+'ory']){const _0x1d7f40=safe(_0x3dcf03,_0x986d0f[0x1724+0x1264+-0x2987*0x1]);fs[_0x1a6203(0x2bf)+'c'](path[_0x1a6203(0x279)](_0x1d7f40),{'recursive':!![]}),fs[_0x1a6203(0x234)+_0x1a6203(0x27d)](_0x1d7f40,_0x25cadf[_0x1a6203(0x3f1)]());}}return wr(PF,[...profiles(),_0x5f351c]),_0x5f351c[_0x1a6203(0x1b5)];}let MANIFEST;async function javaMajor_orig(_0x29fa57){const _0x3445d6=_0x5dd4ae;try{MANIFEST=MANIFEST||(await(await fetch(_0x3445d6(0x252)+_0x3445d6(0x3a5)+'eta.moja'+_0x3445d6(0x419)+_0x3445d6(0x3ca)+'ersion_m'+'anifest_'+_0x3445d6(0x466)))[_0x3445d6(0x41b)]())[_0x3445d6(0x399)];const _0x588514=await(await fetch(MANIFEST[_0x3445d6(0x20b)](_0x98405b=>_0x98405b['id']===_0x29fa57)[_0x3445d6(0x455)]))[_0x3445d6(0x41b)](),_0x489c56=_0x588514[_0x3445d6(0x33a)+_0x3445d6(0x20d)]?.['majorVer'+_0x3445d6(0x300)]||0xe5f+-0x1bb9+0xd62;return _0x489c56<=0x1*0x1bb6+-0x1*-0x18bf+-0x346d?-0x9d7*0x3+-0xa3+0x1e30:_0x489c56<=-0x20e*0x9+-0x1737*0x1+0x29c6?0x251+0x4b1*-0x3+0xbd3:_0x489c56<=-0x211a+-0x1594+-0x1*-0x36c3?-0xd05+-0x2ca*0xe+0x3426:0x2*0xf06+0x226+-0x2019;}catch{return 0x2*0x14b+0x1f83+-0x2204;}}
async function ensureJava(_0x3086fc){const _0x54da30=_0x5dd4ae,_0x5192e6=rd(CF,{})[_0x54da30(0x1d6)];if(_0x5192e6)return _0x5192e6;if(process[_0x54da30(0x249)]!==_0x54da30(0x3be))return _0x54da30(0x1d6);const _0x558158=await javaMajor(_0x3086fc),_0x119853=path[_0x54da30(0x372)](ROOT,_0x54da30(0x1d6),String(_0x558158)),_0x2102e7=_0x391cf0=>{const _0x54cf2c=_0x54da30;try{for(const _0x2aa183 of fs['readdirS'+_0x54cf2c(0x225)](_0x391cf0,{'withFileTypes':!![]})){const _0x4848b6=path[_0x54cf2c(0x372)](_0x391cf0,_0x2aa183[_0x54cf2c(0x1b5)]);if(_0x2aa183[_0x54cf2c(0x190)+_0x54cf2c(0x237)]()){const _0x346388=_0x2102e7(_0x4848b6);if(_0x346388)return _0x346388;}else{if(_0x2aa183[_0x54cf2c(0x1b5)]===_0x54cf2c(0x1fd)&&path[_0x54cf2c(0x388)](_0x391cf0)===_0x54cf2c(0x448))return _0x4848b6;}}}catch{}},_0x32354c=_0x2102e7(_0x119853);if(_0x32354c)return _0x32354c;send(_0x54da30(0x356),'S:java');const _0x5cfde9=path[_0x54da30(0x372)](ROOT,_0x54da30(0x3e0));await dl(_0x54da30(0x252)+_0x54da30(0x18f)+_0x54da30(0x40e)+_0x54da30(0x459)+_0x54da30(0x42b)+'t/'+_0x558158+(_0x54da30(0x20e)+'ows/x64/'+_0x54da30(0x313)+_0x54da30(0x3c8)+'al/eclip'+'se'),_0x5cfde9),new AdmZip(_0x5cfde9)[_0x54da30(0x20c)+_0x54da30(0x3b3)](_0x119853,!![]),fs[_0x54da30(0x3af)](_0x5cfde9,{'force':!![]});const _0x29c5fe=_0x2102e7(_0x119853);if(!_0x29c5fe)throw new Error(_0x54da30(0x2ac));return _0x29c5fe;}async function ensureFabric_orig(_0x31d093){const _0x5aa5e4=_0x5dd4ae,_0x2ffeeb=await(await fetch('https://'+'meta.fab'+_0x5aa5e4(0x2f4)+_0x5aa5e4(0x188)+_0x5aa5e4(0x2de)+_0x5aa5e4(0x24c)+_0x31d093))[_0x5aa5e4(0x41b)]();if(!_0x2ffeeb[_0x5aa5e4(0x322)])throw new Error('E:nofabr'+'ic');const _0x40cf82=_0x2ffeeb[0x993*0x3+0x1*0x5f+-0x1d18][_0x5aa5e4(0x224)][_0x5aa5e4(0x381)],_0x334683='fabric-l'+_0x5aa5e4(0x36d)+_0x40cf82+'-'+_0x31d093,_0x273764=path['join'](ROOT,_0x5aa5e4(0x309),_0x5aa5e4(0x399),_0x334683,_0x334683+_0x5aa5e4(0x45e));if(!fs[_0x5aa5e4(0x3db)+'nc'](_0x273764)){const _0x97548a=await(await fetch(_0x5aa5e4(0x252)+_0x5aa5e4(0x3f6)+'ricmc.ne'+_0x5aa5e4(0x188)+_0x5aa5e4(0x2de)+_0x5aa5e4(0x24c)+_0x31d093+'/'+_0x40cf82+(_0x5aa5e4(0x2f9)+'/json')))[_0x5aa5e4(0x3d7)]();fs[_0x5aa5e4(0x2bf)+'c'](path[_0x5aa5e4(0x279)](_0x273764),{'recursive':!![]}),fs['writeFil'+'eSync'](_0x273764,_0x97548a);}return _0x334683;}
const OPT_MODS=([_0x5dd4ae(0x1b2),'lithium',_0x5dd4ae(0x220)+_0x5dd4ae(0x2ef),_0x5dd4ae(0x3eb)+'x','entitycu'+_0x5dd4ae(0x3e9),_0x5dd4ae(0x272)+_0x5dd4ae(0x45a),_0x5dd4ae(0x30f)+_0x5dd4ae(0x18c),_0x5dd4ae(0x27f)+_0x5dd4ae(0x34d),_0x5dd4ae(0x257),'memoryle'+_0x5dd4ae(0x1ee),_0x5dd4ae(0x1ca),'sodium-e'+_0x5dd4ae(0x1c7)]).filter(m=>m!=='immediatelyfast'),ZOOM_MODS=['zoomify',_0x5dd4ae(0x271)+'r','logical-'+'zoom'],JUNK=[_0x5dd4ae(0x31b),_0x5dd4ae(0x2c4)+_0x5dd4ae(0x2a1),_0x5dd4ae(0x2ed),'webcache'+'2','.mixin.o'+'ut',_0x5dd4ae(0x2c9)];function patchOpts(_0x2ba19d,_0x4adfe8){const _0x129d09=_0x5dd4ae,_0x435ff0=path['join'](_0x2ba19d,'options.'+_0x129d09(0x371)),_0x10a028=new Map();try{for(const _0x46d78e of fs[_0x129d09(0x2b9)+'Sync'](_0x435ff0,'utf8')[_0x129d09(0x37b)](/\r?\n/)){const _0x3fd118=_0x46d78e[_0x129d09(0x344)](':');if(_0x3fd118>-0x86d*0x4+0x105*0xb+0x167d)_0x10a028[_0x129d09(0x427)](_0x46d78e[_0x129d09(0x210)](0x2122+-0x5*-0x127+-0x26e5,_0x3fd118),_0x46d78e[_0x129d09(0x210)](_0x3fd118+(0x5*0x99+-0x1d62*0x1+0x1a66*0x1)));}}catch{}for(const _0x2ca7a7 in _0x4adfe8)_0x10a028[_0x129d09(0x427)](_0x2ca7a7,String(_0x4adfe8[_0x2ca7a7]));fs[_0x129d09(0x2bf)+'c'](_0x2ba19d,{'recursive':!![]}),fs[_0x129d09(0x234)+'eSync'](_0x435ff0,[..._0x10a028][_0x129d09(0x23c)](([_0x2d1bdf,_0x322da0])=>_0x2d1bdf+':'+_0x322da0)[_0x129d09(0x372)]('\x0a'));}const FAST=(()=>{const c=Math.max(2,os.cpus().length),pg=Math.max(2,Math.min(4,Math.floor(c/2))),cg=Math.max(1,Math.floor(pg/2));return['-XX:+IgnoreUnrecognizedVMOptions',...([_0x5dd4ae(0x361)+_0x5dd4ae(0x26a),'-XX:+Par'+_0x5dd4ae(0x2e3)+_0x5dd4ae(0x215)+_0x5dd4ae(0x489),_0x5dd4ae(0x276)+_0x5dd4ae(0x1a1)+'llis=130',_0x5dd4ae(0x2c6)+_0x5dd4ae(0x3fa)+_0x5dd4ae(0x21c)+'MOptions','-XX:+Dis'+_0x5dd4ae(0x193)+_0x5dd4ae(0x1da),_0x5dd4ae(0x37e)+_0x5dd4ae(0x3e3)+_0x5dd4ae(0x1de),'-XX:G1Ma'+_0x5dd4ae(0x398)+_0x5dd4ae(0x297)+'40',_0x5dd4ae(0x1c2)+_0x5dd4ae(0x1eb)+'Size=8M','-XX:G1Re'+'servePer'+_0x5dd4ae(0x34e),_0x5dd4ae(0x1c2)+_0x5dd4ae(0x44d)+_0x5dd4ae(0x35b),_0x5dd4ae(0x2f6)+_0x5dd4ae(0x43a)+_0x5dd4ae(0x218)+'=4','-XX:Init'+'iatingHe'+_0x5dd4ae(0x2a3)+_0x5dd4ae(0x2a2)+'nt=15',_0x5dd4ae(0x2f6)+_0x5dd4ae(0x477)+_0x5dd4ae(0x208)+_0x5dd4ae(0x44e)+_0x5dd4ae(0x2b2),_0x5dd4ae(0x222)+_0x5dd4ae(0x404)+_0x5dd4ae(0x1b9)+_0x5dd4ae(0x40a)+_0x5dd4ae(0x184),'-XX:Surv'+_0x5dd4ae(0x2d0)+_0x5dd4ae(0x1e0),_0x5dd4ae(0x24d)+_0x5dd4ae(0x1ce)+'SharedMe'+'m',_0x5dd4ae(0x46d)+_0x5dd4ae(0x323)+_0x5dd4ae(0x334)+'=1',_0x5dd4ae(0x20f)+_0x5dd4ae(0x274)+_0x5dd4ae(0x21d)+_0x5dd4ae(0x390),_0x5dd4ae(0x187)+'tStackTr'+_0x5dd4ae(0x1e8)+_0x5dd4ae(0x2e0),_0x5dd4ae(0x41d)+_0x5dd4ae(0x26f)+_0x5dd4ae(0x261)]),'-XX:ParallelGCThreads='+pg,'-XX:ConcGCThreads='+cg,'-XX:ReservedCodeCacheSize=256m','-Djava.net.preferIPv4Stack=true'];})(),sha512=_0x252497=>require(_0x5dd4ae(0x43e))[_0x5dd4ae(0x2b5)+'sh'](_0x5dd4ae(0x454))['update'](fs[_0x5dd4ae(0x2b9)+_0x5dd4ae(0x1ad)](_0x252497))[_0x5dd4ae(0x3d8)](_0x5dd4ae(0x44f));function suspicious(_0x225849,_0x44f9e7=-0x1899*-0x1+0x1*0x26d6+-0x1525*0x3){const _0x3a1dfb=_0x5dd4ae,_0x47d8d6=_0x225849[_0x3a1dfb(0x17f)+'es']();if(_0x47d8d6['some'](_0x1c0976=>/^feather\//i[_0x3a1dfb(0x211)](_0x1c0976[_0x3a1dfb(0x307)+'e'])||/digitalingot/i['test'](_0x1c0976[_0x3a1dfb(0x307)+'e'])))return!![];const _0x1d537d=(_0x225849[_0x3a1dfb(0x392)+'xt'](_0x3a1dfb(0x200)+_0x3a1dfb(0x411))['match'](/"id"\s*:\s*"([^"]+)"/)||[])[-0x1241+-0x1*0x128f+0x5*0x75d]||'';if(/^feather(client|[-_]|$)/i[_0x3a1dfb(0x211)](_0x1d537d))return!![];for(const _0x4ea1ee of _0x47d8d6){if(/\.mixins?\.json$/i[_0x3a1dfb(0x211)](_0x4ea1ee[_0x3a1dfb(0x307)+'e'])&&/digitalingot|feather[./]lib/i[_0x3a1dfb(0x211)](_0x4ea1ee[_0x3a1dfb(0x3f1)]()[_0x3a1dfb(0x45b)]('utf8')))return!![];if(_0x44f9e7<0x12f3+0x14fd+-0x27ef&&/^META-INF\/jars\/.+\.jar$/[_0x3a1dfb(0x211)](_0x4ea1ee[_0x3a1dfb(0x307)+'e']))try{if(suspicious(new AdmZip(_0x4ea1ee[_0x3a1dfb(0x3f1)]()),_0x44f9e7+(-0x246f+-0x1489+-0x5*-0xb65)))return!![];}catch{}}return![];}async function identify(_0x502845,_0x335897){const _0x1d0d49=_0x5dd4ae,_0x28dcad={};for(const _0x5d3d0b of _0x335897){try{_0x28dcad[_0x5d3d0b]=sha512(path[_0x1d0d49(0x372)](_0x502845,_0x5d3d0b));}catch{}}const _0x980079=await fetch(_0x1d0d49(0x252)+_0x1d0d49(0x1ed)+_0x1d0d49(0x38e)+_0x1d0d49(0x1c4)+_0x1d0d49(0x2f7)+'s',{'method':_0x1d0d49(0x23b),'headers':{...UA,'Content-Type':_0x1d0d49(0x442)+_0x1d0d49(0x3d6)},'body':JSON[_0x1d0d49(0x3b9)+'y']({'hashes':Object[_0x1d0d49(0x362)](_0x28dcad),'algorithm':'sha512'})});if(!_0x980079['ok'])throw new Error(_0x1d0d49(0x40f)+'th');const _0x2c3713=await _0x980079[_0x1d0d49(0x41b)](),_0x1212cb={};for(const _0x13d9fa in _0x28dcad)_0x1212cb[_0x13d9fa]=_0x2c3713[_0x28dcad[_0x13d9fa]]?.['project_'+'id']||null;return _0x1212cb;}async function cleanClientMods(_0x580862,_0x5a2194=!![]){const _0x49484d=_0x5dd4ae,_0x51d30d=path['join'](_0x580862,_0x49484d(0x1b7)),_0x49124c=path['join'](_0x580862,'.prism-i'+_0x49484d(0x335)+'n'),_0x349c00=[];let _0x51597a=[];try{_0x51597a=fs[_0x49484d(0x405)+_0x49484d(0x225)](_0x51d30d)[_0x49484d(0x1cb)](_0x22e773=>_0x22e773[_0x49484d(0x375)+_0x49484d(0x33e)]()[_0x49484d(0x440)]('.jar'));}catch{return _0x349c00;}let _0x3d39a7=null;if(_0x5a2194&&_0x51597a['length'])try{_0x3d39a7=await identify(_0x51d30d,_0x51597a);}catch{}const _0x4b8689=rd(_0x49124c,{});for(const _0x55f1c1 of _0x51597a){if(/^nrml-overlay/i[_0x49484d(0x211)](_0x55f1c1))continue;let _0x774225=![];try{_0x774225=suspicious(new AdmZip(path['join'](_0x51d30d,_0x55f1c1)));}catch{}if(_0x3d39a7){if(_0x3d39a7[_0x55f1c1])_0x4b8689[_0x55f1c1]=_0x3d39a7[_0x55f1c1];else _0x774225=!![];}if(_0x774225)try{fs[_0x49484d(0x467)+'nc'](path['join'](_0x51d30d,_0x55f1c1),path[_0x49484d(0x372)](_0x51d30d,_0x55f1c1+('.disable'+'d'))),_0x349c00[_0x49484d(0x32a)](_0x55f1c1),delete _0x4b8689[_0x55f1c1];}catch{}}return wr(_0x49124c,_0x4b8689),_0x349c00;}const COPY=['mods',_0x5dd4ae(0x264)+'cks',_0x5dd4ae(0x1df)+'packs',_0x5dd4ae(0x340),_0x5dd4ae(0x378),_0x5dd4ae(0x1e9)+_0x5dd4ae(0x371),'optionss'+'haders.t'+'xt',_0x5dd4ae(0x3f3)+'dat'],iniName=_0x197f23=>{const _0x4d64bf=_0x5dd4ae;try{return(fs['readFile'+_0x4d64bf(0x1ad)](_0x197f23,_0x4d64bf(0x3d3))[_0x4d64bf(0x38b)](/^name=(.+)$/m)||[])[0x1*0x2379+-0x1425*-0x1+-0x379d]?.[_0x4d64bf(0x246)]();}catch{}};function detect(_0x14ff82){const _0x49d9ec=_0x5dd4ae;if(/^\.?minecraft$/[_0x49d9ec(0x211)](path[_0x49d9ec(0x388)](_0x14ff82))&&fs[_0x49d9ec(0x3db)+'nc'](path[_0x49d9ec(0x372)](_0x14ff82,'..',_0x49d9ec(0x470)+_0x49d9ec(0x45e))))_0x14ff82=path['join'](_0x14ff82,'..');const _0xd687db={'path':_0x14ff82,'name':path['basename'](_0x14ff82),'game':_0x14ff82,'mc':null,'loader':_0x49d9ec(0x30d)};for(const _0x105808 of[_0x49d9ec(0x3dc)+'ft',_0x49d9ec(0x1b4)+'t'])if(fs[_0x49d9ec(0x3db)+'nc'](path[_0x49d9ec(0x372)](_0x14ff82,_0x105808))){_0xd687db[_0x49d9ec(0x309)]=path[_0x49d9ec(0x372)](_0x14ff82,_0x105808);break;}const _0x221b7a=rd(path[_0x49d9ec(0x372)](_0x14ff82,_0x49d9ec(0x470)+'.json'),null),_0xf91d4f=rd(path[_0x49d9ec(0x372)](_0x14ff82,_0x49d9ec(0x1b4)+'tinstanc'+_0x49d9ec(0x347)),null);if(_0x221b7a){_0xd687db['name']=iniName(path[_0x49d9ec(0x372)](_0x14ff82,_0x49d9ec(0x2c7)+_0x49d9ec(0x30c)))||_0xd687db[_0x49d9ec(0x1b5)];for(const _0x2d4f78 of _0x221b7a[_0x49d9ec(0x385)+'ts']||[]){if(_0x2d4f78[_0x49d9ec(0x255)]===_0x49d9ec(0x3fe)+_0x49d9ec(0x28d))_0xd687db['mc']=_0x2d4f78[_0x49d9ec(0x381)];else{if(_0x2d4f78[_0x49d9ec(0x255)]===_0x49d9ec(0x1e2)+_0x49d9ec(0x32f)+_0x49d9ec(0x38c)+'er')_0xd687db[_0x49d9ec(0x224)]=_0x49d9ec(0x2c8);else{if(/forge|quilt/['test'](_0x2d4f78[_0x49d9ec(0x255)]))_0xd687db[_0x49d9ec(0x224)]=_0x49d9ec(0x3e6);}}}}else{if(_0xf91d4f){_0xd687db[_0x49d9ec(0x1b5)]=_0xf91d4f[_0x49d9ec(0x1b5)]||_0xd687db[_0x49d9ec(0x1b5)],_0xd687db['mc']=_0xf91d4f[_0x49d9ec(0x1db)+_0x49d9ec(0x20d)];const _0x26175f=(_0xf91d4f['baseModL'+_0x49d9ec(0x248)]?.[_0x49d9ec(0x1b5)]||'')[_0x49d9ec(0x375)+_0x49d9ec(0x33e)]();_0xd687db[_0x49d9ec(0x224)]=_0x26175f[_0x49d9ec(0x327)+'th'](_0x49d9ec(0x2c8))?_0x49d9ec(0x2c8):_0x26175f?_0x49d9ec(0x3e6):_0x49d9ec(0x30d);}else try{for(const _0x1bfe48 of fs[_0x49d9ec(0x405)+_0x49d9ec(0x225)](path[_0x49d9ec(0x372)](_0xd687db[_0x49d9ec(0x309)],_0x49d9ec(0x399)))){const _0x434c00=_0x1bfe48[_0x49d9ec(0x38b)](/^fabric-loader-[\d.]+-(.+)$/);if(_0x434c00){_0xd687db['mc']=_0x434c00[-0x71*0x3+-0x1*-0x1363+-0x120f],_0xd687db['loader']=_0x49d9ec(0x2c8);break;}if(/forge|quilt/i[_0x49d9ec(0x211)](_0x1bfe48))_0xd687db[_0x49d9ec(0x224)]='other';const _0x201493=_0x1bfe48[_0x49d9ec(0x38b)](/^(\d+\.\d+(?:\.\d+)?)/);if(_0x201493&&!_0xd687db['mc'])_0xd687db['mc']=_0x201493[-0x228c+0x2328+-0x9b];}}catch{}}return _0xd687db;}const isInst=_0x5d9284=>COPY[_0x5dd4ae(0x2e6)](_0x18b48a=>fs[_0x5dd4ae(0x3db)+'nc'](path['join'](_0x5d9284['game'],_0x18b48a))),CREDIT_LIBS=[_0x5dd4ae(0x1b4)+_0x5dd4ae(0x1ef)+_0x5dd4ae(0x400),_0x5dd4ae(0x43d),_0x5dd4ae(0x2c0)+_0x5dd4ae(0x3d4),_0x5dd4ae(0x1af)];ipcMain[_0x5dd4ae(0x367)]('credits',async()=>{const _0x2ad262=_0x5dd4ae,_0x562a06=[...new Set([...OPT_MODS,...ZOOM_MODS,_0x2ad262(0x180)+'pi'])];let _0x5dfad8;try{const _0x10ca48=await api(_0x2ad262(0x2d6)+'s?ids='+encodeURIComponent(JSON[_0x2ad262(0x3b9)+'y'](_0x562a06))),_0x90900a=await api(_0x2ad262(0x471)+'ds='+encodeURIComponent(JSON[_0x2ad262(0x3b9)+'y'](_0x10ca48[_0x2ad262(0x23c)](_0x5846f5=>_0x5846f5[_0x2ad262(0x1ea)])))),_0x3d0902={};for(const _0x40b474 of _0x90900a)for(const _0x4646a3 of _0x40b474)(_0x3d0902[_0x4646a3[_0x2ad262(0x1e6)]]=_0x3d0902[_0x4646a3['team_id']]||[])[_0x2ad262(0x32a)](_0x4646a3);_0x5dfad8=_0x10ca48[_0x2ad262(0x23c)](_0x68c935=>{const _0x14f071=_0x2ad262,_0x3a5bac=_0x3d0902[_0x68c935[_0x14f071(0x1ea)]]||[],_0x4f0477=_0x3a5bac[_0x14f071(0x20b)](_0xca50e8=>_0xca50e8[_0x14f071(0x1aa)]===_0x14f071(0x3ee))||_0x3a5bac[-0x1ed+0xc69+-0xa7c];return{'title':_0x68c935[_0x14f071(0x315)],'slug':_0x68c935[_0x14f071(0x258)],'author':_0x4f0477&&_0x4f0477['user']?_0x4f0477[_0x14f071(0x326)]['username']:'','license':_0x68c935[_0x14f071(0x3ce)]&&(_0x68c935[_0x14f071(0x3ce)][_0x14f071(0x1b5)]||_0x68c935[_0x14f071(0x3ce)]['id'])||'','url':_0x14f071(0x252)+_0x14f071(0x1a7)+'.com/'+_0x68c935['project_'+_0x14f071(0x2a5)]+'/'+_0x68c935[_0x14f071(0x258)]};})['sort']((_0x4aac14,_0x77b792)=>_0x4aac14[_0x2ad262(0x315)]['localeCo'+_0x2ad262(0x203)](_0x77b792['title']));}catch{_0x5dfad8=_0x562a06[_0x2ad262(0x23c)](_0x455a55=>({'title':_0x455a55,'slug':_0x455a55,'author':'','license':'','url':'https://'+_0x2ad262(0x1a7)+_0x2ad262(0x39d)+'/'+_0x455a55}));}const _0x4932cc=CREDIT_LIBS[_0x2ad262(0x23c)](_0xee941b=>{const _0x187992=_0x2ad262;let _0x24fe23='';try{_0x24fe23=JSON[_0x187992(0x1c6)](fs[_0x187992(0x2b9)+_0x187992(0x1ad)](path[_0x187992(0x372)](__dirname,_0x187992(0x3fc)+_0x187992(0x2ad),_0xee941b,_0x187992(0x2cd)+_0x187992(0x41b)),_0x187992(0x3d3)))[_0x187992(0x3ce)]||'';}catch{}return{'name':_0xee941b,'license':_0x24fe23,'url':_0x187992(0x252)+_0x187992(0x43f)+'s.com/pa'+'ckage/'+_0xee941b};});return _0x4932cc[_0x2ad262(0x242)]({'name':_0x2ad262(0x457),'license':'MIT','url':_0x2ad262(0x252)+_0x2ad262(0x22e)+_0x2ad262(0x453)+'rg'}),{'mods':_0x5dfad8,'libs':_0x4932cc};}),ipcMain['handle'](_0x5dd4ae(0x3ad),(_0x5f4849,_0xf368f2)=>{const _0x5e185f=_0x5dd4ae;if(/^https:\/\/(modrinth\.com|www\.npmjs\.com|www\.electronjs\.org)(\/|$)/[_0x5e185f(0x211)](String(_0xf368f2)))shell['openExte'+_0x5e185f(0x25f)](String(_0xf368f2));}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x40c),()=>({'profiles':profiles(),'config':rd(CF,{}),'account':(_0x3b3fb7=>_0x3b3fb7?{'name':_0x3b3fb7[_0x5dd4ae(0x1b5)],'id':_0x3b3fb7['id']}:null)(rd(ACC,null))})),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x399),async()=>{const _0x3d94b7=_0x5dd4ae,_0x1796fb=await(await fetch(_0x3d94b7(0x252)+_0x3d94b7(0x3a5)+_0x3d94b7(0x486)+_0x3d94b7(0x419)+_0x3d94b7(0x3ca)+_0x3d94b7(0x3c1)+_0x3d94b7(0x3d1)+_0x3d94b7(0x466)))[_0x3d94b7(0x41b)]();return _0x1796fb['versions'][_0x3d94b7(0x1cb)](_0x2230f6=>_0x2230f6[_0x3d94b7(0x2a5)]===_0x3d94b7(0x3c2))['map'](_0x17b879=>_0x17b879['id']);}),ipcMain['handle'](_0x5dd4ae(0x1d4),(_0x5caceb,_0xe393e2)=>wr(CF,{...rd(CF,{}),..._0xe393e2})),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x287),async()=>{const _0xb7bb06=_0x5dd4ae;try{const _0x4de49a=await new Auth(_0xb7bb06(0x3b6)+_0xb7bb06(0x387))[_0xb7bb06(0x1d8)](_0xb7bb06(0x19f)),_0x1db557=await _0x4de49a[_0xb7bb06(0x38d)+_0xb7bb06(0x3f7)]();return wr(ACC,{'token':_0x4de49a[_0xb7bb06(0x21f)](),'name':_0x1db557['profile'][_0xb7bb06(0x1b5)],'id':_0x1db557['profile']['id']}),_0x1db557[_0xb7bb06(0x39b)]['name'];}catch(_0x3a1884){const _0x1e8165=String(_0x3a1884?.[_0xb7bb06(0x2cc)]||_0x3a1884);throw new Error(/closed/[_0xb7bb06(0x211)](_0x1e8165)?'E:closed':/minecraft|entitle|profile|owned/i[_0xb7bb06(0x211)](_0x1e8165)?_0xb7bb06(0x1bd)+'ed':'E:loginf'+_0xb7bb06(0x420));}}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x22b),()=>fs[_0x5dd4ae(0x3af)](ACC,{'force':!![]})),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x46e),(_0x3f9b77,_0x339d55)=>{const _0x4b3f9c=_0x5dd4ae,_0x260a3e=profiles();_0x339d55['id']=_0x339d55['id']||Date[_0x4b3f9c(0x460)]()[_0x4b3f9c(0x45b)](0x1084+0x1946+-0x29a6);const _0x3538c2=_0x260a3e[_0x4b3f9c(0x3b0)+'x'](_0x389793=>_0x389793['id']===_0x339d55['id']);return _0x3538c2>=0x26f2+0x303*-0x1+-0x23ef?_0x260a3e[_0x3538c2]={..._0x260a3e[_0x3538c2],..._0x339d55}:_0x260a3e[_0x4b3f9c(0x32a)]({'fast':![],..._0x339d55}),wr(PF,_0x260a3e),fs['mkdirSyn'+'c'](pdir(_0x339d55['id']),{'recursive':!![]}),_0x339d55['id'];}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x365),(_0x47e624,_0x4ca449)=>{const _0x4fd160=_0x5dd4ae;wr(PF,profiles()['filter'](_0x50f4e3=>_0x50f4e3['id']!==_0x4ca449)),fs[_0x4fd160(0x3af)](pdir(_0x4ca449),{'recursive':!![],'force':!![]});}),ipcMain[_0x5dd4ae(0x367)]('flist',(_0x53be31,_0x2ae34b)=>Object[_0x5dd4ae(0x1f7)+_0x5dd4ae(0x380)](Object[_0x5dd4ae(0x362)](FOLDER)['map'](_0x44db17=>{const _0x4aac73=_0x5dd4ae;let _0xaeb729=[];try{_0xaeb729=fs[_0x4aac73(0x405)+'ync'](path[_0x4aac73(0x372)](pdir(_0x2ae34b),_0x44db17))[_0x4aac73(0x1cb)](_0x5a3bdf=>!_0x5a3bdf[_0x4aac73(0x327)+'th']('.'));}catch{}return[_0x44db17,_0xaeb729];}))),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x2db),(_0x3e3781,_0x47b374,_0x3d0b1b,_0x3ea44e)=>fs[_0x5dd4ae(0x3af)](safe(path[_0x5dd4ae(0x372)](pdir(_0x47b374),_0x3d0b1b),path[_0x5dd4ae(0x388)](_0x3ea44e)),{'force':!![]})),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x181),async(_0x579b05,_0x21b9e8,_0x39b499,_0x526d6f,_0x1124fb=0x14*0xe5+-0x230a+0x1126)=>{const _0x358eb2=_0x5dd4ae,_0x4db79a=profiles()[_0x358eb2(0x20b)](_0x3579a9=>_0x3579a9['id']===_0x526d6f),_0x282274=[[_0x358eb2(0x3f0)+_0x358eb2(0x42f)+_0x21b9e8]];if(_0x4db79a&&_0x21b9e8!==_0x358eb2(0x213))_0x282274[_0x358eb2(0x32a)]([_0x358eb2(0x399)+':'+_0x4db79a['mc']]);if(_0x4db79a&&_0x21b9e8==='mod')_0x282274[_0x358eb2(0x32a)]([_0x358eb2(0x194)+_0x358eb2(0x46c)+_0x4db79a[_0x358eb2(0x224)]]);if(_0x21b9e8==='modpack')_0x282274[_0x358eb2(0x32a)](['categori'+'es:fabri'+'c']);const _0x2846df=await api(_0x358eb2(0x2a0)+'limit=20'+'&offset='+_0x1124fb+_0x358eb2(0x329)+encodeURIComponent(_0x39b499)+_0x358eb2(0x386)+encodeURIComponent(JSON[_0x358eb2(0x3b9)+'y'](_0x282274)));return _0x2846df[_0x358eb2(0x278)];}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x33f),async(_0xad7215,_0x898b7c,_0x4f5bdc,_0x18eb37)=>{const _0x37eefa=_0x5dd4ae;if(_0x18eb37===_0x37eefa(0x213))return{'pack':await installPack(_0x4f5bdc)};const _0x295087=profiles()[_0x37eefa(0x20b)](_0xd6d145=>_0xd6d145['id']===_0x898b7c);if(!_0x295087)throw new Error(_0x37eefa(0x396)+_0x37eefa(0x31e));return{'name':await installProject(_0x295087,_0x4f5bdc,_0x18eb37)};}),ipcMain[_0x5dd4ae(0x367)]('local',async(_0x507315,_0x388d7c,_0x27c926)=>{const _0x1a800a=_0x5dd4ae,_0x538a65={'mod':[_0x1a800a(0x450)],'shader':[_0x1a800a(0x18e)],'resourcepack':[_0x1a800a(0x18e)]}[_0x27c926],_0x2dfc47=await dialog[_0x1a800a(0x2d2)+_0x1a800a(0x3b2)](win,{'properties':[_0x1a800a(0x3bd),_0x1a800a(0x345)+_0x1a800a(0x277)],'filters':[{'name':_0x27c926,'extensions':_0x538a65}]});if(_0x2dfc47[_0x1a800a(0x42a)])return-0x1227+0x4a5+0x7*0x1ee;for(const _0xbc341d of _0x2dfc47['filePath'+'s']){fs['mkdirSyn'+'c'](path[_0x1a800a(0x372)](pdir(_0x388d7c),FOLDER[_0x27c926]),{'recursive':!![]}),fs[_0x1a800a(0x22f)+_0x1a800a(0x1ad)](_0xbc341d,path[_0x1a800a(0x372)](pdir(_0x388d7c),FOLDER[_0x27c926],path['basename'](_0xbc341d)));}return _0x2dfc47['filePath'+'s'][_0x1a800a(0x322)];}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x260)+'can',()=>{const _0x1e2efa=_0x5dd4ae,_0x1b141c=[],_0x33df1d=os[_0x1e2efa(0x270)](),_0x40a54f=process.env.APPDATA||path['join'](_0x33df1d,_0x1e2efa(0x24f)),_0x3af317=[['Prism\x20La'+_0x1e2efa(0x1e4),_0x1e2efa(0x40b)+_0x1e2efa(0x3da)+_0x1e2efa(0x2e7)],['MultiMC',_0x1e2efa(0x3aa)+_0x1e2efa(0x2c7)+'s'],[_0x1e2efa(0x18b)+_0x1e2efa(0x366),_0x1e2efa(0x18b)+'App/prof'+_0x1e2efa(0x293)],[_0x1e2efa(0x1dc)+'er',_0x1e2efa(0x2ff)+_0x1e2efa(0x3c3)+'instance'+'s']][_0x1e2efa(0x23c)](([_0x15b607,_0x56ff61])=>[_0x15b607,path[_0x1e2efa(0x372)](_0x40a54f,_0x56ff61)])[_0x1e2efa(0x2fb)]([['CurseFor'+'ge',path[_0x1e2efa(0x372)](_0x33df1d,_0x1e2efa(0x29e)+'ge',_0x1e2efa(0x1b4)+'t',_0x1e2efa(0x2dc)+'s')]]);for(const [_0x59cb60,_0x1ed3fc]of _0x3af317){try{for(const _0x49e634 of fs[_0x1e2efa(0x405)+_0x1e2efa(0x225)](_0x1ed3fc,{'withFileTypes':!![]}))if(_0x49e634[_0x1e2efa(0x190)+_0x1e2efa(0x237)]()){const _0x1e3a22=detect(path[_0x1e2efa(0x372)](_0x1ed3fc,_0x49e634[_0x1e2efa(0x1b5)]));if(isInst(_0x1e3a22))_0x1b141c[_0x1e2efa(0x32a)]({..._0x1e3a22,'from':_0x59cb60});}}catch{}}const _0x8269eb=path[_0x1e2efa(0x372)](_0x40a54f,_0x1e2efa(0x3dc)+'ft');if(fs['existsSy'+'nc'](_0x8269eb))_0x1b141c[_0x1e2efa(0x32a)]({...detect(_0x8269eb),'name':_0x1e2efa(0x3f8)+_0x1e2efa(0x205),'from':'Minecraf'+'t'});return _0x1b141c;}),ipcMain['handle'](_0x5dd4ae(0x25a)+_0x5dd4ae(0x1c0),async()=>{const _0x3b70ba=_0x5dd4ae,_0x10c1ad=await dialog[_0x3b70ba(0x2d2)+_0x3b70ba(0x3b2)](win,{'properties':[_0x3b70ba(0x289)+_0x3b70ba(0x410)]});if(_0x10c1ad[_0x3b70ba(0x42a)])return null;const _0x5de01b=detect(_0x10c1ad[_0x3b70ba(0x204)+'s'][-0x34f+0x235c+0xaaf*-0x3]);if(!isInst(_0x5de01b))throw new Error(_0x3b70ba(0x303)+'t');return _0x5de01b;}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x27a)+_0x5dd4ae(0x256),async()=>{const _0x56774c=_0x5dd4ae,_0x2e3039=await dialog[_0x56774c(0x2d2)+'Dialog'](win,{'properties':[_0x56774c(0x3bd)],'filters':[{'name':_0x56774c(0x18b)+_0x56774c(0x230),'extensions':[_0x56774c(0x44c)]}]});return _0x2e3039[_0x56774c(0x42a)]?null:await importMrpack(_0x2e3039[_0x56774c(0x204)+'s'][-0x8bd+-0x2312+-0x5*-0x8c3]);}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x3ae)+'un',async(_0x2665d3,_0x14be9c,_0x378f52)=>{const _0xdff153=_0x5dd4ae,_0xc46279=detect(_0x14be9c),_0x54872b=Date[_0xdff153(0x460)]()[_0xdff153(0x45b)](-0xcd+-0x764+0x855),_0x23e647=pdir(_0x54872b);fs[_0xdff153(0x2bf)+'c'](_0x23e647,{'recursive':!![]});for(const _0x21c799 of COPY){if(_0x21c799===_0xdff153(0x1b7)&&(_0x378f52['loader']!==_0xdff153(0x2c8)||_0x378f52[_0xdff153(0x1b7)]===_0xdff153(0x429)))continue;const _0x496e7a=path[_0xdff153(0x372)](_0xc46279[_0xdff153(0x309)],_0x21c799);if(!fs[_0xdff153(0x3db)+'nc'](_0x496e7a))continue;send('status',_0xdff153(0x3ba)+_0x21c799),await fs[_0xdff153(0x35d)]['cp'](_0x496e7a,path[_0xdff153(0x372)](_0x23e647,_0x21c799),{'recursive':!![]});}wr(PF,[...profiles(),{'id':_0x54872b,'name':_0x378f52[_0xdff153(0x1b5)],'mc':_0x378f52['mc'],'loader':_0x378f52[_0xdff153(0x224)],'ram':0x1000,'fast':![]}]),send(_0xdff153(0x356),_0xdff153(0x2b6));const _0x3ca3da=_0x378f52[_0xdff153(0x1b7)]==='all'?[]:await cleanClientMods(_0x23e647);return send(_0xdff153(0x356),''),{'id':_0x54872b,'disabled':_0x3ca3da[_0xdff153(0x322)]};}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x22a)+'an',(_0x32677c,_0xd7ead9)=>cleanClientMods(pdir(_0xd7ead9))),ipcMain['handle'](_0x5dd4ae(0x3ec),async(_0x13a395,_0x33e952)=>{const _0x38fb62=_0x5dd4ae,_0x3bc917=profiles(),_0x198adc=_0x3bc917[_0x38fb62(0x20b)](_0x5d184e=>_0x5d184e['id']===_0x33e952);if(!_0x198adc)throw new Error('E:pickpr'+_0x38fb62(0x31e));const _0x4aea9a=Date['now']()['toString'](0x8a6+-0x102e*0x2+0x2*0xbed),_0x3be7c7=LT[rd(CF,{})[_0x38fb62(0x1d3)]]||LT['en'];send('status',_0x38fb62(0x3ba)+_0x198adc[_0x38fb62(0x1b5)]);try{await fs['promises']['cp'](pdir(_0x33e952),pdir(_0x4aea9a),{'recursive':!![],'filter':_0x18ef1a=>!/[\\/](logs|crash-reports)([\\/]|$)/['test'](_0x18ef1a)});}finally{send(_0x38fb62(0x356),'');}return wr(PF,[..._0x3bc917,{..._0x198adc,'id':_0x4aea9a,'name':_0x198adc[_0x38fb62(0x1b5)]+'\x20'+(_0x3be7c7[_0x38fb62(0x473)+'ix']||LT['en'][_0x38fb62(0x473)+'ix']),'last':undefined}]),_0x4aea9a;}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x438),async(_0x30c004,_0x554f40)=>{const _0x1a7ba8=_0x5dd4ae,_0x4ac4a7=profiles()['find'](_0x4fab38=>_0x4fab38['id']===_0x554f40);if(!_0x4ac4a7)throw new Error(_0x1a7ba8(0x396)+_0x1a7ba8(0x31e));if(_0x4ac4a7['loader']!==_0x1a7ba8(0x2c8))throw new Error(_0x1a7ba8(0x37f)+_0x1a7ba8(0x37d));const _0x57b9a1=await dialog[_0x1a7ba8(0x298)+'Dialog'](win,{'defaultPath':_0x4ac4a7[_0x1a7ba8(0x1b5)][_0x1a7ba8(0x46b)](/[\\/:*?"<>|]/g,'_')+_0x1a7ba8(0x3b4),'filters':[{'name':_0x1a7ba8(0x18b)+_0x1a7ba8(0x230),'extensions':[_0x1a7ba8(0x44c)]}]});if(_0x57b9a1[_0x1a7ba8(0x42a)]||!_0x57b9a1['filePath'])return null;const _0x4ad229=pdir(_0x554f40),_0x4ea157=new AdmZip(),_0x2d3864=[];let _0x575e39=-0x1*-0x1a37+0x1737+-0x316e;send('status','S:check');try{for(const _0x48ea3c of Object[_0x1a7ba8(0x362)](FOLDER)){const _0x3bd61c=path[_0x1a7ba8(0x372)](_0x4ad229,_0x48ea3c);let _0x46b82b=[];try{_0x46b82b=fs[_0x1a7ba8(0x405)+_0x1a7ba8(0x225)](_0x3bd61c)[_0x1a7ba8(0x1cb)](_0x4fb80a=>!_0x4fb80a[_0x1a7ba8(0x327)+'th']('.')&&!/^nrml-overlay/i[_0x1a7ba8(0x211)](_0x4fb80a)&&fs[_0x1a7ba8(0x47a)](path[_0x1a7ba8(0x372)](_0x3bd61c,_0x4fb80a))[_0x1a7ba8(0x235)]());}catch{}const _0x5b4657=_0x46b82b[_0x1a7ba8(0x1cb)](_0x44183a=>!_0x44183a[_0x1a7ba8(0x440)]('.disable'+'d')),_0x37c3c5={};for(const _0x4ef4bc of _0x5b4657)_0x37c3c5[_0x4ef4bc]=sha512(path[_0x1a7ba8(0x372)](_0x3bd61c,_0x4ef4bc));let _0x4603a0={};if(_0x5b4657[_0x1a7ba8(0x322)]){const _0x5551f6=await fetch('https://'+_0x1a7ba8(0x1ed)+_0x1a7ba8(0x38e)+_0x1a7ba8(0x1c4)+_0x1a7ba8(0x2f7)+'s',{'method':_0x1a7ba8(0x23b),'headers':{...UA,'Content-Type':_0x1a7ba8(0x442)+_0x1a7ba8(0x3d6)},'body':JSON[_0x1a7ba8(0x3b9)+'y']({'hashes':Object[_0x1a7ba8(0x362)](_0x37c3c5),'algorithm':'sha512'})});if(!_0x5551f6['ok'])throw new Error(_0x1a7ba8(0x40f)+'th');_0x4603a0=await _0x5551f6[_0x1a7ba8(0x41b)]();}for(const _0x5793db of _0x46b82b){const _0x5a6865=_0x37c3c5[_0x5793db]&&_0x4603a0[_0x37c3c5[_0x5793db]],_0xab53fc=_0x5a6865&&_0x5a6865[_0x1a7ba8(0x3bb)]['find'](_0x4b86ab=>_0x4b86ab[_0x1a7ba8(0x43c)]&&_0x4b86ab[_0x1a7ba8(0x43c)][_0x1a7ba8(0x454)]===_0x37c3c5[_0x5793db]);if(_0xab53fc)_0x2d3864[_0x1a7ba8(0x32a)]({'path':_0x48ea3c+'/'+_0x5793db,'hashes':{'sha1':_0xab53fc['hashes'][_0x1a7ba8(0x45c)],'sha512':_0xab53fc['hashes'][_0x1a7ba8(0x454)]},'env':{'client':_0x1a7ba8(0x1d9),'server':_0x1a7ba8(0x1a6)},'downloads':[_0xab53fc[_0x1a7ba8(0x455)]],'fileSize':_0xab53fc[_0x1a7ba8(0x3ea)]});else _0x4ea157[_0x1a7ba8(0x391)+_0x1a7ba8(0x446)](path[_0x1a7ba8(0x372)](_0x3bd61c,_0x5793db),_0x1a7ba8(0x3e2)+'s/'+_0x48ea3c),_0x575e39++;}}for(const _0x248d2d of[_0x1a7ba8(0x378)])if(fs[_0x1a7ba8(0x3db)+'nc'](path[_0x1a7ba8(0x372)](_0x4ad229,_0x248d2d)))_0x4ea157[_0x1a7ba8(0x391)+_0x1a7ba8(0x2eb)](path['join'](_0x4ad229,_0x248d2d),_0x1a7ba8(0x3e2)+'s/'+_0x248d2d);for(const _0x554088 of[_0x1a7ba8(0x1e9)+'txt',_0x1a7ba8(0x1ac)+_0x1a7ba8(0x424)+'xt',_0x1a7ba8(0x3f3)+_0x1a7ba8(0x1fe)])if(fs[_0x1a7ba8(0x3db)+'nc'](path[_0x1a7ba8(0x372)](_0x4ad229,_0x554088)))_0x4ea157[_0x1a7ba8(0x391)+'File'](path[_0x1a7ba8(0x372)](_0x4ad229,_0x554088),_0x1a7ba8(0x3e2)+'s');let _0x5a253a=_0x1a7ba8(0x22d);try{_0x5a253a=(await ensureFabric(_0x4ac4a7['mc']))[_0x1a7ba8(0x38b)](/^fabric-loader-(.+)-[^-]+$/)[-0xf9e+-0x2398+-0x1*-0x3337];}catch{}_0x4ea157[_0x1a7ba8(0x219)](_0x1a7ba8(0x1a7)+_0x1a7ba8(0x243)+_0x1a7ba8(0x206),Buffer['from'](JSON[_0x1a7ba8(0x3b9)+'y']({'formatVersion':0x1,'game':_0x1a7ba8(0x1b4)+'t','versionId':_0x1a7ba8(0x2ae),'name':_0x4ac4a7['name'],'files':_0x2d3864,'dependencies':{'minecraft':_0x4ac4a7['mc'],'fabric-loader':_0x5a253a}},null,0x2cf*-0x8+0x3e1+0x1299))),_0x4ea157[_0x1a7ba8(0x2d5)](_0x57b9a1[_0x1a7ba8(0x204)]);}finally{send(_0x1a7ba8(0x356),'');}return{'path':_0x57b9a1[_0x1a7ba8(0x204)],'listed':_0x2d3864['length'],'extra':_0x575e39};}),ipcMain[_0x5dd4ae(0x367)]('mods:upd'+'ate',async(_0x5f166c,_0x11653c)=>{const _0x593375=_0x5dd4ae,_0x55539b=profiles()[_0x593375(0x20b)](_0x3931bc=>_0x3931bc['id']===_0x11653c);if(!_0x55539b)throw new Error(_0x593375(0x396)+_0x593375(0x31e));const _0x10119d=pdir(_0x11653c),_0xa7e56b=path[_0x593375(0x372)](_0x10119d,_0x593375(0x1b7)),_0x55387d=path['join'](_0x10119d,_0x593375(0x42d)+'ndex.jso'+'n'),_0x4af5a8=rd(_0x55387d,{}),_0x193b4c=[];let _0x278a63=[];try{_0x278a63=fs['readdirS'+_0x593375(0x225)](_0xa7e56b)[_0x593375(0x1cb)](_0x324f2d=>/\.jar(\.disabled)?$/i[_0x593375(0x211)](_0x324f2d)&&!/^nrml-overlay/i[_0x593375(0x211)](_0x324f2d));}catch{}if(_0x55539b[_0x593375(0x224)]!==_0x593375(0x2c8)||!_0x278a63[_0x593375(0x322)])return{'updated':_0x193b4c,'total':0x0};send(_0x593375(0x356),_0x593375(0x445));try{const _0x438c4d={};for(const _0x48e50a of _0x278a63){try{_0x438c4d[_0x48e50a]=sha512(path['join'](_0xa7e56b,_0x48e50a));}catch{}}const _0x444709=await fetch(_0x593375(0x252)+_0x593375(0x1ed)+_0x593375(0x38e)+_0x593375(0x1c4)+_0x593375(0x2f7)+_0x593375(0x182),{'method':_0x593375(0x23b),'headers':{...UA,'Content-Type':_0x593375(0x442)+'ion/json'},'body':JSON[_0x593375(0x3b9)+'y']({'hashes':Object['values'](_0x438c4d),'algorithm':'sha512','loaders':[_0x55539b[_0x593375(0x224)]],'game_versions':[_0x55539b['mc']]})});if(!_0x444709['ok'])throw new Error(_0x593375(0x40f)+'th');const _0x524d7b=await _0x444709['json'](),_0x3b4e62=_0x278a63[_0x593375(0x1cb)](_0x1fe402=>_0x438c4d[_0x1fe402]&&_0x524d7b[_0x438c4d[_0x1fe402]]);let _0x5bad66=0x1fd9*0x1+-0x2254+0x27b;for(const _0x64c8cf of _0x3b4e62){send(_0x593375(0x356),_0x593375(0x355)+ ++_0x5bad66+'/'+_0x3b4e62[_0x593375(0x322)]);const _0x586c8e=_0x524d7b[_0x438c4d[_0x64c8cf]],_0x486ee0=_0x586c8e[_0x593375(0x3bb)][_0x593375(0x20b)](_0x16693a=>_0x16693a[_0x593375(0x2b7)])||_0x586c8e[_0x593375(0x3bb)][-0x1ac1+-0xb*0x21e+0x320b];if(!_0x486ee0||!_0x486ee0[_0x593375(0x43c)]||_0x486ee0[_0x593375(0x43c)][_0x593375(0x454)]===_0x438c4d[_0x64c8cf])continue;const _0xe63462=_0x64c8cf['endsWith'](_0x593375(0x409)+'d'),_0x5906de=_0xe63462?_0x64c8cf['slice'](-0x1*0x92c+-0x2b*-0x9e+-0x115e,-(-0x2253+0x1*0x268f+0x2b*-0x19)):_0x64c8cf,_0x54d206=path[_0x593375(0x388)](_0x486ee0[_0x593375(0x1f0)]),_0xf565a9=path[_0x593375(0x372)](_0xa7e56b,'.'+_0x54d206+_0x593375(0x3a7));try{await dl(_0x486ee0[_0x593375(0x455)],_0xf565a9,_0x486ee0['hashes']&&_0x486ee0['hashes'][_0x593375(0x454)]);if(sha512(_0xf565a9)!==_0x486ee0[_0x593375(0x43c)][_0x593375(0x454)]){fs[_0x593375(0x3af)](_0xf565a9,{'force':!![]});continue;}fs[_0x593375(0x3af)](path['join'](_0xa7e56b,_0x64c8cf),{'force':!![]}),fs[_0x593375(0x467)+'nc'](_0xf565a9,path['join'](_0xa7e56b,_0x54d206+(_0xe63462?_0x593375(0x409)+'d':''))),delete _0x4af5a8[_0x5906de],_0x4af5a8[_0x54d206]=_0x586c8e['project_'+'id'],_0x193b4c[_0x593375(0x32a)](_0x5906de[_0x593375(0x46b)](/\.jar$/i,''));}catch{fs['rmSync'](_0xf565a9,{'force':!![]});}}return wr(_0x55387d,_0x4af5a8),{'updated':_0x193b4c,'total':_0x278a63['length']};}finally{send(_0x593375(0x356),'');}}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x43b),(_0x290c4,_0x37eba6)=>shell[_0x5dd4ae(0x3f2)](_0x37eba6?pdir(_0x37eba6):ROOT)),ipcMain['handle'](_0x5dd4ae(0x3c6),(_0x4553a7,_0x31934d,_0xce2834,_0x30e420)=>{const _0x15770d=_0x5dd4ae,_0x2e0474=path[_0x15770d(0x372)](pdir(_0x31934d),_0xce2834),_0x25f114=path[_0x15770d(0x388)](_0x30e420);fs[_0x15770d(0x467)+'nc'](path[_0x15770d(0x372)](_0x2e0474,_0x25f114),path[_0x15770d(0x372)](_0x2e0474,_0x25f114[_0x15770d(0x440)](_0x15770d(0x409)+'d')?_0x25f114[_0x15770d(0x210)](-0x7c7+-0x13a3+0x1b6a,-(0x8f*-0x37+0x15e7+-0x1*-0x8db)):_0x25f114+(_0x15770d(0x409)+'d')));}),ipcMain['handle'](_0x5dd4ae(0x368),(_0x367043,_0x43b2ed,_0x395f94,_0x1884e6)=>{const _0x399a26=_0x5dd4ae;let _0x860499=0x1418+-0x1b76+0x75e;for(const _0x3b02a9 of _0x1884e6){const _0x5d222e=path[_0x399a26(0x302)](_0x3b02a9)[_0x399a26(0x375)+'ase'](),_0x2ced73=_0x5d222e===_0x399a26(0x1f8)?'mods':_0x5d222e===_0x399a26(0x2b3)?_0x395f94===_0x399a26(0x1b7)?_0x399a26(0x1df)+_0x399a26(0x25e):_0x395f94:null;if(!_0x2ced73)continue;fs['mkdirSyn'+'c'](path[_0x399a26(0x372)](pdir(_0x43b2ed),_0x2ced73),{'recursive':!![]}),fs['copyFile'+_0x399a26(0x1ad)](_0x3b02a9,path[_0x399a26(0x372)](pdir(_0x43b2ed),_0x2ced73,path[_0x399a26(0x388)](_0x3b02a9))),_0x860499++;}return _0x860499;}),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x449),async(_0x4fc3fe,_0x5effb5,_0x32a61c={})=>{const _0x4afd1c=_0x5dd4ae,_0x3f9b04=profiles(),_0x305177=_0x3f9b04['find'](_0x1d4362=>_0x1d4362['id']===_0x5effb5),_0xed71ae=pdir(_0x5effb5),_0x5594ab=[];_0x305177[_0x4afd1c(0x224)]='fabric',_0x305177[_0x4afd1c(0x207)]=!![],_0x305177['ram']=Math['max'](-0x16f4+-0x87c+0x2770,Math[_0x4afd1c(0x456)](0x1d9f+-0x9ac+0x40d,Math[_0x4afd1c(0x373)](os[_0x4afd1c(0x2c5)]()/(0x5a629*-0x1+-0x1*-0x8b91+0x1*0x151a98)*(-0x10a6+0x22b+0xe7b+0.4)))),wr(PF,_0x3f9b04),await ensureFabric(_0x305177['mc']);let _0x29c8fe=-0x33d*0x5+0x217d*-0x1+0x18d7*0x2,_0x1f83a2=null;for(const _0x2cec3f of OPT_MODS){send(_0x4afd1c(0x356),_0x4afd1c(0x447)+_0x2cec3f);try{await installProject(_0x305177,_0x2cec3f,_0x4afd1c(0x262)),_0x29c8fe++;}catch{_0x5594ab[_0x4afd1c(0x32a)](_0x2cec3f);}}if(_0x32a61c[_0x4afd1c(0x292)]!==![])for(const _0x4216eb of ZOOM_MODS){send(_0x4afd1c(0x356),_0x4afd1c(0x447)+_0x4216eb);try{await installProject(_0x305177,_0x4216eb,_0x4afd1c(0x262)),_0x1f83a2=_0x4216eb,_0x29c8fe++;break;}catch{}}for(const _0x226604 of JUNK)fs[_0x4afd1c(0x3af)](path['join'](_0xed71ae,_0x226604),{'recursive':!![],'force':!![]});await cleanClientMods(_0xed71ae,![])['catch'](()=>{});try{fs[_0x4afd1c(0x405)+_0x4afd1c(0x225)](_0xed71ae)['filter'](_0x26b6d3=>/^hs_err_pid/[_0x4afd1c(0x211)](_0x26b6d3))[_0x4afd1c(0x1e5)](_0x4ccca3=>fs[_0x4afd1c(0x3af)](path[_0x4afd1c(0x372)](_0xed71ae,_0x4ccca3)));}catch{}return patchOpts(_0xed71ae,{'renderDistance':0xa,'simulationDistance':0x6,'entityDistanceScaling':0.75,'biomeBlendRadius':0x1,'mipmapLevels':0x2,'particles':0x1,'maxFps':0x104,'enableVsync':![],'entityShadows':![]}),{'ok':_0x29c8fe,'ram':_0x305177[_0x4afd1c(0x324)],'missing':_0x5594ab,'zoom':_0x1f83a2};});const dgram=require(_0x5dd4ae(0x354)),{T:LT}=require(_0x5dd4ae(0x209)+'s'),DISCORD_ID='',DBG=path['join'](ROOT,_0x5dd4ae(0x23d)+_0x5dd4ae(0x2a6));function _0x50b6(){const _0x5dfea9=['uKvdvcbYktS','w1n0CNvJDeW','AgfKzxjZlNq','C0LKkcrOlca','EMvpzIH0Exa','C2v0','yNjHBMqGC2G','BM9Uzq','y2fUy2vSzwq','CNKVBgf0zxm','seTdvvXtB2y','lNbYAxnTlwK','y3vYC29YrNi','DhLWztO','lxnOB3C','C2v0qwX3yxK','cNb1yMXPyYa','zxjYB3i','yxzHu2nYAxa','ignVzgu9','mJqZnZGYnxH1rxbiBq','BNjTBf9VDMu','Cgv4Cg9YDa','r3b1uhjLzMu','EgvKr0ndB3u','Cg9Wzw4','AgfZAgvZ','BxnTyW','y3j5ChrV','D3D3lM5WBwO','zw5KC1DPDgG','Bg9NAw4GzMe','yxbWBgLJyxq','v3jPDgvmAw4','DdmYxta7ifS','uZP1Cgq','rMLSzq','uZPVChr8','yMLU','B3b0Aw1PEMu','zgLZywjSzwq','Cgf0Aa','BxjWywnR','yxbxyxn0zva','BgrqzxjJzw4','Agv4','AMfY','ksa/ideGoIa','tMvYBwfSkq','DhjVBMPZlM8','C2HHnteY','DxjS','BwLU','rwXLy3rYB24','uZPSB2DPBG','l3yZl2jPBMe','zwX5zMfZDa','Dg9tDhjPBMC','C2HHmq','C2vUza','lMPZB24','cIaGjhiGpsa','BM93','l3zLCNnPB24','vxnLCKDWDva','C2nYzwvUia','q1q7ifT2B2K','zgrLBG','DJiUANnVBG','CMvUyw1Lu3K','BNnVBgvDoJO','zgLZy29Yzca','D2LUzg93lNm','CMvWBgfJzq','zxm6','lvHyoK1HEfq','ChnHDMu','i2u5ztzKzG','Bw1JlxbHy2S','l3rLyw1Zp2K','ywnJzw50','zhvWx3n1zMy','Cg9YDa','BgvtEw5J','zgLZy29UBMu','EgvKr0nmAxy','Cg9W','DwL0','C3rHDfn5BMm','uZPKBhW','BMCGu3LZDgu','uhrYigGSig8','igGSig91Dca','vxnPBMCGtLi','zhLUyw1Py18','Aw5JBhvKzxm','yxrPyYbLEhq','Dwj1C2vYy28','zxHLy0zPBgu','D2f0y2HLCIa','zxrHlM1VAMe','ifn5C3rLBs4','BgfZCYbovYa','BgvK','BciPxsbWDwi','DhjPBuvUza','CM9MAwXL','D1jLy3qOjgG','Bwf0y2HbBgW','z2v0rw50CMK','zMfICMLJlwe','C2vHCMnO','CY91CgrHDgu','ihn0CNvJDca','BNq9nq','BIHMywXZzsK','z2v0ugf0Aa','lvHyoITpBwK','Dc92mI92zxi','B3bLzcbIEsa','D19IywnR','tw9KCMLUDgG','Aw5N','Dwn0ifbuihS','EMLW','yxbPlMfKB3a','AxneAxjLy3q','mdSGFqP9cIi','Bw9Kqwn0Axy','ywjSzuv4CgW','y2f0zwDVCMK','nsaOrgv2zwW','ndm1s1fKBNP2','iZbMmgyXma','BwnqAwq','y3jHC2GGzgK','BMqGAxmGBwK','uZPMyxbP','oYb9cIaGw1m','C2v0qM91BMq','rgLWuMvJDa','zwXLy3rYB24','l3yY','q1bHDxnLtwK','Cg93zxjZAgu','oYbWDwjSAwm','BNrLBNqUy28','zw9MkenjksK','B3b0Aw9UywW','Bw9KCMLUDgG','BIbIB29SieC','sw50uhrYieC','CM9Szq','y3rLza','B3b0Aw9UC3m','u3LUyW','zxrgB3jLz3i','ywrTlxPPCa','ChjPC20TBge','AhqSiejVDhq','C29KAxvT','sw50zxjVCfm','BwLUzwnYywy','BMfTzq','v106oKn1CNm','Bw9KCW','Axr5','BMDqyxvZzvq','ywjSzs5QC28','CMvTB3zLtwu','ywrK','rtPUB3rVD24','CgLKktSkica','zxjUigjVB2W','AwnR','oYbPzIaOiuC','lvHyoKCXsgu','nteWqNPvBMLM','l3yYl3zLCNm','ywnJB3vUDc4','CgfYC2u','EhrYyq','AhrTBa','zg93kcK7icq','BM9PC2L1Bq','zMLSDgvY','icqOjhiUvg8','Axnezxn0CM8','zKrPC2fIBgu','AgvSCgvYig0','BNn0yw5Jzq','Aw5KB3DuAhi','zMLSzq','BgfUzW','y2zNC2v0','Aw5KB3Dszwm','AMf2yq','y2HPBgrFChi','Bgf1BMnO','CMvXDwLYzwq','AwnPDeDd','z2fTzvzLCNm','r0rmyxvUy2G','ihjHBt0','y2vUDd0Zma','CMvZB3vYy2u','BZ0ZmG','C2HVDW','BMv0lMzHyNi','igzHC3q9','Dw5JAgvY','zM9YrwfJAa','DgvHBv9Pza','B3zLCMXHEvC','ywnLsw5gyxm','B3b0Aw9UCY4','DgvHBq','yxbszwDPB24','C29YkcKGEYa','yxbPlM1Vzhi','ywTMAxG','Dc1SyxvUy2G','zMLSzw5HBwu','Aw5NBgvjBNm','y3rLzcaOzMK','Bgf1BMnOzwq','igLUDcbMBge','BIH0CNvLkq','yxLVDxqOtge','zNjVBuvUDhi','lMPHCG','kg1JihbPzca','q2XPzw50','y2XVC2vK','rtPUB2nVBxa','AMf2ys5LEgu','zgf0','C3bHD24Gzxi','zMfICMLJlM0','C2vW','DgL2zq','BxbHCMu','zMLSzvbHDgG','BMvJCMfMDa','C29U','zMfZDa','zvrOCMvZAg8','lI9Syw5NlMO','Bw92zvrVCa','zMLUza','zxH0CMfJDee','Aw9U','l2DHl3DPBMq','lvHyoI1eB24','C2XPy2u','DgvZDa','tMv3lu9IAMu','Bw9KCgfJAW','BNjTBc1Syxu','uhjVy0vUywi','rtPKB3DUBg8','zxHPDa','BNruyxjNzxq','ywrKrMLSzq','zw46ia','q0KGy2KGpsa','Aw1LBNrHBfy','shvNzu1LDgG','BgWUzxHL','C2f2zq','zMvYCML0zs0','zwzPBML0Aw8','lvHyoKCXuLm','C2v0uhjPB3i','Bg9HzgvY','Ew5J','zw5JAwvZiJO','luzPBgu','DxnLCKrHDge','zgf0yq','Bw9KCZPJBgu','Bg9NB3v0','z3b1','mc4XnI4Xma','D3D3lMvSzwm','y29WEuzPBgu','ig1VzhbHy2S','AwmGzxH0zxi','EwvK','CMvN','D3jPDgvgAwW','AxngAwXL','y2XPzw50','B3j5','C3rHDgLJigm','CMXHEs5Qyxi','DxrlAw5KlLm','ue9tva','BwfW','BNjTBc1Kzwi','y2KUAen1CNm','ignPksKGCMu','zf1BtLDDoJO','EYjKzxbLBMq','Dw5ZAgLMDa','lMLUzgv4lMO','CMvZB2X2zq','B3j0pq','DhjPBq','BMrVD1rOCMu','B2fKzxi','CgXHDgzVCM0','mJC3mdrYELnVveG','tLjntcbmyxu','ywrLCI8','lvHyoITqzxi','igv4DgvYBIa','lMnVBMzPzW','CMvXDwvZDfm','cIaGChvIBgK','Ahr0Chm6lY8','DxqGDwLUDca','D2LUzg93lwe','DwLK','AwXL','AxjPCW','C2X1zW','DgHLBG','Aw1WB3j0oNa','zxzLBg9Wzwq','BgfZDa','BMnOzxiGkeq','CgfJA3m','CM5HBa','Aw1WB3j0oNm','vvrgltG','Bw9K','CNn0ihnJCMu','C2HHzgvYCge','C09Uvg9W','ANzT','zw50CW','vMfUAwXSyq','BMnOlMXVzW','rZfhqW','CgLK','y2XLyxjby3q','CMvHzhK','AwmGC3rYDwm','BMnVzgLUzZ0','Ag9TzwrPCG','B2STEM9VBwu','Aw1TzwrPyxq','CNLeAxnWBge','DenVBxbPBgu','zM9JDxm','lvHyoK1HEeC','zwn0Aw9UCW','AgL0CW','zgLYBMfTzq','Aw1WB3j0oMy','zxnZrfbjqxC','y3jVC29MDfW','zvn5BMm','igXVywrLCJ0','zhLUyw1PyY0','AgLKzgvU','y2f0y2G','zgvSzxrL','rtPWyxrO','ChjLy2LZzq','C2HPzNq','iIbTyZ0','Bg9NAw4','Bwf4Aw1PEMu','B3bLBKrPCMu','CJmYlMrSBci','yNvUzgXLza','zxrdDxjZB3i','y3jHzNq','C3bHD24','w0rSBeLTCg8','AxnnAw5PBwK','DcHjBNrqDhi','EM9VBq','AwXLCW','twLUzwnYywy','zgvWzw5Kzw4','mti3lJaUmc4','ugvYy2vUDd0','C2HVD1nHDMu','AxnwAxnPyMW','Aw5KzxGUAhq','AwmGsw50uhq','tuWGtgf1BMm','Cca9ifT1Aw4','y3vYC2vMB3i','B3vUzfDPBMq','l3nLyxjJAd8','Cg9YDhm','BMn5ugvYy2u','yxbpy2n1Cge','qNLWyxnZ','DhLWzq','DwCUBg9N','ifnLDfbYB2m','B3zLCMXHEu8','zxH0zxjUihu','DhDHCMvCtwK','C2vJB25KlwK','rtPQyxzH','DwXLCW','ms4WlJa','CNvUBMLUzYa','igPHDMe9','CJSGChvIBgK','Dd05ma','lNPPCa','z2fTzvvZzxi','y3jLyxrLsge','uZPJAgvJAW','ChjPBwfYEq','lM5YBwWTC3q','CMvHzezPBgu','ihSkicaKAca','zxHLy3v0zuO','idePice9ida','yxbWrgf0yq','jNnLDfnOB3C','BwTKAxjtEw4','zgLZy29Yzc0','BYaMjIaOy2K','ne1mCg1VBG','ig1Vzgu9','y3jHC2GTCMu','Dg90ywXTzw0','lvHyoITvBMW','Aw5ZDgfUy2u','zMfICMLJ','zgvIDwC','C3rHBMrHCMq','CM91BMq','BwvZC2fNzq','CgfJA2fNzs4','mZK2mty3rxrtzenc','i2zMnweXzG','AxzVCLjHDgK','BgfZDc1Syxu','C2HVD09Wzw4','mtmXmde0ofLfCMfAza','zgvWzw5KCW','D3jPDgvAAxa','l3bYB2PLy3q','DwvUDgLHBcK','y2LLCW','B2rL','BxbVCNqOiNu','zMrLBa','sw5ZDgfUy2u','BMv3ienjkcK','C2LVBNmVBg8','B3iOksKIkqO','DfrOCM93','AgLKzq','w05xxtO6u2u','ywXSzwXszwy','BxrPBwvnCW','ChjVz3jLC3m','C29Tzq','C3rHBMnLCW','yM91BMrZ','ndCXmuXmweXYsW','Dcbmzwz0lca','rM9SzgvY','zsGIjhaGjcG','D2vIy2fJAgu','CgvJDgvK','y29Yzq','BeLTCg9YDcG','yYbZDgf0Awm','zgLZy29Yza','BtSGDxnPBMC','CMLJBwmUBMu','rtPMywjYAwm','lvHyoKCXtwK','Aw9Ux2zPBgu','BMf0AxzL','l3bYB2zPBgu','C2HVD0LUywm','y29Uy2f0','AxPLid0Gtwe','C2v0swDUB3i','lurUCM1SlNa','z2rSyxvUy2G','C2LVBG','z3jLzxrPBMC','zxH0BMfTzq','rtPUB3rPBNm','E30SiMzPBgu','uMLNAhqPicq','CgXVzW','zw50CNLoyw0','D2vIq29UDgu','z2fTzq','BgWTy2XVC2u','ihn0yxrPyYa','lMnMzW','DMfUAwXSyq','Aw50ifGSifK','Bw9Yzwn1BgW','Dfb0CI5Azxi','CIbOq3vYC28','z2L0AhvIlMm','ANjLl2HVDhm','CMvZDg9Yzq','DgL0Bgu','B2qGy29UBMu','yMfJAYa','B3v0keXHEw8','kcKkD2HPBgu','zgXSiILDiha','Bg9NCW','CMvUy2u9mJS','luv4zwn1DgK','B2zPBgu','y3vYC29Yigy','ChjVzMLSzxm','D19UzxC','BgvUz3rO','zw51CMLUz1q','CMfT','A2LSBa','DxnLCG','C3rHCNrZv2K','zNjVBq','jNf1zxj5pq','ChvZAa','DgfUy2vmB2m','cKfKzc1uExa','t1jnquW','z3m7ihb1yMW','AwnTyY5Mywi','ywrKCMvZCW','ChjLBg9Hzc4','kv0GChvIBgK','x0fct1zfx04','AhjLC2HVBgq','BMrLEc5QC28','BwnSyW','r2v0v2LUzg8','zw50CMLLCW','B3zLCMXHEq','AMf2yvzLCNm','CMvLoIa','DwjSAwmGAw4','zxHWB3j0CW','yxnL','Aw5ZDgfSBa','C2f2zxm','C2nYzwvUCY4','C2nYzwvUlxm','zwfKuhjVy2u','Aw5KzxHpzG','BxvSDgLtzwW','zu1VDxnLrxy','zs5QC29U','z2L0BgfIlMm','uKvhx1nA','rgLYzwn0wfW','lcbBCMvMxsq','AgvY','zNbZ','y2vUDd0Yma','zMfPBgvKoIa','p2XVywrLCNm','icbtDgfYDc0','igj5ie5LCM0','ig92zxjSyxK','zgDYyw0','uZP1Cgr8','C3rHDhvZ','Bg9HzezPBgu','s2LUzc5tzxe','yxbWzw5KrMK','BcLDihb1yMW','zxjJzw50ptu','CMvMzxjLBMm','ChjVBwLZzxm','zw52','C3rKzxjY','r2v0rM9YzwC','lvHyoITvC2u','DMfSDwvZ','CM9YoIa','zMCUChmX','CgrLBa','iefWCa','AgfUzgXL','zMfKza','ntC0ngT6vw1VDa','yMLUza','Dhj1y3rmyxK','AxbJ','B2fKzxiT','CNqOiNvZzxi','BIbaiGP1C2K','zwf0zwq','DhH0','AM9PBG','zMXVB3i','z2v0uhjPBwe','Dg9mB3DLCKm','wYjMywjYAwm','ywLSzwq6ia','y29UzMLN','zNvUy3rPB24','Dg1WlM1YCge','C3bSAxq','DfbYB2nLC3m','rMfICMLJ','lvHyoKCXtMu','rtPLEhbVCNq','AwvZ','DMvYC2LVBG','vg9WlcbsAwC','ufjjt1jjvfK','EWOGifTtDhi','y29TCg9Uzw4','jMzHy2v0CZ0','y2nVDw50','yMfZzw5HBwu','CMXHEq','D2vSy29Tzwq','Bwf0y2G','CMLJlwXVywq','z2v0twLUzwm','Aw50Ac5JB20','DgfZAW','B2rZ','ywrKtg9JywW','CMvHzefZvgu','zxH0zxjUigi','rtPYzwXVz2K','B3j0kcj1C2u','rtPWAwnRChi','zgLZy29YzeK','Ee5LD1nPEMu','DMvYC2LVBNm','Ag9ZDg5HBwu','ChjVzMLSzq','zxf1zw50Awe','lMnVBs9TB2q','B2nLC3m','uZPYDw4','CcKGjcGKCI4','BMrZide1maO','DhvYBIaXoYa','zxHLyW','y29UC3rHBNq','CgLZDg9Ulw0','AgvSCgvYrxG','lNrTCa','ihn0ywjSzt0','y2TLDa','txvSDgLnqY8','Dcbdssb7iha','zM9YzwDYB3u','B3bLBNvYBa','Aw1WB3j0oNi','CM1tEw5J','zMLUzeLUzgu','B25Jzq','rgLHBg9N','BgXuBW','lM1YCgfJAW','zMDpAW','C2vSzwn0x2e','B25qB2XPy3K','Dg9Rzw4','C3rYAw5NAwy','uZPJB3b5Fa','zMLSzxm','CMf3lMDPDgG','B3bLBKzPBgu','D2LUmZi','CNnOywWUu2K','zsaTvhLWzuq','zxjZAw9Ux20','CMvSzwfZzq','zxjFBMv4Dc8','C2vYmZiUzgW','lu5VuhjVzMK','zNrVz2DSzq','CMvMCMvZAa','Cg90l25VCM0','t25SEq','yY9Nyw1Ll3y','y3jLyxrLu28','A2v5CW','D2HLBLjLywq','BgLJzw5Zzq','zwXJB21L','C29YDa','yw5PzMvZDf8','sw5MBYHYzwy','DxrMoa','CNbJ','mZiUzgXSiIK','Aw9Ul2PZB24','Dgv4Da','zgLNzxn0','xsbWDwjSAwm','BMnOzxiVAw4','zxHPC3rZu3K','lM1PBMvJCMe','BNjTBc1VDMu','ywDUB3nPCZO','Dg90ywW','ANjLlNPPCa','AgvPz2H0','B3zLCNjPzgu','D1nPEMvqzxi','cIaGw0rSBeK','y3LFDhLWzq','B3rOzxi','y3qGtLCRuKu','w3jLzL0KCcK','BgXPBMC','C2L6zq','Bw9KzxjUzMK','Cgr1Ca','y3vZDg9Tqxi','t3DUzxi','imk3ia','ChjVAMvJDf8','z2v0rgf0yq','B3bLBLbHDgG','C2vYDMvYCY4','otG0mtDOq0n0u3u','DwrWna','Bwv0ys5Mywi','CMfMDa','qwXHCcaUBwK','DcbLEgL0zwq','B2nRrxHWzxi','AgfZ','BM9Kzv9TB2q','oYbJAs5JyLm','BMv0lM1PBMu','zgvZDhjVEq','zxiTy29Yzq','Bgf1BMnOici','AwXSAxnLy28','ugXHEwLUzYa','zxrvCgrHDgK','CMvHzgrPCLm','yNjHBMq','zg93BMXVywq','ChjPB3jPDhK','lMrPC2fIBgu','Aw1LugvYy2u','uhjPC21myxu','C3rHDgu','C3rHyMXL','DgL1Bs5Uzxq','rtPTB2rYAw4','y3rVCNK','B2qUANnVBG','yMXPyYbZDhi','DcHmyxLVDxq','C3njzcHjBNq','CYi6w119','yMvMB3jLlxe','yxjYyxLcDwy','BNrZ','BMCUy29Tl20','mte4odaYnZLmEMXsCu8','ANnVBG','BgLJihn0yxq','lurMAwXLlMu','D2LKDgG','yNjHBMqGB3y','ywLS','D2vSy29Tzq'];_0x50b6=function(){return _0x5dfea9;};return _0x50b6();}function dlog(_0x5d7735){const _0x2296e4=_0x5dd4ae;try{if(fs[_0x2296e4(0x3db)+'nc'](DBG)&&fs[_0x2296e4(0x47a)](DBG)[_0x2296e4(0x3ea)]>-0x1cd99*0x1+-0x3f80e+0x8d2e7)fs['writeFil'+_0x2296e4(0x27d)](DBG,'');fs['appendFi'+_0x2296e4(0x475)](DBG,new Date()['toISOStr'+'ing']()[_0x2296e4(0x210)](0x1*-0xe4a+-0x84b+-0x8*-0x2d4,0x2161+-0x233b*0x1+0x1f1*0x1)+'\x20'+_0x5d7735+'\x0a');}catch{}}let rpc=null,rpcId='',rpcReady=![],rpcAct=null;function presence_orig(_0xb4334b){const _0x13b47e=_0x5dd4ae;rpcAct=_0xb4334b;const _0x51affb=rd(CF,{}),_0x47bdf5=String(_0x51affb[_0x13b47e(0x397)+'d']||DISCORD_ID)['trim']();if(_0x51affb[_0x13b47e(0x2f2)]===![]||!_0x47bdf5)return;const _0x423c12=()=>{const _0x506351=_0x13b47e;if(rpc&&rpcReady)(rpcAct?rpc['setActiv'+_0x506351(0x1b8)](rpcAct):rpc[_0x506351(0x26c)+'ivity']())['catch'](()=>{});};try{if(!rpc||rpcId!==_0x47bdf5){try{rpc&&rpc['destroy']()[_0x13b47e(0x281)](()=>{});}catch{}const _0x5fb3af=require(_0x13b47e(0x2c0)+_0x13b47e(0x3d4));rpcId=_0x47bdf5,rpcReady=![],rpc=new _0x5fb3af[(_0x13b47e(0x1fa))]({'transport':_0x13b47e(0x36c)}),rpc['on'](_0x13b47e(0x26d),()=>{const _0x52433b=_0x13b47e;rpcReady=!![],dlog(_0x52433b(0x469)+_0x52433b(0x26d)),_0x423c12();}),rpc['on'](_0x13b47e(0x476)+_0x13b47e(0x1ab),()=>{rpc=null,rpcReady=![];}),rpc[_0x13b47e(0x287)]({'clientId':_0x47bdf5})['catch'](_0x59e7bf=>{const _0x3a6f5e=_0x13b47e;dlog(_0x3a6f5e(0x469)+_0x3a6f5e(0x441)+'iled:\x20'+(_0x59e7bf&&_0x59e7bf['message'])),rpc=null;});}else _0x423c12();}catch{rpc=null;}}
function presence(a){
  if(a&&typeof a==='object'){a={...a};for(const k of['details','state','largeImageText'])if(typeof a[k]==='string')a[k]=a[k].replace(/NRML Launcher/g,'NRML Client');}
  return presence_orig(a);
}

let udp=null,udpPort=-0x1f56+-0x240f+0x4365,pauseOpen=![],openSince=0x1*-0x22ab+0x1e*-0x47+-0x899*-0x5,helperExpected=![],menuOpen=![],modActive=![],cursorFree=![],launchedAt=-0x2326+-0x1db1+0x159d*0x3,mcPid=0x1c15+-0x1750+0x4c5*-0x1,mcRect=null,fgOk=null,watcher=null,retry=null,brand=null,welcomed=![],gameUser=null;const seenScreens=new Set(),enabled=()=>rd(CF,{})[_0x5dd4ae(0x339)]!==![],accent=()=>{const _0x54dced=_0x5dd4ae,_0x2023cb=String(rd(CF,{})[_0x54dced(0x472)]||'');return/^#[0-9a-f]{6}$/i[_0x54dced(0x211)](_0x2023cb)?_0x2023cb:_0x54dced(0x2cf);},precise=()=>rd(CF,{})['overlayM'+_0x5dd4ae(0x2d9)]!==_0x5dd4ae(0x2ca),PAUSE=/(^|\.)(class_433|PauseScreen|GameMenuScreen)$/,wantBrand=()=>{const _0x4367fb=_0x5dd4ae;if(!enabled()||!mcPid||fgOk!==!![])return![];if(modActive)return pauseOpen;if(helperExpected&&Date[_0x4367fb(0x460)]()-launchedAt<-0xc82f+0x1*-0x3e4d+0x1f0dc)return![];return!!(cursorFree&&openSince&&Date['now']()-openSince>=-0x559+-0x119*-0x9+-0x38e);};function evalMenu(){const _0x2dbe8b=_0x5dd4ae;if(!mcPid)return;const _0x43c4fe=modActive?menuOpen:cursorFree;if(!_0x43c4fe)openSince=-0x100*-0x7+0x2ce*0x1+-0x9ce;else{if(!openSince)openSince=Date[_0x2dbe8b(0x460)]();}if(_0x43c4fe&&fgOk===!![]&&(modActive||Date['now']()-launchedAt>-0x1ba9*0x3+-0x1*-0x1a3d+0x679e))greet();updateBrand();}function startUdp(){return new Promise(_0xda1b79=>{const _0x3c71b9=_0x2de6;if(udp)return _0xda1b79(udpPort);udp=dgram[_0x3c71b9(0x3cb)+_0x3c71b9(0x3a9)](_0x3c71b9(0x3f5)),udp['on'](_0x3c71b9(0x433),()=>{}),udp['on'](_0x3c71b9(0x2cc),_0x39c04f=>{const _0x318cd2=_0x3c71b9,[_0x5366e1,_0x1616a7,_0x425b19]=String(_0x39c04f)[_0x318cd2(0x37b)]('|');if(_0x5366e1!=='S')return;if(!modActive)dlog(_0x318cd2(0x1cf)+_0x318cd2(0x316)+_0x318cd2(0x1f2)+_0x318cd2(0x263)+_0x318cd2(0x21a)+_0x425b19+')');modActive=!![];if(_0x425b19&&!seenScreens['has'](_0x425b19)){seenScreens[_0x318cd2(0x1bc)](_0x425b19),dlog(_0x318cd2(0x463)+_0x1616a7+'\x20'+_0x425b19);try{fs[_0x318cd2(0x359)+_0x318cd2(0x475)](path['join'](ROOT,_0x318cd2(0x341)+'log'),_0x1616a7+'\x20'+_0x425b19+'\x0a');}catch{}}menuOpen=_0x1616a7==='1',pauseOpen=menuOpen&&PAUSE[_0x318cd2(0x211)](String(_0x425b19||'')[_0x318cd2(0x246)]()),evalMenu();}),udp[_0x3c71b9(0x36a)](-0x1e63+-0x2241+-0x1029*-0x4,_0x3c71b9(0x296)+'1',()=>{const _0x4689d0=_0x3c71b9;udpPort=udp[_0x4689d0(0x330)]()[_0x4689d0(0x474)],_0xda1b79(udpPort);});});}function overlayWin(_0x317abd,_0x4bae65){const _0x1ba817=_0x5dd4ae,_0xa4e5bb=new BrowserWindow({'width':_0x317abd,'height':_0x4bae65,'show':![],'frame':![],'transparent':!![],'resizable':![],'focusable':![],'skipTaskbar':!![],'hasShadow':![],'alwaysOnTop':!![],'webPreferences':{'backgroundThrottling':![]}});return _0xa4e5bb[_0x1ba817(0x431)+_0x1ba817(0x265)](!![],_0x1ba817(0x342)+'aver'),_0xa4e5bb[_0x1ba817(0x2fd)+_0x1ba817(0x346)+_0x1ba817(0x267)](!![]),_0xa4e5bb;}function area(){const _0x3557ab=_0x5dd4ae;try{if(mcRect&&process['platform']===_0x3557ab(0x3be))return screen['screenTo'+_0x3557ab(0x19e)](null,mcRect);}catch{}return screen[_0x3557ab(0x374)+_0x3557ab(0x273)+'y']()[_0x3557ab(0x2e8)];}function updateBrand(){const _0x250daa=_0x5dd4ae;if(!mcPid)return;const _0x43ec6f=wantBrand();if(_0x43ec6f){(!brand||brand[_0x250daa(0x1cd)+'yed']())&&(brand=overlayWin(-0x916+0xeb6*0x2+0x6*-0x32b,-0x290+0x23a4*-0x1+0x7be*0x5),brand[_0x250daa(0x357)]('overlay.'+_0x250daa(0x1c8),{'query':{'mode':_0x250daa(0x406),'acc':accent()}}),dlog(_0x250daa(0x41f)+'erlay\x20cr'+_0x250daa(0x370)));const _0x22cf36=area();brand[_0x250daa(0x19d)+'s']({'x':Math[_0x250daa(0x2cb)](_0x22cf36['x']+_0x22cf36[_0x250daa(0x41e)]-(0x3a6+0x1ac+-0x3fe)-(0x56f*-0x7+0x7d8+-0x1*-0x1e41)),'y':Math[_0x250daa(0x2cb)](_0x22cf36['y']+_0x22cf36['height']-(0x698+-0x1b13*0x1+0x14fd)-(-0x7f*0x36+-0x211f+0x3bf5)),'width':0x154,'height':0x82});!brand[_0x250daa(0x299)+'e']()&&(brand['showInac'+_0x250daa(0x202)](),dlog(_0x250daa(0x428)+'own'));try{brand[_0x250daa(0x431)+'sOnTop'](!![],'screen-s'+'aver'),brand[_0x250daa(0x20a)]();}catch{}brand[_0x250daa(0x308)+'nts']['executeJ'+_0x250daa(0x434)+'t']('window.s'+'etShown&'+_0x250daa(0x2be)+_0x250daa(0x1f5))['catch'](()=>{});}else{if(brand&&!brand['isDestro'+'yed']()&&brand[_0x250daa(0x299)+'e']()){brand[_0x250daa(0x308)+_0x250daa(0x418)][_0x250daa(0x2bb)+'avaScrip'+'t'](_0x250daa(0x46a)+'etShown&'+_0x250daa(0x2be)+_0x250daa(0x185))[_0x250daa(0x281)](()=>{});const _0x2bca95=brand;setTimeout(()=>{const _0x3a1bea=_0x250daa;!_0x2bca95[_0x3a1bea(0x1cd)+_0x3a1bea(0x232)]()&&!wantBrand()&&(_0x2bca95[_0x3a1bea(0x2e1)](),dlog('brand\x20hi'+_0x3a1bea(0x465)));},0x1ec0+-0x51*0x6e+0x5d0);}}}function greet(){const _0x22b400=_0x5dd4ae;if(welcomed||!gameUser||!mcPid||fgOk!==!![])return;welcomed=!![];const _0x267238=rd(CF,{});if(_0x267238[_0x22b400(0x339)]===![]||_0x267238[_0x22b400(0x1e7)+_0x22b400(0x3cf)]===![])return;const _0x24f2ec=_0x267238[_0x22b400(0x38a)]||[],_0xc83f78=_0x24f2ec[_0x22b400(0x481)](gameUser['id']);if(!_0xc83f78)wr(CF,{..._0x267238,'welcomed':[..._0x24f2ec,gameUser['id']]});const _0x54c04a=LT[_0x267238['lang']]||LT['en'],_0x175ccd=(_0xc83f78?_0x54c04a['w_back']:_0x54c04a[_0x22b400(0x321)])||(_0xc83f78?LT['en'][_0x22b400(0x18a)]:LT['en']['w_new']),_0xa9e90b=0xc40+0x172*-0x11+0x2*0x7f5,_0x2965ae=0x2*0xaaa+0xeeb+-0x234f,_0x1bd710=area(),_0x417100=overlayWin(_0xa9e90b,_0x2965ae);dlog(_0x22b400(0x301)+'\x20'+(_0xc83f78?_0x22b400(0x317):'new\x20')+gameUser[_0x22b400(0x1b5)]),_0x417100[_0x22b400(0x19d)+'s']({'x':Math['round'](_0x1bd710['x']+(_0x1bd710[_0x22b400(0x41e)]-_0xa9e90b)/(0x1d1b*-0x1+0x5c*-0x1d+0x2789*0x1)),'y':Math[_0x22b400(0x2cb)](_0x1bd710['y']+_0x1bd710[_0x22b400(0x3e1)]*(0x43*-0x35+0x59*-0x20+0x18ff+0.14)),'width':_0xa9e90b,'height':_0x2965ae}),_0x417100[_0x22b400(0x357)]('overlay.'+_0x22b400(0x1c8),{'query':{'mode':_0x22b400(0x421),'acc':accent(),'pre':_0x175ccd,'name':gameUser[_0x22b400(0x1b5)],'bang':_0xc83f78?'!':''}}),_0x417100[_0x22b400(0x3b1)]('ready-to'+'-show',()=>_0x417100[_0x22b400(0x2fa)+_0x22b400(0x202)]()),setTimeout(()=>{const _0x50e1d6=_0x22b400;if(!_0x417100[_0x50e1d6(0x1cd)+_0x50e1d6(0x232)]())_0x417100[_0x50e1d6(0x3ff)]();},-0x16b9+0x1*-0x74f+0x8*0x713);}const PS=((_0x5dd4ae(0x32c)+_0x5dd4ae(0x3c0)+_0x5dd4ae(0x221)+_0x5dd4ae(0x36f)+_0x5dd4ae(0x47c)+_0x5dd4ae(0x2f3)+_0x5dd4ae(0x487)+'Runtime.'+_0x5dd4ae(0x1b3)+'ervices;'+_0x5dd4ae(0x432)+_0x5dd4ae(0x238)+_0x5dd4ae(0x488)+_0x5dd4ae(0x384)+'uctLayou'+_0x5dd4ae(0x413)+_0x5dd4ae(0x358)+_0x5dd4ae(0x2d7)+']\x20public'+_0x5dd4ae(0x183)+'RECT\x20{\x20p'+_0x5dd4ae(0x33c)+_0x5dd4ae(0x2ea)+_0x5dd4ae(0x382)+_0x5dd4ae(0x1b1)+'om;\x20}\x0a\x20\x20'+_0x5dd4ae(0x423)+_0x5dd4ae(0x1f6)+'youtKind'+'.Sequent'+'ial)]\x20pu'+_0x5dd4ae(0x412)+_0x5dd4ae(0x18d)+'\x20public\x20'+_0x5dd4ae(0x30e)+_0x5dd4ae(0x19c)+_0x5dd4ae(0x36b)+_0x5dd4ae(0x318)+_0x5dd4ae(0x23a)+_0x5dd4ae(0x39c)+_0x5dd4ae(0x35a)+_0x5dd4ae(0x26e)+_0x5dd4ae(0x3ab)+_0x5dd4ae(0x33c)+'t\x20cbSize'+_0x5dd4ae(0x1a3)+_0x5dd4ae(0x1f4)+_0x5dd4ae(0x32e)+_0x5dd4ae(0x29b)+_0x5dd4ae(0x311)+_0x5dd4ae(0x2b1)+'c\x20PT\x20pt;'+'\x20}\x0a\x20\x20[Dl'+_0x5dd4ae(0x2f0)+'\x22user32.'+_0x5dd4ae(0x31a)+'ublic\x20st'+_0x5dd4ae(0x482)+_0x5dd4ae(0x1bf)+_0x5dd4ae(0x2a7)+_0x5dd4ae(0x27b)+'are();\x0a\x20'+'\x20[DllImp'+_0x5dd4ae(0x395)+_0x5dd4ae(0x28a)+_0x5dd4ae(0x332)+_0x5dd4ae(0x2f1)+_0x5dd4ae(0x24e)+_0x5dd4ae(0x1a9)+_0x5dd4ae(0x1ae)+_0x5dd4ae(0x29f)+'ow();\x0a\x20\x20'+_0x5dd4ae(0x28f)+_0x5dd4ae(0x36e)+_0x5dd4ae(0x3d5)+_0x5dd4ae(0x3d9)+_0x5dd4ae(0x30b)+_0x5dd4ae(0x2a9)+'int\x20GetW'+_0x5dd4ae(0x1d1)+_0x5dd4ae(0x343)+_0x5dd4ae(0x414)+_0x5dd4ae(0x47d)+_0x5dd4ae(0x253)+_0x5dd4ae(0x1be)+_0x5dd4ae(0x28f)+_0x5dd4ae(0x36e)+_0x5dd4ae(0x3d5)+']\x20public'+_0x5dd4ae(0x30b)+_0x5dd4ae(0x393)+'ool\x20GetW'+_0x5dd4ae(0x1d5)+_0x5dd4ae(0x291)+_0x5dd4ae(0x47e)+_0x5dd4ae(0x422)+_0x5dd4ae(0x3e4)+_0x5dd4ae(0x2da)+_0x5dd4ae(0x3c4)+_0x5dd4ae(0x17a)+_0x5dd4ae(0x41c)+_0x5dd4ae(0x231)+_0x5dd4ae(0x1a8)+_0x5dd4ae(0x28c)+_0x5dd4ae(0x3d2)+'\x20CI\x20ci);'+_0x5dd4ae(0x251)+_0x5dd4ae(0x2f1)+'\x20int\x20Cur'+_0x5dd4ae(0x1ec)+_0x5dd4ae(0x21b)+_0x5dd4ae(0x2dd)+_0x5dd4ae(0x3fd)+_0x5dd4ae(0x2fc)+_0x5dd4ae(0x3bf)+_0x5dd4ae(0x426)+_0x5dd4ae(0x1a5)+_0x5dd4ae(0x1c1)+_0x5dd4ae(0x28c)+_0x5dd4ae(0x3d2)+_0x5dd4ae(0x23f)+_0x5dd4ae(0x3a2)+'return\x20('+_0x5dd4ae(0x23e)+'or\x20!=\x20In'+(_0x5dd4ae(0x310)+_0x5dd4ae(0x2c1)+'.flags\x20&'+_0x5dd4ae(0x2bc)+_0x5dd4ae(0x451)+_0x5dd4ae(0x191)+'@\x0a[void]'+_0x5dd4ae(0x2e2)+_0x5dd4ae(0x37c)+'DPIAware'+_0x5dd4ae(0x319)+'\x20($true)'+_0x5dd4ae(0x2ba)+'=\x20[NW]::'+_0x5dd4ae(0x360)+'roundWin'+_0x5dd4ae(0x1c9)+_0x5dd4ae(0x29d)+_0x5dd4ae(0x444)+'void][NW'+']::GetWi'+_0x5dd4ae(0x247)+'adProces'+_0x5dd4ae(0x425)+_0x5dd4ae(0x3e8)+_0x5dd4ae(0x45f)+_0x5dd4ae(0x212)+_0x5dd4ae(0x3e7)+_0x5dd4ae(0x464)+_0x5dd4ae(0x240)+_0x5dd4ae(0x337)+_0x5dd4ae(0x17d)+_0x5dd4ae(0x34b)+'r)\x0a\x20\x20[Co'+_0x5dd4ae(0x468)+_0x5dd4ae(0x443)+_0x5dd4ae(0x2ec)+'$r.Left)'+_0x5dd4ae(0x1cc)+_0x5dd4ae(0x3a0)+_0x5dd4ae(0x305)+'($r.Bott'+'om)\x20$([N'+_0x5dd4ae(0x1b6)+_0x5dd4ae(0x2df)+_0x5dd4ae(0x351)+'Sleep\x20-M'+_0x5dd4ae(0x402)+_0x5dd4ae(0x3a1)+'}\x0a')).replace('while ($true) {',()=>'$mcpid=[uint32]$env:NRML_MCPID; try{(Get-Process -Id $PID).PriorityClass="BelowNormal"}catch{}\nwhile ($true) {').replace(/Start-Sleep -Milliseconds 150/,()=>'if ($p -eq $mcpid) { Start-Sleep -Milliseconds 180 } else { Start-Sleep -Milliseconds 800 }')),stopWatcher=()=>{const _0x529139=_0x5dd4ae;try{watcher&&watcher[_0x529139(0x325)]();}catch{}watcher=null;};function startWatcher_orig(){const _0x5eedf3=_0x5dd4ae;stopWatcher();if(process[_0x5eedf3(0x249)]!=='win32')return;try{const _0x5b038e=path['join'](ROOT,_0x5eedf3(0x364));fs[_0x5eedf3(0x234)+_0x5eedf3(0x27d)](_0x5b038e,PS),watcher=cp[_0x5eedf3(0x28e)](_0x5eedf3(0x1a2)+_0x5eedf3(0x21e),[_0x5eedf3(0x3c5)+'le',_0x5eedf3(0x31d)+_0x5eedf3(0x3b7),_0x5eedf3(0x2a4),_0x5eedf3(0x227),_0x5b038e]);let _0x2240b3='',_0xd8be2f=!![];watcher['stdout']['on'](_0x5eedf3(0x229),_0xf35b41=>{const _0x27851b=_0x5eedf3;_0x2240b3+=_0xf35b41;const _0x2a4704=_0x2240b3['split'](/\r?\n/);_0x2240b3=_0x2a4704[_0x27851b(0x478)]();for(const _0x771600 of _0x2a4704){const _0x20e973=_0x771600['trim']()[_0x27851b(0x38b)](/^(\d+) (-?\d+) (-?\d+) (-?\d+) (-?\d+)(?: ([01]))?$/);if(!_0x20e973){if(_0xd8be2f)dlog(_0x27851b(0x485)+'output:\x20'+_0x771600[_0x27851b(0x210)](-0xc8*-0x32+-0x12e1+-0x142f*0x1,0x1aef+-0x2*0x704+-0xc6f));continue;}_0xd8be2f&&(_0xd8be2f=![],dlog(_0x27851b(0x485)+_0x27851b(0x2af)+_0x27851b(0x1f9)+mcPid+')'));const _0x4e1602=+_0x20e973[0x1*0xe69+0x692+-0x6*0x37f]===mcPid;if(_0x4e1602!==fgOk)dlog(_0x27851b(0x3ac)+_0x27851b(0x19a)+'necraft:'+'\x20'+_0x4e1602);fgOk=_0x4e1602;if(_0x4e1602){const _0x238a49={'x':+_0x20e973[-0x25ed+0xd*-0x94+0x2d73],'y':+_0x20e973[0x2509+0x6b6*0x3+-0x3928],'width':+_0x20e973[0x85*0x3a+0x189b+-0x36b9]-+_0x20e973[0x485*0x2+0x1d90+-0xf7*0x28],'height':+_0x20e973[0x1*-0x1033+0x2489+-0x7*0x2e7]-+_0x20e973[0x11d5+-0xe22+0x1d8*-0x2]};if(_0x238a49[_0x27851b(0x41e)]>-0x1167+0x6d*-0x4a+0x31b1&&_0x238a49[_0x27851b(0x3e1)]>0x168c+-0xc9*0x3+-0x3*0x689)mcRect=_0x238a49;}if(_0x20e973[0x859*0x2+0xab7+-0x1b63]!==undefined){const _0x28299f=_0x20e973[0x1590+-0x12c3*0x1+-0x2c7]==='1';if(_0x28299f!==cursorFree)dlog(_0x27851b(0x31f)+_0x27851b(0x33b)+_0x28299f);cursorFree=_0x28299f;}evalMenu();}}),watcher[_0x5eedf3(0x35f)]['on'](_0x5eedf3(0x229),_0x58adce=>dlog('watcher\x20'+'error:\x20'+String(_0x58adce)[_0x5eedf3(0x210)](0x26fc+-0xc7f*-0x1+0x3*-0x1129,0x689+-0x3c5+-0x7f*0x4))),watcher['on'](_0x5eedf3(0x433),_0x492580=>dlog(_0x5eedf3(0x485)+_0x5eedf3(0x1ff)+_0x5eedf3(0x363)+_0x492580[_0x5eedf3(0x2cc)])),watcher['on'](_0x5eedf3(0x217),()=>{watcher=null;});}catch(_0x8253e8){dlog(_0x5eedf3(0x485)+_0x5eedf3(0x34f)+_0x8253e8['message']);}}
function startWatcher(){process.env.NRML_MCPID=String(mcPid||0);__nrmlPrio('PRIORITY_BELOW_NORMAL');return startWatcher_orig();}
function stopGame_orig(){const _0x36b457=_0x5dd4ae;pauseOpen=![],openSince=-0x135b+0x1e9f+0x5a2*-0x2,helperExpected=![],menuOpen=![],modActive=![],cursorFree=![],mcPid=-0x17e*-0xb+0x1f0*0x2+-0x173*0xe,mcRect=null,fgOk=null,welcomed=![],stopWatcher(),clearInterval(retry),retry=null;try{brand&&!brand[_0x36b457(0x1cd)+_0x36b457(0x232)]()&&brand['destroy']();}catch{}brand=null,presence(null);}
function stopGame(){__nrmlPrio('PRIORITY_NORMAL');return stopGame_orig();}
async function ensureMod(_0x13aca1){const _0x1f74d9=_0x5dd4ae,_0x1705c6=path[_0x1f74d9(0x372)](pdir(_0x13aca1['id']),_0x1f74d9(0x1b7));fs[_0x1f74d9(0x2bf)+'c'](_0x1705c6,{'recursive':!![]});for(const _0xee5517 of fs[_0x1f74d9(0x405)+_0x1f74d9(0x225)](_0x1705c6))if(/^nrml-overlay.*\.jar(\.disabled)?$/i[_0x1f74d9(0x211)](_0xee5517))fs[_0x1f74d9(0x3af)](path['join'](_0x1705c6,_0xee5517),{'force':!![]});if(!enabled()||!precise()||_0x13aca1[_0x1f74d9(0x40d)])return![];return fs[_0x1f74d9(0x22f)+'Sync'](path[_0x1f74d9(0x372)](__dirname,_0x1f74d9(0x28b),_0x1f74d9(0x3dd)+_0x1f74d9(0x239)),path[_0x1f74d9(0x372)](_0x1705c6,'nrml-ove'+_0x1f74d9(0x239))),!fs[_0x1f74d9(0x405)+_0x1f74d9(0x225)](_0x1705c6)[_0x1f74d9(0x2e6)](_0x13cbfb=>/^fabric-api.*\.jar$/i[_0x1f74d9(0x211)](_0x13cbfb))&&(send(_0x1f74d9(0x356),_0x1f74d9(0x19b)),await installProject(_0x13aca1,_0x1f74d9(0x180)+'pi',_0x1f74d9(0x262))[_0x1f74d9(0x281)](()=>{})),!![];}function readMods(_0x1838b6){const _0x17476b=_0x5dd4ae,_0x567fd3=[];let _0x5c23d3=[];try{_0x5c23d3=fs[_0x17476b(0x405)+'ync'](_0x1838b6)['filter'](_0x414773=>/\.jar(\.disabled)?$/i['test'](_0x414773));}catch{return _0x567fd3;}for(const _0x22ccf4 of _0x5c23d3){try{const _0x14bcd3=JSON['parse'](new AdmZip(path[_0x17476b(0x372)](_0x1838b6,_0x22ccf4))[_0x17476b(0x392)+'xt'](_0x17476b(0x200)+_0x17476b(0x411)));_0x567fd3[_0x17476b(0x32a)]({'file':_0x22ccf4,'id':String(_0x14bcd3['id']||'')['toLowerC'+_0x17476b(0x33e)](),'name':_0x14bcd3['name']||_0x14bcd3['id'],'deps':Object[_0x17476b(0x3cc)](_0x14bcd3[_0x17476b(0x2d4)]||{})[_0x17476b(0x23c)](_0x16b37a=>_0x16b37a[_0x17476b(0x375)+'ase']()),'on':!_0x22ccf4['endsWith']('.disable'+'d')});}catch{}}return _0x567fd3;}const RISKY=[_0x5dd4ae(0x272)+_0x5dd4ae(0x45a),'morecull'+_0x5dd4ae(0x18c),_0x5dd4ae(0x480)+_0x5dd4ae(0x34d)];function applyStable(p){
  // Stable mode: disable every enabled copy of the risky mods (even when a duplicate
  // ".disabled" copy of the same jar already exists), remember them so they can be restored.
  const dir=pdir(p.id),modsDir=path.join(dir,'mods'),stFile=path.join(dir,'.nrml-stable.json'),saved=rd(stFile,[]);
  if(p.stable){
    for(const m of readMods(modsDir)){
      if(!m.on||!RISKY.includes(m.id))continue;
      const from=path.join(modsDir,m.file);
      try{fs.renameSync(from,from+'.disabled');}
      catch{try{fs.rmSync(from,{force:true});}catch{}}
      saved.push(m.file);
    }
    wr(stFile,[...new Set(saved)]);
  }else if(saved.length){
    for(const f of saved){
      try{
        const d=path.join(modsDir,f+'.disabled');
        if(fs.existsSync(d))fs.renameSync(d,path.join(modsDir,f));
      }catch{}
    }
    wr(stFile,[]);
  }
}
const KEEP=/^(minecraft|java|fabricloader|fabric-api|fabric-.*|mixinextras|mixin)$/;function diagnose_orig(_0xd00049,_0x287a8f){const _0x5a06c6=_0x5dd4ae,_0x54a233=pdir(_0xd00049['id']),_0x2fa2a9=path[_0x5a06c6(0x372)](_0x54a233,_0x5a06c6(0x1b7)),_0xb08949={'disabled':[],'native':![],'overlayOff':![],'incompat':![]};let _0x9deb3=_0x287a8f||'';try{const _0x57c28e=path[_0x5a06c6(0x372)](_0x54a233,_0x5a06c6(0x2c4)+_0x5a06c6(0x2a1)),_0x597153=fs[_0x5a06c6(0x405)+_0x5a06c6(0x225)](_0x57c28e)[_0x5a06c6(0x23c)](_0x27d16=>({'n':_0x27d16,'t':fs[_0x5a06c6(0x47a)](path['join'](_0x57c28e,_0x27d16))[_0x5a06c6(0x2e4)]}))[_0x5a06c6(0x3d0)]((_0x4b650b,_0x1ed258)=>_0x1ed258['t']-_0x4b650b['t'])[-0x4e*-0x27+-0x17*0x134+0xfca];if(_0x597153&&Date[_0x5a06c6(0x460)]()-_0x597153['t']<-0x1*-0x15486+-0x22*-0x4dc+0x853a*0x5)_0x9deb3+='\x0a'+fs[_0x5a06c6(0x2b9)+_0x5a06c6(0x1ad)](path['join'](_0x57c28e,_0x597153['n']),_0x5a06c6(0x3d3));}catch{}for(const _0x1c104e of[_0x54a233,path[_0x5a06c6(0x372)](ROOT,'game')]){try{for(const _0x5acaa6 of fs['readdirS'+'ync'](_0x1c104e))/^hs_err_pid.*\.log$/[_0x5a06c6(0x211)](_0x5acaa6)&&Date[_0x5a06c6(0x460)]()-fs[_0x5a06c6(0x47a)](path['join'](_0x1c104e,_0x5acaa6))[_0x5a06c6(0x2e4)]<-0xb4d*-0x6b+-0x592df+0x1cf30*0x3&&(_0xb08949[_0x5a06c6(0x2f8)]=!![],_0x9deb3+='\x0a'+fs[_0x5a06c6(0x2b9)+_0x5a06c6(0x1ad)](path[_0x5a06c6(0x372)](_0x1c104e,_0x5acaa6),_0x5a06c6(0x3d3))['slice'](-0x3*-0xcf7+-0x2320+-0x3c5,0x34e9+0xc616+-0x85cf));}catch{}}if(/Incompatible mods found/i['test'](_0x9deb3))return _0xb08949['incompat']=!![],_0xb08949;const _0x56f98a=readMods(_0x2fa2a9)[_0x5a06c6(0x1cb)](_0x51a740=>_0x51a740['on']),_0x5c151a=new Set(_0x56f98a[_0x5a06c6(0x23c)](_0x5b6952=>_0x5b6952['id'])),_0xf6f968=new Set(),_0x11f261=_0x1b3a82=>{const _0x1e5cc7=_0x5a06c6;_0x1b3a82=String(_0x1b3a82)[_0x1e5cc7(0x375)+_0x1e5cc7(0x33e)]();if(_0x5c151a[_0x1e5cc7(0x3fb)](_0x1b3a82))_0xf6f968[_0x1e5cc7(0x1bc)](_0x1b3a82);};for(const _0x1f2083 of _0x9deb3[_0x5a06c6(0x17e)](/provided by '([\w.\-]+)'/g))_0x11f261(_0x1f2083[0x9*-0xc3+0x1fc0+-0x18e4]);for(const _0x439068 of _0x9deb3[_0x5a06c6(0x17e)](/Suspected Mods?:[^\n]*\n[ \t]*[^\n]*?\(([\w.\-]+)\)/g))_0x11f261(_0x439068[0x2fd*-0x2+0x1*0x1c9+0x432]);for(const _0x43baf9 of _0x9deb3[_0x5a06c6(0x37b)]('\x0a'))if(/fail|error|exception|crash/i[_0x5a06c6(0x211)](_0x43baf9))for(const _0x716b9d of _0x43baf9[_0x5a06c6(0x17e)](/([\w\-]+)\.mixins?\.json/g)){const _0x27b2d4=_0x716b9d[-0x3e5*-0x7+-0x172a+-0x106*0x4]['toLowerC'+_0x5a06c6(0x33e)]();for(const _0x173739 of _0x5c151a)if(_0x27b2d4===_0x173739||_0x27b2d4[_0x5a06c6(0x327)+'th'](_0x173739+'-')||_0x27b2d4[_0x5a06c6(0x327)+'th'](_0x173739+'.'))_0xf6f968[_0x5a06c6(0x1bc)](_0x173739);}_0xf6f968[_0x5a06c6(0x3fb)]('nrml_ove'+_0x5a06c6(0x389))&&(_0xb08949[_0x5a06c6(0x2a8)+'ff']=!![],wr(CF,{...rd(CF,{}),'overlayMode':_0x5a06c6(0x2ca)}),_0xf6f968[_0x5a06c6(0x282)](_0x5a06c6(0x437)+_0x5a06c6(0x389)));let _0x152d32=-0x6*-0xf4+0x373*-0x1+-0x53*0x7;for(const _0x51302f of _0xf6f968){if(KEEP[_0x5a06c6(0x211)](_0x51302f)||_0x152d32>=-0x1353+0xde0+0x576)continue;if(_0x56f98a[_0x5a06c6(0x2e6)](_0x3adeda=>_0x3adeda['id']!==_0x51302f&&_0x3adeda['deps'][_0x5a06c6(0x481)](_0x51302f)))continue;const _0x104b45=_0x56f98a['find'](_0x37dba7=>_0x37dba7['id']===_0x51302f);try{fs[_0x5a06c6(0x467)+'nc'](path[_0x5a06c6(0x372)](_0x2fa2a9,_0x104b45['file']),path['join'](_0x2fa2a9,_0x104b45['file']+(_0x5a06c6(0x409)+'d'))),_0xb08949[_0x5a06c6(0x44a)][_0x5a06c6(0x32a)](_0x104b45[_0x5a06c6(0x1b5)]||_0x51302f),_0x152d32++;}catch{}}return _0xb08949;}
const NATIVE_CODES=[0xC0000005,0xC000001D,0xC00000FD,0xC0000374,0xC0000409];
function diagnose_o2(p,log,code){
  const r=diagnose_orig(p,log);
  // Windows native crash (access violation etc.) leaves no Java crash report: flag it as a driver/native crash.
  if(typeof code==='number'&&NATIVE_CODES.includes(code>>>0))r.native=true;
  return r;
}

function gpuPref(_0x2b74c9){const _0x8a56f3=_0x5dd4ae;if(process['platform']!==_0x8a56f3(0x3be)||!/\.exe$/i[_0x8a56f3(0x211)](_0x2b74c9||'')||rd(CF,{})[_0x8a56f3(0x22c)]===![])return;try{cp[_0x8a56f3(0x484)](_0x8a56f3(0x233),['add',_0x8a56f3(0x42c)+_0x8a56f3(0x2aa)+_0x8a56f3(0x27c)+_0x8a56f3(0x34a)+_0x8a56f3(0x462)+_0x8a56f3(0x35c)+'es','/v',_0x2b74c9,'/t',_0x8a56f3(0x349),'/d',_0x8a56f3(0x439)+_0x8a56f3(0x31c),'/f'],{'windowsHide':!![]},()=>{});}catch{}}const LOG=path[_0x5dd4ae(0x372)](ROOT,_0x5dd4ae(0x2d1)+_0x5dd4ae(0x269));ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x306),()=>shell[_0x5dd4ae(0x3f2)](LOG)),ipcMain[_0x5dd4ae(0x367)]('pdebug',()=>shell['openPath'](DBG)),ipcMain[_0x5dd4ae(0x367)](_0x5dd4ae(0x1d8),async(_0x22b042,_0x3b9868,_0x309b18)=>{const _0x1d3ef7=_0x5dd4ae,_0x2833b7=profiles()[_0x1d3ef7(0x20b)](_0x33e83b=>_0x33e83b['id']===_0x3b9868),_0x370577=rd(ACC,null);if(!_0x2833b7)throw new Error(_0x1d3ef7(0x396)+_0x1d3ef7(0x31e));if(!_0x370577)throw new Error('E:login');try{send('status',_0x1d3ef7(0x458));let _0x44b3f5,_0x2b1bc0;try{_0x44b3f5=await new Auth(_0x1d3ef7(0x3b6)+_0x1d3ef7(0x387))[_0x1d3ef7(0x3c7)](_0x370577[_0x1d3ef7(0x3b8)]),_0x2b1bc0=await _0x44b3f5[_0x1d3ef7(0x38d)+_0x1d3ef7(0x3f7)]();}catch{throw new Error(_0x1d3ef7(0x394)+'n');}wr(ACC,{'token':_0x44b3f5[_0x1d3ef7(0x21f)](),'name':_0x2b1bc0[_0x1d3ef7(0x39b)]['name'],'id':_0x2b1bc0[_0x1d3ef7(0x39b)]['id']}),gameUser={'id':_0x2b1bc0[_0x1d3ef7(0x39b)]['id'],'name':_0x2b1bc0[_0x1d3ef7(0x39b)][_0x1d3ef7(0x1b5)]};const _0x409a69=await ensureJava(_0x2833b7['mc']),_0x59a323={'authorization':_0x2b1bc0[_0x1d3ef7(0x336)](),'root':path[_0x1d3ef7(0x372)](ROOT,_0x1d3ef7(0x309)),'version':{'number':_0x2833b7['mc'],'type':'release'},'javaPath':_0x409a69,'memory':{'max':_0x2833b7[_0x1d3ef7(0x324)]+'M','min':(_0x2833b7['fast']?Math[_0x1d3ef7(0x456)](_0x2833b7[_0x1d3ef7(0x324)],0x17*-0x19f+0x15b*0x1a+0x359*0x3):-0x196c+0x11b*-0x2+0x2*0xfd1)+'M'},'overrides':{'gameDirectory':pdir(_0x2833b7['id'])},'customArgs':[..._0x2833b7[_0x1d3ef7(0x207)]?FAST:[],...(_0x2833b7[_0x1d3ef7(0x266)]||'')['split'](/\s+/)[_0x1d3ef7(0x1cb)](Boolean)]};let _0x5a94a1=![];if(_0x2833b7[_0x1d3ef7(0x224)]===_0x1d3ef7(0x2c8)){_0x59a323[_0x1d3ef7(0x381)]['custom']=await ensureFabric(_0x2833b7['mc']),applyStable(_0x2833b7),_0x5a94a1=await ensureMod(_0x2833b7),helperExpected=_0x5a94a1;if(_0x5a94a1)_0x59a323[_0x1d3ef7(0x3ed)+'gs'][_0x1d3ef7(0x32a)](_0x1d3ef7(0x2fe)+_0x1d3ef7(0x245)+await startUdp());}dlog(_0x1d3ef7(0x401)+_0x2833b7['name']+_0x1d3ef7(0x286)+_0x2833b7['mc']+_0x1d3ef7(0x27e)+_0x2833b7[_0x1d3ef7(0x224)]+_0x1d3ef7(0x1dd)+_0x2833b7['ram']+_0x1d3ef7(0x1e3)+!!_0x2833b7[_0x1d3ef7(0x207)]+_0x1d3ef7(0x3a8)+!!_0x2833b7['stable']+(_0x1d3ef7(0x353)+'=')+enabled()+_0x1d3ef7(0x2c3)+(_0x5a94a1?_0x1d3ef7(0x284):_0x1d3ef7(0x2ca))+_0x1d3ef7(0x2b0)+_0x409a69);if(_0x2833b7['fast'])gpuPref(_0x409a69);const _0x1f2ead=new Client(),_0x308e2c=[];_0x1f2ead['on'](_0x1d3ef7(0x2e5),_0x37639b=>send(_0x1d3ef7(0x356),_0x1d3ef7(0x47b)+_0x37639b[_0x1d3ef7(0x2a5)]+'\x20'+_0x37639b[_0x1d3ef7(0x38f)]+'/'+_0x37639b[_0x1d3ef7(0x3df)])),_0x1f2ead['on'](_0x1d3ef7(0x229),_0xdef1c4=>{const _0x2e2333=_0x1d3ef7,_0x176e3d=String(_0xdef1c4);_0x308e2c[_0x2e2333(0x32a)](_0x176e3d[_0x2e2333(0x17b)]());if(_0x308e2c[_0x2e2333(0x322)]>-0x126b+0x1cf4+-0x831)_0x308e2c[_0x2e2333(0x285)]();send(_0x2e2333(0x356),_0x2e2333(0x39f));if(/Sound engine started|OpenAL initialized/['test'](_0x176e3d))setTimeout(greet,0x1baa+-0x3*-0xa0f+0x1*-0x3013);}),_0x1f2ead['on']('close',async _0x14f7ab=>{const _0x2286da=_0x1d3ef7;stopGame();const _0x1973e1=_0x308e2c[_0x2286da(0x372)]('\x0a');try{fs[_0x2286da(0x234)+_0x2286da(0x27d)](LOG,_0x1973e1);}catch{}send(_0x2286da(0x356),''),dlog(_0x2286da(0x1b4)+_0x2286da(0x3f9)+_0x2286da(0x435)+_0x14f7ab);if(_0x14f7ab){const _0x56eea1=diagnose(_0x2833b7,_0x1973e1,_0x14f7ab);if(_0x2833b7[_0x2286da(0x224)]==='fabric'&&/feather|digitalingot/i[_0x2286da(0x211)](_0x1973e1))_0x56eea1[_0x2286da(0x44a)][_0x2286da(0x32a)](...await cleanClientMods(pdir(_0x2833b7['id']))[_0x2286da(0x281)](()=>[]));dlog(_0x2286da(0x199)+_0x2286da(0x3de)+'\x20'+JSON[_0x2286da(0x3b9)+'y'](_0x56eea1)),send('crashed',{'code':_0x14f7ab,'id':_0x2833b7['id'],'stable':!!_0x2833b7[_0x2286da(0x40d)],..._0x56eea1});}send(_0x2286da(0x1fb),{'code':_0x14f7ab}),win[_0x2286da(0x1e1)]();});const _0x5c208f=await _0x1f2ead[_0x1d3ef7(0x1d8)](_0x59a323);if(!_0x5c208f)throw new Error('E:java');_0x2833b7[_0x1d3ef7(0x25c)]=Date[_0x1d3ef7(0x460)](),wr(PF,profiles()[_0x1d3ef7(0x23c)](_0x40d3f9=>_0x40d3f9['id']===_0x2833b7['id']?_0x2833b7:_0x40d3f9)),mcPid=_0x5c208f['pid'],launchedAt=Date[_0x1d3ef7(0x460)](),welcomed=![],pauseOpen=![],openSince=-0x82*-0x3b+-0x4*0x662+-0x46e,menuOpen=![],modActive=![],cursorFree=![],seenScreens['clear'](),startWatcher();if(_0x2833b7['fast'])try{os[_0x1d3ef7(0x223)+_0x1d3ef7(0x1b8)](_0x5c208f[_0x1d3ef7(0x26b)],os[_0x1d3ef7(0x3a4)+'s'][_0x1d3ef7(0x408)][_0x1d3ef7(0x383)+_0x1d3ef7(0x333)+_0x1d3ef7(0x32d)]);}catch{}clearInterval(retry),retry=setInterval(()=>{if(!mcPid)return;if(!rpcReady&&rpcAct)presence(rpcAct);},-0x1*0x23e3+0x313*-0x32+0x10bb9);const _0x1b91db=rd(CF,{})['discordP'+_0x1d3ef7(0x17c)]!==![];presence({'details':_0x1b91db?_0x1d3ef7(0x403)+_0x2833b7[_0x1d3ef7(0x1b5)]:'Playing\x20'+'Minecraf'+'t\x20'+_0x2833b7['mc'],'state':_0x1b91db?_0x1d3ef7(0x294)+'t\x20'+_0x2833b7['mc']+_0x1d3ef7(0x3ef)+(_0x2833b7[_0x1d3ef7(0x224)]===_0x1d3ef7(0x2c8)?_0x1d3ef7(0x37d):_0x1d3ef7(0x268)):_0x1d3ef7(0x47f)+_0x1d3ef7(0x29c)+_0x1d3ef7(0x34c),'startTimestamp':Date[_0x1d3ef7(0x460)](),'largeImageKey':'nrml','largeImageText':_0x1d3ef7(0x24b)+_0x1d3ef7(0x25d)+_0x1d3ef7(0x25b)+_0x1d3ef7(0x352)+'al)','instance':![]});if(_0x309b18===_0x1d3ef7(0x2e1))win['hide']();}catch(_0xd27817){send(_0x1d3ef7(0x356),''),dlog('launch\x20f'+_0x1d3ef7(0x377)+(_0xd27817&&_0xd27817[_0x1d3ef7(0x2cc)]));throw _0xd27817;}});if(!app[_0x5dd4ae(0x250)+_0x5dd4ae(0x1f1)+_0x5dd4ae(0x32b)+'k']())app['quit']();app['on'](_0x5dd4ae(0x2ab)+_0x5dd4ae(0x1d0),()=>{const _0x2f15da=_0x5dd4ae;if(win){if(win[_0x2f15da(0x290)+'zed']())win[_0x2f15da(0x314)]();win[_0x2f15da(0x1e1)](),win[_0x2f15da(0x275)]();}}),app[_0x5dd4ae(0x3cd)+'y']()[_0x5dd4ae(0x259)](()=>{const _0xd1528d=_0x5dd4ae;win=new BrowserWindow({'width':0x49c,'height':0x2f8,'minWidth':0x384,'minHeight':0x258,'show':![],'backgroundColor':_0xd1528d(0x197),'title':_0xd1528d(0x24b)+'ncher','icon':path[_0xd1528d(0x372)](__dirname,'icon.ico'),'titleBarStyle':_0xd1528d(0x280),'titleBarOverlay':{'color':_0xd1528d(0x197),'symbolColor':_0xd1528d(0x46f),'height':0x30},'webPreferences':{'preload':path['join'](__dirname,_0xd1528d(0x331)+'js'),'contextIsolation':!![]}}),win[_0xd1528d(0x1bb)+'nu'](),win[_0xd1528d(0x357)](_0xd1528d(0x29a)+'ml'),win[_0xd1528d(0x3b1)]('ready-to'+_0xd1528d(0x430),()=>{const _0xdabf46=_0xd1528d;win[_0xdabf46(0x288)](),win[_0xdabf46(0x1e1)]();});}),app['on'](_0x5dd4ae(0x416)+_0x5dd4ae(0x479),()=>{const _0x32735a=_0x5dd4ae;try{stopGame(),rpc&&rpc[_0x32735a(0x3ff)]()[_0x32735a(0x281)](()=>{});}catch{}}),app['on'](_0x5dd4ae(0x254)+_0x5dd4ae(0x30a)+'d',()=>app['quit']());
// --- NRML 1.9: resource saving ---
function __nrmlPrio(level){
  // lower the launcher (all its processes) while the game runs, restore afterwards
  try{
    const pr=os.constants.priority[level];
    for(const m of app.getAppMetrics())try{os.setPriority(m.pid,pr);}catch{}
  }catch{}
}
try{
  for(const sw of['disable-background-networking','disable-component-update','disable-breakpad','no-pings','disable-domain-reliability'])app.commandLine.appendSwitch(sw);
  app.commandLine.appendSwitch('js-flags','--max-lazy');
}catch{}

// --- NRML Client 2.0: profile sanitizer + hardening ---
function __cleanProfile(p){
  if(!p||typeof p!=='object'||!/^[A-Za-z0-9_-]{1,64}$/.test(String(p.id)))return null;
  const bad=/^(-javaagent|-agentpath|-agentlib|-Xrun|-Xbootclasspath|-XX:OnError|-XX:OnOutOfMemoryError|-XX:Flags|-XX:VMOptionsFile|-XX:\+?UnlockDiagnosticVMOptions|-XX:\+?ExtensiveErrorReports|@|--patch-module|--upgrade-module-path)/i;
  const r={
    ...p,
    id:String(p.id),
    name:String(p.name==null?'':p.name).replace(/[\u0000-\u001f\u007f<>]/g,'').trim().slice(0,64)||'Profile',
    mc:/^[0-9A-Za-z._+-]{1,32}$/.test(String(p.mc))?String(p.mc):'',
    loader:['fabric','vanilla','other'].includes(p.loader)?p.loader:'vanilla',
    ram:Math.min(32768,Math.max(512,Math.round(Number(p.ram))||4096)),
    fast:!!p.fast,
    stable:!!p.stable,
    jvm:String(p.jvm||'').split(/\s+/).filter(t=>t&&!bad.test(t)).join(' ').slice(0,1000)
  };
  if(p.last!=null)r.last=Number(p.last)||0;else delete r.last;
  return r;
}
process.on('uncaughtException',e=>{try{dlog('uncaught: '+(e&&e.message));}catch{}});
process.on('unhandledRejection',e=>{try{dlog('unhandled: '+((e&&e.message)||e));}catch{}});
app.on('web-contents-created',(_e,wc)=>{
  // lock down only our own (file://) windows; the Microsoft sign-in window must stay free to navigate
  const own=()=>{try{return String(wc.getURL()).startsWith('file:');}catch{return false;}};
  wc.setWindowOpenHandler(()=>own()?{action:'deny'}:{action:'allow'});
  wc.on('will-navigate',ev=>{if(own())ev.preventDefault();});
  wc.on('will-attach-webview',ev=>ev.preventDefault());
  wc.on('devtools-opened',()=>{try{wc.closeDevTools();}catch{}});
  wc.on('before-input-event',(ev,i)=>{
    if(i.type!=='keyDown')return;
    const k=String(i.key||'').toLowerCase();
    if(k==='f12'||(i.control&&i.shift&&['i','j','c'].includes(k))||(i.control&&k==='u')||(i.meta&&i.alt&&['i','j','c'].includes(k)))ev.preventDefault();
  });
});
app.whenReady().then(()=>{
  try{
    const ses=require('electron').session.defaultSession;
    ses.setPermissionRequestHandler((wc,_p,cb)=>{let o=false;try{o=String(wc.getURL()).startsWith('file:');}catch{}cb(!o);});
    ses.setPermissionCheckHandler((wc)=>{let o=false;try{o=!!wc&&String(wc.getURL()).startsWith('file:');}catch{}return !o;});
  }catch{}
  try{if(win&&!win.isDestroyed())win.setTitle('NRML Client');}catch{}
});
try{const _c=rd(CF,{});if(_c.discordProfile===undefined)wr(CF,{..._c,discordProfile:false});}catch{}

// --- NRML Client 2.0.1: file metadata, detail view, system info, world backup ---
function __halfRam(){const mb=Math.floor(os.totalmem()/1048576);return Math.max(2048,Math.min(30720,Math.round(mb/2/256)*256));}
const __MC={file:path.join(ROOT,'meta-cache.json'),mem:null};
function __mcLoad(){if(!__MC.mem){const m=rd(__MC.file,{});__MC.mem=m&&typeof m==='object'&&!Array.isArray(m)?m:{};}return __MC.mem;}
function __mcSave(){try{const m=__mcLoad(),k=Object.keys(m);if(k.length>3000)k.sort((a,b)=>(m[a].t||0)-(m[b].t||0)).slice(0,k.length-2000).forEach(x=>delete m[x]);wr(__MC.file,m);}catch{}}
const __SHA=new Map();
function __sha1(full){
  const st=fs.statSync(full),k=full+'|'+st.size+'|'+st.mtimeMs;
  if(__SHA.has(k))return Promise.resolve(__SHA.get(k));
  return new Promise((res,rej)=>{const hs=require('crypto').createHash('sha1');fs.createReadStream(full).on('data',d=>hs.update(d)).on('end',()=>{const h=hs.digest('hex');__SHA.set(k,h);res(h);}).on('error',rej);});
}
const __cap=(v,n)=>String(v==null?'':v).replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,n);
function __img(b){if(!b||!b.length||b.length>131072)return null;if(b[0]===0x89&&b[1]===0x50)return'data:image/png;base64,'+b.toString('base64');if(b[0]===0xff&&b[1]===0xd8)return'data:image/jpeg;base64,'+b.toString('base64');return null;}
function __txt(c){if(c==null)return'';if(typeof c==='string')return c;if(Array.isArray(c))return c.map(__txt).join('');if(typeof c==='object')return __txt(c.text)+__txt(c.extra);return String(c);}
const __LOC=new Map();
function __local(full,folder,file){
  const st=fs.statSync(full),key=full+'|'+st.size+'|'+st.mtimeMs;
  if(__LOC.has(key))return __LOC.get(key);
  const base=file.replace(/\.disabled$/i,'');
  const m={title:base.replace(/\.(jar|zip)$/i,''),version:'',description:'',authors:[],license:'',icon:null};
  if(st.isFile()&&st.size<=157286400){
    try{
      const z=new AdmZip(full);
      if(folder==='mods'){
        const e=z.getEntry('fabric.mod.json');
        if(e){
          const j=JSON.parse(e.getData().toString('utf8').replace(/^﻿/,''));
          m.title=__cap(j.name||j.id||m.title,120);m.version=__cap(j.version,60);m.description=__cap(j.description,1000);
          m.authors=(Array.isArray(j.authors)?j.authors:[]).map(a=>__cap(typeof a==='string'?a:a&&a.name,60)).filter(Boolean).slice(0,10);
          m.license=__cap(Array.isArray(j.license)?j.license.join(', '):j.license,80);
          let ip=j.icon;
          if(ip&&typeof ip==='object'){const ks=Object.keys(ip).map(Number).filter(Number.isFinite).sort((a,b)=>a-b);const pick=ks.find(k=>k>=64)||ks[ks.length-1];ip=ip[pick];}
          if(typeof ip==='string'){const ie=z.getEntry(ip.replace(/^\/+/,''));if(ie)m.icon=__img(ie.getData());}
        }
      }else{
        const pm=z.getEntry('pack.mcmeta');
        if(pm){try{const j=JSON.parse(pm.getData().toString('utf8').replace(/^﻿/,''));m.description=__cap(__txt(j.pack&&j.pack.description).replace(/§./g,''),600);}catch{}}
        const pi=z.getEntry('pack.png');if(pi)m.icon=__img(pi.getData());
      }
    }catch{}
  }
  if(__LOC.size>600)__LOC.clear();
  __LOC.set(key,m);return m;
}
function __projInfo(p,v){
  const slug=/^[\w!@$()`.+,"'-]{1,64}$/.test(String(p.slug))?String(p.slug):'';
  const ic=typeof p.icon_url==='string'&&p.icon_url.startsWith('https://cdn.modrinth.com/')?p.icon_url.slice(0,300):null;
  const type=['mod','shader','resourcepack','modpack'].includes(p.project_type)?p.project_type:'mod';
  return{project_id:__cap(p.id,16),slug,title:__cap(p.title,120),description:__cap(p.description,600),icon_url:ic,type,
    version_number:__cap(v&&v.version_number,60),license:__cap(p.license&&(p.license.name||p.license.id),80),downloads:Number(p.downloads)||0,
    categories:(Array.isArray(p.categories)?p.categories:[]).slice(0,6).map(c=>__cap(c,24))};
}
async function __mrGet(p){const r=await fetch('https://api.modrinth.com/v2'+p,{headers:UA,signal:AbortSignal.timeout(15000)});if(!r.ok)throw new Error('E:modrinth');return r.json();}
async function __mrPost(p,body){const r=await fetch('https://api.modrinth.com/v2'+p,{method:'POST',headers:{...UA,'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(15000)});if(!r.ok)throw new Error('E:modrinth');return r.json();}
async function __lookup(hashes){
  const cache=__mcLoad(),now=Date.now(),need=[...new Set(hashes)].filter(h=>!cache[h]||now-cache[h].t>864e5);
  if(!need.length)return;
  const vs=await __mrPost('/version_files',{hashes:need,algorithm:'sha1'});
  const pids=[...new Set(Object.values(vs||{}).map(v=>v&&v.project_id).filter(x=>typeof x==='string'&&/^\w{1,16}$/.test(x)))];
  const projs={};
  for(let i=0;i<pids.length;i+=80){const ps=await __mrGet('/projects?ids='+encodeURIComponent(JSON.stringify(pids.slice(i,i+80))));for(const p of ps)projs[p.id]=p;}
  for(const h of need){const v=vs&&vs[h],p=v&&projs[v.project_id];cache[h]=p?{t:now,mr:__projInfo(p,v)}:{t:now,mr:null};}
  __mcSave();
}
const __isPack=f=>/\.(jar|zip)(\.disabled)?$/i.test(f);
ipcMain.handle('finfo',async(_e,id,folder)=>{
  const dir=path.join(pdir(id),folder);let files=[];
  try{files=fs.readdirSync(dir).filter(f=>!f.startsWith('.'));}catch{}
  const out=[];
  for(const f of files){
    try{
      const full=safe(dir,f),st=fs.statSync(full),m=__isPack(f)||st.isDirectory()?__local(full,folder,f):{title:f,version:'',description:'',authors:[],license:'',icon:null};
      out.push({file:f,on:!/\.disabled$/i.test(f),title:m.title,version:m.version,description:m.description,authors:m.authors,license:m.license,icon:m.icon&&m.icon.length<32768?m.icon:null,size:st.isFile()?st.size:0});
    }catch{}
    await new Promise(r=>setImmediate(r));
  }
  return out;
});
ipcMain.handle('fmeta',async(_e,id,folder)=>{
  const dir=path.join(pdir(id),folder);let files=[];
  try{files=fs.readdirSync(dir).filter(f=>!f.startsWith('.')&&__isPack(f));}catch{}
  const by={};
  for(const f of files){try{by[f]=await __sha1(path.join(dir,f));}catch{}}
  try{await __lookup(Object.values(by));}catch{}
  const cache=__mcLoad(),out={};
  for(const f in by){const c=cache[by[f]];if(c&&c.mr)out[f.replace(/\.disabled$/i,'')]=c.mr;}
  return out;
});
ipcMain.handle('fdetail',async(_e,id,folder,file)=>{
  const full=safe(path.join(pdir(id),folder),file),st=fs.statSync(full),local=__local(full,folder,file);
  let mr=null,team=[];
  if(st.isFile()&&__isPack(file)){
    try{const h=await __sha1(full);await __lookup([h]);const c=__mcLoad()[h];mr=c&&c.mr||null;}catch{}
    if(mr&&/^\w{1,16}$/.test(mr.project_id)){
      try{const ms=await __mrGet('/project/'+mr.project_id+'/members');team=(Array.isArray(ms)?ms:[]).slice(0,8).map(x=>({name:__cap(x&&x.user&&x.user.username,40),role:__cap(x&&x.role,30)})).filter(x=>x.name);}catch{}
    }
  }
  return{file,path:full,size:st.isFile()?st.size:0,mtime:st.mtimeMs,on:!/\.disabled$/i.test(file),local,mr,team,
    url:mr&&mr.slug?'https://modrinth.com/'+mr.type+'/'+mr.slug:null};
});
ipcMain.handle('freveal',(_e,id,folder,file)=>{shell.showItemInFolder(safe(path.join(pdir(id),folder),file));});
ipcMain.handle('sysinfo',()=>({totalMB:Math.floor(os.totalmem()/1048576),freeMB:Math.floor(os.freemem()/1048576),recommendedMB:__halfRam()}));
ipcMain.handle('pbackup',async(_e,id)=>{
  const src=path.join(pdir(id),'saves');
  if(!fs.existsSync(src))return null;
  const d=new Date(),p=n=>String(n).padStart(2,'0');
  const name='saves-backup-'+d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+'-'+p(d.getHours())+p(d.getMinutes())+p(d.getSeconds());
  send('status','S:copy|saves');
  try{await fs.promises.cp(src,path.join(pdir(id),name),{recursive:true});}finally{send('status','');}
  return name;
});
// --- NRML Client 2.0.1: faster game start (cached Java/Fabric lookups, no network when already known) ---
const __LCF=path.join(ROOT,'launch-cache.json');
function __lc(){const c=rd(__LCF,{});return c&&typeof c==='object'&&!Array.isArray(c)?c:{};}
async function javaMajor(mc){
  const k=String(mc),c=__lc();
  if(c.java&&Number.isInteger(c.java[k]))return c.java[k];
  const r=await javaMajor_orig(mc);
  try{if(MANIFEST&&MANIFEST.some(v=>v.id===k)){c.java=c.java||{};c.java[k]=r;wr(__LCF,c);}}catch{}
  return r;
}
async function ensureFabric(mc){
  const k=String(mc),c=__lc(),f=c.fabric&&c.fabric[k];
  const ok=f&&/^[\w.\-+]{1,60}$/.test(String(f.id))&&fs.existsSync(path.join(ROOT,'game','versions',f.id,f.id+'.json'));
  if(ok&&Date.now()-f.t<432e5)return f.id;
  try{const id=await ensureFabric_orig(mc);c.fabric=c.fabric||{};c.fabric[k]={id,t:Date.now()};wr(__LCF,c);return id;}
  catch(e){if(ok)return f.id;throw e;}
}

// ===== 2.0.1 FPS booster: while Minecraft runs, give it CPU priority and make the launcher nearly free =====
(function(){
  let boosted=0;
  const PR=os.constants.priority;
  const tick=()=>{
    try{
      const on=!!mcPid;
      if(on&&boosted!==mcPid){
        boosted=mcPid;
        try{os.setPriority(mcPid,PR.PRIORITY_HIGH);}catch{}
        try{os.setPriority(process.pid,PR.PRIORITY_BELOW_NORMAL);}catch{}
        try{if(win&&!win.isDestroyed()){win.webContents.setBackgroundThrottling(true);win.webContents.setFrameRate(10);}}catch{}
      }else if(!on&&boosted){
        boosted=0;
        try{os.setPriority(process.pid,PR.PRIORITY_NORMAL);}catch{}
        try{if(win&&!win.isDestroyed())win.webContents.setFrameRate(60);}catch{}
      }
    }catch{}
  };
  const iv=setInterval(tick,2500);if(iv.unref)iv.unref();
})();

// ===== 2.0.3 identity: taskbar shows "NRML Client", not "Electron" =====
try{if(process.platform==='win32')app.setAppUserModelId('com.nermal.nrmlclient');}catch{}

// ===== 2.0.4 GPU stability: the launcher UI is simple, so render it on the CPU. This removes GPU-driver crashes/freezes
// and leaves the whole GPU to Minecraft. Set "launcherGpu": true in config.json to turn hardware acceleration back on.
try{
  if(rd(CF,{}).launcherGpu!==true){app.disableHardwareAcceleration();app.commandLine.appendSwitch('disable-gpu-compositing');}
}catch{}
try{
  let __rl=0;
  const __reload=()=>{const n=Date.now();if(n-__rl<5000)return;__rl=n;try{if(win&&!win.isDestroyed())win.webContents.reload();}catch{}};
  app.on('render-process-gone',()=>setTimeout(__reload,300));
  app.on('child-process-gone',(_e,d)=>{if(d&&d.type==='GPU')setTimeout(__reload,600);});
  let __ur=null;
  app.on('browser-window-created',(_e,w)=>{
    w.on('unresponsive',()=>{clearTimeout(__ur);__ur=setTimeout(()=>{try{if(!w.isDestroyed())w.webContents.reload();}catch{}},8000);});
    w.on('responsive',()=>clearTimeout(__ur));
  });
}catch{}

// ===== 2.0.5 smarter crash diagnosis: a mod that calls a method another mod no longer has (NoSuchMethodError etc.) =====
function diagnose(p,log,code){
  const r=diagnose_o2(p,log,code);
  // 2.1.7: a native crash right after loading the NRML menu theme pack -> strip the font first, then the whole theme
  try{
    const zf=path.join(pdir(p.id),'resourcepacks','NRML Menu Theme.zip'),lg=String(log||'');
    if(fs.existsSync(zf)&&/NRML Menu Theme\.zip/.test(lg)&&!/(Crash Report|Exception in thread|java\.lang\.\w+(Error|Exception))/.test(lg)){
      const z=new AdmZip(zf),fe=z.getEntries().filter(e=>/^assets\/minecraft\/(font|lang)\//.test(e.entryName));
      const tf=path.join(pdir(p.id),'.nrml-theme.json'),td=rd(tf,{});
      r.disabled=r.disabled||[];
      if(fe.length){fe.forEach(e=>z.deleteFile(e.entryName));z.writeZip(zf);td.font=false;wr(tf,td);r.disabled.push('Menu theme font');dlog('theme font removed after crash');return r;}
      fs.rmSync(zf,{force:true});td.on=false;wr(tf,td);
      try{__thOpts(pdir(p.id),{},false);}catch{}
      r.disabled.push('Menu theme');dlog('menu theme removed after crash');return r;
    }
  }catch{}
  try{
    if(r.native||r.incompat||(r.disabled&&r.disabled.length))return r;
    let txt=String(log||'');
    try{
      const cd=path.join(pdir(p.id),'crash-reports');
      const nf=fs.readdirSync(cd).map(n=>({n,t:fs.statSync(path.join(cd,n)).mtimeMs})).sort((a,b)=>b.t-a.t)[0];
      if(nf&&Date.now()-nf.t<120000)txt+='\n'+fs.readFileSync(path.join(cd,nf.n),'utf8');
    }catch{}
    if(!/(NoSuchMethodError|NoSuchFieldError|NoClassDefFoundError|AbstractMethodError|IncompatibleClassChangeError|ClassNotFoundException)/.test(txt))return r;
    const mdir=path.join(pdir(p.id),'mods');
    const mods=readMods(mdir).filter(m=>m.on&&m.id&&!/^(minecraft|java|fabricloader|fabric-.*|fabric|mixinextras)$/.test(m.id));
    const norm=s=>String(s).toLowerCase().replace(/[^a-z0-9]/g,'');
    const frames=[...txt.matchAll(/at (?:knot\/\/)?([A-Za-z0-9_.$]+)\(/g)].map(m=>m[1]).filter(f=>!/^(net\.minecraft|net\.fabricmc|java\.|jdk\.|sun\.|com\.mojang|org\.lwjgl|org\.spongepowered|com\.llamalad7)/.test(f));
    const hit=new Map();
    for(const f of frames.slice(0,12)){
      const pk=norm(f);
      for(const m of mods){
        const id=norm(m.id);
        if(id.length>=4&&pk.includes(id)){hit.set(m.file,m);break;}
      }
      if(hit.size)break;
    }
    for(const m of hit.values()){
      const from=path.join(mdir,m.file);
      try{fs.renameSync(from,from+'.disabled');r.disabled=r.disabled||[];r.disabled.push(m.name||m.id);}catch{}
    }
    if(hit.size)dlog('auto-disabled incompatible mod(s): '+[...hit.values()].map(m=>m.file).join(', '));
  }catch{}
  return r;
}

// ===== 2.0.6 mod update check (names of mods that have a newer version for this profile) =====
const __UPC={};
ipcMain.handle('mods:check',async(_e,id)=>{
  const p=profiles().find(x=>x.id===id);
  if(!p||p.loader!=='fabric')return{names:[]};
  const c=__UPC[id];if(c&&Date.now()-c.t<600000)return{names:c.names};
  const dir=path.join(pdir(id),'mods');let files=[];
  try{files=fs.readdirSync(dir).filter(f=>/\.jar$/i.test(f)&&!/^nrml-overlay/i.test(f));}catch{}
  if(!files.length)return{names:[]};
  const by={};
  for(const f of files){try{by[f]=await __sha1(path.join(dir,f));}catch{}}
  const hashes=[...new Set(Object.values(by))];if(!hashes.length)return{names:[]};
  const names=[];
  try{
    const up=await __mrPost('/version_files/update',{hashes,algorithm:'sha1',loaders:['fabric'],game_versions:[p.mc]});
    const pids=new Set(),stale=[];
    for(const h of hashes){
      const v=up&&up[h];if(!v||!Array.isArray(v.files))continue;
      const f=v.files.find(x=>x.primary)||v.files[0];
      if(f&&f.hashes&&f.hashes.sha1&&f.hashes.sha1!==h&&/^\w{1,16}$/.test(String(v.project_id))){stale.push(v.project_id);pids.add(v.project_id);}
    }
    if(pids.size){
      const pr=await __mrGet('/projects?ids='+encodeURIComponent(JSON.stringify([...pids])));
      for(const x of pr||[])names.push(__cap(x.title,60));
    }
  }catch{}
  __UPC[id]={t:Date.now(),names};
  return{names};
});


// ===== 2.1.0 main menu theme: generated resource pack (panorama) + options.txt (blur, scroll speed) =====
const __THSKIP=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a0\u00a1\u00a2\u00a3\u00a4\u00a5\u00a6\u00a7\u00a8\u00a9\u00aa\u00ab\u00ac\u00ad\u00ae\u00af\u00b0\u00b1\u00b2\u00b3\u00b4\u00b5\u00b6\u00b7\u00b8\u00b9\u00ba\u00bb\u00bc\u00bd\u00be\u00bf\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00c6\u00c7\u00c8\u00c9\u00ca\u00cb\u00cc\u00cd\u00ce\u00cf\u00d0\u00d1\u00d2\u00d3\u00d4\u00d5\u00d6\u00d7\u00d8\u00d9\u00da\u00db\u00dc\u00dd\u00de\u00df\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e6\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f7\u00f8\u00f9\u00fa\u00fb\u00fc\u00fd\u00fe\u00ff\u0100\u0101\u0102\u0103\u0104\u0105\u0106\u0107\u010a\u010b\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u0118\u0119\u011a\u011b\u011e\u011f\u0120\u0121\u0122\u0123\u0128\u0129\u012a\u012b\u012c\u012d\u012e\u012f\u0130\u0131\u0136\u0137\u0139\u013a\u013b\u013c\u013d\u013e\u013f\u0140\u0141\u0142\u0143\u0144\u0145\u0146\u0147\u0148\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0155\u0156\u0157\u0158\u0159\u015a\u015b\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\u0179\u017a\u017b\u017c\u017d\u017e\u018f\u0192\u01fc\u01fd\u0218\u0219\u021a\u021b\u0259\u02bc\u02c6\u02c7\u02c9\u02d8\u02d9\u02da\u02db\u02dc\u02dd\u03c0\u0901\u0902\u0903\u0905\u0906\u0907\u0908\u0909\u090a\u090b\u090c\u090d\u090f\u0910\u0911\u0913\u0914\u0915\u0916\u0917\u0918\u0919\u091a\u091b\u091c\u091d\u091e\u091f\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u092a\u092b\u092c\u092d\u092e\u092f\u0930\u0931\u0932\u0933\u0935\u0936\u0937\u0938\u0939\u093c\u093d\u093e\u093f\u0940\u0941\u0942\u0943\u0944\u0945\u0947\u0948\u0949\u094b\u094c\u094d\u0950\u0958\u0959\u095a\u095b\u095c\u095d\u095e\u0960\u0961\u0962\u0963\u0964\u0965\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0970\u0972\u1e80\u1e81\u1e82\u1e83\u1e84\u1e85\u1ebc\u1ebd\u1ef2\u1ef3\u1ef8\u1ef9\u200c\u200d\u2013\u2014\u2018\u2019\u201a\u201c\u201d\u201e\u2020\u2021\u2022\u2026\u2030\u2039\u203a\u2044\u20a8\u20ac\u20b9\u20ba\u20bd\u2113\u2122\u2126\u212e\u2202\u2206\u220f\u2211\u2212\u2215\u2219\u221a\u221e\u222b\u2248\u2260\u2264\u2265\u25ca\u25cc\ufb01\ufb02";
const __THP='NRML Menu Theme.zip',__THF=id=>path.join(pdir(id),'.nrml-theme.json');
const __THD={on:false,preset:'sunset',blur:5,speed:1,bright:90,zoom:1.2,custom:false,prev:null,btn:true,anim:false,logo:false,splash:true,font:true,static:true,ver:3,accent:'#ff5a1f'};
function __thBuf(u,max){
  if(typeof u!=='string'||!/^data:image\/png;base64,/.test(u))throw new Error('E:arg');
  const b=Buffer.from(u.slice(u.indexOf(',')+1),'base64');
  if(b.length<64||b.length>max||b[0]!==0x89||b[1]!==0x50)throw new Error('E:arg');
  return b;
}
function __thOpts(dir,map,packOn){
  const f=path.join(dir,'options.txt');let lines=[];
  try{lines=fs.readFileSync(f,'utf8').split(/\r?\n/);if(!fs.existsSync(f+'.nrml-bak'))fs.copyFileSync(f,f+'.nrml-bak');}catch{}
  const set=(k,v)=>{const i=lines.findIndex(l=>l.startsWith(k+':'));if(i>=0)lines[i]=k+':'+v;else lines.push(k+':'+v);};
  for(const k of Object.keys(map))set(k,map[k]);
  let packs=['vanilla'];
  const pi=lines.findIndex(l=>l.startsWith('resourcePacks:'));
  if(pi>=0){try{const a=JSON.parse(lines[pi].slice(14));if(Array.isArray(a))packs=a.filter(x=>typeof x==='string');}catch{}}
  packs=packs.filter(x=>x!=='file/'+__THP);
  if(packOn)packs.push('file/'+__THP);
  set('resourcePacks',JSON.stringify(packs));
  lines=lines.filter((l,i)=>l!==''||i===lines.length-1);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(f,lines.join('\n').replace(/\n*$/,'\n'));
}
ipcMain.handle('theme:get',(_e,id)=>{
  const d=rd(__THF(id),{});
  const o={...__THD,...(d&&typeof d==='object'?d:{})};
  if(!d||!d.ver||d.ver<2){o.logo=false;o.static=true;}
  if(!d||!d.ver||d.ver<3)o.font=true;
  return o;
});
ipcMain.handle('theme:pick',async()=>{
  const r=await require('electron').dialog.showOpenDialog(win,{properties:['openFile'],filters:[{name:'Images',extensions:['png','jpg','jpeg','webp']}]});
  if(r.canceled||!r.filePaths[0])return null;
  const f=r.filePaths[0],st=fs.statSync(f);
  if(st.size>12*1048576)throw new Error('E:big');
  const b=fs.readFileSync(f);let mime=null;
  if(b[0]===0x89&&b[1]===0x50)mime='png';else if(b[0]===0xff&&b[1]===0xd8)mime='jpeg';else if(b.slice(0,4).toString()==='RIFF'&&b.slice(8,12).toString()==='WEBP')mime='webp';
  if(!mime)throw new Error('E:arg');
  return'data:image/'+mime+';base64,'+b.toString('base64');
});
ipcMain.handle('theme:save',async(_e,o)=>{
  const dir=pdir(o.id),rp=path.join(dir,'resourcepacks'),zf=path.join(rp,__THP);
  const blur=Math.max(0,Math.min(10,Math.round(+o.blur)||0)),speed=Math.max(0,Math.min(2,Math.round((+o.speed)*10)/10||0));
  if(o.on){
    if(!Array.isArray(o.faces)||o.faces.length!==6)throw new Error('E:arg');
    const AZ=new AdmZip();
    AZ.addFile('nrml-theme.txt',Buffer.from('v2'));
    AZ.addFile('pack.mcmeta',Buffer.from(JSON.stringify({pack:{pack_format:34,description:'NRML Client menu theme',supported_formats:{min_inclusive:1,max_inclusive:9999},min_format:1,max_format:9999}})));
    o.faces.forEach((u,i)=>AZ.addFile('assets/minecraft/textures/gui/title/background/panorama_'+i+'.png',__thBuf(u,2500000)));
    const SP='assets/minecraft/textures/gui/sprites/widget/',UI=o.ui&&typeof o.ui==='object'?o.ui:{};
    const SC={type:'nine_slice',width:200,height:20,border:6};
    if(o.btn&&UI.button&&UI.buttonH&&UI.buttonD){
      for(const [k,n] of [['button','button'],['buttonH','button_highlighted'],['buttonD','button_disabled']]){
        AZ.addFile(SP+n+'.png',__thBuf(UI[k],1800000));
        const mc={gui:{scaling:SC}};
        if(k==='buttonH'&&o.anim)mc.animation={width:200,height:20,frametime:2,interpolate:false};
        AZ.addFile(SP+n+'.png.mcmeta',Buffer.from(JSON.stringify(mc)));
      }
    }
    if(o.logo&&UI.logo&&UI.edition){
      const BL=Buffer.from(JSON.stringify({texture:{blur:true}}));
      AZ.addFile('assets/minecraft/textures/gui/title/minecraft.png',__thBuf(UI.logo,400000));AZ.addFile('assets/minecraft/textures/gui/title/minecraft.png.mcmeta',BL);
      AZ.addFile('assets/minecraft/textures/gui/title/edition.png',__thBuf(UI.edition,150000));AZ.addFile('assets/minecraft/textures/gui/title/edition.png.mcmeta',BL);
    }
    if(o.static&&UI.bg)AZ.addFile('assets/minecraft/textures/gui/title/background/panorama_overlay.png',__thBuf(UI.bg,9000000));
    if(o.splash)AZ.addFile('assets/minecraft/texts/splashes.txt',Buffer.from('Play Minecraft with NRML Client!\nMade by Nermal!\n'));
    if(o.font){
      try{
        // The font only contains private-use codepoints (U+E000 + char). Only the button labels below are written with them,
        // so chat, signs and server text keep the vanilla font.
        const pua=s=>[...s].map(ch=>{const c=ch.codePointAt(0);return c>=0x20&&c<=0x17f?String.fromCodePoint(0xE000+c):c===0x2026?'\uE200':ch;}).join('');
        const L={
          en_us:{'menu.singleplayer':'Singleplayer','menu.multiplayer':'Multiplayer','menu.online':'Minecraft Realms','menu.options':'Options...','menu.quit':'Quit Game','menu.returnToGame':'Back to Game','menu.disconnect':'Disconnect','menu.returnToMenu':'Save and Quit to Title'},
          hu_hu:{'menu.singleplayer':'Egyjátékos mód','menu.multiplayer':'Többjátékos mód','menu.online':'Minecraft Realms','menu.options':'Beállítások...','menu.quit':'Kilépés a játékból','menu.returnToGame':'Vissza a játékhoz','menu.disconnect':'Kilépés','menu.returnToMenu':'Mentés és kilépés a címképernyőre'}};
        const ff=fs.readFileSync(path.join(__dirname,'bundled','nrml-font.ttf'));
        AZ.addFile('assets/minecraft/font/nrml.ttf',ff);
        AZ.addFile('assets/minecraft/font/default.json',Buffer.from(JSON.stringify({providers:[{type:'ttf',file:'minecraft:nrml.ttf',size:9.0,oversample:6.0,shift:[0.0,1.0],skip:[__THSKIP]}]})));
        for(const lg of Object.keys(L)){const o2={};for(const k of Object.keys(L[lg]))o2[k]=pua(L[lg][k]);AZ.addFile('assets/minecraft/lang/'+lg+'.json',Buffer.from(JSON.stringify(o2)));}
      }catch{}
    }
    fs.mkdirSync(rp,{recursive:true});
    const tmp=zf+'.tmp';AZ.writeZip(tmp);fs.renameSync(tmp,zf);
    __thOpts(dir,{menuBackgroundBlurriness:blur,panoramaScrollSpeed:(o.static?0:speed).toFixed(1)},true);
  }else{
    try{fs.rmSync(zf,{force:true});}catch{}
    __thOpts(dir,{menuBackgroundBlurriness:5,panoramaScrollSpeed:'1.0'},false);
  }
  let prev=null;
  if(typeof o.prev==='string'&&/^data:image\/jpeg;base64,/.test(o.prev)&&o.prev.length<200000)prev=o.prev;
  wr(__THF(o.id),{on:!!o.on,preset:String(o.preset||'ember').slice(0,20),blur,speed,bright:Math.max(30,Math.min(130,Math.round(+o.bright)||90)),zoom:Math.max(1,Math.min(3,+o.zoom||1)),custom:!!o.custom,prev,btn:!!o.btn,anim:!!o.anim,logo:!!o.logo,splash:!!o.splash,font:!!o.font,static:o.static!==false,ver:3,accent:/^#[0-9a-fA-F]{6}$/.test(o.accent||'')?o.accent:'#ff5a1f'});
  return true;
});

// 2.1.7 migration: theme packs written by 2.1.6 (font without marker) crashed some systems -> strip their font once
setTimeout(()=>{try{
  for(const p of profiles()){
    const zf=path.join(pdir(p.id),'resourcepacks',__THP);if(!fs.existsSync(zf))continue;
    const z=new AdmZip(zf);if(z.getEntry('nrml-theme.txt'))continue;
    const fe=z.getEntries().filter(e=>/^assets\/minecraft\/(font|lang)\//.test(e.entryName));
    if(fe.length){fe.forEach(e=>z.deleteFile(e.entryName));z.addFile('nrml-theme.txt',Buffer.from('v2s'));z.writeZip(zf);const tf=__THF(p.id),td=rd(tf,{});td.font=false;wr(tf,td);}
  }
}catch{}},2500);


// ===== 2.2.0 self-updater: signed app-only updates from GitHub Releases =====
const __UPD={st:{status:'idle',cur:'',latest:null,notes:{},pct:0,err:'',configured:false},man:null,busy:false};
function __uCfg(){
  try{
    const c=JSON.parse(fs.readFileSync(path.join(__dirname,'update-config.json'),'utf8'));
    if(typeof c.repo==='string'&&/^[\w.-]+\/[\w.-]+$/.test(c.repo)&&c.repo!=='OWNER/REPO'&&typeof c.publicKey==='string')return c;
  }catch{}
  return null;
}
function __uVer(){try{return JSON.parse(fs.readFileSync(path.join(__dirname,'package.json'),'utf8')).version;}catch{return'0.0.0';}}
function __uNewer(a,b){const A=String(a).split('.').map(x=>parseInt(x,10)||0),B=String(b).split('.').map(x=>parseInt(x,10)||0);for(let i=0;i<3;i++){if((A[i]||0)!==(B[i]||0))return(A[i]||0)>(B[i]||0);}return false;}
function __uGet(url,max,onPct,redir){
  redir=redir||0;
  return new Promise((res,rej)=>{
    let u;try{u=new URL(url);}catch{return rej(new Error('url'));}
    if(u.protocol!=='https:'||!/^(raw\.githubusercontent\.com|github\.com|objects\.githubusercontent\.com|release-assets\.githubusercontent\.com|github-releases\.githubusercontent\.com)$/.test(u.hostname))return rej(new Error('host'));
    const rq=require('https').get(u,{headers:{'User-Agent':'NRML-Client-Updater'},timeout:20000},r=>{
      if([301,302,303,307,308].includes(r.statusCode)&&r.headers.location&&redir<5){r.resume();return res(__uGet(new URL(r.headers.location,u).href,max,onPct,redir+1));}
      if(r.statusCode!==200){r.resume();return rej(new Error('http '+r.statusCode));}
      const tot=+r.headers['content-length']||0,ch=[];let n=0;
      r.on('data',d=>{n+=d.length;if(n>max){rq.destroy(new Error('too big'));return;}ch.push(d);if(onPct&&tot)onPct(Math.min(99,Math.round(n/tot*100)));});
      r.on('end',()=>res(Buffer.concat(ch)));r.on('error',rej);
    });
    rq.on('error',rej);rq.on('timeout',()=>rq.destroy(new Error('timeout')));
  });
}
function __uCheckSig(m,cfg){
  const msg=Buffer.from(m.version+'\n'+m.file+'\n'+m.size+'\n'+m.sha256);
  const key=require('crypto').createPublicKey({key:Buffer.from(cfg.publicKey,'base64'),format:'der',type:'spki'});
  return require('crypto').verify(null,msg,key,Buffer.from(String(m.sig),'base64'));
}
function __uMan(raw,cfg){
  const m=JSON.parse(raw.toString('utf8'));
  if(!m||!/^\d+\.\d+\.\d+$/.test(String(m.version))||!/^[\w.\-]+\.zip$/.test(String(m.file))||!Number.isInteger(m.size)||m.size<1||m.size>80*1048576||!/^[0-9a-f]{64}$/.test(String(m.sha256))||typeof m.sig!=='string')throw new Error('bad manifest');
  if(!__uCheckSig(m,cfg))throw new Error('bad signature');
  const notes={};if(typeof m.notes==='string')notes.en=m.notes.slice(0,300);else if(m.notes&&typeof m.notes==='object')for(const k of['en','hu','es','pt','fr'])if(typeof m.notes[k]==='string')notes[k]=m.notes[k].slice(0,300);
  return{version:m.version,file:m.file,size:m.size,sha256:m.sha256,sig:m.sig,notes};
}
async function __uCheck(){
  const S=__UPD.st;S.cur=__uVer();const cfg=__uCfg();S.configured=!!cfg;
  if(!cfg){S.status='idle';return S;}
  if(S.status==='downloading'||S.status==='ready')return S;
  S.status='checking';S.err='';
  try{
    const m=__uMan(await __uGet('https://raw.githubusercontent.com/'+cfg.repo+'/main/updates/version.json',30000),cfg);
    if(__uNewer(m.version,S.cur)){__UPD.man=m;S.latest=m.version;S.notes=m.notes;S.status='available';}
    else{__UPD.man=null;S.latest=null;S.notes={};S.status='current';}
  }catch(e){S.status='error';S.err=String(e&&e.message||e).slice(0,120);}
  return S;
}
// verify + unpack a downloaded update; throws on anything suspicious
function __uApply(buf,m,cfg){
  if(!__uCheckSig(m,cfg))throw new Error('bad signature');
  if(!__uNewer(m.version,__uVer()))throw new Error('not newer');
  if(buf.length!==m.size)throw new Error('size mismatch');
  if(require('crypto').createHash('sha256').update(buf).digest('hex')!==m.sha256)throw new Error('hash mismatch');
  const ud=path.join(app.getPath('appData'),'NRML Client','updates'),tmp=path.join(ud,m.version+'.tmp'),fin=path.join(ud,m.version);
  fs.rmSync(tmp,{recursive:true,force:true});fs.mkdirSync(tmp,{recursive:true});
  const z=new AdmZip(buf);let total=0;
  for(const e of z.getEntries()){
    const n=e.entryName.replace(/\\/g,'/');
    if(!n||n.startsWith('/')||n.includes('..')||/^[a-zA-Z]:/.test(n)||n.startsWith('node_modules/'))throw new Error('unsafe entry');
    total+=e.header.size;if(total>200*1048576)throw new Error('too large');
    const dest=path.join(tmp,n);if(!path.resolve(dest).startsWith(path.resolve(tmp)+path.sep))throw new Error('unsafe entry');
    if(e.isDirectory){fs.mkdirSync(dest,{recursive:true});continue;}
    fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,e.getData());
  }
  let pj;try{pj=JSON.parse(fs.readFileSync(path.join(tmp,'package.json'),'utf8'));}catch{throw new Error('no package.json');}
  if(pj.version!==m.version||!fs.existsSync(path.join(tmp,'main.js')))throw new Error('bad package');
  try{fs.symlinkSync(path.join(app.getAppPath(),'node_modules'),path.join(tmp,'node_modules'),'junction');}catch{}
  fs.rmSync(fin,{recursive:true,force:true});fs.renameSync(tmp,fin);
  fs.writeFileSync(path.join(ud,'current.json'),JSON.stringify({version:m.version,boots:0,prev:__uVer()}));
  try{for(const d of fs.readdirSync(ud)){if(/^\d+\.\d+\.\d+(\.tmp)?$/.test(d)&&d!==m.version&&d!==__uVer()){fs.rmSync(path.join(ud,d),{recursive:true,force:true});}}}catch{}
  return true;
}
async function __uInstall(){
  const S=__UPD.st,cfg=__uCfg(),m=__UPD.man;
  if(!cfg||!m||__UPD.busy||(S.status!=='available'&&S.status!=='error'))return S;
  __UPD.busy=true;S.status='downloading';S.pct=0;S.err='';
  (async()=>{
    try{
      const buf=await __uGet('https://raw.githubusercontent.com/'+cfg.repo+'/main/updates/'+m.file,m.size+1024,p=>{S.pct=p;});
      __uApply(buf,m,cfg);S.pct=100;S.status='ready';
    }catch(e){S.status='error';S.err=String(e&&e.message||e).slice(0,120);}
    __UPD.busy=false;
  })();
  return S;
}
ipcMain.handle('upd:state',()=>{__UPD.st.cur=__uVer();__UPD.st.configured=!!__uCfg();return{...__UPD.st};});
ipcMain.handle('upd:check',async()=>({...await __uCheck()}));
ipcMain.handle('upd:install',async()=>({...await __uInstall()}));
ipcMain.handle('upd:restart',()=>{if(__UPD.st.status==='ready'){setTimeout(()=>{app.relaunch();app.exit(0);},300);return true;}return false;});
setTimeout(()=>{__uCheck().catch(()=>{});},5000);
{const __uiv=setInterval(()=>{__uCheck().catch(()=>{});},6*3600*1000);if(__uiv.unref)__uiv.unref();}
if(process.env.NRML_UPDATE_DIR){setTimeout(()=>{try{const cf=path.join(app.getPath('appData'),'NRML Client','updates','current.json'),c=JSON.parse(fs.readFileSync(cf,'utf8'));c.boots=0;fs.writeFileSync(cf,JSON.stringify(c));}catch{}},20000);}
// loadFile() resolves relative paths against the app folder, not against this file: send them to the update folder
if(process.env.NRML_UPDATE_DIR){try{const {BrowserWindow}=require('electron'),_lf=BrowserWindow.prototype.loadFile;BrowserWindow.prototype.loadFile=function(f,o){try{if(typeof f==='string'&&!path.isAbsolute(f))f=path.join(process.env.NRML_UPDATE_DIR,f);}catch{}return _lf.call(this,f,o);};}catch{}}

// main window: never stay invisible (slow start / second click on the exe)
try{
  app.on('browser-window-created',(e,w)=>{setImmediate(()=>{try{
    if(w!==win)return;
    const show=()=>{try{if(!w.isDestroyed()&&!w.isVisible()){try{w.maximize();}catch{}w.show();}}catch{}};
    setTimeout(show,2500);w.webContents.once('did-finish-load',()=>setTimeout(show,400));
  }catch{}});});
  app.on('second-instance',()=>{try{if(win&&!win.isDestroyed()){if(win.isMinimized())win.restore();if(!win.isVisible())win.show();win.focus();}}catch{}});
}catch{}
