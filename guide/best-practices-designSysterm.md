# B-mad Design System 实践模拟：学生中心教学指南

## **项目概述 (Project Overview)**

**项目背景:** 为艺术家 carllllllllx 创建一个个人作品集网站，采用"1930 年代橡皮管 (Rubber Hose) 动画风格"。

**核心教学目标:**
1. ✅ **正确的 AI 协作:** 学会与不同角色的 AI Agents（Analyst, PM, UX Expert, Architect）进行有效、精准的沟通
2. ✅ **规范文档产出:** 按 B-mad 标准生成高质量的 `brief.md`, `prd.md`, `front-end-spec.md`, `architecture.md`
3. ✅ **自动化驱动:** 确保 `front-end-spec.md` 能成功驱动 `cursor-talk-to-figma` MCP Server 自动创建 Figma Design System
4. ✅ **批判性思维:** 培养对 AI 协作过程的反思能力，理解规范的价值

**项目约束 (MVO - Minimum Viable Ontology):**
- 🎨 **风格:** 1930s 橡皮管动画美学
- 💻 **技术栈:** 纯 HTML5/CSS3/JavaScript (ES6+)，无框架、无构建工具
- 🎓 **教学友好:** 适合 Web 开发初学者
- ⚖️ **法务安全:** 使用公有领域素材 (1928 Steamboat Willie)

**核心成功要素 (Critical Success Factors):**
- 🎯 **P1 - 可执行的 `front-end-spec.md`:** 结构化 Tokens、明确本体论、精确值（这是 Figma 自动化的**唯一关键输入**）
- 🎯 **P2 - Token 本体论与映射规则:** 明确 Reference/Semantic 层级，定义清晰的命名规范
- 🎯 **P3 - 强制项目约束 (NFRs):** 在 `prd.md` 中明确技术栈、强制 Design Tokens、法务护栏

---

## **模拟流程 (Simulation Process)**

### **阶段 1: 项目启动与初期分析 (Phase 1: Project Initiation & Initial Analysis)** 🚀

**Agent:** `analyst` (Mary)  
**核心目标:** 明确项目愿景、风格定位、技术约束，初步引入 Design Tokens 作为规范基础的概念

#### **交互步骤:**

1. **启动 B-mad:**
   ```bash
   # 在项目目录中启动 B-mad
   *agent analyst
   ```

2. **【第一轮交互】项目需求说明:**
   * **你的指令 (User Input):**  
     > "你好 Mary，我想为艺术家 carllllllllx 创建一个个人作品集网站。目标是复刻 **1930 年代橡皮管 (Rubber Hose) 动画风格**，类似早期迪士尼（如 1928 年的 Steamboat Willie）。项目需要足够简单，**适合 Web 开发初学者学习**，因此技术栈限制为**纯 HTML/CSS/JavaScript，不使用任何框架或构建工具**。请帮我进行初步分析和构思。"

   * **`analyst` 的响应:** Mary 会询问更多细节：
     - 目标用户是谁？
     - 主要展示内容是什么（插画、产品、简历）？
     - 有无竞品或参考网站？
     - 核心价值主张是什么？

3. **【第二轮交互】细节补充:**
   * **你的指令 (User Input):**  
     > "目标用户有三类：**艺术爱好者**（欣赏独特风格）、**潜在客户**（购买作品或合作）、**初级 Web 开发者**（学习项目代码）。主要展示 **12 幅插画** 和 **12 件衍生产品**。重点是**独特的视觉风格**和**教学价值**。目前没有明确竞品，主要参考早期迪士尼动画短片的美学，以及公有领域的 Steamboat Willie 元素。"

4. **【第三轮交互】头脑风暴:**
   * **你的指令 (User Input):**  
     > "请使用 `*brainstorm` 帮我构思网站的核心页面和特色功能。重点围绕两个主题：  
     > 1. **'橡皮管动画'美学**（如何在 Web 中体现粗描边、圆润几何、弹性动效？）  
     > 2. **'教学友好'**（如何让代码易读、结构清晰？）  
     > 记住，这是一个 MVO 项目，不要过于复杂。"

   * **Mary 的头脑风暴可能包括:**
     - 页面结构：首页、插画集、产品集、关于页面
     - 特色功能：悬停弹性动画、滚动视差、复古滤镜效果
     - 教学要点：清晰的 CSS Variables、注释完善的代码、模块化 JS

5. **【第四轮交互】创建项目简介:**
   * **你的指令 (User Input):**  
     > "头脑风暴很有启发！但我注意到有些功能可能过于复杂（如滚动视差）。现在请使用 `*create-project-brief`，整合我们的讨论，创建项目简介 (`brief.md`)。请在简介中：  
     > - **明确技术栈约束**（纯 HTML/CSS/JS）  
     > - **初步提及** Design Tokens 将作为样式规范和一致性的基础（为后续 Design System 奠基）  
     > - **强调法务安全**（使用 1928 公有领域素材）  
     > - **保持简单**（MVO 范围）"

   * **`analyst` 的响应:** Mary 使用 `project-brief-tmpl.yaml` 模板，与你交互式地填充 `brief.md`。

#### **输出文档:** `docs/brief.md`

#### **🎓 学生反思点 (Reflection Questions):**
> 💭 **思考 1:** Mary (AI) 如何理解和转化 "橡皮管风格" 和 "教学友好" 这些相对主观的概念？她的理解是否与你的预期一致？  
> 💭 **思考 2:** 头脑风暴的结果是否超出了 "简单" 项目的范畴（MVO 原则）？你如何引导 AI 聚焦核心功能？  
> 💭 **思考 3:** 在这个阶段，你作为 "Vibe CEO" 的角色是什么？你如何确保 AI 的输出符合项目目标？

#### **🚨 关键检查点 (Checkpoints):**
- [ ] `brief.md` 中明确了 "1930 年代橡皮管动画风格" 和 "纯 HTML/CSS/JS" 约束
- [ ] 初步提及了 Design Tokens 作为规范基础（为后续阶段埋下伏笔）
- [ ] 明确了教学目标（代码清晰、注释完善）
- [ ] 项目范围合理（MVO，适合初学者）

---

### **阶段 2: 产品需求定义 (Phase 2: Product Requirements Definition)** 📋

**Agent:** `pm` (John)  
**核心目标:** 定义具体的功能需求 (FR) 和非功能需求 (NFR)，明确品牌文法，**强制写入核心约束**作为下游 Agents 的最高准则

#### **交互步骤:**

1. **切换 Agent:**
   ```bash
   *agent pm
   ```

2. **【第一轮交互】启动 PRD 创建:**
   * **你的指令 (User Input):**  
     > "你好 John，这是项目的 `brief.md` (提供文档内容或路径)。请基于此文档，使用 `*create-prd` 帮我创建详细的产品需求文档 (`prd.md`)。"

   * **`pm` 的响应:** John 使用 `prd-tmpl.yaml` 模板，与你交互式地填充 `prd.md`，询问：
     - 具体的功能需求 (FR)
     - 非功能需求 (NFR)
     - 用户故事 (User Stories)
     - 成功指标 (Success Metrics)

