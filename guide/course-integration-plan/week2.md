# 第二周：逆向设计系统（从网站反推规范）

## 📋 课程基本信息

**课程名称**：从零到一：AI辅助的现代Web开发工作流（逆向工程版）  
**本周主题**：逆向设计系统（从网站反推规范）  
**课堂时长**：90分钟  
**课间作业**：5-7天  
**核心交付物**：规范化的 Figma 设计系统 + 更新的设计文档

---

## 🎯 本周学习目标

通过逆向工程方法，从已生成的网站中提取设计规律，在 Figma 中建立规范的设计系统，理解可维护性的重要性。

### 核心能力
- 设计规律的识别与提取
- Figma 变量系统操作
- Design Tokens 概念理解
- 组件化思维建立
- 设计文档规范化编写

---

## 📝 课前准备清单

### 学员必须完成

**必需工具**：
- [ ] 注册 Figma 账号（免费版即可）
- [ ] 完成第一周的所有作业（可运行的网站初稿）
- [ ] 准备展示你的网站初稿（在浏览器中能打开）

**预习内容**（可选）：
- [ ] 观看 Figma 基础操作视频
- [ ] 了解什么是 Design Tokens
- [ ] 浏览优秀设计系统案例（如 Material Design、Ant Design）

### 教师准备

**核心教学工具**：
- [ ] 创建 Figma 设计系统模板（供演示参考）
- [ ] 准备优秀学员作品展示列表（2-3位）
- [ ] 准备设计系统案例对比（有系统 vs 无系统）
- [ ] 测试 Figma 变量功能演示流程

**教学辅助材料**：
- [ ] Design Tokens 速查表
- [ ] 原子设计理论简图
- [ ] Figma 快捷键列表
- [ ] 颜色命名规范参考

---

## 📚 课堂环节（90分钟）

### 第一部分：成果展示与问题诊断（20分钟）

#### 1. 学员网站初稿展示（3-4位，共15分钟）
- **展示方式**：在浏览器中打开展示
- **庆祝成果**：你们已经有了一个可运行的网站！
- **集体观察要点**：
  - 每个网站的视觉风格
  - 颜色使用情况
  - 布局和间距
  - 交互功能

#### 2. 引入核心问题（5分钟）
提问引导学员思考：
- 假设你现在想改变主色调，需要在代码中改多少个地方？
- 如果要增加一个新页面，如何保持风格统一？
- 如果团队有多人协作，如何确保设计一致性？

**痛点可视化**：现场演示维护噩梦
- 打开一个学员的代码
- 搜索颜色值（如 `#D32F2F`）
- 展示散落在各处的硬编码
- 强调：这就是没有设计系统的后果

---

### 第二部分：逆向工程与Design Tokens（20分钟）

#### 1. 什么是逆向工程（5分钟）
- **传统方法**：先学理论 → 设计系统 → 设计稿 → 开发
- **逆向方法**：先实现 → 反推规律 → 建立系统 → 规范化
- **优势**：
  - 更符合认知规律（从具体到抽象）
  - 更有成就感（已经有成果）
  - 更容易理解（看得见摸得着）

#### 2. Design Tokens（设计令牌）核心概念（10分钟）

**什么是 Design Tokens**：
- Token = 设计决策的变量化存储
- 类比：
  - 代码中的常量
  - 音乐中的音符
  - 建筑中的标准化构件

**为什么需要 Tokens**：
- 一处修改，全局更新
- 设计与代码的桥梁
- 团队协作的共同语言
- 品牌一致性的保障

**现场演示**（打开教师的 Figma 案例）：
- 展示一个使用 Token 的设计
- 修改一个颜色 Token
- 观察整个设计瞬间更新
- 强调：这就是系统化设计的力量

#### 3. 从你的网站中识别 Tokens（5分钟）

**练习**：打开你的网站初稿，用笔记下：

**颜色系统**：
- 主色（Primary）：品牌主色调
- 点缀色（Accent）：强调色、行动号召
- 背景色（Background）：页面背景、卡片背景
- 文字色（Text）：标题、正文、辅助文字

