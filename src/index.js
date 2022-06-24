// /**
//  * 
//  */

function electron(dirname, framework, frameworkBridge, menus, config, options) {

    const path = require("path");
    const electron = framework;

    // let { app, BrowserWindow, remote, screen } = framework;
    // let {getCurrentWindow, globalShortcut} = remote;

    electron.app.allowRendererProcessReuse = true;

    // USAGE:
    // Ignores Certificate errors in Electron
    electron.app.commandLine.appendSwitch('ignore-certificate-errors');

    // USAGE:
    // Disable Hardware acceleration if you get the error:
    // [14880:1207/145651.085:ERROR:gpu_init.cc(457)] Passthrough is not supported, GL is disabled, ANGLE is
    // https://stackoverflow.com/questions/70267992/win10-electron-error-passthrough-is-not-supported-gl-is-disabled-angle-is
    electron.app.disableHardwareAcceleration()

    electron.app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
    // global.appRoot = process.cwd();
    global.appRoot = dirname;

    let bridge;
    let win;
    let apps = {};

    async function createWindow() {
        console.log("Desktop-CGI-Server: index.js: ready Event invoked");
        const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

        if (frameworkBridge === "express-bridge") {
            bridge = 'desktopcgi-express-bridge';
        } else {
            bridge = 'desktopcgi-express-bridge';
        }

        require(bridge)(dirname, config, options).then(function (apps) {
            // console.log("Desktop-CGI-Server: index.js: apps", apps);
            apps = apps;

            win.loadURL('http://localhost:' + config.server.port);
            if (menus === "default") {
                menus = require("./native/menu");
            } else {
                require(menus);
            }
        }.bind(apps), (err) => {
            console.log("Desktop-CGI-Server: index.js: Error Function invoked");
            console.log('Desktop-CGI-Server: index.js: Error Starting Server', err);
        }).catch(function (err) {
            console.log("Desktop-CGI-Server: Error Function invoked");
            console.log("Desktop-CGI-Server: index.js: Error Starting Server", err);
        });

        win = new electron.BrowserWindow({
            width: width,
            height: height,
            backgroundColor: '#FFF',
            show: false
        });

        // Debug Line to allow opening dev tools from electron
        // win.webContents.openDevTools();

        win.webContents.on("did-fail-load", function () {
            console.log("Desktop-CGI-Server: index.js: did-fail-load Event invoked");
            win.loadURL('http://localhost:' + config.server.port + "/err");
        }.bind(win));

        // Web Content Loading
        // https://www.electronjs.org/docs/api/web-contents

        win.on('closed', function () {
            console.log("Desktop-CGI-Server: index.js: closed Event invoked");
            win = null;
            apps = {};
        }.bind(apps));

        win.once('ready-to-show', () => {
            console.log("Desktop-CGI-Server: index.js: ready-to-show Event invoked");
            win.show();
        });
    }

    // electron.app.setPath('temp', process.cwd() + config.app.temp);
    // electron.app.setPath('cache', process.cwd() + config.app.cache);
    // electron.app.setPath('downloads', process.cwd() + config.app.downloads);
    // electron.app.setPath('userData', process.cwd() + config.app.userData);
    // electron.app.setPath('logs', process.cwd() + config.app.logs);
    // electron.app.setPath('recent', process.cwd() + config.app.recent);

    electron.app.setPath('temp', path.join(dirname, config.app.temp));
    electron.app.setPath('cache', path.join(dirname, config.app.cache));
    electron.app.setPath('downloads', path.join(dirname, config.app.downloads));
    electron.app.setPath('userData', path.join(dirname, config.app.userData));
    electron.app.setPath('logs', path.join(dirname, config.app.logs));
    electron.app.setPath('recent', path.join(dirname, config.app.recent));

    // Failed to set path error
    // electron.app.setPath('crashDump', config.app.crashDump)
    // electron.app.setPath('appData', process.cwd() + config.app.appData);

    // Failed to set path error
    // electron.app.setPath('crashDump', path.join(dirname, config.app.crashDump))
    electron.app.setPath('appData', path.join(dirname, config.app.appData));

    // 
    // Alternatively, use following AppData path based on OS
    // aix, darwin, freebsd, linux, openbsd, sunos, win32
    // 
    // if (process.platform === 'win32') {
    //     electron.app.setPath('appData', '%APPDATA%')
    // } else if (process.platform === 'darwin') {
    //     electron.app.setPath('appData', '$XDG_CONFIG_HOME')
    // } else if (process.platform === 'linux') {
    //     electron.app.setPath('appData', '~/Library/Application Support')
    // }
    // 

    electron.app.on('ready', createWindow.bind(apps));

    electron.app.on('window-all-closed', function () {
        console.log("Desktop-CGI-Server: index.js: window-all-closed Event invoked");
        if (process.platform !== 'darwin') {
            electron.app.quit();
            apps = {};
        }
    }.bind(apps));

    electron.app.on('activate', function () {
        console.log("Desktop-CGI-Server: index.js: activate Event invoked");
        if (win === null) {
            if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
        }
    }.bind(apps));

}

module.exports = {
    "electron": electron,
    "menus": require("./native/menu")
}