# 架构文档：carllllllllx 作品集

## 1. 引言

本文档概述了 carllllllllx 作品集网站的架构。该项目被特意设计为一个**多页面应用（MPA）**，使用了基础的 Web 技术：**HTML、CSS 和原生 JavaScript**。

此架构的主要目标是**清晰和简洁**，使其成为 Web 开发初学者的绝佳学习资源。它避免了现代前端框架（如 React）和复杂的构建工具，专注于网站构建的核心原则。

本架构文档专注于技术实现和结构。它采用了一个对初学者友好的多页面应用（MPA）模型。然而，项目的视觉和交互层遵循了一套专业级的、基于令牌的设计系统，这为初学者提供了一个学习如何在严格的设计规范下进行开发的机会。关于所有视觉设计、组件外观、交互模式和品牌风格的详细指南，请参阅 **`docs/ui-ux-spec.md`**。

### 1.1 变更日志

| 日期 | 版本 | 描述 | 作者 |
|------|------|------|------|
| 2025-10-24 | 1.1 | 更新架构文档以反映实际资产结构和数据模型 | Architect |
| 初始 | 1.0 | 初始架构文档 | Architect |

## 2. 架构风格：多页面应用（MPA）

该网站是一个经典的多页面应用。这意味着：
- 网站的每个页面（主页、关于等）都是一个独立的 `.html` 文件。
- 页面之间的导航由标准的 HTML `<a>` 链接处理。
- 当用户点击链接时，浏览器会从服务器请求新的 HTML 文件，并执行一次完整的页面加载。

这种方法简单直观，易于理解，因为文件结构直接映射到网站的结构。

## 3. 技术栈

-   **结构：** HTML5 用于语义化页面内容。
-   **样式：** 单一、共享的 CSS3 样式表 (`style.css`)，用于在所有页面上保持一致的外观和感觉。其所有规则均基于 UI/UX 设计规范中的设计令牌。
-   **交互与逻辑：** 原生 JavaScript 用于所有动态行为。
-   **数据管理：** 一个简单的 JavaScript 文件 (`data.js`)，将网站内容存储在全局对象中。

## 4. 文件结构

### 4.0 设计决策：为什么选择扁平化结构？

**核心原则：简洁优于复杂，清晰优于聪明**

本项目特意采用**扁平化结构**（所有核心文件在根目录），而非模块化结构（文件分类到不同文件夹）。这个决策基于以下考虑：

1. **教学目标优先** - 初学者打开项目应该立即理解文件组织，而非花时间理解文件夹层级
2. **项目规模适中** - 7 个核心文件（4 HTML + 1 CSS + 2 JS）完全适合扁平结构
3. **路径简单一致** - 所有 HTML 文件使用相同的引用路径（`href="style.css"`），无需理解 `../` 相对路径
4. **快速原型开发** - 添加新页面或修改样式无需考虑文件夹结构
5. **易于调试** - 浏览器错误信息中的路径清晰直观

> 📖 **详细分析：** 关于扁平化结构 vs 模块化结构的深入对比，请参阅 `docs/project-structure-analysis.md`

**何时考虑重构为模块化？**
- `script.js` 超过 300 行代码
- 项目增加到 10+ 个页面
- 需要多人协作开发
- 引入构建工具（Webpack, Vite 等）

**当前状态：** 扁平化结构完全满足需求，无需过早优化。

---

为简单起见，项目采用扁平化结构组织。

