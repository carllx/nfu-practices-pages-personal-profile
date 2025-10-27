# 产品设计课程实践计划：Figma 到 H5 全流程
**艺术家个人网站项目 | 8 周教学方案**

---

## 项目概述

**项目主题：** 为插画艺术家 carllllllllx 创建个人作品集网站  
**设计风格：** 1930 年代橡皮管动画美学  
**技术栈：** 纯 HTML5/CSS3/JavaScript（无框架、无构建工具）  
**核心工具：** Figma + VS Code + 智谱 AI + Cursor Talk to Figma MCP Server

**网站结构（4 个页面）：**
- **主页：** 艺术家介绍 + 代表作展示 + 导航
- **关于页：** 艺术家简介、创作理念、联系方式
- **插画页：** 12 张原创插画作品展示（按年份分类）
- **产品页：** 12 个衍生产品（与插画一一对应）

---

## 教学目标

1. ✅ **AI 协作能力：** 掌握与 AI Agent（分析师、PM、UX 专家）的高效沟通
2. ✅ **规范文档产出：** 生成高质量的 Brief、PRD、Front-End Spec、Architecture 文档
3. ✅ **Design Tokens 体系：** 理解并实践 Primitive/Semantic 层级的设计系统
4. ✅ **自动化驱动：** 使用 MCP Server 自动生成 Figma Design System 和代码
5. ✅ **批判性思维：** 培养对 AI 输出的质量把控和反思能力

---

## 8 周教学安排

### **第 1-2 周：项目启动与文档规范**

**📚 理论学习：**
- Design Tokens 基础概念（Primitive vs Semantic）
- AI Agent 工作机制与上下文管理
- 橡皮管动画风格的视觉文法

**🛠️ 实践任务：**
1. **环境配置：**
   - 安装 VS Code + 智谱 AI 插件
   - 配置 Cursor Talk to Figma MCP Server
   - 加载 Agent 脚本（分析师、PM、UX 专家）

2. **文档生成（已预生成，学生学习参考）：**
   - `docs/brief.md` - 项目简报（使用分析师 Agent）
   - `docs/prd.md` - 产品需求文档（使用 PM Agent）
   - **重点：** 理解 NFR 强制约束（技术栈、Design Tokens、法务护栏）

**📋 学生交付物：**
- 环境配置完成截图
- 阅读 Brief 和 PRD，提交理解笔记（500 字）

**⚠️ 关键提醒：**
- 注意智谱 AI 的**上下文 Token 限制**，对话过长时需**开启新任务**继续
- 学习如何通过 Agent 脚本约束 AI 输出质量

---

### **第 3-4 周：Design Tokens 定义与 Figma 设计**

**📚 理论学习：**
- Design Tokens 命名规范（`category.level.context.element.variant.state`）
- 颜色系统理论（主色、辅助色、中性色）
- 橡皮管风格的具体参数（3-5px 描边、24px 圆角、弹性动效）

**🛠️ 实践任务：**
1. **创建 Front-End Spec（核心任务）：**
   - 使用 UX Expert Agent 生成 `docs/front-end-spec.md`
   - 定义 **Primitive Tokens（参考层级）**：
     ```
     color.primitive.black: #000000
     spacing.primitive.md: 16px
     radius.primitive.lg: 24px
     stroke.primitive.md: 3px
     font.primitive.family.primary: 'Fredoka', sans-serif
     ```
   - 定义 **Semantic Tokens（语义层级）**：
     ```
     color.semantic.background.button.primary.default: '{color.primitive.black}'
     radius.semantic.button.primary: '{radius.primitive.lg}'
     ```

2. **质量检查清单（必须通过）：**
   - [ ] 所有 Tokens 明确标注 `primitive` 或 `semantic` 层级
   - [ ] 命名全部小写，点号分隔（`color.primitive.black`）
   - [ ] 所有值精确具体（禁止 "large", "primary" 等模糊描述）
   - [ ] Semantic Tokens 使用 `'{token.name}'` 格式引用 Primitive

