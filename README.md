# 探客 AI 手机 - 开发与部署指南（Vite + 预渲染）

本项目已从 CRA 迁移到 Vite，移除 `react-snap` 并改为基于 `puppeteer-core` 的预渲染方案，同时对后端 `Express` 做了安全加固（Helmet、CORS 白名单、限流、参数污染防护、请求体大小限制、管理员令牌）。

## 运行环境

- Node.js ≥ 18
- 推荐 Chrome/Edge 本地浏览器（用于预渲染），也可通过环境变量手动指定可执行文件路径

## 安装依赖

```powershell
npm install
```

如遇安装缓慢，可切换国内源：

```powershell
npm config set registry https://registry.npmmirror.com
```

## 环境变量

在项目根目录创建 `.env`（不会提交到仓库）：

```
# 后端（server.js）
ADMIN_TOKEN=please-change-me
ALLOWED_ORIGINS=http://localhost:3002
PORT=3001

# 前端（Vite）
VITE_API_URL=http://localhost:3001/api
```

说明：
- 管理员接口需要请求头 `X-Admin-Token: <ADMIN_TOKEN>`。
- `ALLOWED_ORIGINS` 为后端允许的跨域来源（逗号分隔）。
- 前端优先读取 `VITE_API_URL`，兼容老的 `REACT_APP_API_URL`。

## 本地开发

同时启动后端与前端（默认端口：后端 3001，前端 3002）：

```powershell
# 一键启动（并发）
npm run dev

# 或分别启动
npm run server          # 启动后端 http://localhost:3001
npm run dev:vite        # 启动前端 http://localhost:3002
```

## 构建与预览

仅构建（不预渲染）：

```powershell
npm run build
```

构建并预渲染以下路由：`/`、`/ai-marketing`、`/ai-live`、`/ai-call`、`/partnership`、`/contact`

```powershell
# 如未自动找到浏览器，可先设置本机 Chrome/Edge 路径
$env:PUPPETEER_EXECUTABLE_PATH="C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"

npm run build:prerender
```

预览生产构建：

```powershell
npm run preview
# 输出示例：Local: http://localhost:3002
```

构建产物位于 `dist/`，包含已预渲染的静态 HTML：
- `dist/index.html`
- `dist/ai-marketing/index.html`
- `dist/ai-live/index.html`
- `dist/ai-call/index.html`
- `dist/partnership/index.html`
- `dist/contact/index.html`

## 后端 API（server.js）

- `GET /api/health` 健康检查
- `GET /api/partner-applications` 获取申请记录
- `POST /api/partner-applications` 提交新申请（校验手机号与字段长度）
- `PUT /api/partner-applications/:id` 更新申请状态（需要 `X-Admin-Token`）
- `DELETE /api/partner-applications/:id` 删除申请（需要 `X-Admin-Token`）

数据文件：`partner-applications.json`

安全加固：Helmet 安全头、CORS 白名单、HPP 参数污染防护、请求体大小限制（64kb）、基础限流（每 15 分钟 200 次）。

## 部署建议

- 前端静态资源：发布 `dist/` 到任意静态站点（Nginx / CDN）。
- 后端服务：保留 `server.js` 监听 3001，供前端 `VITE_API_URL` 调用。
- 如需反代：前端与后端域名统一后，设置反向代理到 3001，并在前端将 `VITE_API_URL` 指向同源 `/api`。

## 常见问题

- 预览打不开（如 `http://localhost:3002` 拒绝连接）：请先执行 `npm run preview`，确保终端输出 `Local: http://localhost:3002/`，并检查端口占用与防火墙。
- 预渲染报错：设置 `PUPPETEER_EXECUTABLE_PATH` 指向本机浏览器可执行文件后重试。

