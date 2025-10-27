# UI/UX 设计规范：carllllllllx 作品集

本文档是 "carllllllllx" 作品集网站的设计与工程之间的“单一事实来源”。所有样式和资产使用都必须严格遵守本文档中定义的规则。

## 1. 法务与 IP 护栏 (V2 Legal & IP Guardrails)

**状态：** M0 - 已冻结
**负责人：** Product / Legal
**对应 CDP 向量：** Vector 2: Legal & IP Guardrails

本文档是确保产品可合法商业分发的强制性规范。所有设计与开发人员必须阅读并遵守。

### 1.1. 资产分级 (Asset Tiers)

所有设计资产（图标、插图）被分为两个级别，必须在设计库 (Figma) 和代码库中明确标识：

#### A. 基线库 (Baseline Library) - [安全]

-   **标识：** `Baseline`, `Public Domain`
-   **定义：** 严格基于 1928 "Steamboat Willie" 语汇（如：Pie-eyes 豆豆眼、早期简化手套、无红短裤）。
-   **使用：** 可安全用于所有商业场景。 这是系统的默认推荐资产。
-   **示例：** `tpc-baseline-home-24`

#### B. 扩展库 (Restricted Library) - [受限]

-   **标识：** `Restricted`, `Needs Review`
-   **定义：** 包含任何现代元素（如：现代手套、现代脸谱特征）或高风险商标暗示（如：等径三圆）。
-   **使用：** 默认禁止在生产环境中使用。 必须通过 V2.2 审核流程，并获得法务部门的书面批准。
-   **示例：** `tpc-restricted-modernGlove-24`

### 1.2. 审核流程 (Review Process)

任何 `Restricted` 资产的使用都必须触发以下流程：

1.  **设计 (Design):** 提交设计稿，必须同时提供一个使用 `Baseline` 资产的“安全回退方案” (Safe Fallback)。
2.  **法务 (Legal):** 法务部门审核该特定用例的风险，并决策批准或拒绝。
3.  **版本 (Versioning):** 若获批准，该批准记录必须随代码 PR 提交，并在组件文档中明确标注“法务已批准特定用途”。

### 1.3. 使用白/黑名单 (Usage Whitelist / Blacklist)

为减少模糊地带，特此明确：

#### [黑名单] 绝对禁止 (Forbidden)

-   **等径三圆商标构型：** 任何形态的“一个大圆加两个等径小圆”的米老鼠头部剪影，无论用作加载动画还是图标。
-   **现代红短裤：** 禁止使用“红短裤 + 两个黄点”的元素。
-   **现代脸谱：** 禁止使用现代米老鼠的脸部特征。

#### [白名单] 允许 (Allowed)

-   **抽象化圆形暗示：** 允许使用“非等径”、“比例变化”或“抽象排列”的圆形组合来暗示主题（如 V1 中“设置”图标的中心孔洞）。
-   **1928 语汇：** `Baseline` 库中的所有元素。
-   **橡皮管风格：** V3 令牌中定义的动效和几何参数。

---

## 2. 设计令牌 (V3 Design Tokens)

**状态：** M1 - 修订中 (v1.1)
**负责人：** Design / Engineering
**对应 CDP 向量：** Vector 3, Vector 4

此 v1.1 更新引入了“生成语法” (Vector 3) 和“可供性替代令牌” (Vector 4)，以解决 P3 和 P4 批判性问题。

### 2.1. 色彩 (Color)

-   **用途：** 基础 UI 颜色、深/浅色模式基准、可达性状态。
-   **设计定位：** 卡通化1930s风格 = 黑白灰主导（80-85%）+ 节制的accent点缀（10-15%）
-   **令牌 (CSS):**
    ```css
    :root {
      /* === 核心黑白色（1930s基础） === */
      --color-black: #000000;      /* 纯黑：粗描边、图标 */
      --color-primary: #202020;    /* 主黑：主要文本、标题 (WCAG AA ≥ 4.5:1) */
      --color-white: #FFFFFF;      /* 纯白：背景、反白 */
      
      /* === 灰度层级（7级科学分布） === */
      --gray-900: #1A1A1A;         /* 极深灰：重阴影、深色UI */
      --gray-800: #333333;         /* 深灰：次要文本 */
      --gray-700: #4D4D4D;         /* 中深灰：边框、分隔 */
      --gray-500: #808080;         /* 中灰：禁用状态 */
      --gray-300: #B3B3B3;         /* 浅灰：分隔线、边框 */
      --gray-200: #CCCCCC;         /* 极浅灰：微妙背景 */
      --gray-100: #E6E6E6;         /* 最浅灰：卡片背景（替换过浅的#F8F8F8） */
      
      /* === Accent点缀色（卡通活力元素） === */
      --color-accent: #FF6B6B;     /* 珊瑚红：CTA、价格标签、重点强调 */
      --color-accent-dark: #E85555; /* 深红：悬停状态 */
      --color-accent-light: #FF9999; /* 浅红：背景高亮 */

      /* === 功能性色彩 === */
      --color-focus-outline: #005fcc; /* 焦点环：WCAG标准蓝（保留无障碍） */
      --opacity-disabled: 0.4;        /* 禁用状态透明度 */
      
      /* === 语义映射 === */
      --color-inverse: var(--color-white);
      --color-text-secondary: var(--gray-800);
      --color-text-disabled: var(--gray-500);
      --color-bg-secondary: var(--gray-100);
      --color-border-secondary: var(--gray-300);
      --color-overlay-background: rgba(0, 0, 0, 0.85);
    }
    ```