3. **【第二轮交互 - 关键】强制定义 NFRs:**
   * **你的指令 (User Input):**  
     > "John，在定义 NFR 时，以下四个需求是**强制性的、不可协商的**，必须明确写入 `prd.md`，作为所有下游 Agents（UX Expert, Architect, Developer）的最高准则：
     > 
     > **NFR-Tech (技术栈约束):**  
     > '必须使用纯 HTML5, CSS3, 原生 JavaScript (ES6+)。**严格禁止**使用任何前端框架 (React/Vue/Angular)、构建工具 (Webpack/Vite) 或外部 UI 库 (Bootstrap/Tailwind)。理由：教学目标，确保初学者能直接阅读和运行代码。'
     > 
     > **NFR-Tokens (强制 Design Tokens):**  
     > '强制要求：所有 UI 样式（颜色、间距、字体、圆角、描边、阴影等）必须通过 Design Tokens 实现。Design Tokens 定义在 `front-end-spec.md` 中，作为**单一事实来源 (Single Source of Truth, SoT)**，用于驱动下游自动化（如 Figma Design System 生成、CSS Variables 生成）。禁止在代码中硬编码样式值（如 `color: #FF0000`），必须引用 Token（如 `color: var(--color-accent-red-500)`）。'
     > 
     > **NFR-Legal (法务护栏):**  
     > '严格遵守知识产权 (IP) 护栏。优先使用 1928 年进入公有领域的 Steamboat Willie 素材（基准库 Baseline Library）。**明确禁止**使用现代迪士尼受保护元素，包括但不限于：米老鼠现代剪影 (圆耳朵+红短裤)、现代米妮形象、特定角色名称、现代配色方案。所有视觉元素需经法务审查。'
     > 
     > **NFR-Principles (设计原则):**  
     > '设计系统遵循四大核心原则：  
     > 1. **功能优先 (Function First):** 设计服务于功能，避免纯装饰性元素  
     > 2. **互动而非噪声 (Interaction, Not Noise):** 动效必须有目的（反馈、引导），避免无意义动画  
     > 3. **参数化一致性 (Parametric Consistency):** 通过 Design Tokens 确保全局一致性  
     > 4. **法务安全 (Legal Safety):** 所有设计决策需符合 NFR-Legal  
     > 这四大原则是所有设计和开发决策的最高准则，优先级高于美学偏好。'"

4. **【第三轮交互】定义品牌文法 (Brand Grammar):**
   * **你的指令 (User Input):**  
     > "John，`prd.md` 中需要包含对 '1930 年代橡皮管动画风格' 的**品牌文法 (Brand Grammar)** 描述，这将是 UX Expert 定义具体 Design Tokens 的重要依据。请包含以下要素：
     > 
     > **视觉文法 (Visual Grammar):**
     > - **粗描线 (Thick Outlines):** 所有元素边缘使用粗黑色描边（3-5px），模拟手绘墨线
     > - **圆润几何 (Rounded Geometry):** 极端圆角（border-radius: 50%+ for circles, 16-24px for rectangles），避免尖锐直角
     > - **单色主导+点缀色 (Monochrome with Accent):** 以黑白灰为主（80%），少量鲜艳点缀色（红、黄）用于强调（20%）
     > - **手绘质感 (Hand-drawn Texture):** 轻微不规则边缘，模拟手工描绘（可通过 SVG filter 实现）
     > 
     > **动效文法 (Animation Grammar):**
     > - **弹性物理 (Elastic Physics):** 使用 ease-in-out / cubic-bezier 创建夸张的弹性效果
     > - **挤压拉伸 (Squash & Stretch):** 悬停时元素轻微变形（scale transform）
     > - **预期动作 (Anticipation):** 动画前的微小反向运动
     > 
     > **字体文法 (Typography Grammar):**
     > - **卡通化字体 (Cartoonish Fonts):** 使用圆润、粗体、手写风格字体（如 Fredoka, Baloo）
     > - **夸张对比 (Exaggerated Contrast):** 标题极粗（700-900 weight），正文适中（400-500 weight）"

5. **【第四轮交互】功能需求与用户故事:**
   * 与 John 交互，定义核心功能需求（如：图片展示、悬停动效、响应式布局）和用户故事
   * 确保功能需求与 `brief.md` 一致，保持 MVO 范围

#### **输出文档:** `docs/prd.md`

#### **🎓 学生反思点 (Reflection Questions):**
> 💭 **思考 1:** John (AI) 如何将 `brief.md` 中的概念性描述转化为具体的、可度量的需求？NFR 的措辞是否足够明确和强制？  
> 💭 **思考 2:** 品牌文法的描述是否清晰、具体，足以指导 UX Expert 定义 Design Tokens？还缺少什么细节？  
> 💭 **思考 3:** 在 AI 协作中，你作为需求把关者的角色是什么？如何确保 AI 不会遗漏关键约束？

#### **🚨 关键检查点 (Checkpoints):**
- [ ] **NFR-Tech** 明确禁止框架和构建工具
- [ ] **NFR-Tokens** 强制所有样式使用 Design Tokens，明确 `front-end-spec.md` 为 SoT
- [ ] **NFR-Legal** 明确法务护栏，列出禁用元素
- [ ] **NFR-Principles** 定义四大设计原则
- [ ] **品牌文法** 清晰描述视觉、动效、字体的具体特征（含可量化参数，如 "3-5px 描边"）
- [ ] 功能需求与 `brief.md` 一致，保持 MVO 范围

---

### **阶段 3: UI/UX 规范定义 (Phase 3: UI/UX Specification Definition)** ✨🎨  
**🔥 最关键阶段 - Figma 自动化成败的决定性环节**

**Agent:** `ux-expert` (Sally)  
**核心目标:** 创建高质量、结构化、精确的 `front-end-spec.md`，特别是 Design Tokens 部分，使其成为 **MCP Server 可靠的自动化输入源**

#### **交互步骤:**

1. **切换 Agent:**
   ```bash
   *agent ux-expert
   ```

2. **【第一轮交互 - 关键指令】启动规范创建:**
   * **你的指令 (User Input):**  
     > "你好 Sally，这是项目的 `prd.md` (提供文档内容或路径)。请基于此文档，使用 `*create-front-end-spec` (或 `*create-doc` + `front-end-spec-tmpl.yaml`) 创建详细的 UI/UX 规范 (`front-end-spec.md`)。
     > 
     > **🚨 强制要求 (Critical Requirements):**  
     > 你必须严格遵循 `ux-front-end-spec-plus.md` 文件中的所有增强要求，特别是关于 **Design Tokens** 的定义方式。这份规范将直接驱动 `cursor-talk-to-figma` MCP Server 自动生成 Figma Design System，因此：
     > 
     > 1. **本体论层级 (Ontology):** 所有 Tokens 必须明确标注为 `primitive` (Reference) 或 `semantic` 层级  
     > 2. **命名规范 (Naming):** 必须采用结构化命名（我们将在接下来协商具体规范）  
     > 3. **精确值 (Values):** 每个 Token 必须有具体、可执行的值（如 `#FF6B6B`, `16px`, `'Fredoka'`），**禁止**模糊描述（如 'large', 'primary color'）  
     > 4. **引用关系 (Aliasing):** Semantic Tokens 引用 Primitive Tokens 时，使用 `'{primitive.token.name}'` 格式
     > 
     > 不允许有任何模糊或不符合规范的地方，否则自动化将失败！"