```
carllllllllx-portfolio/
├── index.html                  # 网站主页 [待创建]
├── about.html                  # 关于艺术家页面 [待创建]
├── illustrations.html          # 插画画廊页面 [待创建]
├── products.html               # 产品展示页面 [待创建]
├── style.css                   # 全局样式表 [已完成]
├── script.js                   # 主 JavaScript 文件 [待创建]
├── data.js                     # 数据存储文件 [已完成]
├── assets/                     # 资产文件夹
│   ├── illustration/           # 插画图片 (12张)
│   │   ├── 01-reading-light-illustration.jpg
│   │   ├── 02-rainy-voyage-illustration.jpg
│   │   ├── 03-starry-fridge-illustration.jpg
│   │   ├── 04-little-tree-illustration.jpg
│   │   ├── 05-distant-stamp-illustration.jpg
│   │   ├── 06-rooftop-cat-illustration.jpg
│   │   ├── 07-rainbow-thread-illustration.jpg
│   │   ├── 08-polar-bathtub-illustration.jpg
│   │   ├── 09-curtain-canyon-illustration.jpg
│   │   ├── 10-coffee-islands-illustration.jpg
│   │   ├── 11-book-spine-climbing-illustration.jpg
│   │   └── 12-pencil-shavings-maze-illustration.jpg
│   └── products/               # 产品图片 (12张)
│       ├── 01-cat-lamp-product.jpg
│       ├── 02-scented-candle-product.jpg
│       ├── 03-storage-box-product.jpg
│       ├── 04-humidifier-product.jpg
│       ├── 05-book-clip-product.jpg
│       ├── 06-keyboard-light-product.jpg
│       ├── 07-sewing-kit-product.jpg
│       ├── 08-bath-bomb-product.jpg
│       ├── 09-door-curtain-product.jpg
│       ├── 10-coffee-cup-set-product.jpg
│       ├── 11-desk-calendar-product.jpg
│       └── 12-pencil-sharpener-product.jpg
└── docs/                       # 项目文档
    ├── architecture.md         # 本文档
    ├── prd.md                  # 产品需求文档
    ├── brief.md                # 项目简介
    └── ui-ux-spec.md           # UI/UX 设计规范
```

### 4.1 核心文件说明

-   **`index.html`**: 网站的主页，极简设计，欢迎访客并引导探索。
-   **`about.html`**: 包含艺术家信息的页面。
-   **`illustrations.html`**: 用于展示艺术画廊的页面，动态渲染 12 张插画。
-   **`products.html`**: 用于展示产品示例的页面，动态渲染 12 个产品。
-   **`style.css`**: 整个网站的单一样式表。它包含所有布局、排版、颜色以及画廊和灯箱等组件样式的规则。严格遵循 `ui-ux-spec.md` 中定义的设计令牌。
-   **`data.js`**: 内容的集中存储地，包含插画和产品的元数据（图片路径、描述、价格等）。这将数据与表示逻辑分开。
-   **`script.js`**: 整个网站的主要 JavaScript 文件。它处理所有动态功能，包括：
    - 动态页眉渲染
    - 画廊内容渲染
    - 灯箱交互
    - 导航状态管理
-   **`assets/`**: 存储所有图片资产的文件夹，按类型（插画/产品）组织。

## 5. 数据模型

### 5.1 数据结构定义

所有动态内容存储在 `data.js` 文件中的全局 `window.APP_DATA` 对象内。该对象包含两个主要数组：

#### 5.1.1 插画数据模型

```javascript
window.APP_DATA = {
    ILLUSTRATION_IMAGES: [
        {
            id: Number,           // 唯一标识符 (1-12)
            src: String,          // 图片路径 (相对于项目根目录)
            alt: String           // 诗意的图片描述文本
        },
        // ... 共 12 个项目
    ]
}
```

**示例：**
```javascript
{
    id: 1,
    src: 'assets/illustration/01-reading-light-illustration.jpg',
    alt: '书页间流淌的光，温柔地照亮每一个深夜的梦想'
}
```

#### 5.1.2 产品数据模型

```javascript
window.APP_DATA = {
    PRODUCT_IMAGES: [
        {
            id: Number,           // 唯一标识符 (1-12)，与对应插画的 id 相同
            src: String,          // 产品图片路径
            alt: String,          // 与对应插画相同的诗意描述
            name: String,         // 产品名称
            price: String,        // 产品价格（格式：¥XXX.00）
            dimensions: String    // 产品规格/尺寸描述
        },
        // ... 共 12 个项目
    ]
}
```

