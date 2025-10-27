# 🎨 carllllllllx 作品集网站 - 教学实践项目

> **一个基于 1930 年代橡皮管动画风格的艺术家个人网站教学项目**  
> 学习 Web 开发基础，掌握 Design System 规范，体验 AI 驱动的开发流程

---

## 📖 项目简介

这是一个**供学生学习的 Web 开发实践项目**，旨在通过构建一个真实的艺术家作品集网站，学习：

- ✅ **纯 HTML5/CSS3/JavaScript** 开发（无框架依赖）
- ✅ **Design Tokens 设计系统**（Primitive/Semantic 层级）
- ✅ **AI Agent 协作开发**（智谱 AI + Cursor Talk to Figma）
- ✅ **规范驱动的自动化流程**（从设计规范到 Figma/代码）
- ✅ **响应式设计与可访问性**（WCAG AA 标准）

### 🎯 项目特色

**设计风格：** 1930 年代橡皮管 (Rubber Hose) 动画美学

- 粗描线（3-5px）、极端圆角（24px+）、弹性动效
- 黑白灰主导 + 红色点缀（类似早期迪士尼作品）

**网站结构：** 4 个页面，12 组作品

- **主页** (`index.html`) - 艺术家介绍与导航
- **关于页** (`about.html`) - 个人简介与创作理念  
- **插画页** (`illustrations.html`) - 12 张原创插画展示
- **产品页** (`products.html`) - 12 个衍生产品（与插画一一对应）

**技术特点：** 教学友好的扁平化结构

- 所有核心文件在根目录，路径简单清晰
- 单一 CSS 文件 (`style.css`)，使用 CSS Variables 实现 Design Tokens
- 纯原生 JavaScript，无需构建工具

---

## 📂 项目结构说明

```text
carllllllllx-portfolio/
│
├── 📄 核心文件（学生需完成）
│   ├── index.html              # 主页 [待完成]
│   ├── about.html              # 关于页 [待完成]
│   ├── illustrations.html      # 插画页 [待完成]
│   ├── products.html           # 产品页 [待完成]
│   ├── style.css               # 全局样式 [待完成]
│   ├── script.js               # 主脚本 [待完成]
│   └── data.js                 # 数据文件 [已完成✓]
│
├── 📁 assets/                  # 资源文件 [已提供]
│   ├── illustration/           # 12 张插画图片
│   └── products/               # 12 张产品图片
│
├── 📚 docs/                    # 项目文档（最终结果示例）
│   ├── brief.md                # 项目简报
│   ├── prd.md                  # 产品需求文档
│   ├── front-end-spec.md       # 前端规范（Design Tokens）
│   ├── architecture.md         # 架构设计文档
│   └── design-system-foundations.md  # 设计系统基石
│
├── 🎓 guide/                   # 教学指南
│   ├── teaching-plan.md        # 8 周教学计划 ⭐ 从这里开始
│   ├── best-practices-designSysterm.md  # 设计系统最佳实践
│   ├── tech-plan.md            # 技术实施计划
│   ├── auto-click-helper/      # 自动点击辅助工具
│   │   ├── script.js           # 自动点击脚本
│   │   └── README.md           # 使用说明
│   ├── figma-variable-converter/  # Figma 变量转换器
│   │   ├── agent-prompt.md     # Agent 指令
│   │   └── README.md           # 使用说明
│   └── frontend-spec-enhancer/    # 前端规范增强器
│       ├── agent-prompt.md     # Agent 指令
│       └── README.md           # 使用说明
│
├── 🤖 agents/                  # AI Agent 脚本
│   ├── analyst.txt             # 分析师 Agent 指令
│   ├── pm.txt                  # 产品经理 Agent 指令
│   ├── ux-expert.txt           # UX 专家 Agent 指令
│   ├── architect.txt           # 架构师 Agent 指令
│   ├── dev.txt                 # 开发者 Agent 指令
│   └── tasks/                  # 任务脚本
│       ├── figma-var-converter.md           # Figma 变量转换器
│       └── ux-front-end-spec-plus.md        # UX 规范增强指令
│
└── 📦 exports/                 # 导出文件
    └── Figma-Var-collection.json  # Figma 变量集合
```

