import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '..', 'dist');
const outDir = distDir; // write back into dist

const routes = [
  '/',
  '/ai-marketing',
  '/ai-live',
  '/ai-call',
  '/partnership',
  '/contact'
];

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function prerender() {
  // 启动本地预览服务，保证 BrowserRouter 可正常路由
  const previewServer = await preview({
    preview: {
      port: 5050,
      strictPort: true,
    },
  });

  const origin = `http://localhost:${previewServer.config.preview.port || 5050}`;

  // 寻找本地 Chrome/Edge 可执行文件
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe'
  ].filter(Boolean);
  let executablePath = candidates.find(p => {
    try { return p && fs.existsSync(p); } catch { return false; }
  });
  if (!executablePath) {
    console.warn('[prerender] 未找到本地 Chrome/Edge，可设置环境变量 PUPPETEER_EXECUTABLE_PATH');
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = origin + route;
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    // 等待 root 渲染完成（可按需等待某些选择器）
    await page.waitForSelector('#root', { timeout: 30000 }).catch(() => {});
    const html = await page.content();

    const targetOut = path.join(outDir, route === '/' ? '' : route);
    await ensureDir(targetOut);
    await fs.promises.writeFile(path.join(targetOut, 'index.html'), html, 'utf8');
    // eslint-disable-next-line no-console
    console.log(`[prerender] ${route} -> ${path.relative(outDir, path.join(targetOut, 'index.html'))}`);
  }

  await browser.close();
  await new Promise((resolve) => previewServer.httpServer.close(() => resolve(null)));
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});