**示例：**
```javascript
{
    id: 1,
    src: 'assets/products/01-cat-lamp-product.jpg',
    alt: '书页间流淌的光，温柔地照亮每一个深夜的梦想',
    name: '阅读之光猫咪台灯',
    price: '¥268.00',
    dimensions: '陶瓷底座 LED光源 高20cm'
}
```

### 5.2 插画与产品的关系

**重要概念：** 每个产品都由对应的插画启发而来。这种关系通过相同的 `id` 和 `alt` 文本体现：

- **ID 对应关系：** 插画 ID 1 对应产品 ID 1，以此类推
- **诗意连贯性：** 产品和插画共享相同的 `alt` 描述，强调灵感来源
- **命名逻辑：** 产品名称反映了插画的主题和意境

**示例关系：**
- 插画 `01-reading-light-illustration.jpg` → 产品 `01-cat-lamp-product.jpg`（阅读之光猫咪台灯）
- 插画 `10-coffee-islands-illustration.jpg` → 产品 `10-coffee-cup-set-product.jpg`（群岛咖啡杯组）

## 6. 核心概念与模式

即使没有框架，我们也使用简单的模式来保持代码的组织性和可维护性。

### 6.1. 数据分离

所有动态内容（如插画和产品列表）都存储在 `data.js` 文件中的全局 `window.APP_DATA` 对象内。

**为什么？** 这种模式将数据与显示数据的代码分离开来。要添加一幅新的插画或产品，初学者只需要编辑 `data.js` 文件，而无需接触更复杂的 HTML 或 `script.js` 文件。

**数据访问示例：**
```javascript
// 访问所有插画
const illustrations = window.APP_DATA.ILLUSTRATION_IMAGES;

// 访问所有产品
const products = window.APP_DATA.PRODUCT_IMAGES;

// 通过 ID 查找特定项目
const illustration = illustrations.find(item => item.id === 1);
```

### 6.2. 动态内容渲染

`illustrations.html` 和 `products.html` 页面上的画廊不是在 HTML 中硬编码的。相反，`script.js` 文件包含 `renderIllustrationGallery` 和 `renderProductsShowcase` 等函数，它们会：

1.  在页面加载完成后运行 (`DOMContentLoaded`)。
2.  从 `window.APP_DATA` 读取相应的数据。
3.  遍历数据并为每个项目构建 HTML 字符串。
4.  将生成的 HTML 注入到页面上正确的容器元素中。

**为什么？** 这使得画廊易于更新。只需更改 `data.js` 中的数据，相同的渲染逻辑即可适用于 12 张图片或更多图片。

**实现示例：**
```javascript
function renderIllustrationGallery() {
    const container = document.querySelector('.gallery');
    const illustrations = window.APP_DATA.ILLUSTRATION_IMAGES;
    
    const html = illustrations.map(item => `
        <div class="gallery-item" data-id="${item.id}" data-src="${item.src}" data-alt="${item.alt}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
        </div>
    `).join('');
    
    container.innerHTML = html;
}
```

### 6.3. 可复用的"类组件"函数

导航页眉在每个页面上都是相同的。`script.js` 中的 `renderHeader` 函数会动态生成它，而不是复制和粘贴 HTML。

**为什么？** 这模拟了一个可复用的组件。如果我们需要在导航中添加一个新链接，我们只需要在 `script.js` 中的一个地方进行更改，它就会自动更新到所有页面。

**实现要点：**
- 函数应检测当前页面并为相应的导航链接添加 `.active` 类
- 使用 `window.location.pathname` 或 `document.location.href` 来确定当前页面
- 页眉 HTML 应插入到每个页面的 `<header>` 元素中

### 6.4. 事件驱动的交互性（灯箱）

图片灯箱是使用 JavaScript 事件监听器实现的。