**色彩使用原则：**

1. **80/20配色法则：**
   - 黑白灰占据 80-85% 面积（主导视觉）
   - Accent红色占据 10-15% 面积（节制点缀）
   - 蓝色焦点环仅用于无障碍交互

2. **灰度层级规范：**
   - 使用 7 级灰度系统，禁止自定义灰色值
   - 文本对比度必须满足 WCAG AA（至少 4.5:1）
   - 深色文本用 `--gray-800`，禁用状态用 `--gray-500`

3. **Accent色使用场景：**
   - ✅ **必须使用：** CTA按钮、价格标签、购买链接
   - ✅ **可以使用：** 重点强调文本、错误提示、数字徽章
   - ❌ **禁止使用：** 大面积背景、正文文本、装饰性元素

4. **无障碍保障：**
   - 焦点环保留蓝色（`--color-focus-outline`），符合用户习惯
   - 所有交互元素必须通过灰度+描边提供可见性，不依赖色彩

5. **禁止硬编码：**
   - 任何颜色值都必须通过令牌引用
   - 禁止在样式表中直接使用 hex/rgb 值

### 2.2. 可供性替代语法 (Affordance Substitution) (V4)

-   **用途：** 在禁用 elevation/blur 的约束下，提供层级与状态可见性的替代语法。
-   **令牌 (CSS):**
    ```css
    :root {
      /* 焦点环 (Focus Ring) - 替代默认 outline */
      --focus-ring-width: 2px;
      --focus-ring-offset: 1px;
      --focus-ring-style: solid var(--color-focus-outline);
      /* 示例: box-shadow: 0 0 0 var(--focus-ring-width) var(--color-focus-outline); */

      /* 按压反馈 (Active/Press State) - 替代阴影 */
      --affordance-stroke-width-active: 3px; /* 描边增厚 */
      --affordance-scale-active: 0.97;       /* 轻微内缩 */

      /* 层级 (Hierarchy) - 替代阴影 */
      --affordance-stroke-width-level-2: 2px;  /* 描边分层 */
      --affordance-stroke-inner: var(--color-inverse); /* 双重描边 (内) */
      --affordance-stroke-outer: var(--color-primary); /* 双重描边 (外) */
    }
    ```

### 2.2. 字体 (Typography)

-   **用途：** 定义卡通风格的圆润字体系统，兼顾英文与中文特性。
-   **设计定位：** 摆脱严肃的黑白电影感，使用圆润、活泼的卡通字体匹配1930s动画美学。
-   **令牌 (CSS):**
    ```css
    :root {
      /* === 英文字体（Google Fonts） === */
      --font-display: 'Fredoka', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
      --font-body: 'Nunito', -apple-system, 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
    }
    ```

**字体使用规范：**

1. **标题/Logo：** 使用 `--font-display` (Fredoka)
   - 圆润的几何字形，高识别度
   - 字重：700（标题）、600（按钮）
   - 英文：letter-spacing `-0.02em`（略紧凑）
   - 中文：letter-spacing `0`（保持自然）

2. **正文/按钮：** 使用 `--font-body` (Nunito)
   - 优秀的可读性，友好的圆角端点
   - 字重：400（正文）、600（强调）、700（按钮）
   - 中文优化：`line-height: 1.7`（增强可读性）

3. **中文字体后备方案：**
   - **macOS/iOS：** PingFang SC（系统默认，圆润清晰）
   - **Windows：** Microsoft YaHei（圆润，中文友好）
   - **其他：** Hiragino Sans GB（泛用后备）

4. **字体加载优化：**
   ```html
   <!-- 使用 preconnect 加速 Google Fonts -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
   ```

5. **中文排版特殊处理：**
   - 中文行高 > 英文行高（`1.7` vs `1.6`）
   - 禁用英文负字间距（`letter-spacing: 0`）
   - 字重调整：中文700=粗体，但不如英文700粗