**📋 学生交付物：**
- 完整的 `front-end-spec.md`（需通过教师审核）
- Token 命名一致性自查报告

**⚠️ 关键提醒：**
- `front-end-spec.md` 的质量**直接决定**后续自动化成败
- 与 AI 交互时，需**反复强调**命名规范和精确值要求

---

### **第 5-6 周：MCP Server 驱动 Figma 自动化**

**📚 理论学习：**
- Cursor Talk to Figma MCP Server 工作原理
- Figma API 与 Design System 映射关系
- 自动执行脚本的作用机制

**🛠️ 实践任务：**
1. **启用自动执行脚本（解决中断问题）：**
   - 打开 VS Code 开发者模式（`Ctrl+Shift+P` → "Toggle Developer Tools"）
   - 在终端粘贴并执行 `agent/task/mcp_auto_exec_script.txt` 中的代码
   - 目的：自动点击智谱 AI 的确认按钮，避免任务中断

2. **自动生成 Figma Design System：**
   - 加载 `agent/task/figma_design_system_task.txt` 任务脚本
   - 使用智谱 AI 驱动 MCP Server，基于 `front-end-spec.md` 自动创建：
     - **Color Styles：** `primitive/black`, `semantic/background/button/primary/default`
     - **Text Styles：** `semantic/heading/h1`, `semantic/body`
     - **Variables：** Spacing, Radius, Stroke Collections
     - **Effect Styles：** Shadow styles

3. **Figma 验证检查清单：**
   - [ ] 所有 Primitive Colors 已创建且值准确
   - [ ] 所有 Semantic Colors 已创建且引用关系正确
   - [ ] Text Styles 包含字体族、大小、字重、行高
   - [ ] Variables 按 Collections 正确分组
   - [ ] 命名规范一致（点号转斜杠：`primitive/black`）

**📋 学生交付物：**
- Figma 文件截图（展示生成的 Design System）
- 自动化执行日志与问题排查报告
- 对比手动创建 vs 自动生成的效率分析（300 字）

**⚠️ 关键提醒：**
- 如自动化失败，**优先检查** `front-end-spec.md` 质量（模糊值、命名不一致）
- 分批执行任务（如先生成 Colors，再生成 Typography），避免 Token 超限

---

### **第 7 周：代码实现与 CSS Variables 映射**

**📚 理论学习：**
- CSS Custom Properties（CSS Variables）语法
- Design Tokens 到 CSS Variables 的转换规则
- 响应式布局与移动端适配

**🛠️ 实践任务：**
1. **创建 Architecture 文档：**
   - 使用 Architect Agent 生成 `docs/architecture.md`
   - 定义 Token → CSS Variable 映射规则：
     ```css
     /* Primitive Tokens */
     :root {
       --color-primitive-black: #000000;
       --spacing-primitive-md: 16px;
       --radius-primitive-lg: 24px;
     }
     
     /* Semantic Tokens */
     :root {
       --color-semantic-background-button-primary-default: var(--color-primitive-black);
       --radius-semantic-button-primary: var(--radius-primitive-lg);
     }
     ```

2. **实现 4 个页面：**
   - 在 `pages/` 文件夹创建 HTML 文件
   - 在 `styles/main.css` 定义所有 CSS Variables
   - 使用智谱 AI 辅助生成基础代码（通过 Agent 脚本约束输出质量）
   - **关键示例：**
     ```css
     .btn--primary {
       background-color: var(--color-semantic-background-button-primary-default);
       border-radius: var(--radius-semantic-button-primary);
       padding: var(--spacing-primitive-md) var(--spacing-primitive-lg);
       transition: all var(--duration-primitive-normal) var(--easing-primitive-elastic);
     }
     ```

3. **插画-产品关联实现：**
   - 创建 `assets/data.js` 存储 12 组对应关系
   - 使用 JavaScript 动态渲染页面内容
   - 实现跨页面跳转（插画 ↔ 产品）

