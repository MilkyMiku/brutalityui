/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 */

import { app, BrowserWindow, dialog, ipcMain } from 'electron';
// Update
import { autoUpdater } from 'electron-updater';
import * as log from 'electron-log';

autoUpdater.autoDownload = false;

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: true,
    frame: false,
    width: 1200,
    height: 800,
    backgroundColor: '#34373a'
  });
  mainWindow.focus();
  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
    mainWindow.webContents.openDevTools();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  ipcMain.on('checkUpdate', () => {
    console.log('moo');
    autoUpdater.checkForUpdates();
    console.log('moo2');
  });

  autoUpdater.on('checking-for-update', () => {
    console.log('CHECKING FOR UPDATES!!!');
    dialog.showMessageBox({
      title: 'Checking for updates',
      message: 'Checking for updates'
    });
    console.log('CHECKING FOR UPDATES!!! 2');
  });

  autoUpdater.on('update-available', () => {
    dialog.showMessageBox(
      {
        type: 'info',
        title: 'Found Updates',
        message: 'Found updates, do you want update now? WORKS MAN!',
        buttons: ['Sure, the knee goes where the knee grows', 'No']
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          autoUpdater.downloadUpdate();
        }
      }
    );
  });

  autoUpdater.on('update-not-available', () => {
    dialog.showMessageBox({
      title: 'No Updates',
      message: 'Current version is up-to-date.'
    });
  });

  autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox(
      {
        title: 'Install Updates',
        message: 'Updates downloaded, application will be quit for update...'
      },
      () => {
        setImmediate(() => autoUpdater.quitAndInstall());
      }
    );
  });

  autoUpdater.on('error', err => {
    dialog.showMessageBox({
      title: 'Error whilst updating',
      message: 'error message: ' + err
    });
  });
  // End update
  // const menuBuilder = new MenuBuilder(mainWindow);
  // menuBuilder.buildMenu();
});
