const {app, BrowserWindow} = require('electron')

function xuly () {
    var win = new BrowserWindow()

    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', xuly)