const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        sendMessage: () => ipcRenderer.send('countdown-start')
    }
)
