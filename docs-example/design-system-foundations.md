# 设计系统基石 (Design System Foundations)

**文档版本：** v1.0  
**状态：** M0 - 已冻结  
**负责人：** Product / Design Lead  
**对应 CDP 向量：** Vector 1: Foundations

---

## 文档定位

本文档是 carllllllllx 作品集设计系统的"宪法"，定义了所有设计与开发决策的最高依据。当出现设计冲突或新需求时，必须以本文档中的原则为准。

---

## 1. 设计原则 (Design Principles)

所有组件、模式和视觉决策都必须遵循以下原则：

### 1.1 功能第一，主题点缀 (Function First, Theme as Accent)

**释义：**  
系统的首要使命是"任务歧义最小化"。功能性图形（如箭头、齿轮）的语义必须无条件优先于主题装饰。

**应用指南：**
- ✅ **正确：** 主题（"橡皮管"风格）通过参数（圆角、笔画）和微交互体现
- ❌ **错误：** 通过侵入性的"耳朵"或"剪影"装饰干扰功能识别
- 📐 **实践：** 使用设计令牌 `--stroke-width-base: 2px` 和 `--corner-radius-base: 2px` 来统一风格，而非改变图标的核心形态

**示例对比：**
```
✅ 好的设计：一个标准的"家"图标 + 2px 圆角 + 橡皮管动效
❌ 差的设计：一个"家"图标上方加了米老鼠耳朵装饰
```

---

### 1.2 生命力源于互动，而非噪声 (Vitality from Interaction, Not Noise)

**释义：**  
系统的"生命力"体现在对用户操作的、低开销的、有意义的即时反馈（hover, active）中。默认状态必须是静止、清晰的。

**应用指南：**
- ✅ **正确：** 动效仅在 `hover` 和 `active` 状态触发，作为用户操作的即时反馈
- ❌ **错误：** 使用循环动画、无限旋转或高开销动效作为静态装饰
- 📐 **实践：** 使用 `--motion-duration-short: 120ms` 和 `--easing-rubber-hose` 来创建快速、弹性的反馈

**代码示例：**
```css
/* ✅ 好的设计：悬停时轻微缩放 */
.gallery-item:hover {
  transform: scale(0.97);
  transition: transform 120ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* ❌ 差的设计：循环旋转 */
.icon {
  animation: spin 2s infinite linear; /* 违反原则！ */
}
```

**性能约束：**
- 动效只能使用 `transform` 和 `opacity` 属性
- 禁止使用：`filter`, `box-shadow`, `width/height` 等高开销属性
- 参考：`docs/ui-ux-spec.md` 第 2.4 节 "动效性能白名单"

---

### 1.3 参数化驱动一致性 (Consistency Driven by Parameters)

**释义：**  
一致性不是"看起来像"，而是在数学上（通过设计令牌）保持一致。

**应用指南：**
- ✅ **正确：** 使用设计令牌（CSS Custom Properties）定义所有可复用的值
- ❌ **错误：** 在代码中使用"魔数"（magic numbers）或硬编码值
- 📐 **实践：** 所有笔画、圆角、间距、颜色和动效都必须通过令牌引用

**代码示例：**
```css
/* ✅ 好的设计：使用令牌 */
.card {
  border: var(--stroke-width-base) solid var(--color-primary);
  border-radius: var(--corner-radius-base);
  padding: var(--spacing-4);
}

/* ❌ 差的设计：硬编码值 */
.card {
  border: 2px solid #202020;  /* 违反原则！ */
  border-radius: 2px;
  padding: 16px;
}
```

**令牌位置：**
- CSS 令牌：`style.css` 第 4-51 行
- 文档定义：`docs/ui-ux-spec.md` 第 2 节

---

### 1.4 法务安全优先 (Legal Safety First)

**释义：**  
我们追求"主题感"，但绝不触碰"法务红线"。