### 2.3. 生成语法与派生规则 (Generative Grammar) (V3)

-   **用途：** 定义从语义到参数的映射函数，确保跨尺度的一致性。
-   **规则 (Rules):**

    **[函数] 尺寸 -> 笔画 (Size -> Stroke):**
    -   **不变量 (Invariant):** 笔画与尺寸比例应保持在 1:12 附近 (用于 ≥ 24px)。
    -   **派生 (Derived):**
        -   `size: 24px -> stroke: var(--stroke-width-base) (2px)`
        -   `size: 32px -> stroke: var(--stroke-width-large) (2.5px)`
        -   `size: 16px -> stroke: var(--stroke-width-small) (1.5px)` (注意：1.5px 用于像素贴合，规避半像素模糊)。

    **[函数] 语义等级 -> 动效 (Semantic Level -> Motion):**
    -   **派生 (Derived):**
        -   `Level 1 (主要操作/反馈): duration: var(--motion-duration-medium) (180ms)`
        -   `Level 2 (次要/点缀): duration: var(--motion-duration-short) (120ms)`

    **[函数] 状态 -> 可供性 (State -> Affordance):**
    -   **派生 (Derived):**
        -   `state: focus: outline: none; box-shadow: 0 0 0 var(--focus-ring-width) var(--color-focus-outline);` (使用 V4 令牌)
        -   `state: active: transform: scale(var(--affordance-scale-active)); stroke-width: var(--affordance-stroke-width-active);` (使用 V4 令牌)

    **[函数] 环境 -> 动效 (Environment -> Motion):**
    -   **派生 (Derived):**
        -   `@media (prefers-reduced-motion: reduce): transition-duration: 0.01ms !important;` (基本禁用)
        -   `@media (prefers-reduced-motion: no-preference): transition-duration: var(--motion-duration-medium);` (或 short)

### 2.4. 动效 (Motion)

-   **用途：** 定义“橡皮管”风格的交互反馈 (基础值)。
-   **令牌 (CSS):**
    ```css
    :root {
      /* 基础时长 (见 V3 语法规则 #2) */
      --motion-duration-short: 120ms;   /* 用于轻微反馈 (e.g., 挤压) */
      --motion-duration-medium: 180ms;  /* 用于位移 (e.g., 箭头跳跃) */

      /* 缓动 (Easing) */
      --easing-rubber-hose: cubic-bezier(0.2, 0.8, 0.2, 1); /* 核心缓动曲线 */
      /* TODO: 增加减振版缓动 (reduced-motion easing) */

      /* 性能白名单 (Properties Whitelist) (见 V3 语法规则 #4) */
      --motion-properties-performant: transform, opacity;
    }
    ```

### 2.5. 空间 (Spacing)

-   **用途：** 统一布局、间距和网格。
-   **令牌 (CSS / Config):**
    ```css
    :root {
      /* Base Unit: 4px */
      --spacing-1: 4px;   /* 0.25rem */
      --spacing-2: 8px;   /* 0.5rem */
      --spacing-3: 12px;  /* 0.75rem */
      --spacing-4: 16px;  /* 1rem */
      --spacing-5: 20px;  /* 1.25rem */
      --spacing-6: 24px;  /* 1.5rem */
      /* ... etc. */

      /* Icon Grid */
      --grid-icon-base: 24px;
      --grid-icon-safe-margin: 2px;
    }
    ```

### 2.6. 几何 (Geometry)

-   **用途：** 统一图标和组件的"橡皮管"形态 (基础值)。
-   **令牌 (CSS / Config):**
    ```css
    :root {
      /* 基础笔画 (见 V3 语法规则 #1) */
      --stroke-width-base: 2px;    /* 24px+ 图标使用 */
      --stroke-width-small: 1.5px; /* 16px 图标使用 */
      --stroke-width-large: 2.5px; /* 32px+ 图标使用 */

      /* 橡皮管风格圆角（1930年代动画特征：非常圆润） */
      --corner-radius-base: 8px;    /* 小元素使用（按钮、标签） */
      --corner-radius-medium: 12px; /* 中等元素使用（卡片、图片） */
      --corner-radius-large: 16px;  /* 大元素使用（容器、弹窗） */

      /* 描边形态 */
      --cap-join-style: round;
    }
    ```

**圆角使用指南：**

1. **橡皮管特征：** 1930年代动画的标志性特征是"非常圆润"的转角，而非现代扁平设计的小圆角。
2. **分级使用：**
   - `--corner-radius-base` (8px)：按钮、标签、小卡片
   - `--corner-radius-medium` (12px)：图片、中等卡片、输入框
   - `--corner-radius-large` (16px)：灯箱、模态框、大容器
3. **避免过小：** 2px-4px 的圆角不符合橡皮管风格，会显得生硬。
