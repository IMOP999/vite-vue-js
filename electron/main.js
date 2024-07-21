// require('update-electron-app')()

// app 模块，它控制应用程序的事件生命周期
// BrowserWindow 模块，它创建和管理应用程序窗口
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import isDev from 'electron-is-dev';

// 获取 __dirname 的等效 ES 模块方法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 将index.html加载进一个新的BrowserWindow实例
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // __dirname 字符串指向当前正在执行脚本的路径 
    // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),  // 将路径中的预加载脚本传入 webPreferences.preload 选项
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  if (isDev) {
    win.loadURL('http://localhost:5173'); // Vite项目的开发服务器地址
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // // 监听 DevTools 的打开事件，并禁用 Autofill 功能
  // win.webContents.on('devtools-opened', () => {
  //   win.webContents.executeJavaScript(`
  //     if (window.DevToolsAPI) {
  //       DevToolsAPI.experimentsSettings['Autofill.enable'].setting.set(false);
  //     }
  //   `);
  // });
}

// 只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.whenReady().then(createWindow);

// 可以使用 进程 全局的 platform 属性来专门为某些操作系统运行代码
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {  // 关闭所有窗口时退出应用 (Windows & Linux)
    app.quit();
  }
});

// 没有任何浏览器窗口是打开的，则调用 createWindow() 方法
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});