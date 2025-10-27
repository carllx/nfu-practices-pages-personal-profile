# 🚀 部署指南：将你的作品集发布到互联网

> **学习目标：** 掌握静态网站部署的完整流程，理解 Git 版本控制，体验 CI/CD 自动化部署

---

## 📋 目录

1. [前期准备清单](#1-前期准备清单)
2. [本地测试验证](#2-本地测试验证)
3. [GitHub Pages 部署](#3-github-pages-部署推荐)
4. [Netlify 部署](#4-netlify-部署备选)
5. [Vercel 部署](#5-vercel-部署备选)
6. [自定义域名配置](#6-自定义域名配置可选)
7. [故障排查](#7-故障排查)
8. [性能优化建议](#8-性能优化建议)

---

## 1. 前期准备清单

### 1.1 必须完成的核心文件 ✅

在部署之前，确保以下文件已经创建并正常工作：

**HTML 页面（4 个）：**
- [ ] `index.html` - 主页，包含欢迎信息和导航
- [ ] `about.html` - 关于页面，包含艺术家简介
- [ ] `illustrations.html` - 插画画廊页面，包含灯箱功能
- [ ] `products.html` - 产品展示页面，包含产品信息

**样式与脚本：**
- [ ] `style.css` - 全局样式表，使用 CSS Variables（设计令牌）
- [ ] `script.js` - 主脚本文件，包含所有交互逻辑
- [ ] `data.js` - 数据文件（已提供，包含 12 组作品数据）

**资源文件：**
- [ ] `assets/illustration/` - 12 张插画图片（已提供）
- [ ] `assets/products/` - 12 张产品图片（已提供）

### 1.2 质量检查清单 🔍

**功能完整性：**
- [ ] 所有页面能够正常加载，无 404 错误
- [ ] 导航链接正常工作，能在页面间切换
- [ ] 插画画廊显示全部 12 张图片
- [ ] 产品展示显示全部 12 个产品及信息
- [ ] 灯箱功能正常（点击图片、关闭、Escape 键）
- [ ] 所有图片能正确加载显示

**代码规范：**
- [ ] 所有样式使用 CSS Variables，无硬编码值
- [ ] HTML 语义化标签使用正确
- [ ] JavaScript 无控制台错误
- [ ] 代码有适当的注释

**响应式与可访问性：**
- [ ] 在移动设备上正常显示（使用浏览器开发者工具测试）
- [ ] 在不同浏览器正常工作（Chrome, Firefox, Safari）
- [ ] 键盘可以访问所有交互元素（Tab 键导航）
- [ ] 图片有适当的 `alt` 文本
- [ ] 焦点状态清晰可见

### 1.3 必需工具准备 🛠️

**Git 版本控制：**
```bash
# 检查 Git 是否已安装
git --version

# 如果未安装，macOS 用户运行：
xcode-select --install

# Windows 用户下载安装：
# https://git-scm.com/download/win
```

**GitHub 账号：**
- [ ] 注册 GitHub 账号（https://github.com/signup）
- [ ] 验证邮箱地址
- [ ] 设置用户名（将用于网站 URL）

**代码编辑器：**
- [ ] VS Code 或其他编辑器
- [ ] 安装 Live Server 插件（用于本地预览）

---

## 2. 本地测试验证

### 2.1 使用 Live Server 测试（推荐）

**步骤：**

1. **安装 Live Server 插件**
   - 在 VS Code 中，点击左侧扩展图标
   - 搜索 "Live Server"
   - 点击 "安装"

2. **启动本地服务器**
   - 在 VS Code 中打开项目文件夹
   - 右键点击 `index.html`
   - 选择 "Open with Live Server"
   - 浏览器会自动打开 `http://127.0.0.1:5500/`

3. **测试所有功能**
   - 点击导航栏，测试页面切换
   - 访问插画页面，点击图片测试灯箱
   - 访问产品页面，检查产品信息显示
   - 使用浏览器开发者工具（F12）检查控制台错误

### 2.2 使用 Python 简单服务器（备选）

```bash
# 进入项目目录
cd /Users/yamlam/Downloads/practices-personal-portfolio-website

# Python 3.x（macOS 自带）
python3 -m http.server 8000

# 在浏览器访问：http://localhost:8000
```

### 2.3 直接打开 HTML 文件（不推荐）

**警告：** 直接双击 `index.html` 打开可能导致：
- 相对路径问题
- JavaScript 跨域限制
- 某些功能无法正常工作

**如果必须这样测试：**
- 确保所有资源使用相对路径（已在项目中配置好）
- 检查浏览器控制台是否有 CORS 错误

---

## 3. GitHub Pages 部署（推荐）

### 为什么选择 GitHub Pages？

✅ **完全免费** - 无需信用卡  
✅ **简单易用** - 无需配置服务器  
✅ **自动 HTTPS** - 安全加密连接  
✅ **版本控制** - Git 管理代码历史  
✅ **自动部署** - 推送代码即自动更新网站

### 3.1 第一次部署：完整步骤

#### 步骤 1：创建 GitHub 仓库

1. **登录 GitHub** → https://github.com
2. **点击右上角 "+" → "New repository"**
3. **填写仓库信息：**
   - **Repository name:** `portfolio-website`（或其他你喜欢的名字）
   - **Description:** "carllllllllx 个人作品集网站"
   - **Public** 或 **Private**（都可以，Private 也能部署）
   - **不要勾选** "Add a README file"（我们已经有了）
4. **点击 "Create repository"**

#### 步骤 2：初始化本地 Git 仓库

打开终端（macOS Terminal 或 Windows Git Bash），执行：

```bash
# 1. 进入项目目录
cd /Users/yamlam/Downloads/practices-personal-portfolio-website

# 2. 初始化 Git 仓库
git init

# 3. 配置 Git 用户信息（首次使用需要）
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱@example.com"

# 4. 添加所有文件到暂存区
git add .

# 5. 查看将要提交的文件（可选）
git status

# 6. 提交到本地仓库
git commit -m "Initial commit: 完成作品集网站开发"

# 7. 创建 main 分支（GitHub 默认分支名）
git branch -M main

# 8. 关联远程仓库（替换为你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/portfolio-website.git

# 9. 推送到 GitHub
git push -u origin main
```

**常见问题：**
- **身份验证失败？** → 需要使用 Personal Access Token（见下方说明）
- **推送被拒绝？** → 检查仓库名是否正确

#### 步骤 3：设置 GitHub Personal Access Token（如果需要）

GitHub 不再支持密码推送，需要使用 Token：

1. **生成 Token：**
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 点击 "Generate token"
   - **复制 Token**（只显示一次，记得保存）

2. **使用 Token 推送：**
   ```bash
   # 当提示输入密码时，粘贴 Token
   git push -u origin main
   ```

3. **保存凭证（可选）：**
   ```bash
   # macOS 使用 Keychain 保存
   git config --global credential.helper osxkeychain
   
   # Windows 使用凭证管理器
   git config --global credential.helper wincred
   ```

#### 步骤 4：开启 GitHub Pages

1. **进入仓库页面** → `https://github.com/你的用户名/portfolio-website`
2. **点击 "Settings"**（仓库设置，不是个人设置）
3. **左侧菜单找到 "Pages"**
4. **配置 Source：**
   - **Branch:** 选择 `main`
   - **Folder:** 选择 `/ (root)`
   - 点击 **"Save"**
5. **等待部署完成**（1-3 分钟）
6. **访问你的网站：**
   - URL: `https://你的用户名.github.io/portfolio-website/`

**部署状态查看：**
- 仓库首页会出现黄色圆圈 🟡（部署中）
- 部署完成变成绿色勾号 ✅
- 点击勾号可以查看详细日志

### 3.2 后续更新：快速部署流程

当你修改代码后，只需要：

```bash
# 1. 添加修改的文件
git add .

# 2. 提交修改
git commit -m "更新描述（例如：修复灯箱样式问题）"

# 3. 推送到 GitHub
git push

# 4. 等待 1-2 分钟，网站自动更新
```

**验证更新是否生效：**
- 访问网站 URL
- 按 `Ctrl + Shift + R`（macOS: `Cmd + Shift + R`）强制刷新缓存

### 3.3 使用 gh-pages 分支（进阶方法）

**优势：** 代码和网站文件分离，更专业的工作流

```bash
# 1. 创建 gh-pages 分支
git checkout -b gh-pages

# 2. 推送到 GitHub
git push origin gh-pages

# 3. 在 GitHub Settings > Pages 中选择 gh-pages 分支
```

**适用场景：**
- 使用构建工具（如 Webpack）
- 需要区分开发代码和生产代码
- 团队协作项目

---

## 4. Netlify 部署（备选）

### 为什么选择 Netlify？

✅ **拖放部署** - 无需命令行  
✅ **自动 CI/CD** - Git 集成自动部署  
✅ **表单处理** - 无需后端收集表单  
✅ **更快的 CDN** - 全球加速  
✅ **免费 SSL** - 自动 HTTPS

### 4.1 方法一：拖放部署（最简单）

1. **访问 Netlify** → https://www.netlify.com
2. **注册/登录账号**（可以用 GitHub 账号登录）
3. **进入控制面板**
4. **拖放部署：**
   - 将整个项目文件夹拖到页面上的 "Want to deploy a new site without connecting to Git? Drag and drop your site folder here"
   - 等待上传和部署（约 30 秒）
5. **访问网站：**
   - Netlify 会生成随机 URL：`random-name-12345.netlify.app`
   - 可以在 "Site settings" → "Change site name" 修改名称

### 4.2 方法二：Git 集成（推荐）

1. **连接 GitHub：**
   - 点击 "New site from Git"
   - 选择 "GitHub"
   - 授权 Netlify 访问你的仓库
   - 选择 `portfolio-website` 仓库

2. **配置构建设置：**
   - **Branch to deploy:** `main`
   - **Build command:** 留空（静态网站无需构建）
   - **Publish directory:** 留空或输入 `/`
   - 点击 "Deploy site"

3. **自动部署：**
   - 每次推送到 GitHub，Netlify 自动重新部署
   - 部署历史可在 "Deploys" 标签查看

### 4.3 配置自定义域名（可选）

1. **进入 "Domain settings"**
2. **点击 "Add custom domain"**
3. **输入你的域名**（需要先购买域名）
4. **配置 DNS 记录**（按 Netlify 提示操作）

---

## 5. Vercel 部署（备选）

### 为什么选择 Vercel？

✅ **极快的部署速度** - 秒级构建  
✅ **全球 CDN** - 边缘网络加速  
✅ **预览部署** - 每个 PR 自动生成预览链接  
✅ **零配置** - 自动检测项目类型  
✅ **开发者体验优秀** - CLI 工具强大

### 5.1 使用 Vercel CLI 部署

```bash
# 1. 安装 Vercel CLI（需要 Node.js）
npm install -g vercel

# 2. 进入项目目录
cd /Users/yamlam/Downloads/practices-personal-portfolio-website

# 3. 登录 Vercel
vercel login

# 4. 部署
vercel

# 按提示操作：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - What's your project's name? portfolio-website
# - In which directory is your code located? ./
```

### 5.2 使用 Git 集成

1. **访问 Vercel** → https://vercel.com
2. **注册/登录**（使用 GitHub 账号）
3. **点击 "New Project"**
4. **导入 GitHub 仓库：**
   - 选择 `portfolio-website`
   - 点击 "Import"
5. **配置项目：**
   - **Framework Preset:** Other
   - **Build Command:** 留空
   - **Output Directory:** 留空
   - 点击 "Deploy"
6. **访问网站：**
   - Vercel 生成 URL：`portfolio-website.vercel.app`

---

## 6. 自定义域名配置（可选）

### 6.1 购买域名

**推荐域名注册商：**
- **Namecheap** - 价格实惠，界面友好
- **Google Domains** - 简洁可靠
- **GoDaddy** - 老牌服务商
- **阿里云万网** - 国内用户推荐

**价格参考：**
- `.com` 域名：$10-15/年
- `.dev` 域名：$12-20/年
- `.me` 域名：$15-25/年

### 6.2 配置 DNS 记录

#### 针对 GitHub Pages：

1. **在域名注册商的 DNS 设置中添加：**

   **A 记录（指向 GitHub 服务器）：**
   ```
   类型: A
   主机: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   ```

   **CNAME 记录（www 子域名）：**
   ```
   类型: CNAME
   主机: www
   值: 你的用户名.github.io
   ```

2. **在 GitHub 仓库设置中：**
   - 进入 "Settings" → "Pages"
   - 在 "Custom domain" 输入你的域名（如 `example.com`）
   - 勾选 "Enforce HTTPS"（等待 DNS 生效后）

3. **等待 DNS 生效**（15 分钟 - 48 小时）

#### 针对 Netlify/Vercel：

直接在平台界面配置，按提示操作即可（更简单）。

---

## 7. 故障排查

### 7.1 常见问题与解决方案

#### 问题 1：页面显示 404 错误

**可能原因：**
- GitHub Pages 未开启
- 分支或目录选择错误
- 文件路径大小写不匹配

**解决方案：**
```bash
# 检查文件结构
ls -la

# 确保 index.html 在根目录
# 检查文件名大小写（index.html 而非 Index.html）

# 重新推送
git add .
git commit -m "Fix file structure"
git push
```

#### 问题 2：样式丢失或图片不显示

**可能原因：**
- 使用了绝对路径（如 `/style.css`）
- 文件路径错误

**解决方案：**
```html
<!-- ❌ 错误：绝对路径 -->
<link rel="stylesheet" href="/style.css">

<!-- ✅ 正确：相对路径 -->
<link rel="stylesheet" href="style.css">

<!-- ❌ 错误：file:// 协议 -->
<img src="file:///Users/.../assets/image.jpg">

<!-- ✅ 正确：相对路径 -->
<img src="assets/illustration/01-reading-light-illustration.jpg">
```

#### 问题 3：JavaScript 功能不工作

**排查步骤：**
1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签是否有错误
3. 检查 Network 标签是否所有文件都成功加载

**常见错误：**
```javascript
// ❌ 错误：在 HTML 加载前运行
document.querySelector('.gallery').innerHTML = '...';

// ✅ 正确：等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.gallery').innerHTML = '...';
});
```

#### 问题 4：Git 推送失败

**错误信息：** `Authentication failed`

**解决方案：**
```bash
# 使用 Personal Access Token 而非密码
# 生成 Token：https://github.com/settings/tokens

# 重新设置远程仓库 URL
git remote set-url origin https://你的Token@github.com/你的用户名/portfolio-website.git
```

**错误信息：** `Updates were rejected`

**解决方案：**
```bash
# 先拉取远程更改
git pull origin main --rebase

# 再推送
git push origin main
```

#### 问题 5：网站更新不生效

**可能原因：**
- 浏览器缓存
- GitHub Pages 部署延迟
- DNS 缓存

**解决方案：**
```bash
# 1. 强制刷新浏览器缓存
# Ctrl + Shift + R (Windows)
# Cmd + Shift + R (macOS)

# 2. 使用无痕模式测试
# Ctrl + Shift + N (Chrome)
# Cmd + Shift + N (Safari)

# 3. 检查部署状态
# 访问：https://github.com/你的用户名/portfolio-website/deployments

# 4. 清除 DNS 缓存（macOS）
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# 5. 等待 5-10 分钟后重试
```

### 7.2 调试工具

**浏览器开发者工具：**
- **Console** - 查看 JavaScript 错误
- **Network** - 查看资源加载情况
- **Elements** - 检查 HTML 结构和 CSS
- **Lighthouse** - 性能和可访问性审计

**在线工具：**
- **W3C HTML 验证器** - https://validator.w3.org
- **CSS 验证器** - https://jigsaw.w3.org/css-validator
- **GTmetrix** - 性能测试 - https://gtmetrix.com
- **WebPageTest** - 详细性能分析 - https://www.webpagetest.org

---

## 8. 性能优化建议

### 8.1 图片优化

**当前状态检查：**
```bash
# 查看图片文件大小
du -sh assets/illustration/*.jpg
du -sh assets/products/*.jpg
```

**优化建议：**

1. **压缩图片**（保持质量）
   - 使用 [TinyPNG](https://tinypng.com) 在线压缩
   - 或使用 [ImageOptim](https://imageoptim.com)（macOS）
   - 目标：每张图片 < 500KB

2. **使用现代图片格式**
   ```html
   <!-- 使用 WebP 格式（更小文件） -->
   <picture>
       <source srcset="assets/illustration/01-reading-light.webp" type="image/webp">
       <img src="assets/illustration/01-reading-light.jpg" alt="书页间流淌的光">
   </picture>
   ```

3. **懒加载图片**（已在项目中实现）
   ```html
   <img src="..." alt="..." loading="lazy">
   ```

### 8.2 代码优化

**CSS 优化：**
```css
/* ✅ 已优化：使用 CSS Variables */
:root {
    --color-primary: #202020;
    --spacing-4: 16px;
}

/* ❌ 避免：过度使用昂贵的属性 */
.gallery-item {
    filter: blur(5px); /* 性能开销大 */
}

/* ✅ 优化：使用 transform */
.gallery-item:hover {
    transform: scale(1.05); /* 硬件加速 */
}
```

**JavaScript 优化：**
```javascript
// ✅ 使用事件委托（减少监听器数量）
document.querySelector('.gallery').addEventListener('click', (e) => {
    if (e.target.closest('.gallery-item')) {
        // 处理点击
    }
});

// ❌ 避免：为每个元素添加监听器
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', ...); // 12 个监听器
});
```

### 8.3 加载性能

**添加元数据（SEO 优化）：**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="carllllllllx 个人作品集 - 1930年代橡皮管风格插画与产品设计">
    <meta name="keywords" content="插画, 产品设计, 作品集, 橡皮管动画">
    
    <!-- Open Graph（社交媒体分享） -->
    <meta property="og:title" content="carllllllllx 作品集">
    <meta property="og:description" content="探索 1930 年代橡皮管风格的艺术世界">
    <meta property="og:image" content="https://你的域名/assets/illustration/01-reading-light.jpg">
</head>
```

**预加载关键资源：**
```html
<head>
    <!-- 预加载 CSS -->
    <link rel="preload" href="style.css" as="style">
    
    <!-- 预加载字体（如果使用自定义字体） -->
    <link rel="preload" href="fonts/custom-font.woff2" as="font" type="font/woff2" crossorigin>
    
    <link rel="stylesheet" href="style.css">
</head>
```

### 8.4 性能检查清单

部署后运行以下检查：

- [ ] **Lighthouse 测试** - Chrome DevTools → Lighthouse → "Generate report"
  - Performance: > 90 分
  - Accessibility: > 90 分
  - Best Practices: > 90 分
  - SEO: > 90 分

- [ ] **加载时间** - 首屏加载 < 3 秒（使用 [WebPageTest](https://www.webpagetest.org)）

- [ ] **图片优化** - 所有图片使用 `loading="lazy"`

- [ ] **移动端测试** - 使用 Chrome DevTools 移动设备模拟器测试

---

## 9. 部署后的维护

### 9.1 定期检查

**每月检查清单：**
- [ ] 访问网站，确保所有功能正常
- [ ] 检查 GitHub Actions 部署状态
- [ ] 查看是否有安全警告（GitHub Dependabot）
- [ ] 测试在不同浏览器中的表现

### 9.2 内容更新流程

**添加新作品：**

1. **更新 `data.js`：**
   ```javascript
   // 添加新插画
   ILLUSTRATION_IMAGES: [
       // ... 现有数据
       {
           id: 13,
           src: 'assets/illustration/13-new-illustration.jpg',
           alt: '新作品的描述'
       }
   ]
   ```

2. **添加图片文件：**
   ```bash
   # 将新图片放入 assets/ 目录
   cp ~/Downloads/new-image.jpg assets/illustration/13-new-illustration.jpg
   ```

3. **提交并推送：**
   ```bash
   git add .
   git commit -m "添加新作品：新插画标题"
   git push
   ```

### 9.3 监控与分析

**使用 Google Analytics（可选）：**

1. **注册 Google Analytics** - https://analytics.google.com
2. **获取跟踪 ID**（格式：`G-XXXXXXXXXX`）
3. **在所有 HTML 页面的 `<head>` 中添加：**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

**可以追踪的数据：**
- 访问量和独立访客
- 页面浏览量
- 用户地理位置
- 流量来源（搜索引擎、社交媒体等）

---

## 10. 安全与隐私

### 10.1 保护敏感信息

**❌ 永远不要提交到 Git：**
- API 密钥
- 数据库密码
- 个人联系方式（如不想公开）
- 私人照片

**使用 `.gitignore`：**
```bash
# 创建 .gitignore 文件
cat > .gitignore << EOF
# macOS
.DS_Store

# 编辑器
.vscode/
.idea/

# 敏感信息
config.js
secrets/

# 临时文件
*.log
*.tmp
EOF

git add .gitignore
git commit -m "添加 .gitignore"
```

### 10.2 版权保护

**在 HTML 页脚添加版权声明：**
```html
<footer>
    <div class="container">
        <p>&copy; 2025 carllllllllx. All rights reserved.</p>
        <p>未经授权不得转载或商业使用</p>
    </div>
</footer>
```

**在 GitHub 添加 LICENSE：**
- 访问仓库首页
- 点击 "Add file" → "Create new file"
- 文件名输入 `LICENSE`
- 点击 "Choose a license template"
- 推荐选择 "MIT License"（开放）或 "All Rights Reserved"（保护版权）

---

## 11. 进阶主题

### 11.1 自动化部署（CI/CD）

**使用 GitHub Actions：**

创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### 11.2 添加评论系统

**使用 Giscus（基于 GitHub Discussions）：**

1. 访问 https://giscus.app
2. 配置你的仓库
3. 复制生成的代码到 HTML 页面

### 11.3 添加联系表单

**使用 Netlify Forms（如果部署在 Netlify）：**
```html
<form name="contact" method="POST" data-netlify="true">
    <input type="text" name="name" placeholder="姓名" required>
    <input type="email" name="email" placeholder="邮箱" required>
    <textarea name="message" placeholder="留言" required></textarea>
    <button type="submit">发送</button>
</form>
```

---

## 12. 总结与反思

### 12.1 学习成果检验

完成部署后，你应该掌握了：

- ✅ **Git 版本控制** - 理解 commit、push、pull 的概念
- ✅ **静态网站托管** - 知道如何选择部署平台
- ✅ **DNS 配置** - 理解域名解析原理（如果配置了自定义域名）
- ✅ **性能优化** - 懂得基本的 Web 性能优化技巧
- ✅ **故障排查** - 能够独立解决常见部署问题

### 12.2 反思问题

**记录在你的学习日志中：**

1. 部署过程中遇到的最大挑战是什么？如何解决的？
2. 为什么选择当前的部署平台？有考虑过其他选项吗？
3. 网站的加载速度如何？有哪些可以优化的地方？
4. 如果未来需要添加后端功能（如用户注册），应该如何调整架构？
5. 这次部署经验对你未来的项目有什么启发？

---

## 📚 扩展阅读

**官方文档：**
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Netlify 文档](https://docs.netlify.com)
- [Vercel 文档](https://vercel.com/docs)
- [Git 教程](https://git-scm.com/book/zh/v2)

**推荐资源：**
- [MDN Web 性能](https://developer.mozilla.org/zh-CN/docs/Web/Performance)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
- [web.dev](https://web.dev) - Web 开发最佳实践

---

## 🎉 恭喜你！

你的作品集网站已经成功部署到互联网上了！🚀

**分享你的网站：**
- 把 URL 添加到简历中
- 在社交媒体分享（LinkedIn, Twitter, 微博等）
- 提交到作品集网站收藏集（如 [Awwwards](https://www.awwwards.com)）

**持续改进：**
- 收集用户反馈
- 定期更新作品
- 优化性能和可访问性
- 学习新技术并应用到网站中

---

**文档版本：** 1.0  
**最后更新：** 2025-10-27  
**维护者：** 课程教学团队

**有问题？** 查看 [故障排查](#7-故障排查) 或在 GitHub 仓库提交 Issue。