**工作流程：**
1.  `setupLightbox` 函数找到所有画廊项目和灯箱的 HTML 元素。
2.  它为每个画廊项目附加一个 `click` 事件监听器。
3.  当一个项目被点击时，监听器的回调函数被执行。此函数从被点击的项目中读取 `data-*` 属性，填充灯箱的 `<img>` 标签和标题，并将其显示样式从 `none` 更改为 `flex` 使其可见。
4.  关闭按钮和背景浮层上的事件监听器处理关闭灯箱的操作。
5.  支持 `Escape` 键关闭灯箱。

**为什么？** 这是 Web 交互中的一个基本概念。它展示了如何响应用户操作并操纵文档对象模型（DOM）来改变页面上可见的内容。

**可访问性要求：**
- 灯箱打开时，焦点应移至灯箱内容
- 支持键盘导航（Tab 键、Escape 键）
- 使用适当的 ARIA 属性（`role="dialog"`, `aria-modal="true"`）

## 7. 样式化方法与设计系统

`style.css` 文件提供了所有的视觉规则。其设计决策的详细信息和 rationale 记录在 **`docs/ui-ux-spec.md`** 中。

### 7.1 设计令牌系统

**关键原则：** 所有样式必须使用 CSS 自定义属性（设计令牌），禁止硬编码值。

**设计令牌类别：**

1. **颜色令牌：**
   ```css
   --color-primary: #202020;    /* 主要文本/描边 */
   --color-inverse: #FFFFFF;    /* 主要背景 */
   --color-accent: #FF6B6B;     /* 强调色 */
   --color-focus-outline: #005fcc; /* 焦点环 */
   ```

2. **空间令牌：**
   ```css
   --spacing-1: 4px;   /* 基础单位 */
   --spacing-2: 8px;
   --spacing-4: 16px;
   --spacing-6: 24px;
   /* ... 以 4px 为基础递增 */
   ```

3. **动效令牌：**
   ```css
   --motion-duration-short: 120ms;
   --motion-duration-medium: 180ms;
   --easing-rubber-hose: cubic-bezier(0.2, 0.8, 0.2, 1);
   ```

4. **几何令牌：**
   ```css
   --stroke-width-base: 2px;
   --corner-radius-base: 2px;
   ```

### 7.2 样式组织

- **全局样式：** 定义了 `body`、排版和用于内容居中的最大宽度容器的基本样式。所有值均使用设计令牌。
- **组件样式：** 使用简单、描述性的类名（例如 `.gallery`、`.gallery-item`、`.lightbox`）来为 UI 的特定部分设置样式。
- **响应式设计：** 画廊使用现代的 CSS 网格布局 (`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));`)，根据屏幕宽度自动调整列数，使其无需复杂的媒体查询即可实现响应式。

### 7.3 可访问性与可供性

根据 UI/UX 规范的 V4 可供性替代语法：

- **焦点状态：** 使用自定义焦点环替代默认 outline
  ```css
  a:focus {
      outline: none;
      box-shadow: 0 0 0 var(--focus-ring-width) var(--color-focus-outline);
  }
  ```

- **交互反馈：** 使用 transform 和描边变化而非阴影
  ```css
  .gallery-item:hover {
      transform: scale(var(--affordance-scale-active));
  }
  ```

### 7.4 法务与 IP 护栏

**重要：** 本项目遵守严格的 IP 护栏规范（详见 `ui-ux-spec.md`）：

- ✅ **允许：** 使用基于 1928 "Steamboat Willie" 语汇的设计元素
- ❌ **禁止：** 等径三圆商标构型、现代米老鼠元素
- 所有资产必须来自"基线库 (Baseline Library)"

## 8. 实现指南

### 8.1 待创建文件清单

以下文件需要根据本架构文档创建：

1. **`index.html`** - 主页
   - 极简设计
   - 欢迎信息和艺术家名字
   - CTA 按钮引导至插画和产品页面

2. **`about.html`** - 关于页面
   - 艺术家简介
   - 个人照片（如有）
   - 技能和联系方式

3. **`illustrations.html`** - 插画画廊页面
   - 画廊容器 (`<div class="gallery">`)
   - 灯箱结构
   - 由 JavaScript 动态填充内容