### 🔍 关键文件说明

| 文件/文件夹 | 状态 | 说明 |
|------------|------|------|
| `data.js` | ✅ 已完成 | 包含 12 组插画-产品数据，开箱即用 |
| `assets/` | ✅ 已提供 | 24 张高质量图片（12 插画 + 12 产品） |
| `docs/` | ✅ 参考 | **最终结果示例**，展示完成后的文档标准 |
| `guide/` | ✅ 必读 | **教学指南**，从这里开始你的学习之旅 |
| `agents/` | ✅ 工具 | AI Agent 脚本，辅助文档和代码生成 |
| `*.html` | ⏳ 待完成 | 你需要创建的 4 个页面 |
| `style.css` | ⏳ 待完成 | 你需要实现的全局样式（基于 Design Tokens） |
| `script.js` | ⏳ 待完成 | 你需要编写的交互逻辑 |

---

## 🚀 快速开始

### 1️⃣ **阅读教学计划**（必读）

**👉 首先打开 `guide/teaching-plan.md`**

这是你的学习路线图，包含：

- 📅 8 周完整教学计划
- 🎯 每周学习目标与任务清单
- 📋 质量检查清单（Checklist）
- 💡 反思引导问题
- ⚠️ 常见问题与解决方案

### 2️⃣ **配置开发环境**

**必需工具：**

- **VS Code** - 代码编辑器
- **智谱 AI 插件** - AI 辅助开发
- **Cursor Talk to Figma MCP Server** - Figma 自动化工具
- **Live Server** 插件 - 本地预览（推荐）

**AI Agent 脚本加载：**

1. 打开 `agents/` 文件夹
2. 按需加载 Agent 脚本（analyst.txt, pm.txt, ux-expert.txt 等）
3. 在 VS Code 中使用智谱 AI 插件调用这些 Agent

### 3️⃣ **理解项目文档**（学习参考）

**`docs/` 文件夹作用：**  
这些文档展示了**项目完成后应该达到的标准**，你可以：

- ✅ **参考学习** - 理解专业项目的文档结构  
- ✅ **质量对标** - 将你生成的文档与示例对比  
- ✅ **复用模板** - 基于示例创建自己的项目文档  

**核心文档阅读顺序：**

1. `brief.md` - 理解项目愿景和目标
2. `prd.md` - 了解功能需求和约束
3. `design-system-foundations.md` - 掌握设计原则
4. `front-end-spec.md` - 学习 Design Tokens 体系 ⭐ 最重要
5. `architecture.md` - 理解技术实现

### 4️⃣ **开始开发**

#### **阶段 1：创建 Design Tokens（Week 3-4）**

1. 使用 `agents/ux-expert.txt` 生成你的 `front-end-spec.md`
2. 定义 Primitive Tokens（颜色、间距、圆角等）
3. 定义 Semantic Tokens（引用 Primitive）
4. **质量检查：**

   - [ ] 所有 Tokens 有明确的层级标注（primitive/semantic）
   - [ ] 命名全部小写，点号分隔（`color.primitive.black`）
   - [ ] 所有值精确具体（`#000000`, `16px`，不要 "large"）
   - [ ] Semantic 引用 Primitive（`'{color.primitive.black}'` 格式）

#### **阶段 2：自动生成 Figma Design System（Week 5-6）**

1. 启用 `agents/tasks/` 中的自动执行脚本
2. 使用智谱 AI + MCP Server 驱动 Figma 自动化
3. 验证生成的 Color Styles、Text Styles、Variables
4. 记录自动化过程和问题排查

#### **阶段 3：实现网页代码（Week 7）**