**应用指南：**
- ✅ **正确：** 优先使用"公有领域基线库"（BASELINE）资产
- ❌ **错误：** 使用未经审核的受限（RESTRICTED）资产或商标元素
- 📐 **实践：** 所有新资产必须在 `data.js` 中标记 `legalTier` 并记录在 `docs/legal-asset-audit.md`

**黑名单（绝对禁止）：**
1. ❌ 等径三圆商标构型（米老鼠头部剪影）
2. ❌ 现代红短裤（红短裤 + 两个黄点）
3. ❌ 现代脸谱特征

**参考文档：**
- `docs/ui-ux-spec.md` 第 1 节（法务与 IP 护栏）
- `docs/legal-asset-audit.md`（资产审核记录）

---

## 2. 品牌语法 (Brand Grammar)

本系统的主题风格被定义为 **"1930 年代橡皮管 (Rubber Hose) 动画风格"**，其视觉语法要素包括：

### 2.1 粗描线 (Thick Outlines)

**定义：** 默认 2px 笔画，营造高对比度和卡通感。

**实现：**
```css
--stroke-width-base: 2px;    /* 24px+ 图标使用 */
--stroke-width-small: 1.5px; /* 16px 图标使用 */
--stroke-width-large: 2.5px; /* 32px+ 图标使用 */
```

**应用场景：**
- 边框：`.card { border: var(--stroke-width-base) solid var(--color-primary); }`
- 图标：SVG 中的 `stroke-width` 属性
- 分隔线：`<hr>` 元素的 `border-width`

---

### 2.2 圆润几何 (Rounded Geometry)

**定义：** 所有端点 (cap) 和连接 (join) 均为 `round`。所有转角使用**大圆角**（8px-16px），这是1930年代橡皮管动画的标志性特征。

**实现：**
```css
--corner-radius-base: 8px;    /* 小元素：按钮、标签 */
--corner-radius-medium: 12px; /* 中等元素：卡片、图片 */
--corner-radius-large: 16px;  /* 大元素：容器、弹窗 */
--cap-join-style: round;
```

**应用场景：**
- 按钮/标签：`border-radius: var(--corner-radius-base);` (8px)
- 卡片/图片：`border-radius: var(--corner-radius-medium);` (12px)

---

### 2.3 卡通化圆润字体 (Cartoonized Typography)

**定义：** 摆脱严肃的黑白电影感，使用圆润、活泼的卡通字体匹配1930s动画美学。同时兼顾中文字体特性，确保中英文协调统一。

**设计策略：**
- **不是严格的1928黑白电影**，而是**卡通化的1930s风格**
- 字体需具备圆润端点、友好气质、高可读性
- 中文字体需与英文风格协调，避免违和感

**实现：**
```css
/* 英文字体（Google Fonts） */
--font-display: 'Fredoka', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
--font-body: 'Nunito', -apple-system, 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
```

**字体选择理由：**

1. **Fredoka（标题/Logo）：**
   - 圆润的几何字形，高识别度
   - 字重充足（400/600/700），适合层级区分
   - 字母端点圆润，匹配橡皮管几何风格

2. **Nunito（正文/按钮）：**
   - 优秀可读性，友好的圆角端点
   - 字重丰富（400/600/700/800）
   - 数字清晰，适合产品价格显示

3. **中文后备方案：**
   - **PingFang SC**（macOS/iOS）：圆润、现代、清晰
   - **Microsoft YaHei**（Windows）：圆润、中文友好
   - **Hiragino Sans GB**：泛用后备字体

**中文特殊优化：**
```css
/* 中文行高更大 */
html:lang(zh-CN) body { line-height: 1.7; }

/* 中文标题禁用负字间距 */
html:lang(zh-CN) h1,
html:lang(zh-CN) h2,
html:lang(zh-CN) h3 { letter-spacing: 0; }
```

---

### 2.4 黑白灰主导 + Accent点缀色 (Monochrome with Accent)

