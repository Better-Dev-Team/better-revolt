# Better Revolt

A lightweight Electron desktop wrapper for [Revolt Chat](https://app.revolt.chat/).

## Features

- **Native Feel**: Loads Revolt directly with no clutter.
- **Persistent State**: Remembers window size and position.
- **Custom Icon**: Uses a custom application icon.
- **External Links**: Opens non-Revolt links in your default browser.

## prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [NPM](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  Clone the repository or download the source code.
2.  Open a terminal in the project directory.
3.  Install dependencies:

    ```bash
    npm install
    ```

## Running Development Version

To start the application in development mode:

```bash
npm start
```

## Building

### Portable Version (Recommended)
This creates a folder you can modify or move anywhere.
```bash
npm run pack
```
Output: `dist-portable/better-revolt-win32-x64/better-revolt.exe`

### Installer (Advanced)
If you have a configured build environment (permissions for symlinks, etc.):
```bash
npm run dist
```
Output: `dist/Better Revolt Setup 1.0.0.exe`