3. **【第二轮交互 - 核心】协商 Token 命名规范:**
   * **你的指令 (User Input):**  
     > "Sally，在定义 Tokens 之前，我们需要确定统一的命名规范。我建议采用以下结构：
     > 
     > **命名格式:** `category.level.context.element.[variant].[state].[mode]`
     > 
     > **示例:**
     > - Primitive: `color.primitive.red.500`（类别.层级.色系.强度）
     > - Semantic: `color.semantic.background.button.primary.default.light`（类别.层级.上下文.元素.变体.状态.模式）
     > - Spacing: `spacing.primitive.md`（类别.层级.尺寸名）
     > - Typography: `typography.semantic.heading.h1`（类别.层级.类型.级别）
     > 
     > **规则:**
     > - 全部小写，单词间用点号 `.` 分隔（在 Figma 中会转为斜杠 `/` 创建层级）
     > - `primitive` 层级 Token 命名简洁，仅包含类别和物理特征（如 `red.500`, `spacing.16`）
     > - `semantic` 层级 Token 命名语义化，包含使用场景（如 `background.button.primary.default`）
     > 
     > 你是否同意这个规范？如果有更好的建议，请提出。"

   * **Sally 的可能响应:** 同意或提出调整建议
   * **你的后续指令:** 最终确认命名规范，并要求 Sally 在定义所有 Tokens 时**严格遵守**

4. **【第三轮交互 - 核心】定义 Primitive Tokens (Reference Layer):**
   * **你的指令 (User Input):**  
     > "Sally，现在开始定义 **Primitive Tokens (Reference Layer)**。这些是基础的、不依赖上下文的值，所有 Semantic Tokens 都将引用它们。
     > 
     > **Colors (Primitive):** 基于 `prd.md` 中的品牌文法 ('黑白灰主导 + 红黄点缀')，定义：
     > - `color.primitive.black: #000000`
     > - `color.primitive.white: #FFFFFF`
     > - `color.primitive.gray.100: #F5F5F5`
     > - `color.primitive.gray.500: #9CA3AF`
     > - `color.primitive.gray.900: #1F2937`
     > - `color.primitive.red.500: #EF4444`（点缀色）
     > - `color.primitive.yellow.500: #F59E0B`（点缀色）
     > 
     > **Spacing (Primitive):** 基于 8px 网格系统：
     > - `spacing.primitive.xs: 4px`
     > - `spacing.primitive.sm: 8px`
     > - `spacing.primitive.md: 16px`
     > - `spacing.primitive.lg: 24px`
     > - `spacing.primitive.xl: 32px`
     > - `spacing.primitive.2xl: 48px`
     > 
     > **Border Radius (Primitive):** 基于品牌文法 ('极端圆角')：
     > - `radius.primitive.sm: 8px`
     > - `radius.primitive.md: 16px`
     > - `radius.primitive.lg: 24px`
     > - `radius.primitive.full: 9999px`（完全圆形）
     > 
     > **Stroke Width (Primitive):** 基于品牌文法 ('粗描线 3-5px')：
     > - `stroke.primitive.sm: 2px`
     > - `stroke.primitive.md: 3px`
     > - `stroke.primitive.lg: 5px`
     > 
     > **Typography (Primitive):** 基于品牌文法 ('圆润、粗体、手写风格')：
     > - `font.primitive.family.primary: 'Fredoka', sans-serif`
     > - `font.primitive.family.secondary: 'Baloo 2', cursive`
     > - `font.primitive.weight.regular: 400`
     > - `font.primitive.weight.bold: 700`
     > - `font.primitive.weight.black: 900`
     > - `font.primitive.size.sm: 14px`
     > - `font.primitive.size.base: 16px`
     > - `font.primitive.size.lg: 20px`
     > - `font.primitive.size.xl: 28px`
     > - `font.primitive.size.2xl: 40px`
     > - `font.primitive.lineHeight.tight: 1.2`
     > - `font.primitive.lineHeight.normal: 1.5`
     > - `font.primitive.lineHeight.relaxed: 1.8`
     > 
     > **Easing (Primitive):** 基于品牌文法 ('弹性物理')：
     > - `easing.primitive.elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55)`
     > - `easing.primitive.smooth: cubic-bezier(0.4, 0, 0.2, 1)`
     > 
     > **Duration (Primitive):**
     > - `duration.primitive.fast: 200ms`
     > - `duration.primitive.normal: 300ms`
     > - `duration.primitive.slow: 500ms`
     > 
     > 请将这些 Primitive Tokens 精确记录到 `front-end-spec.md` 的 Design Tokens 部分，并标注为 `Level: Primitive`。"

5. **【第四轮交互 - 核心】定义 Semantic Tokens (Semantic Layer):**
   * **你的指令 (User Input):**  
     > "Sally，现在定义 **Semantic Tokens (Semantic Layer)**。这些 Tokens 基于使用场景，引用 Primitive Tokens。
     > 
     > **示例 - Button Tokens:**
     > - `color.semantic.background.button.primary.default: '{color.primitive.black}'`
     > - `color.semantic.background.button.primary.hover: '{color.primitive.gray.900}'`
     > - `color.semantic.text.button.primary.default: '{color.primitive.white}'`
     > - `color.semantic.border.button.primary.default: '{color.primitive.black}'`
     > - `stroke.semantic.button.primary: '{stroke.primitive.md}'` (3px 粗描边)
     > - `radius.semantic.button.primary: '{radius.primitive.lg}'` (24px 极端圆角)
     > 
     > **示例 - Typography Tokens:**
     > - `typography.semantic.heading.h1.fontFamily: '{font.primitive.family.primary}'`
     > - `typography.semantic.heading.h1.fontSize: '{font.primitive.size.2xl}'`
     > - `typography.semantic.heading.h1.fontWeight: '{font.primitive.weight.black}'`
     > - `typography.semantic.heading.h1.lineHeight: '{font.primitive.lineHeight.tight}'`
     > - `typography.semantic.body.fontFamily: '{font.primitive.family.secondary}'`
     > - `typography.semantic.body.fontSize: '{font.primitive.size.base}'`
     > - `typography.semantic.body.fontWeight: '{font.primitive.weight.regular}'`
     > 
     > **示例 - Animation Tokens:**
     > - `animation.semantic.button.hover.duration: '{duration.primitive.normal}'`
     > - `animation.semantic.button.hover.easing: '{easing.primitive.elastic}'`
     > 
     > **示例 - Shadow Tokens (Effects):**
     > - `shadow.semantic.card.default: 0 4px 8px rgba(0, 0, 0, 0.15)`（手绘质感的轻微阴影）
     > - `shadow.semantic.card.hover: 0 8px 16px rgba(0, 0, 0, 0.25)`
     > 
     > 请定义完整的 Semantic Tokens，覆盖 Button, Card, Input, Nav 等核心组件，并确保所有值都引用 Primitive Tokens（使用 `'{token.name}'` 格式）。"