4. **`products.html`** - 产品展示页面
   - 产品网格容器
   - 灯箱结构
   - 显示产品信息（名称、价格、规格）

5. **`script.js`** - 主 JavaScript 文件
   - `renderHeader()` - 渲染页眉和导航
   - `renderIllustrationGallery()` - 渲染插画画廊
   - `renderProductsShowcase()` - 渲染产品展示
   - `setupLightbox()` - 设置灯箱交互
   - `init()` - 初始化函数

### 8.2 HTML 页面结构模板

所有 HTML 页面应遵循以下基本结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 - carllllllllx</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 页眉由 JavaScript 动态生成 -->
    <header></header>
    
    <!-- 主内容区域 -->
    <main class="container">
        <!-- 页面特定内容 -->
    </main>
    
    <!-- 页脚 -->
    <footer>
        <div class="container">
            <p>&copy; 2025 carllllllllx. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- 灯箱结构（仅在画廊页面） -->
    <div class="lightbox" id="lightbox">
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    </div>
    
    <!-- JavaScript 文件 -->
    <script src="data.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### 8.3 JavaScript 函数规范

**代码组织原则：**

虽然所有代码在单一 `script.js` 文件中，但应该有清晰的内部组织：

```javascript
// ============================================
// carllllllllx 作品集 - 主 JavaScript 文件
// ============================================

// -------------------- 配置常量 --------------------
const CONFIG = {
    LIGHTBOX_ID: 'lightbox',
    GALLERY_SELECTOR: '.gallery',
    ACTIVE_CLASS: 'active'
};

// -------------------- 工具函数 --------------------
// 获取当前页面、DOM 查询等辅助函数

// -------------------- 页眉渲染 --------------------
// renderHeader() 函数

// -------------------- 画廊渲染 --------------------
// renderIllustrationGallery() 和 renderProductsShowcase() 函数

// -------------------- 灯箱功能 --------------------
// setupLightbox() 函数

// -------------------- 初始化 --------------------
// init() 函数和事件监听器

```

**为什么不拆分成多个文件？**
- 当前代码量约 150-200 行，单文件完全可管理
- 避免文件加载顺序问题
- 减少 HTTP 请求（性能优化）
- 初学者更容易理解完整流程

**何时考虑拆分？**
- 代码超过 300 行
- 需要复用某些功能模块
- 引入模块化构建工具

---

#### 8.3.1 页眉渲染函数

```javascript
function renderHeader() {
    const header = document.querySelector('header');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navItems = [
        { href: 'index.html', text: '首页' },
        { href: 'about.html', text: '关于' },
        { href: 'illustrations.html', text: '插画' },
        { href: 'products.html', text: '产品' }
    ];
    
    const navHTML = navItems.map(item => {
        const activeClass = currentPage === item.href ? 'active' : '';
        return `<li><a href="${item.href}" class="${activeClass}">${item.text}</a></li>`;
    }).join('');
    
    header.innerHTML = `
        <div class="container header-content">
            <div class="logo">carllllllllx</div>
            <nav>
                <ul>${navHTML}</ul>
            </nav>
        </div>
    `;
}
```

#### 8.3.2 画廊渲染函数

```javascript
function renderIllustrationGallery() {
    const container = document.querySelector('.gallery');
    if (!container) return;
    
    const illustrations = window.APP_DATA.ILLUSTRATION_IMAGES;
    
    const html = illustrations.map(item => `
        <div class="gallery-item" 
             data-id="${item.id}" 
             data-src="${item.src}" 
             data-alt="${item.alt}"
             tabindex="0"
             role="button"
             aria-label="查看 ${item.alt}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
        </div>
    `).join('');
    
    container.innerHTML = html;
}
```

#### 8.3.3 灯箱设置函数

```javascript
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // 打开灯箱
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.dataset.src;
            const alt = item.dataset.alt;
            
            lightboxImage.src = src;
            lightboxImage.alt = alt;
            lightboxCaption.textContent = alt;
            
            lightbox.style.display = 'flex';
            lightbox.setAttribute('aria-hidden', 'false');
            closeBtn.focus();
        });
    });
    
    // 关闭灯箱
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Escape 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}
```