**📋 学生交付物：**
- 完整的 4 个 HTML 页面（可本地运行）
- `styles/main.css`（包含所有 CSS Variables）
- `assets/data.js`（12 组数据结构）

**⚠️ 关键提醒：**
- **严禁硬编码样式值**（如 `color: #000000`），必须引用 CSS Variables
- 代码需添加清晰注释，符合教学目标

---

### **第 8 周：综合项目答辩与反思**

**🛠️ 实践任务：**
1. **项目优化与测试：**
   - 响应式适配（移动端 + PC 端）
   - 加载性能优化（图片压缩、懒加载）
   - 交互体验完善（悬停动效、页面切换）

2. **答辩准备（15 分钟/组）：**
   - 展示内容：
     - 设计风格如何体现橡皮管美学（视觉文法）
     - Design Tokens 体系的定义与应用
     - Figma 自动化生成过程（截图 + 日志）
     - 代码实现中的 CSS Variables 映射
     - 12 组插画-产品的关联逻辑
   - 反思内容：
     - 与 AI Agent 协作的挑战与收获
     - `front-end-spec.md` 质量对自动化的影响
     - 规范驱动自动化的价值认知
     - 未来改进方向（如 CI/CD 集成、双向同步）

**📋 学生交付物（最终）：**
- 完整项目代码（GitHub 仓库）
- 项目文档包：
  - `docs/brief.md`
  - `docs/prd.md`
  - `docs/front-end-spec.md`
  - `docs/architecture.md`
  - `docs/12_illustration_product_list.md`（对应关系表）
- Figma 设计文件链接
- 答辩 PPT + 反思日志（1000 字）

---

## 项目文件夹架构

```
carllllllllx-portfolio/
├── agent/                    # Agent 脚本
│   ├── analyst.txt           # 分析师 Agent 指令
│   ├── pm.txt                # 产品经理 Agent 指令
│   ├── ux-expert.txt         # UX 专家 Agent 指令
│   └── tasks/                # 任务脚本
│       ├── figma-design-system-task.txt      # Figma 自动化任务
│       └── mcp-auto-exec-script.txt          # 自动执行脚本
│
├── docs/                     # 项目文档
│   ├── brief.md              # 项目简报
│   ├── prd.md                # 产品需求文档
│   ├── front-end-spec.md     # 前端规范（Design Tokens）
│   ├── architecture.md       # 架构设计（CSS Variables 映射）
│   └── 12_illustration_product_list.md  # 插画-产品对应表
│
├── pages/                    # HTML 页面
│   ├── index.html            # 主页
│   ├── about.html            # 关于页
│   ├── illustrations.html    # 插画页
│   └── products.html         # 产品页
│
├── styles/                   # 样式文件
│   └── main.css              # 全局样式（包含所有 CSS Variables）
│
├── assets/                   # 资源文件
│   ├── data.js               # 12 组插画-产品数据
│   ├── illustration/         # 12 张插画图片
│   └── products/             # 12 个产品图片
│
├── script.js                 # 全局 JavaScript
└── README.md                 # 项目说明文档
```

---

## 关键成功要素（优先级排序）

### **P0 - 必须做对，否则项目失败：**
1. **`front-end-spec.md` 质量：** 结构化 Tokens、精确值、明确本体论
2. **上下文管理：** 合理拆分 AI 对话任务，避免 Token 超限导致性能下降
3. **自动执行脚本：** 启用后才能流畅执行 MCP Server 任务

### **P1 - 核心教学目标：**
4. **Design Tokens 本体论理解：** 区分 Primitive/Semantic，理解引用关系
5. **AI 协作能力：** 通过 Agent 脚本精准约束 AI 输出
6. **规范驱动自动化：** 体验从规范到 Figma/代码的自动生成流程

### **P2 - 加分项：**
7. **批判性思维：** 反思 AI 输出质量，理解人类监督的价值
8. **代码质量：** 清晰注释、模块化、无硬编码