**字体系统**：
- 字体大小：H1、H2、Body、Small
- 字体粗细：Bold、Regular、Light
- 行高：标题、正文

**间距系统**：
- Padding（内边距）
- Margin（外边距）
- Gap（元素间距）

**学员分享发现**（2-3位）

---

### 第三部分：在 Figma 中重建设计系统（30分钟）

#### 1. Figma 变量系统速成（10分钟）

**教师演示步骤**：

1. **创建新文件**
   - 打开 Figma
   - 创建新设计文件
   - 命名：`[你的名字]-Design-System`

2. **打开变量面板**
   - 点击右侧面板的 "Variables"（变量）
   - 或使用快捷键（取决于操作系统）

3. **创建颜色变量库**
   ```
   颜色组：Colors
   ├─ color-primary（主色）
   ├─ color-accent-dark（点缀深色）
   ├─ color-accent-light（点缀浅色）
   ├─ color-bg-light（浅背景）
   ├─ color-bg-dark（深背景）
   ├─ color-text-primary（主要文字）
   ├─ color-text-secondary（次要文字）
   └─ color-text-disabled（禁用文字）
   ```

4. **创建间距变量**
   ```
   间距组：Spacing
   ├─ spacing-xs: 4px
   ├─ spacing-sm: 8px
   ├─ spacing-md: 16px
   ├─ spacing-lg: 24px
   ├─ spacing-xl: 32px
   └─ spacing-2xl: 48px
   ```

5. **应用变量到元素**
   - 创建一个矩形
   - 选择元素 → Fill（填充）
   - 不选择颜色值，而是选择变量
   - 演示：修改变量值，元素自动更新

**核心要点**：
- 变量命名要语义化（color-primary 而非 color-blue）
- 建立系统而非罗列（有规律的间距序列）
- 为未来扩展留空间

#### 2. 学员实操：重建自己的设计系统（15分钟）

**任务**：
1. 在 Figma 中创建变量库
2. 将第一周识别的颜色、间距录入为变量
3. 创建简单的元素测试变量应用

**巡回指导要点**：
- 帮助解决 Figma 操作问题
- 检查变量命名是否语义化
- 确保学员理解变量的作用

#### 3. 命名规范与最佳实践（5分钟）

**颜色命名**：
- ✅ 好：`color-primary`, `color-accent`（语义化）
- ❌ 差：`color-blue`, `color-red`（具体颜色值）
- 原因：未来可能换色，但语义不变

**间距命名**：
- ✅ 好：`spacing-sm/md/lg`（相对尺寸）
- ❌ 差：`spacing-8px/16px`（具体数值）
- 原因：便于统一调整和记忆

---

### 第四部分：组件化思维与原子设计（15分钟）

#### 1. 原子设计理论简介（5分钟）

**五个层级**：

1. **原子（Atoms）**
   - Token 本身
   - 最小的设计单元
   - 例：颜色、字体、图标

2. **分子（Molecules）**
   - 简单组件
   - 由原子组成
   - 例：按钮、输入框、标签

3. **有机体（Organisms）**
   - 复杂组件
   - 由分子和原子组成
   - 例：导航栏、卡片组、表单

4. **模板（Templates）**
   - 页面布局
   - 定义内容区域
   - 例：两栏布局、三栏布局

5. **页面（Pages）**
   - 实际内容
   - 模板 + 真实数据
   - 例：首页、关于页面

**类比**：就像乐高积木
- 原子 = 基础积木块
- 分子 = 小型组合
- 有机体 = 功能模块
- 模板 = 建筑结构
- 页面 = 完整作品

#### 2. 创建核心组件（10分钟）

**教师演示：创建标准按钮组件**

步骤：
1. 创建矩形作为按钮背景
2. 添加文字图层
3. 使用 Auto Layout（自动布局）
   - 设置内边距使用间距变量
4. 应用颜色变量
   - 背景：`color-primary`
   - 文字：白色或 `color-text-on-primary`
5. 定义组件状态
   - Default（默认）
   - Hover（悬停）
   - Active（激活）
   - Disabled（禁用）