1. 将 Design Tokens 映射为 CSS Variables
2. 实现 4 个 HTML 页面（使用 `data.js` 中的数据）
3. 编写 JavaScript 交互逻辑
4. **关键规则：严禁硬编码样式值**（必须使用 CSS Variables）

#### **阶段 4：测试与优化（Week 8）**

1. 响应式适配（移动端 + PC 端）
2. 可访问性测试（键盘导航、屏幕阅读器）
3. 性能优化（图片懒加载、动画性能）
4. **部署到互联网** - 📖 查看 `guide/deployment-guide.md`
5. 准备项目答辩

---

## 📚 学习资源

### 核心文档

| 文档 | 用途 |
|------|------|
| `guide/teaching-plan.md` | 8 周教学计划（完整路线图） |
| `guide/deployment-guide.md` | 部署指南（GitHub Pages/Netlify/Vercel） ⭐ 新增 |
| `guide/best-practices-designSysterm.md` | Design System 深度教程 |
| `docs/front-end-spec.md` | Design Tokens 标准示例 |
| `docs/architecture.md` | 技术架构参考 |

### AI Agent 使用

#### 场景 1：生成项目文档

```text
加载 agents/analyst.txt → 生成 Brief
加载 agents/pm.txt → 生成 PRD
加载 agents/ux-expert.txt → 生成 Front-End Spec
加载 agents/architect.txt → 生成 Architecture
```

#### 场景 2：Figma 自动化

```text
加载 agents/tasks/figma-design-system-task.txt
使用 Cursor Talk to Figma MCP Server
基于 front-end-spec.md 自动生成 Design System
```

#### 场景 3：代码辅助

```text
加载 agents/dev.txt
根据 Design Tokens 生成 HTML/CSS 代码
确保代码符合规范（无硬编码）
```

### 外部资源

- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [WCAG 2.1 指南](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ⚠️ 重要提醒

### 关于智谱 AI 与上下文管理

**问题：** AI 对话过长时性能下降，经常中断  
**原因：** 上下文 Token 消耗过多  
**解决方案：**

1. ✅ **任务拆分** - 将大任务拆成多个小任务，分别开启新对话
2. ✅ **使用自动执行脚本** - 自动点击确认按钮（见 teaching-plan.md Week 5-6）
3. ✅ **清晰指令** - 通过 Agent 脚本提供明确约束，减少 AI 试错

### 关于 Front-End Spec 质量

**这是整个项目成败的关键！**

`front-end-spec.md` 的质量直接决定：

- ✅ Figma Design System 能否自动生成
- ✅ CSS Variables 能否准确映射
- ✅ 设计与代码能否保持一致

**质量标准：**

- [ ] 一个开发者读取后，无需额外询问即可创建所有 Tokens
- [ ] 没有模糊描述（如 "large", "primary"）
- [ ] 命名 100% 一致（全部小写 + 点号分隔）
- [ ] Semantic Tokens 正确引用 Primitive Tokens

### 关于法务护栏

**重要：** 本项目使用 1928 年《威利号汽船》公有领域素材

**✅ 允许使用：**

- 1930 年代橡皮管动画风格（粗线条、圆润几何）
- 黑白灰配色 + 简单点缀色
- 基础几何形状和手绘质感

**❌ 严格禁止：**

- 现代迪士尼米老鼠形象（圆耳朵 + 红短裤）
- 现代版米妮、唐老鸭等角色
- 迪士尼商标和受保护元素

所有图片资源已经过法务审查，使用 `data.js` 中的数据即可。

---

## 📊 评估标准

### 最终项目评分（100 分）

| 维度 | 占比 | 评分细则 |
|------|------|----------|
| **文档质量** | 30% | `front-end-spec.md` 的完整性、精确性、一致性 |
| **自动化成功率** | 20% | Figma Design System 自动生成的准确度 |
| **代码实现** | 25% | 4 个页面功能完整、CSS Variables 规范、无硬编码 |
| **AI 协作能力** | 10% | Agent 脚本有效使用、上下文管理、质量把控 |
| **反思与答辩** | 15% | 反思日志深度、答辩展示质量、批判性思维 |

### 学习目标自查

完成项目后，你应该能够：

- ✅ 独立创建结构化的 Design Tokens 体系
- ✅ 使用 AI Agent 高效生成规范文档
- ✅ 实现从设计规范到代码的自动化流程
- ✅ 编写符合 Web 标准的响应式网页
- ✅ 理解 "规范驱动自动化" 的价值

---

## 🤝 如何使用本项目

### 教师使用建议

1. **Week 1-2** - 让学生配置环境，阅读 `guide/teaching-plan.md`
2. **Week 3-4** - 重点辅导 `front-end-spec.md` 的创建（检查质量）
3. **Week 5-6** - 演示 MCP Server 自动化流程，排查问题
4. **Week 7** - Code Review，检查是否使用 CSS Variables
5. **Week 8** - 组织答辩，收集反思日志

### 学生学习路径

**自学模式：**

1. 按照 `guide/teaching-plan.md` 的 8 周计划自学
2. 遇到问题查看教学指南中的 FAQ 部分
3. 参考 `docs/` 中的示例文档对标质量

**课堂模式：**

1. 跟随教师的教学进度
2. 每周提交任务清单中的交付物
3. 参加 Code Review 和小组讨论

**进阶挑战：**

- 添加新页面（如联系页面、博客）
- 增加新组件（如轮播图、表单）
- 实现暗色模式（Dark Mode）
- 集成真实后端 API

---

## 💡 核心理念

> **"规范不是枷锁，而是自由的基础。"**  
> 当你掌握了规范化和自动化，你将从重复劳动中解放，能够将创造力投入到真正重要的地方。

> **"AI 是强大的工具，但需要精准的指令。"**  
> 作为 "Vibe CEO"，你的核心能力是：明确目标、强制约束、精准验证。

> **"从手工作坊到工业化生产。"**  
> 现代 Web 开发不是凭感觉写代码，而是基于规范构建系统，通过自动化保证一致性。

---

## 📞 获取帮助

### 常见问题

**Q: 为什么 AI 生成的内容不符合要求？**  
A: 检查是否加载了正确的 Agent 脚本，并给出明确的约束指令。

**Q: Figma 自动化失败怎么办？**  
A: 按优先级检查：1) `front-end-spec.md` 质量，2) MCP Server 配置，3) Figma API 权限。

**Q: 如何确保代码没有硬编码？**  
A: 全局搜索 CSS 文件中的 `#`（颜色）和 `px`（尺寸），确保都来自 `var(--token-name)`。

**Q: 项目规模太大，如何分解任务？**  
A: 参考 `guide/teaching-plan.md` 的周次划分，每周聚焦一个核心目标。

### 更多资源

- 📖 完整教学指南：`guide/teaching-plan.md`
- 📖 Design System 详解：`guide/best-practices-designSysterm.md`
- 📖 技术实施计划：`guide/tech-plan.md`
- 📁 示例文档：`docs/` 文件夹

---

## 📜 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2025-10-27 | 初始版本，包含完整教学框架和资源 |

---

## 🎓 最终寄语

这个项目不仅仅是完成一个网站，更是学习一套**现代化 Web 开发思维方式**：

1. **规范先行** - 先定义 Design System，再开始编码
2. **自动化驱动** - 让工具基于规范生成代码，而非手工重复
3. **AI 协作** - 将 AI 作为助手，提升效率，但人类把控质量
4. **批判性思维** - 不盲目接受 AI 输出，理解背后的原理

**准备好了吗？打开 `guide/teaching-plan.md`，开始你的学习之旅！** 🚀✨

---

**License:** MIT  
**Maintainer:** Product Design Course Team  
**Contact:** 如有问题请联系课程教师