6. **【第五轮交互】定义组件规范 (Component Specifications):**
   * **你的指令 (User Input):**  
     > "Sally，在 Component Library 部分，定义每个组件时，必须明确标注其使用的 **具体 Token 名称**。
     > 
     > **示例 - Button 组件规范:**
     > ```
     > ## Button Component
     > 
     > **States:** Default, Hover, Active, Disabled
     > 
     > **Primary Button (Default State):**
     > - Background: `{color.semantic.background.button.primary.default}` → `#000000`
     > - Text Color: `{color.semantic.text.button.primary.default}` → `#FFFFFF`
     > - Border: `{stroke.semantic.button.primary}` → `3px solid #000000`
     > - Border Radius: `{radius.semantic.button.primary}` → `24px`
     > - Padding: `{spacing.primitive.md} {spacing.primitive.lg}` → `16px 24px`
     > - Font: `{typography.semantic.button.fontFamily}` `{typography.semantic.button.fontSize}` `{typography.semantic.button.fontWeight}` → `'Fredoka' 16px 700`
     > 
     > **Primary Button (Hover State):**
     > - Background: `{color.semantic.background.button.primary.hover}` → `#1F2937`
     > - Transform: `scale(1.05)` (挤压拉伸效果)
     > - Transition: `{animation.semantic.button.hover.duration}` `{animation.semantic.button.hover.easing}` → `300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`
     > ```
     > 
     > 请对所有核心组件（Button, Card, Input, Nav...）采用这种方式定义。"

7. **【第六轮交互】完成其他规范部分:**
   * 与 Sally 交互，完成 Information Architecture, User Flows, Accessibility (WCAG AA), Responsive Design 等部分
   * 确保所有部分与 `prd.md` 一致

#### **输出文档:** `docs/front-end-spec.md`（自动化生成的**唯一关键输入**）

#### **🎓 学生反思点 (Reflection Questions):**
> 💭 **思考 1:** Sally (AI) 是否完全理解并执行了 Token 本体论（Primitive/Semantic 层级）？输出的 Tokens 是否清晰分层？  
> 💭 **思考 2:** 命名规范是否一致？有没有出现不符合规范的 Token 名称（如突然出现的驼峰命名）？  
> 💭 **思考 3:** 所有 Token 是否都有精确的具体值？有没有模糊描述（如 "large", "primary"）？  
> 💭 **思考 4:** 这份 `front-end-spec.md` 是否足够 "可执行"，让一个自动化工具（MCP Server）能够无歧义地解析并生成 Figma 元素？  
> 💭 **思考 5:** 与 AI 协作定义如此精确的规范，最大的挑战是什么？你如何有效引导和修正 AI 的输出？

#### **🚨 关键检查点 (Checkpoints - 逐项检查，确保自动化成功):**

**Token 本体论 (Ontology):**
- [ ] 所有 Tokens 明确标注为 `primitive` 或 `semantic` 层级
- [ ] Primitive Tokens 是独立的物理值（如 `#FF0000`, `16px`）
- [ ] Semantic Tokens 通过 `'{token.name}'` 格式引用 Primitive Tokens

**命名规范 (Naming):**
- [ ] 所有 Tokens 遵循协商的命名格式（如 `color.primitive.red.500`, `color.semantic.background.button.primary.default`）
- [ ] 命名全部小写，单词间用点号 `.` 分隔
- [ ] 没有出现不一致的命名（如混用驼峰、下划线）

**精确值 (Values):**
- [ ] 所有 Tokens 都有具体、可执行的值（如 `#FF6B6B`, `16px`, `'Fredoka', sans-serif`, `cubic-bezier(0.68, -0.55, 0.265, 1.55)`）
- [ ] **没有**模糊描述（如 'large', 'primary color', 'bold'）
- [ ] 颜色值使用 HEX（`#RRGGBB`）或 RGBA 格式
- [ ] 尺寸值带单位（`px`, `rem`, `%`）

**品牌文法对齐 (Brand Alignment):**
- [ ] Colors: 黑白灰主导 (80%) + 红黄点缀 (20%)
- [ ] Stroke: 3-5px 粗描边
- [ ] Radius: 16-24px+ 极端圆角
- [ ] Typography: 圆润粗体字体（Fredoka/Baloo）、夸张对比（900 vs 400 weight）
- [ ] Animation: 弹性缓动（cubic-bezier 弹性曲线）

**组件规范 (Component Specs):**
- [ ] 每个组件明确标注使用的 Token 名称（如 `{color.semantic.background.button.primary.default}`）
- [ ] 组件规范包含所有状态（Default, Hover, Active, Disabled）

**结构化与完整性:**
- [ ] 严格遵循 `front-end-spec-tmpl.yaml` 结构
- [ ] Design Tokens 部分包含：Colors, Spacing, Radius, Stroke, Typography, Shadows, Animation
- [ ] 其他部分完整：IA, Flows, Components, Accessibility, Responsive Design

**自动化可行性 (Automation Readiness):**
- [ ] 一个开发者（或 MCP Server）读取此规范后，能够**无需额外询问**地创建所有 Tokens 和组件
- [ ] 没有需要 "目视确认" 或 "根据喜好调整" 的模糊指示

---

### **阶段 4: 架构设计 (Phase 4: Architecture Design)** 🏗️

**Agent:** `architect` (Winston)  
**核心目标:** 定义技术实现，**精确映射 Design Tokens 到 CSS Variables**，确保代码实现与规范的完美对齐

#### **交互步骤:**

1. **切换 Agent:**
   ```bash
   *agent architect
   ```

2. **【第一轮交互】启动架构设计:**
   * **你的指令 (User Input):**  
     > "你好 Winston，这是项目的 `prd.md` 和 **高度结构化的** `front-end-spec.md` (提供文档内容或路径)。请基于这些文档，使用 `*create-architecture` (或 `*create-full-stack-architecture`) 创建项目的架构文档 (`architecture.md`)。
     > 
     > **🚨 关键要求:**  
     > 你需要在 `architecture.md` 的 **Styling System** 部分，精确映射 `front-end-spec.md` 中定义的所有 Design Tokens 到 CSS 自定义属性 (CSS Variables)，并确保命名一致性。这是连接设计规范和代码实现的关键桥梁。"