6. 转为组件（快捷键：Ctrl/Cmd + Alt + K）

**学员实操**：
- 尝试创建一个按钮或卡片组件
- 使用刚才创建的 Token 变量
- 至少定义 2 种状态

---

### 第五部分：课堂总结与作业布置（5分钟）

#### 今天学到的核心能力
- 逆向分析网站的设计规律
- 在 Figma 中用变量系统管理设计
- 组件化思维的初步建立
- 理解设计系统的价值

#### 关键洞察
- 先实现后规范，比从零学设计更有效
- 设计系统不是为了好看，是为了可维护
- Token 是设计与代码之间的桥梁
- 组件化思维让设计可复用、可扩展

#### 答疑

---

## 📋 课间作业（5-7天完成）

### 核心目标

从已生成的网站反推设计规范，在 Figma 中建立完整的设计生态，为未来迭代奠定基础。

---

### 任务1：完善 Figma 设计系统

#### 1.1 完善变量库

**颜色系统**（至少包含）：
```
颜色组：Colors
├─ Primary（主色组）
│  ├─ color-primary
│  ├─ color-primary-light
│  └─ color-primary-dark
├─ Accent（点缀色组）
│  ├─ color-accent
│  └─ color-accent-light
├─ Background（背景色组）
│  ├─ color-bg-primary
│  ├─ color-bg-secondary
│  └─ color-bg-tertiary
├─ Text（文字色组）
│  ├─ color-text-primary
│  ├─ color-text-secondary
│  └─ color-text-disabled
└─ Semantic（语义色组）
   ├─ color-success
   ├─ color-warning
   └─ color-error
```

**间距系统**：
```
间距组：Spacing
├─ spacing-xs: 4px
├─ spacing-sm: 8px
├─ spacing-md: 16px
├─ spacing-lg: 24px
├─ spacing-xl: 32px
└─ spacing-2xl: 48px
```

**字体系统**（可选）：
```
字体组：Typography
├─ font-size-h1: 48px
├─ font-size-h2: 36px
├─ font-size-h3: 24px
├─ font-size-body: 16px
└─ font-size-small: 14px
```

#### 1.2 创建核心组件（至少3个）

**必做组件**：
1. **按钮组件**
   - 包含状态：Default, Hover, Active, Disabled
   - 使用颜色和间距变量
   - 使用 Auto Layout

2. **卡片组件**
   - 包含：图片区域、标题、描述
   - 使用间距变量控制内边距
   - 使用颜色变量定义背景和文字

3. **导航栏组件**
   - 包含：Logo、导航链接
   - 定义悬停状态
   - 使用间距变量

**可选组件**：
- 输入框
- 标签（Tag）
- 图标按钮
- 页脚

#### 1.3 用组件重新设计页面

**任务**：
- 使用创建的组件，在 Figma 中重新设计至少 2 个页面
- 确保所有颜色、间距都使用变量
- 保持与原网站的视觉一致性

**页面建议**：
- 首页（Home）
- 作品集页面（Gallery/Portfolio）

---

### 任务2：更新 `design-tokens.md` 文档

根据 Figma 中的变量，规范化记录所有 Token。

**文档结构**：

```markdown
# Design Tokens 设计令牌

本文档定义了项目的设计令牌（Design Tokens），是设计系统的基础。

---

## 1. 颜色系统（Colors）

### 1.1 主色（Primary）
- `--color-primary`: #1976D2
- `--color-primary-light`: #42A5F5
- `--color-primary-dark`: #1565C0

### 1.2 点缀色（Accent）
- `--color-accent-dark`: #D32F2F
- `--color-accent-light`: #FF6659

### 1.3 背景色（Background）
- `--color-bg-primary`: #FFFFFF
- `--color-bg-secondary`: #F5F5F5
- `--color-bg-tertiary`: #EEEEEE

### 1.4 文字色（Text）
- `--color-text-primary`: #212121
- `--color-text-secondary`: #757575
- `--color-text-disabled`: #BDBDBD

### 1.5 语义色（Semantic）
- `--color-success`: #4CAF50
- `--color-warning`: #FF9800
- `--color-error`: #F44336

---

## 2. 间距系统（Spacing）

基于 4px 基准单位：

- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-2xl`: 48px

