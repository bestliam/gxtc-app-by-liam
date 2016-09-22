const electron = require('electron');
const {app, BrowserWindow} = electron;
var path = require('path');
var cp = require('child_process');

var updateDotExe = path.resolve(path.dirname(process.execPath),'..', 'update.exe');
var child = cp.spawn(updateDotExe,["--update", "http://210.36.80.20/xlx/releases"], { detached: true });
child.on('close', function(code) {
    // anything you need to do when update is done.
});

app.on('ready', () =>{
    let win = new BrowserWindow({width:800,height:500})
    win.loadURL(`file://${__dirname}/index.html`)
})