3. **【第二轮交互 - 核心】定义 Token 映射规则:**
   * **你的指令 (User Input):**  
     > "Winston，在定义 Design Tokens 的技术实现之前，我们需要明确映射规则：
     > 
     > **Token 名称 → CSS Variable 名称转换规则:**
     > - 将 `front-end-spec.md` 中的 Token 名称（点号分隔）转换为 kebab-case（连字符分隔）
     > - 添加 `--` 前缀（CSS Variable 标准格式）
     > - 示例转换：
     >   - `color.primitive.black` → `--color-primitive-black`
     >   - `color.semantic.background.button.primary.default` → `--color-semantic-background-button-primary-default`
     >   - `spacing.primitive.md` → `--spacing-primitive-md`
     > 
     > **引用关系保留:**
     > - Primitive Tokens 直接使用具体值：  
     >   `--color-primitive-black: #000000;`
     > - Semantic Tokens 使用 `var()` 引用 Primitive Tokens：  
     >   `--color-semantic-background-button-primary-default: var(--color-primitive-black);`
     > 
     > 请遵循这个规则，完整列出所有 Token 的 CSS Variable 定义。"

4. **【第三轮交互 - 核心】生成 CSS Variables 完整清单:**
   * **你的指令 (User Input):**  
     > "Winston，请在 `architecture.md` 的 **Design Tokens Implementation** 部分，创建以下结构：
     > 
     > ````markdown
     > ## Design Tokens Implementation
     > 
     > ### CSS Variables Mapping
     > 
     > All Design Tokens from `front-end-spec.md` will be implemented as CSS Custom Properties in `style.css`.
     > 
     > #### Primitive Tokens (Reference Layer)
     > 
     > **Colors:**
     > ```css
     > :root {
     >   /* Primitive Colors */
     >   --color-primitive-black: #000000;
     >   --color-primitive-white: #FFFFFF;
     >   --color-primitive-gray-100: #F5F5F5;
     >   --color-primitive-gray-500: #9CA3AF;
     >   --color-primitive-gray-900: #1F2937;
     >   --color-primitive-red-500: #EF4444;
     >   --color-primitive-yellow-500: #F59E0B;
     > }
     > ```
     > 
     > **Spacing:**
     > ```css
     > :root {
     >   /* Primitive Spacing */
     >   --spacing-primitive-xs: 4px;
     >   --spacing-primitive-sm: 8px;
     >   --spacing-primitive-md: 16px;
     >   --spacing-primitive-lg: 24px;
     >   --spacing-primitive-xl: 32px;
     >   --spacing-primitive-2xl: 48px;
     > }
     > ```
     > 
     > *(继续为 Border Radius, Stroke Width, Typography, Easing, Duration 生成完整的 Primitive CSS Variables)*
     > 
     > #### Semantic Tokens (Semantic Layer)
     > 
     > **Button Tokens:**
     > ```css
     > :root {
     >   /* Button - Primary - Background */
     >   --color-semantic-background-button-primary-default: var(--color-primitive-black);
     >   --color-semantic-background-button-primary-hover: var(--color-primitive-gray-900);
     >   
     >   /* Button - Primary - Text */
     >   --color-semantic-text-button-primary-default: var(--color-primitive-white);
     >   
     >   /* Button - Primary - Border */
     >   --color-semantic-border-button-primary-default: var(--color-primitive-black);
     >   --stroke-semantic-button-primary: var(--stroke-primitive-md);
     >   
     >   /* Button - Primary - Radius */
     >   --radius-semantic-button-primary: var(--radius-primitive-lg);
     > }
     > ```
     > 
     > *(继续为所有组件生成完整的 Semantic CSS Variables)*
     > ````
     > 
     > 确保每个 `front-end-spec.md` 中的 Token 都有对应的 CSS Variable 定义。"

5. **【第四轮交互】定义技术栈与项目结构:**
   * **你的指令 (User Input):**  
     > "Winston，请确认技术栈和项目结构：
     > 
     > **技术栈 (必须符合 NFR-Tech):**
     > - 前端：纯 HTML5, CSS3, 原生 JavaScript (ES6+)
     > - **禁止**：前端框架（React/Vue/Angular）、构建工具（Webpack/Vite）、UI 库（Bootstrap/Tailwind）
     > - 字体：Google Fonts（Fredoka, Baloo 2）
     > - 托管：静态托管（GitHub Pages, Netlify, Vercel）
     > 
     > **项目结构 (教学友好):**
     > ```
     > carllllllllx-portfolio/
     > ├── index.html          # 首页
     > ├── illustrations.html  # 插画集页面
     > ├── products.html       # 产品集页面
     > ├── about.html          # 关于页面
     > ├── style.css           # 全局样式 (包含所有 CSS Variables)
     > ├── script.js           # 全局脚本
     > ├── data.js             # 数据文件 (插画和产品信息)
     > ├── assets/             # 资源文件夹
     > │   ├── illustration/   # 插画图片
     > │   └── products/       # 产品图片
     > └── README.md           # 项目说明 (教学文档)
     > ```
     > 
     > 请在 `architecture.md` 中详细说明每个文件的职责，以及如何使用 CSS Variables。"

6. **【第五轮交互】定义组件实现示例:**
   * **你的指令 (User Input):**  
     > "Winston，请在 `architecture.md` 中提供一个组件实现示例，展示如何在 HTML/CSS 中使用 Design Tokens：
     > 
     > ````markdown
     > ### Component Implementation Example: Button
     > 
     > **HTML:**
     > ```html
     > <button class="btn btn--primary">View Gallery</button>
     > ```
     > 
     > **CSS (使用 CSS Variables):**
     > ```css
     > .btn {
     >   /* 使用 Semantic Tokens */
     >   padding: var(--spacing-primitive-md) var(--spacing-primitive-lg);
     >   border-radius: var(--radius-semantic-button-primary);
     >   border: var(--stroke-semantic-button-primary) solid var(--color-semantic-border-button-primary-default);
     >   font-family: var(--font-primitive-family-primary);
     >   font-size: var(--font-primitive-size-base);
     >   font-weight: var(--font-primitive-weight-bold);
     >   cursor: pointer;
     >   transition: all var(--duration-primitive-normal) var(--easing-primitive-elastic);
     > }
     > 
     > .btn--primary {
     >   background-color: var(--color-semantic-background-button-primary-default);
     >   color: var(--color-semantic-text-button-primary-default);
     > }
     > 
     > .btn--primary:hover {
     >   background-color: var(--color-semantic-background-button-primary-hover);
     >   transform: scale(1.05); /* 挤压拉伸效果 */
     > }
     > ```
     > ````
     > 
     > 这个示例展示了如何将规范转化为实际代码，对学生非常有帮助。"

#### **输出文档:** `docs/architecture.md`

#### **🎓 学生反思点 (Reflection Questions):**
> 💭 **思考 1:** Winston (AI) 是否准确、完整地将 `front-end-spec.md` 中的所有 Tokens 映射到了 CSS Variables？有没有遗漏？  
> 💭 **思考 2:** CSS Variable 命名是否与 Token 命名保持逻辑一致性？转换规则是否清晰？  
> 💭 **思考 3:** 引用关系（Semantic 引用 Primitive）在 CSS Variables 中是否正确实现（使用 `var()`）？  
> 💭 **思考 4:** 架构文档是否清晰地说明了如何在代码中使用这些 CSS Variables？对初学者是否友好？

