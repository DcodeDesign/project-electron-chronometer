const electron = require('electron');
const {app, BrowserWindow, Menu} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is garbage collected.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow(
        {
            icon: __dirname + "/icons.png",
            width: 320,
            height: 195,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                worldSafeExecuteJavaScript: true,
                contextIsolation: true
            }
        });

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/main.html');

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

