const { contextBridge, ipcRenderer, webUtils } = require('electron');
contextBridge.exposeInMainWorld('api', {
  call: (ch, ...a) => ipcRenderer.invoke(ch, ...a),
  on: (ch, f) => ipcRenderer.on(ch, (_e, d) => f(d)),
  pathOf: f => webUtils.getPathForFile(f)
});