#### **🚨 关键检查点 (Checkpoints):**
- [ ] **Token 映射完整性:** `architecture.md` 中列出了 `front-end-spec.md` 所有 Tokens 对应的 CSS Variables
- [ ] **命名一致性:** CSS Variable 名称严格遵循 kebab-case 转换规则（`color.primitive.black` → `--color-primitive-black`）
- [ ] **引用关系正确:** Semantic CSS Variables 使用 `var()` 引用 Primitive CSS Variables
- [ ] **技术栈符合 NFR-Tech:** 纯 HTML/CSS/JS，无框架无构建工具
- [ ] **项目结构清晰:** 文件组织简单，符合教学目标
- [ ] **实现示例完整:** 提供了组件如何使用 CSS Variables 的实际代码示例

---

### **阶段 5: Figma Design System 自动生成 (Phase 5: Figma Design System Auto-Generation)** ✨🎨➡️🤖  
**🎯 终极目标 - 验证规范质量与自动化可行性**

**执行者:** `cursor-talk-to-figma` MCP Server (模拟或实际执行)  
**核心目标:** 基于 `front-end-spec.md` 自动创建 Figma Design System，验证前期规范工作的质量

#### **执行步骤:**

1. **准备输入文件:**
   * 确保你有**最终确认并通过检查点验证**的 `docs/front-end-spec.md`
   * 这个文件是自动化的**唯一、关键**输入源
   * (可选) `docs/architecture.md` 中的 CSS Variables 部分可作为参考，但 MCP Server 主要解析 `front-end-spec.md`

2. **配置 MCP Server 解析规则:**
   * **启动 Server:**  
     ```bash
     # 根据 MCP Server 文档启动服务
     cursor-talk-to-figma start
     ```

   * **定义解析指令 (示例概念):**  
     > 你需要配置 MCP Server 或编写指令，告诉它如何解析 `front-end-spec.md` 并映射到 Figma API：
     > 
     > **Color Styles 生成:**
     > - 解析 `front-end-spec.md` 中的 `color.primitive.*` Tokens
     > - 在 Figma 中创建 Color Style，命名为 `primitive/[color_name]`（如 `primitive/black`, `primitive/red/500`）
     > - 使用 Token 的具体值（如 `#000000`）作为颜色值
     > - 解析 `color.semantic.*` Tokens
     > - 创建 Color Style，命名为 `semantic/[context]/[element]/[variant]/[state]`（如 `semantic/background/button/primary/default`）
     > - 如果 Semantic Token 引用了 Primitive Token（`'{color.primitive.black}'`），在 Figma 中也建立引用关系（如果 API 支持）
     > 
     > **Text Styles 生成:**
     > - 解析 `typography.semantic.*` Tokens
     > - 创建 Text Style，命名为 `semantic/[type]/[level]`（如 `semantic/heading/h1`, `semantic/body`）
     > - 组合相关的 `fontFamily`, `fontSize`, `fontWeight`, `lineHeight` Tokens 为完整的文本样式
     > 
     > **Variables 生成:**
     > - 解析 `spacing.primitive.*`, `radius.primitive.*`, `stroke.primitive.*` Tokens
     > - 在 Figma 中创建 Number Variables
     > - 使用 Collections 分组（如 `Spacing` Collection, `Radius` Collection）
     > - 命名为 `primitive/[name]`（如 `primitive/md`, `primitive/lg`）
     > 
     > **Effect Styles 生成:**
     > - 解析 `shadow.semantic.*` Tokens
     > - 创建 Effect Style，命名为 `semantic/[context]/[variant]`（如 `semantic/card/default`, `semantic/card/hover`）
     > - 解析阴影值（如 `0 4px 8px rgba(0, 0, 0, 0.15)`）并映射到 Figma Effect 参数

3. **执行自动生成:**
   * **运行 MCP Server:**  
     ```bash
     cursor-talk-to-figma generate \
       --input ./docs/front-end-spec.md \
       --figma-file-id [YOUR_FIGMA_FILE_ID] \
       --figma-token [YOUR_FIGMA_API_TOKEN]
     ```

   * **MCP Server 执行流程:**
     1. 读取 `front-end-spec.md`
     2. 解析 Design Tokens（识别层级、名称、值、引用关系）
     3. 调用 Figma API 创建对应的 Styles 和 Variables
     4. 输出执行日志和结果报告

4. **验证与检查 (在 Figma 中):**
   * **打开 Figma 文件，检查自动生成的内容：**

   **Color Styles:**
   - [ ] 所有 Primitive Colors 已创建（`primitive/black`, `primitive/gray/100`, `primitive/red/500` 等）
   - [ ] 所有 Semantic Colors 已创建（`semantic/background/button/primary/default` 等）
   - [ ] 颜色值与 `front-end-spec.md` 完全一致
   - [ ] 分组结构清晰（Primitive 一组，Semantic 按上下文分组）

   **Text Styles:**
   - [ ] 所有 Typography Tokens 已创建（`semantic/heading/h1`, `semantic/body` 等）
   - [ ] 字体族、大小、字重、行高与规范一致
   - [ ] 使用的字体（Fredoka, Baloo 2）在 Figma 中可用

   **Variables:**
   - [ ] Spacing Variables 已创建并在 `Spacing` Collection 中
   - [ ] Radius Variables 已创建并在 `Radius` Collection 中
   - [ ] Stroke Variables 已创建并在 `Stroke` Collection 中
   - [ ] 所有值与规范一致（`16px`, `24px` 等）

   **Effect Styles:**
   - [ ] Shadow Styles 已创建（`semantic/card/default`, `semantic/card/hover`）
   - [ ] 阴影参数（偏移、模糊、颜色）与规范一致

   **(可选) Component Frames:**
   - [ ] 如配置了组件生成，检查是否创建了 Button, Card 等组件的框架

5. **故障排查 (如果自动化失败):**
   * **检查 `front-end-spec.md` 质量:**
     - [ ] 所有 Tokens 是否有明确的本体论标注？
     - [ ] 命名是否一致（全部小写、点号分隔）？
     - [ ] 是否存在模糊值（如 "large", "primary"）？
     - [ ] 引用格式是否正确（`'{token.name}'`）？
   
   * **检查 MCP Server 配置:**
     - [ ] 解析规则是否正确匹配 `front-end-spec.md` 的结构？
     - [ ] Figma API Token 是否有效？
     - [ ] Figma 文件权限是否足够？
   
   * **查看 MCP Server 日志:**
     - 定位具体的解析错误或 API 调用失败
     - 根据错误信息修正 `front-end-spec.md` 或 MCP Server 配置

#### **输出成果:** Figma 文件中完整、结构化的 Design System（Styles + Variables）