---

## 3. 字体系统（Typography）

### 3.1 字体族（Font Family）
- `--font-family-primary`: 'Inter', -apple-system, sans-serif
- `--font-family-heading`: 'Poppins', sans-serif
- `--font-family-mono`: 'Fira Code', monospace

### 3.2 字体大小（Font Size）
- `--font-size-h1`: 48px
- `--font-size-h2`: 36px
- `--font-size-h3`: 24px
- `--font-size-h4`: 20px
- `--font-size-body`: 16px
- `--font-size-small`: 14px
- `--font-size-tiny`: 12px

### 3.3 字体粗细（Font Weight）
- `--font-weight-bold`: 700
- `--font-weight-semibold`: 600
- `--font-weight-regular`: 400
- `--font-weight-light`: 300

### 3.4 行高（Line Height）
- `--line-height-tight`: 1.2
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.8

---

## 4. 圆角（Border Radius）

- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 16px
- `--radius-full`: 9999px

---

## 5. 阴影（Shadows）

- `--shadow-sm`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.1)
- `--shadow-lg`: 0 10px 15px rgba(0, 0, 0, 0.15)

---

## 6. 断点（Breakpoints）（可选）

如果支持响应式：

- `--breakpoint-mobile`: 320px
- `--breakpoint-tablet`: 768px
- `--breakpoint-desktop`: 1024px
- `--breakpoint-wide`: 1440px

---

## 使用说明

### 在 CSS 中使用

在 `style.css` 中定义：

\```css
:root {
  /* 颜色 */
  --color-primary: #1976D2;
  --color-accent-dark: #D32F2F;
  
  /* 间距 */
  --spacing-md: 16px;
  
  /* 字体 */
  --font-size-body: 16px;
}

/* 使用 */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-body);
}
\```

### 在 Figma 中使用

1. 打开变量面板（Variables）
2. 选择元素
3. 在填充/间距属性中选择对应变量

---

## 维护规范

1. **新增 Token**：先在 Figma 中测试，再更新此文档
2. **修改 Token**：评估影响范围，批量更新
3. **删除 Token**：确保无处使用后再删除
4. **版本控制**：每次重大修改记录版本号

---

**版本**：v1.0  
**最后更新**：2025-11-02
```

---

### 任务3：更新 `front-end-spec.md` 文档

补充设计系统规范部分，将第一周的初稿升级为规范化版本。

**需要新增或完善的部分**：

#### 3.1 引用 Design Tokens

在文档开头添加：
```markdown
## 设计系统参考

本项目遵循规范的设计系统，所有设计决策已提取为 Design Tokens。

详细的 Token 定义请参考：[design-tokens.md](./design-tokens.md)

设计系统 Figma 文件：[链接]
```

#### 3.2 补充组件使用指南

为每个组件添加使用规范：

```markdown
## 组件规范

### 按钮（Button）

**设计规范**：
- 高度：40px
- 内边距：`spacing-md` (16px) 左右，`spacing-sm` (8px) 上下
- 圆角：`radius-md` (8px)
- 字体大小：`font-size-body` (16px)

**状态定义**：
- Default：背景 `color-primary`，文字白色
- Hover：背景 `color-primary-dark`
- Active：背景 `color-primary-dark` + 阴影
- Disabled：背景 `color-text-disabled`，不可交互

**使用场景**：
- 主要行动号召（CTA）
- 表单提交
- 导航跳转

**代码示例**：
\```html
<button class="btn btn-primary">立即查看</button>
\```
```

#### 3.3 添加无障碍性要求

