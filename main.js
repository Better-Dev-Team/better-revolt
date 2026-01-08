import { app, BrowserWindow, shell } from 'electron';
import Store from 'electron-store';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const store = new Store();

let mainWindow;

function createWindow() {
    const lastBounds = store.get('windowBounds');

    mainWindow = new BrowserWindow({
        title: 'Better Revolt',
        icon: path.join(__dirname, 'icon.png'),
        width: lastBounds ? lastBounds.width : 1280,
        height: lastBounds ? lastBounds.height : 800,
        x: lastBounds ? lastBounds.x : undefined,
        y: lastBounds ? lastBounds.y : undefined,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // Load the Revolt app
    mainWindow.loadURL('https://app.revolt.chat/');

    // Handle external links
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        // If the URL is not part of Revolt, open in default browser
        if (!url.startsWith('https://app.revolt.chat')) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });

    // Save window state on close
    mainWindow.on('close', () => {
        const bounds = mainWindow.getBounds();
        store.set('windowBounds', bounds);
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