#### **🎓 学生反思点 (Reflection Questions):**
> 💭 **思考 1:** 自动化生成是否成功？如果不成功，问题出在哪里？是 `front-end-spec.md` 的规范问题，还是 MCP Server 配置问题？  
> 💭 **思考 2:** 对比手动在 Figma 中创建 Design System，自动化生成在**效率**和**一致性**上有何优势？  
> 💭 **思考 3:** 在整个模拟流程中，AI Agents 在多大程度上促进（或阻碍）了最终的自动化目标？哪个阶段最关键？  
> 💭 **思考 4:** 如果需要更新 Design System（如增加新颜色、调整间距），是修改 `front-end-spec.md` 再重新生成更高效，还是直接在 Figma 中手动修改？为什么？  
> 💭 **思考 5:** 这个 "规范驱动自动化" 的流程，对你未来的设计和开发工作有何启示？

#### **🚨 成功标准 (Success Criteria):**
- [ ] **完整性:** Figma 中生成的 Styles 和 Variables 覆盖了 `front-end-spec.md` 中的所有 Tokens
- [ ] **准确性:** 所有值（颜色、尺寸、字体等）与规范完全一致
- [ ] **结构性:** 命名规范、分组逻辑与规范一致，便于查找和使用
- [ ] **可用性:** 设计师可以直接使用这些 Styles 和 Variables 进行设计，无需手动调整
- [ ] **一致性:** 生成的 Design System 与 `architecture.md` 中的 CSS Variables 形成一一对应关系，确保设计与代码同步

---

## **总结与反思 (Conclusion & Reflection)**

### **模拟流程回顾**

这个模拟流程展示了如何通过与 B-mad AI Agents 的**结构化、精准**交互，生成符合下游自动化需求的高质量规范文档，最终实现从设计规范到 Figma Design System 的自动化生成。

**五个阶段的核心产出:**
1. ✅ **Analyst (Mary)** → `brief.md` - 项目愿景与约束
2. ✅ **PM (John)** → `prd.md` - 强制性 NFRs 与品牌文法
3. ✅ **UX Expert (Sally)** → `front-end-spec.md` - 可执行的 Design Tokens（自动化的关键输入）
4. ✅ **Architect (Winston)** → `architecture.md` - Tokens 到 CSS Variables 的精确映射
5. ✅ **MCP Server** → Figma Design System - 自动生成的 Styles & Variables

---

### **关键成功因素 (Critical Success Factors)**

#### **1. 清晰的目标传达与约束强制 (每个阶段)**
- 在与每个 Agent 交互时，都**明确、反复**强调项目的核心约束（技术栈、风格、教学目标、法务护栏）
- 不假设 AI 会 "自动理解" 隐含的要求，而是**显式、强制**地写入文档（尤其是 NFRs）

#### **2. `front-end-spec.md` 的质量是自动化成败的决定因素 (阶段 3)**
- **三位一体的要求:**
  - ✅ **本体论层级明确:** 区分 Primitive/Semantic Tokens
  - ✅ **命名规范一致:** 全部小写、点号分隔、结构化命名
  - ✅ **值精确无歧义:** 所有 Tokens 有具体值（`#000000`, `16px`, `'Fredoka'`），禁止模糊描述
- **这是 MCP Server 可靠解析的基础**，也是设计与代码一致性的保证

#### **3. Token 映射的精确性 (阶段 4)**
- `architect` 必须将 `front-end-spec.md` 中的 Tokens **完整、准确**地映射到 CSS Variables
- 命名转换规则一致（`color.primitive.black` → `--color-primitive-black`）
- 引用关系保留（Semantic 使用 `var()` 引用 Primitive）

#### **4. MCP Server 配置的精确性 (阶段 5)**
- 解析规则必须匹配 `front-end-spec.md` 的结构
- 理解 Figma API 的能力和限制
- 充分的验证与故障排查

---

### **学生中心的教学价值 (Student-Centered Learning Value)**

#### **核心学习成果 (Learning Outcomes):**

**1. AI 协作能力 (AI Collaboration Skills):**
- 学会如何与不同角色的 AI Agents 进行**精准、有效**的沟通
- 理解 AI 的优势（快速生成、结构化）和局限（需要明确指令、可能理解偏差）
- 培养 "Vibe CEO" 的角色意识：你是战略监督者，AI 是执行者

**2. 规范化思维 (Specification-Driven Thinking):**
- 理解**规范是自动化的基础**：结构化、精确的规范能驱动工具链
- 从 "手工作坊" 思维转向 "工业化生产" 思维：设计系统、模块化、可复用
- 认识到看似繁琐的前期规范定义，能极大提升后期效率

**3. 设计系统知识 (Design System Knowledge):**
- 深入理解 Design Tokens 的**本体论**（Primitive vs Semantic）
- 掌握跨介质映射（Token → CSS Variables → Figma Styles/Variables）
- 理解 "单一事实来源 (SoT)" 的价值：一处修改，多处同步

**4. 批判性思维 (Critical Thinking):**
- 通过反思环节，培养对 AI 协作过程的批判性审视能力
- 理解 AI 不是万能的，需要人类的监督、引导和质量把关
- 认识到技术选择的权衡（如为何拒绝复杂的 CI 扫描、强制 JSON SoT）

**5. 实践技能 (Practical Skills):**
- 掌握纯 HTML/CSS/JS 的开发（无框架依赖，理解底层）
- 学会使用 CSS Variables 实现 Design Tokens
- 了解 Figma API 和自动化工具（MCP Server）的基本原理

---

### **优先级清单回顾 (Prioritized Takeaways)**

根据用户的优化建议，我们采纳并简化了以下核心原则：

**✅ 采纳的建议 (高优先级):**
1. **可执行规范:** `front-end-spec.md` 作为自动化的直接输入源（而非强制独立的 JSON 文件）
2. **Token 本体论:** 明确 Primitive/Semantic 层级，定义清晰的映射规则
3. **AI 协作反思:** 在每个阶段嵌入引导性问题，提升教学价值
4. **MVO 与阶段化:** 确保项目对初学者可行，避免过度复杂化
5. **法务安全:** 通过 NFR 明确 IP 护栏，避免法律风险

**❌ 拒绝/降低优先级的建议 (过于复杂):**
1. 完整的 Figma → SoT 反馈闭环（增加复杂度）
2. CI 扫描进行法务/规范检查（可通过 NFR 简化）
3. 强制初始 SoT 为 `design-tokens.json`（增加工具依赖）
4. 引入 "故意失败" 场景（可能打击初学者信心）
5. 深入 ANT/CTP 理论教学（过于抽象）

**📊 核心权衡 (Trade-offs):**
- **完美 vs 可行:** 在 "最佳实践" 和 "学生可行性" 之间选择后者
- **工具化 vs 教学:** 优先确保核心流程成功，再考虑工具链扩展
- **理论 vs 实践:** 将抽象理论（如 ANT）转化为实践层面的反思问题

---

### **给学生的最终启示 (Final Insights for Students)**

#### **1. 文档不是负担，是投资 (Documentation is Investment)**
看似繁琐的规范定义（尤其是 Design Tokens 的精确定义），实际上是在为后续的自动化、一致性和可维护性做**长期投资**。在这个模拟中，`front-end-spec.md` 的质量直接决定了 Figma 自动化的成败。