**定义：** 设计定位为"卡通化1930s风格"，采用黑白灰主导（80-85%）+ 节制的accent点缀色（10-15%），平衡复古感与现代UX需求。

**设计策略：**
- **不是纯粹的黑白电影**（过于严肃、缺乏活力）
- **需要accent色点缀**（CTA、价格、重点强调）
- **保留蓝色焦点环**（无障碍标准，用户习惯）

**实现：**
```css
/* 核心黑白色（1930s基础） */
--color-black: #000000;      /* 纯黑：粗描边、图标 */
--color-primary: #202020;    /* 主黑：主要文本、标题 */
--color-white: #FFFFFF;      /* 纯白：背景、反白 */

/* 灰度层级（7级科学分布） */
--gray-900: #1A1A1A;         /* 极深灰：重阴影 */
--gray-800: #333333;         /* 深灰：次要文本 */
--gray-700: #4D4D4D;         /* 中深灰：边框 */
--gray-500: #808080;         /* 中灰：禁用状态 */
--gray-300: #B3B3B3;         /* 浅灰：分隔线 */
--gray-200: #CCCCCC;         /* 极浅灰：微妙背景 */
--gray-100: #E6E6E6;         /* 最浅灰：卡片背景 */

/* Accent点缀色（卡通活力元素） */
--color-accent: #FF6B6B;     /* 珊瑚红：CTA、价格、强调 */
--color-accent-dark: #E85555; /* 深红：悬停状态 */
--color-accent-light: #FF9999; /* 浅红：背景高亮 */
```

**80/20配色法则：**
- 黑白灰占据 80-85% 面积（主导视觉）
- Accent红色占据 10-15% 面积（节制点缀）
- 蓝色焦点环仅用于无障碍交互

**Accent色使用场景：**
- ✅ **必须使用：** CTA按钮、价格标签、购买链接
- ✅ **可以使用：** 重点强调文本、错误提示、数字徽章
- ❌ **禁止使用：** 大面积背景、正文文本、装饰性元素

---

### 2.5 弹性物理 (Elastic Physics)

**定义：** 动效曲线使用 `cubic-bezier(0.2, 0.8, 0.2, 1)`，模拟"挤压与拉伸"的物理感。

**实现：**
```css
--easing-rubber-hose: cubic-bezier(0.2, 0.8, 0.2, 1);
```

**应用场景：**
- 导航链接下划线动画
- 画廊卡片悬停缩放
- 按钮按压反馈

**动效规范：**
- 主要操作：`--motion-duration-medium: 180ms`
- 次要反馈：`--motion-duration-short: 120ms`
- 无障碍：必须支持 `prefers-reduced-motion: reduce`

---

## 3. 平台对齐 (Platform Alignment)

本系统在构建时，遵守主流平台的可用性与可达性底线，同时保持独特的视觉风格。

### 3.1 合规摘要 (Compliance Summary)

#### Apple HIG
- ✅ **触控目标尺寸：** 最小 44x44pt（已应用在按钮和链接上）
- ✅ **手势：** 支持点击、悬停、焦点导航
- ✅ **导航模式：** 清晰的页面层级和面包屑

#### Material Design
- ✅ **可达性：** 焦点管理、状态反馈、键盘导航
- ✅ **响应式布局：** 基于 4px 网格系统
- ✅ **状态：** Default, Hover, Active, Focus, Disabled

#### WCAG 2.1
- ✅ **对比度：** WCAG AA 级（≥ 4.5:1）
- ✅ **焦点可见性：** 高对比度焦点环（`--color-focus-outline: #005fcc`）
- ✅ **动效控制：** 支持 `prefers-reduced-motion`
- ✅ **键盘导航：** 所有交互元素可通过 Tab 键访问

---

### 3.2 差异清单 (Differences)

我们与主流平台的**有意识偏离**：