### 8.4 开发工作流程

1. **阶段 1：HTML 页面创建**
   - 创建 `index.html`（主页）
   - 创建 `about.html`（关于页面）
   - 创建 `illustrations.html`（插画画廊）
   - 创建 `products.html`（产品展示）

2. **阶段 2：JavaScript 实现**
   - 创建 `script.js`
   - 实现页眉渲染功能
   - 实现画廊渲染功能
   - 实现灯箱交互功能

3. **阶段 3：测试与优化**
   - 测试所有页面导航
   - 测试画廊和灯箱功能
   - 验证响应式设计
   - 检查可访问性（键盘导航、屏幕阅读器）

4. **阶段 4：内容填充**
   - 添加关于页面的实际内容
   - 确认所有图片路径正确
   - 验证产品信息准确性

## 9. 性能与优化

### 9.1 图片优化

- 使用 `loading="lazy"` 属性延迟加载画廊图片
- 确保图片文件大小合理（建议 < 500KB）
- 考虑使用 WebP 格式以获得更好的压缩率

### 9.2 代码优化

- 最小化 DOM 操作
- 使用事件委托减少事件监听器数量
- 避免在循环中进行昂贵的 DOM 查询

### 9.3 缓存策略

- 利用浏览器缓存静态资源
- 考虑添加适当的缓存头（在部署时）

## 10. 部署注意事项

### 10.1 文件路径

- 所有资源路径使用相对路径
- 确保 `assets/` 文件夹结构在部署环境中保持一致

### 10.2 浏览器兼容性

- 目标浏览器：Chrome, Firefox, Safari, Edge（最新版本）
- CSS Grid 和 Flexbox 在所有现代浏览器中都有良好支持
- CSS 自定义属性（变量）在所有现代浏览器中都有支持

### 10.3 托管建议

适合的托管平台：
- GitHub Pages（免费，适合静态网站）
- Netlify（免费层，自动部署）
- Vercel（免费层，优秀的性能）
- 任何支持静态 HTML 的 Web 服务器

## 11. 下一步行动

### 11.1 立即任务

1. ✅ **已完成：** `data.js` - 数据文件已创建并包含所有 12 个插画和产品
2. ✅ **已完成：** `style.css` - 样式表已创建并遵循设计令牌系统
3. ⏳ **待办：** 创建 `script.js` - 实现所有动态功能
4. ⏳ **待办：** 创建 HTML 页面（index, about, illustrations, products）

### 11.2 开发者交接

**给开发者的关键信息：**

- 📁 **数据源：** 所有内容数据在 `data.js` 中，通过 `window.APP_DATA` 访问
- 🎨 **样式系统：** 必须使用 CSS 变量（设计令牌），禁止硬编码值
- 🖼️ **资产路径：** 图片位于 `assets/illustration/` 和 `assets/products/`
- ♿ **可访问性：** 实现键盘导航和适当的 ARIA 属性
- 📐 **响应式：** CSS Grid 自动处理响应式布局
- 🎯 **焦点：** 简洁、初学者友好的代码，充分注释

### 11.3 质量检查清单

在完成开发后，验证以下项目：

- [ ] 所有 4 个 HTML 页面都能正常加载
- [ ] 导航在所有页面间正常工作
- [ ] 插画画廊显示所有 12 张图片
- [ ] 产品展示显示所有 12 个产品及其信息
- [ ] 灯箱功能正常（打开、关闭、Escape 键）
- [ ] 响应式设计在移动设备上正常工作
- [ ] 所有交互元素可通过键盘访问
- [ ] 焦点状态清晰可见
- [ ] 图片有适当的 alt 文本
- [ ] 代码有充分的注释
- [ ] 遵守 IP 护栏规范（仅使用基线库资产）

---

**文档版本：** 1.1  
**最后更新：** 2025-10-24  
**维护者：** Architect (Winston)