```markdown
## 无障碍性（Accessibility）

### 颜色对比度
- 正文文字与背景对比度：至少 4.5:1（WCAG AA 标准）
- 大文字（18pt+）与背景对比度：至少 3:1

### 键盘导航
- 所有交互元素可通过 Tab 键访问
- Focus 状态清晰可见（使用 `outline` 或 `box-shadow`）

### 语义化标签
- 使用 `<nav>` 包裹导航
- 使用 `<main>` 包裹主要内容
- 使用 `<button>` 而非 `<div>` 作为按钮
- 所有图片包含有意义的 `alt` 属性
```

---

### 任务4：（可选）导出 Figma 为图片

**目的**：将设计稿导出为参考图，准备第三周对照实现。

**步骤**：
1. 在 Figma 中选择页面或画板
2. 右键 → Export（导出）
3. 选择格式：PNG（推荐 2x）
4. 保存到项目的 `design/` 文件夹
5. 在文档中引用这些图片

---

## ✅ 作业提交要求

**必须完成**：
1. Figma 文件的分享链接（设置为"任何人可查看"）
2. 更新后的 `design-tokens.md`
3. 更新后的 `front-end-spec.md`
4. （可选）导出的设计稿图片

**验收标准**：
- Figma 变量系统完整（颜色、间距）
- 至少创建 3 个规范的组件
- 文档内容与 Figma 实现一致
- 所有 Token 命名语义化

**提交方式**：
- 将 Figma 链接和更新的文档整理到一起
- 在课程群中提交或发送给教师

---

## 🎯 关键成功因素

### 学员层面
1. **理解逆向工程的价值**：不是重复劳动，而是建立可维护的基础
2. **耐心操作 Figma**：第一次使用可能不熟练，多尝试
3. **注重命名规范**：语义化命名是专业设计系统的标志
4. **与第一周成果对照**：确保设计系统忠实反映网站实际情况

### 教师层面
1. **提供 Figma 操作支持**：准备常见问题解答
2. **展示优秀案例**：让学员看到设计系统的实际价值
3. **强调可维护性**：不是为了设计而设计，是为了未来的自己
4. **鼓励探索**：Figma 功能强大，鼓励学员尝试

---

## 💡 教学价值：为什么要"逆向"？

### 传统方法的问题
- 从零学设计系统：概念抽象，难以理解
- 先学理论再实践：缺乏动力，容易放弃
- 完美主义陷阱：追求完美，永远无法开始

### 逆向方法的优势
- **已有成果**：学员已经完成了网站，有成就感
- **具体到抽象**：从可见的网站提取规律，符合认知规律
- **问题驱动**：维护困难的痛点让学员理解设计系统的必要性
- **先实现后优化**：培养实战思维，避免过度设计

### 认知科学依据
- 建构主义学习理论：从已有经验出发构建新知识
- 最近发展区理论：在已完成网站的基础上提升一个层次
- 问题导向学习：通过解决实际问题（维护困难）学习新知识

---

## 📚 参考资源

### Design Tokens
- [Design Tokens 官方规范](https://www.designtokens.org/)
- [Design Tokens 入门指南](https://css-tricks.com/what-are-design-tokens/)

### 原子设计
- [Atomic Design 方法论](https://atomicdesign.bradfrost.com/)
- [原子设计：从理论到实践](https://uxdesign.cc/atomic-design-how-to-design-systems-of-components-ab41f24f260e)

### Figma 学习
- [Figma Variables 官方教程](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Figma Auto Layout 教程](https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-Auto-layout)
- [Figma 组件最佳实践](https://www.figma.com/best-practices/components-styles-and-shared-libraries/)

### 设计系统案例
- [Material Design](https://m3.material.io/)
- [Ant Design](https://ant.design/)
- [Atlassian Design System](https://atlassian.design/)

---

## 🔜 下周预告

**第三周主题**：基于设计系统的迭代开发与部署

我们将：
- 将 Figma Design Tokens 转换为 CSS 变量
- 重构代码，应用设计系统
- 学习响应式设计和无障碍性优化
- 部署网站到 GitHub Pages
- 建立系统进化思维

**请准备**：
- 完成本周所有作业（设计系统和文档）
- 思考网站还需要哪些改进
- 准备最终作品展示

---

**文档版本**：v1.0  
**最后更新**：2025-11-02