#### **2. AI 是强大的工具，但需要精准的指令 (AI Needs Precision)**
AI Agents 能够快速生成结构化内容，但它们依赖你的明确指令。模糊的要求会导致模糊的输出。作为 "Vibe CEO"，你的核心能力是：
- **明确目标**（What）
- **强制约束**（Must/Must Not）
- **精准验证**（Quality Control）

#### **3. 规范驱动自动化，自动化保证一致性 (Spec → Automation → Consistency)**
这个流程展示了一个强大的理念：
- **规范（Spec）** 是唯一事实来源 → 
- **自动化（Automation）** 基于规范生成输出 → 
- **一致性（Consistency）** 在设计和代码间自然实现

在真实项目中，这意味着设计师修改 Figma Variables，开发者的 CSS Variables 自动同步；或者开发者修改 `front-end-spec.md`，Figma Design System 自动更新。

#### **4. 不同 Agent 需要不同的沟通方式 (Context Matters)**
- **Analyst (Mary):** 需要愿景和目标，关注 "Why" 和 "What"
- **PM (John):** 需要约束和需求，关注 "Must" 和 "Metrics"
- **UX Expert (Sally):** 需要精确的规范，关注 "How (Design)"
- **Architect (Winston):** 需要映射规则，关注 "How (Implementation)"

理解不同角色的关注点，能让你更高效地与 AI（或人类团队成员）协作。

#### **5. 从 "手工作坊" 到 "工业化生产" (Craft → Industry)**
初学者往往习惯于 "手工作坊" 模式：直接写代码、直接画设计，凭感觉调整。这个模拟展示了 "工业化生产" 模式：
- 先定义规范（Design System）
- 再基于规范构建（使用 Tokens）
- 最后自动化维护（MCP Server）

这种模式的优势在于：**可扩展性**（从 1 个项目到 100 个项目）、**可维护性**（修改一处，全局同步）、**协作性**（团队共享规范）。

---

### **下一步行动建议 (Next Steps)**

#### **对于学生 (For Students):**
1. **实际执行这个模拟流程**，体验每个阶段的交互细节
2. **记录你的反思**：哪些阶段最具挑战？AI 的输出哪里需要修正？
3. **尝试扩展**：增加新组件（如 Input, Card）、新 Tokens（如动画参数）
4. **对比手动与自动**：尝试手动在 Figma 创建相同的 Design System，对比效率

#### **对于教育者 (For Educators):**
1. **使用此文档作为教学模板**，引导学生完成项目
2. **在关键阶段设置检查点**，确保学生不偏离轨道
3. **鼓励学生分享失败案例**：AI 生成了什么错误？如何修正？
4. **组织 Code Review 环节**：学生互相检查 `front-end-spec.md` 的质量

#### **对于专业团队 (For Professional Teams):**
1. **评估引入 Design Tokens 的可行性**：你的项目是否需要这种规范化？
2. **选择合适的工具链**：考虑 Tokens Studio, Style Dictionary, Figma API
3. **建立团队规范**：定义你们的 Token 命名规范、本体论层级
4. **逐步实施**：从一个小模块开始，验证流程，再扩展到整个系统

---

## **附录：常见问题与故障排查 (Appendix: FAQ & Troubleshooting)**

### **Q1: 如果 AI Agent 的输出不符合我的要求，怎么办？**
**A:** 
1. **明确指出具体问题**："Sally，你生成的 Token 名称 `colorPrimaryButton` 不符合我们的命名规范（应为小写+点号分隔）。请修正为 `color.semantic.background.button.primary.default`。"
2. **提供正确示例**：直接给出期望的格式和内容
3. **要求重新生成特定部分**：不需要全部推翻，只修正有问题的部分

### **Q2: `front-end-spec.md` 的 Design Tokens 部分应该有多详细？**
**A:** 
- **足够详细到**一个开发者（或 MCP Server）能**无需额外询问**地创建所有 Tokens 和组件
- **包含：** Token 名称、层级（Primitive/Semantic）、具体值、引用关系
- **避免：** 需要 "目视确认" 或 "根据喜好调整" 的模糊指示

### **Q3: 如果 MCP Server 自动化生成失败，如何排查？**
**A:** 按优先级检查：
1. **`front-end-spec.md` 质量**：是否有模糊值、命名不一致、层级不明确？
2. **MCP Server 配置**：解析规则是否匹配文档结构？
3. **Figma API 权限**：Token 是否有效？文件权限是否足够？
4. **查看日志**：定位具体的解析或 API 错误

### **Q4: 是否需要强制创建独立的 `design-tokens.json` 文件？**
**A:**  
**对于初学者项目（如本模拟）：不需要。** 原因：
- 增加学习曲线和工具依赖（需要 Style Dictionary 等转换工具）
- 高质量的 `front-end-spec.md` 已足够作为 MCP Server 的输入源

**对于真实大型项目：推荐。** 原因：
- 独立的 JSON/YAML 文件更易于版本控制和自动化处理
- 可使用专业工具（Tokens Studio, Style Dictionary）生成多个输出（CSS, SCSS, JS, iOS, Android, Figma）

### **Q5: 如何平衡 "完美规范" 与 "快速迭代"？**
**A:**  
- **初期（MVP）：** 定义核心 Tokens（颜色、间距、字体），确保本体论清晰、命名一致
- **中期（扩展）：** 随着项目发展，逐步添加新 Tokens（动画、阴影、特殊组件）
- **后期（优化）：** 引入自动化校验（Schema, Lint）、CI/CD 集成、Figma ↔ 代码双向同步

**关键原则：** 先确保核心流程成功（阶段 1-5），再考虑工具链扩展和完美化。

---

**🎓 教学提示 (Teaching Tip):**  
建议学生完成此模拟后，写一篇 **反思日志 (Reflection Journal)**，包含：
1. 每个阶段与 AI 交互的体验（顺利或困难的地方）
2. `front-end-spec.md` 质量检查的心得（哪些细节容易被忽略）
3. 对 "规范驱动自动化" 理念的个人理解
4. 未来在实际项目中应用此流程的计划

这将极大提升学习效果，从 "知道" 提升到 "理解" 和 "应用"。

---

**📚 相关资源 (Related Resources):**
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Style Dictionary (Token 转换工具)](https://amzn.github.io/style-dictionary/)
- [Tokens Studio for Figma](https://tokens.studio/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**最终寄语 (Final Words):**

> "规范不是枷锁，而是自由的基础。当你掌握了规范化和自动化，你将从重复劳动中解放，能够将创造力投入到真正重要的地方：解决用户问题、创造独特体验。"
> 
> "AI 是你的助手，不是替代品。学会驾驭 AI，就像学会驾驭任何强大的工具——需要理解、实践和批判性思考。"
> 
> "这个模拟项目只是起点。真正的成长发生在你将这些理念应用到自己的项目中，不断迭代、反思、改进的过程里。"

**祝你在 Design System 和 AI 协作的旅程中，收获满满！** 🚀✨

