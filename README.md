# The Better Way to Learn Biochem

## 本地运行与部署说明

### 本地运行

1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 访问浏览器显示的本地地址（默认 http://localhost:5173）。

### GitHub Pages 部署流程

本仓库使用 GitHub Actions 自动部署：当代码推送到 `main` 分支时，会运行 `vite build` 产出 `dist/`，并将其发布到 GitHub Pages。部署成功后页面将位于：

`https://<你的GitHub用户名>.github.io/The-better-way-to-learn-biochem/`