| 维度 | Material Design | Apple HIG | 我们的设计 |
|------|-----------------|-----------|-----------|
| **阴影/深度** | 使用 elevation (box-shadow) | 使用 blur (毛玻璃效果) | ❌ **禁用**，改用粗描线和双重描边 |
| **动效缓动** | `cubic-bezier(0.4, 0.0, 0.2, 1)` (standard) | 系统默认 | ✅ `cubic-bezier(0.2, 0.8, 0.2, 1)` (rubber-hose) |
| **圆角半径** | 4dp (小组件), 8dp (卡片) | 8-12pt (iOS 风格) | ✅ 8px (基础), 12px (中等), 16px (大型) |
| **笔画宽度** | 1px (细线) | 1px (细线) | ✅ 2px (粗描线) |
| **色彩系统** | 完整的调色板（12+ 颜色） | 系统色 + 语义色 | ✅ 高对比黑白 + 节制使用强调色 |

**设计理由：**
- 粗描线和高对比是 1930 年代动画的核心特征
- 禁用阴影/模糊保持"平面卡通"的纯粹性
- 橡皮管缓动比标准缓动更具弹性和表现力

---

## 4. 实施检查清单 (Implementation Checklist)

在开发新组件或页面时，使用此清单验证合规性：

### 4.1 设计令牌使用
- [ ] 所有颜色通过 `--color-*` 令牌引用
- [ ] 所有间距通过 `--spacing-*` 令牌引用
- [ ] 所有动效通过 `--motion-*` 和 `--easing-*` 令牌引用
- [ ] 所有笔画通过 `--stroke-width-*` 令牌引用
- [ ] 所有圆角通过 `--corner-radius-*` 令牌引用

### 4.2 设计原则合规
- [ ] 功能语义清晰，无装饰性干扰
- [ ] 默认状态静止，动效仅在交互时触发
- [ ] 无硬编码值（魔数）
- [ ] 所有资产已标记 `legalTier` 并通过法务审核

### 4.3 品牌语法应用
- [ ] 使用 2px 粗描线
- [ ] 端点和转角圆润（`round`）
- [ ] 主体内容使用高对比黑白配色
- [ ] 动效使用橡皮管缓动曲线

### 4.4 可访问性
- [ ] 对比度 ≥ WCAG AA（4.5:1）
- [ ] 焦点状态可见且高对比
- [ ] 支持 `prefers-reduced-motion`
- [ ] 所有交互元素可通过键盘访问
- [ ] ARIA 属性正确使用

### 4.5 性能
- [ ] 动效仅使用 `transform` 和 `opacity`
- [ ] 图片使用 `loading="lazy"`
- [ ] 避免布局抖动（CLS < 0.1）

---

## 5. 决策框架 (Decision Framework)

当面临设计冲突时，按以下优先级排序：

1. **法务安全** > 所有其他考虑（原则 1.4）
2. **功能清晰性** > 视觉装饰（原则 1.1）
3. **可访问性** > 视觉美学（第 3.1 节）
4. **参数化一致性** > 个案定制（原则 1.3）
5. **性能** > 复杂动效（第 2.4 节）

**示例：**
> **问题：** 设计师想在加载动画中使用三个旋转的圆圈。
> 
> **决策过程：**
> 1. **法务检查：** ❌ 如果是等径三圆，违反黑名单（原则 1.4）
> 2. **替代方案：** ✅ 使用非等径圆圈或单一旋转元素
> 3. **性能检查：** ✅ 使用 `transform: rotate()` 而非 CSS `filter`
> 
> **结果：** 采用单圆旋转 + 橡皮管缓动的加载动画

---

## 6. 变更日志 (Change Log)

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|----------|--------|
| 2025-01-24 | v1.0 | 初始版本：基于前期批判性发展提案整理 | Dev Agent (James) |

---

## 附件

- **设计令牌详细定义：** `docs/ui-ux-spec.md` 第 2 节
- **法务护栏完整规范：** `docs/ui-ux-spec.md` 第 1 节
- **资产审核记录：** `docs/legal-asset-audit.md`
- **CSS 令牌实现：** `style.css` 第 4-51 行

