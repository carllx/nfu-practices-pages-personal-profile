\<\!-- Powered by BMAD™ Core \--\>

# **Task: Create Visualization-Ready Frontend Specification (创建可视化就绪的前端规范)**

## **🎯 任务目标 (Task Goal)**

指导 ux-expert Agent 基于项目需求 (project-brief.md, prd.md)，使用 front-end-spec-tmpl.yaml 模板，创建一个**高度结构化、详尽且优化过的** front-end-spec.md 文件。这份规范不仅要定义优秀的用户体验和界面设计，**更要特别考虑下游 Agent（如 Design System Visualization Agent）能够基于此规范，通过自动化工具（如 MCP Server）在 Figma 中精确、高效地生成 Design System 的可视化文档。**

## **📝 前提条件 (Prerequisites)**

* 已完成的 project-brief.md (提供设计原则、用户画像)。  
* 已完成的 prd.md (提供品牌指南、高层 UI/UX 目标)。

## **💡 核心考量 (Core Considerations for UX Expert)**

你在执行此任务时，**必须** 扮演好**规范定义者**和**下游自动化赋能者**的双重角色。产出的 front-end-spec.md 需要满足以下**增强要求**：

1. **【强制】采用 W3C Design Tokens 本体论 (Token Ontology):**  
   * 对于**所有** Design Tokens (尤其是 Colors, Spacing, Typography, Geometry/Layout, Effects)，**必须** 明确区分并标注其层级：  
     * **Reference Tokens:** 基础、不可变的原始值 (e.g., color.primitive.blue.500: \#3B82F6)。  
     * **Semantic Tokens:** 与特定 UI 元素或用途关联的令牌，通常引用 Reference Tokens (e.g., color.semantic.background.button.primary.default: '{color.primitive.blue.500}')。  
     * **Mode Tokens (如适用):** 用于不同模式（如 Dark Mode）的 Semantic Token 变体 (e.g., color.semantic.background.button.primary.default.dark: '{color.primitive.blue.400}')。  
   * **理由:** 下游可视化 Agent 需要理解这种层级关系，才能在 Figma 中正确地组织和呈现 Token 信息，并支持未来的模式切换可视化。  
2. **【强制】使用清晰、一致、可解析的命名规范 (Naming Convention):**  
   * 所有 Token 名称**必须**遵循统一、结构化的命名模式，推荐 category/type/item/\[state\]/\[mode\] 格式 (e.g., color/semantic/border/button/primary/hover).  
   * 提供明确的命名规则文档或说明。  
   * **理由:** 自动可视化 Agent 依赖严格的命名来解析 Token 用途、层级和关系，以便在 Figma 中生成有意义的分组和标签。  
3. **【强制】提供具体、完整的 Token 值:**  
   * 所有 Token **必须** 包含其具体实现值（如 HEX/RGBA 颜色值, px/rem 间距值, 字体属性列表等）。  
   * **理由:** 可视化 Agent 需要这些精确的值来通过 MCP Server 设置 Figma 元素的属性 (set\_fill\_color, set\_font\_size 等)。  
4. **【推荐】包含可视化呈现建议 (Visualization Suggestions):**  
   * 在定义 Token (特别是 Color Ramps, Spacing Scales, Typography Hierarchies) 时，可以**建议**下游 Agent 如何在 Figma 中可视化呈现这些规范会更清晰。例如：  
     * "建议颜色按 Reference/Semantic 分组，并使用矩形色板加文字标签展示"。  
     * "建议间距使用标尺或堆叠方块可视化，并高亮基础单位"。  
     * "建议字体样式使用不同层级的文本实例展示"。  
   * **理由:** 这有助于确保最终的可视化结果符合 UX Expert 的预期，弥合规范与呈现之间的差距。  
5. **【推荐】结构化组件示例 (Structured Component Examples):**  
   * 在定义核心组件 (front-end-spec.md \-\> component-library 部分) 时，不仅描述用途和状态，还要**明确指出**该组件的**关键部分**使用了哪些**具体 Design Tokens**。  
   * 例如，对于 Button 组件："Background: {color.semantic.background.button.primary.default}, Padding: {spacing.semantic.padding.button.vertical} {spacing.semantic.padding.button.horizontal}, Text Style: {typography.semantic.text.button.primary}"。  
   * **理由:** 这为下游 Agent (包括可视化 Agent 和开发 Agent) 提供了规范如何在实际组件中应用的明确示例。  
6. **严格遵循模板结构:**  
   * **必须** 使用 front-end-spec-tmpl.yaml 模板的所有相关部分，确保信息完整且位于预期位置。  
   * **理由:** 下游 Agent 会依赖这个标准结构来查找所需信息。

## **⚙️ 执行流程 (Execution Flow using create-doc)**

1. **启动任务:** 用户或工作流调用 ux-expert Agent 执行 create-doc 任务，并指定使用 front-end-spec-tmpl.yaml 模板。  
2. **加载上下文:** Agent 加载 project-brief.md 和 prd.md。  
3. **交互式生成:** Agent 与用户通过 create-doc 的交互流程，逐一填充 front-end-spec.md 的各个部分。  
4. **【核心】应用增强考量:** 在填充 Design Tokens (Color, Typography, Spacing 等) 和 Component Library 相关部分时，Agent **必须** 主动应用上述**核心考量**中的增强要求，与用户确认 Token 本体论、命名规范、具体值，并讨论可视化建议。  
5. **输出规范:** 生成最终的 front-end-spec.md 文件。  
6. **确认与交接:** Agent 确认生成的规范包含了所有必需的结构化信息，满足下游自动化可视化的要求，并准备交接给 Architect 或其他下游 Agent。

## **✅ 成功标准 (Success Criteria)**

* 生成的 front-end-spec.md 文件完整、清晰，并且**包含明确的 Design Tokens 本体论层级、一致可解析的命名规范以及具体的 Token 值**。  
* 规范的结构严格遵循 front-end-spec-tmpl.yaml。  
* 规范内容足以让下游的 Design System Visualization Agent 能够**仅凭此文档**（及少量辅助文档如 architecture.md）就能规划并生成准确、专业的 Figma 可视化呈现。

## **❗ 注意事项 (Important Notes)**

* ux-expert 的主要职责是**定义规范**。可视化建议是次要的，主要目标是提供**下游 Agent 可靠消费的数据源**。  
* 如果项目需求简单，某些层级（如 Mode Tokens）可能不需要，但 Reference/Semantic 的区分是强烈推荐的。  
* 与 architect Agent 的协作很重要，确保 Token 定义与最终的技术实现方式（如 CSS 变量名）保持一致（这通常在 architecture.md 中确认）。