---

## 教学提醒与常见问题

### **关于智谱 AI 与上下文管理**
**问题：** 为什么智谱 AI 经常中断或表现下降？  
**原因：** 
- 上下文 Token 消耗过多（长对话、复杂任务）
- 智能体机制会频繁询问确认

**解决方案：**
1. **任务拆分：** 将大任务拆分为多个小任务，分别开启新对话
2. **使用自动执行脚本：** 自动点击确认按钮，避免手动干预
3. **清晰指令：** 通过 Agent 脚本提供明确约束，减少 AI 试错次数

### **关于 Front-End Spec 质量检查**
**问题：** 如何判断 `front-end-spec.md` 是否合格？  
**标准：**
- ✅ 一个开发者（或 MCP Server）读取后，**无需额外询问**即可创建所有 Tokens
- ✅ 没有模糊描述（如 "large", "primary"），全部是精确值（`16px`, `#000000`）
- ✅ 命名 100% 一致（全部小写 + 点号分隔）
- ✅ Semantic Tokens 正确引用 Primitive Tokens（`'{token.name}'` 格式）

### **关于 MCP Server 自动化失败**
**问题：** Figma Design System 生成失败或结果错误怎么办？  
**排查步骤（按优先级）：**
1. 检查 `front-end-spec.md`：是否有模糊值、命名不一致、层级不明？
2. 检查 Figma API Token：是否有效？文件权限是否足够？
3. 查看 MCP Server 日志：定位具体的解析错误或 API 调用失败
4. 分批执行：先生成 Colors，成功后再生成 Typography

---

## 学生反思引导问题

**每周提交反思日志，包含以下问题：**

**Week 3-4（Design Tokens 定义）：**
- AI 是否完全理解了 Token 本体论？你如何修正它的输出？
- 命名规范的一致性为什么如此重要？
- 定义如此精确的规范，最大的挑战是什么？

**Week 5-6（Figma 自动化）：**
- 自动化成功/失败的关键因素是什么？
- 对比手动创建 Design System，自动化的优势在哪里？
- 这个流程对你未来的设计/开发工作有何启示？

**Week 7（代码实现）：**
- CSS Variables 与 Design Tokens 的对应关系是否清晰？
- 如何确保代码中没有硬编码样式值？
- AI 生成的代码质量如何？你做了哪些修正？

**Week 8（综合反思）：**
- 在整个流程中，哪个阶段最关键？为什么？
- 与 AI Agent 协作，你的角色是什么？（Vibe CEO？质量把关者？）
- 从 "手工作坊" 到 "工业化生产"，你对规范化设计系统的理解是什么？

---

## 评分标准（100 分）

| 维度 | 占比 | 评分细则 |
|------|------|----------|
| **文档质量** | 30% | `front-end-spec.md` 的完整性、精确性、一致性 |
| **自动化成功率** | 20% | Figma Design System 自动生成的准确度 |
| **代码实现** | 25% | 4 个页面的功能完整性、CSS Variables 使用规范、无硬编码 |
| **AI 协作能力** | 10% | Agent 脚本的有效使用、上下文管理、质量把控 |
| **反思与答辩** | 15% | 反思日志深度、答辩展示质量、批判性思维 |

---

## 核心理念总结

> **"规范不是枷锁，而是自由的基础。"**  
> 当你掌握了规范化和自动化，你将从重复劳动中解放，能够将创造力投入到真正重要的地方：解决用户问题、创造独特体验。

> **"AI 是强大的工具，但需要精准的指令。"**  
> 作为 "Vibe CEO"，你的核心能力是：明确目标、强制约束、精准验证。

> **"规范驱动自动化，自动化保证一致性。"**  
> Spec → Automation → Consistency，这是现代设计系统的核心价值链。

---

**📚 相关资源：**
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

**祝你在 Design System 和 AI 协作的旅程中，收获满满！** 🚀✨

