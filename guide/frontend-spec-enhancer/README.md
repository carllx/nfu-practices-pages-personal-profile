# 前端规范增强器

> **创建可视化就绪、自动化友好的 Front-End Spec**

---

## 📖 工具简介

**前端规范增强器**是一个任务指令，指导 **UX Expert Agent** 在创建 `docs/front-end-spec.md` 时应用一系列**增强要求**，使生成的规范不仅定义了优秀的用户体验，更能**驱动下游自动化工具**（如 Cursor Talk to Figma MCP Server）精确生成 Figma Design System。

### 普通规范 vs 增强规范

| 维度 | 普通规范 | 增强规范 |
|------|---------|---------|
| **Design Tokens** | 列出名称和值 | 明确层级（Primitive/Semantic）+ 引用关系 |
| **命名规范** | 可能不一致 | 强制统一的结构化命名 |
| **值的精确性** | 可能有模糊描述 | 所有值必须精确（"24px"，非"large"） |
| **组件规范** | 描述功能和状态 | 明确标注使用的具体 Tokens |
| **自动化支持** | 需人工解释 | 可直接驱动自动化工具 |

---

## 🚀 快速开始

### 步骤 1：准备前置文档

确保完成：
- [ ] `docs/brief.md` - 项目简报
- [ ] `docs/prd.md` - 产品需求文档（包含品牌文法）

### 步骤 2：加载 UX Expert Agent + 增强指令

在 VS Code 智谱 AI 中：

1. 打开 `agents/ux-expert.txt`，复制内容并粘贴
2. 打开 `guide/frontend-spec-enhancer/agent-prompt.md`，复制内容并粘贴
3. 发送组合指令：

```
现在，你是一位增强版的 UX Expert。请基于以下文档创建 front-end-spec.md：
- docs/brief.md
- docs/prd.md

请特别遵循增强要求中的 W3C Design Tokens 本体论和命名规范。
```

### 步骤 3：启动文档创建

```
使用 create-doc 任务，基于 front-end-spec-tmpl.yaml 模板，创建 docs/front-end-spec.md
```

Agent 会引导你交互式填充所有部分。

---

## 📋 核心增强要求

### 1. 【强制】W3C Design Tokens 本体论

所有 Design Tokens 必须明确标注层级：

#### Reference Tokens (Primitive)
**定义：** 基础、不可变的原始值

**示例：**
```markdown
### Primitive Tokens
**Level:** Reference

**Colors:**
- `color.primitive.black`: `#000000`
- `color.primitive.gray.100`: `#F5F5F5`
- `color.primitive.red.500`: `#EF4444`

**Spacing:**
- `spacing.primitive.xs`: `4px`
- `spacing.primitive.md`: `16px`
- `spacing.primitive.lg`: `24px`
```

#### Semantic Tokens
**定义：** 与 UI 元素关联，引用 Reference Tokens

**示例：**
```markdown
### Semantic Tokens
**Level:** Semantic

**Button - Primary:**
- `color.semantic.background.button.primary.default`: `'{color.primitive.black}'`
- `color.semantic.background.button.primary.hover`: `'{color.primitive.gray.900}'`
- `radius.semantic.button.primary`: `'{radius.primitive.lg}'`
```

**特点：**
- 使用 `'{token.name}'` 格式引用 Primitive
- 命名包含使用场景（button, card, input 等）

---

### 2. 【强制】统一的命名规范

**推荐格式：**
```
category.level.context.element.[variant].[state].[mode]
```

**实际示例：**

| Token 名称 | 解析 |
|-----------|------|
| `color.primitive.black` | 类别=color, 层级=primitive, 色系=black |
| `spacing.primitive.md` | 类别=spacing, 层级=primitive, 尺寸=md |
| `color.semantic.background.button.primary.default` | 完整语义化命名 |

**命名规则：**
1. 全部小写
2. 单词间用点号 `.` 分隔（Figma 中转为 `/`）
3. Primitive 命名简洁，仅含物理特征
4. Semantic 命名语义化，含使用场景

---

### 3. 【强制】精确的 Token 值

❌ **错误示例（模糊）：**
```markdown
- Primary Color: Dark color
- Large Spacing: Big space
- Bold Font: Heavy weight
```

✅ **正确示例（精确）：**
```markdown
- `color.primitive.black`: `#000000`
- `spacing.primitive.lg`: `24px`
- `font.primitive.weight.bold`: `700`
```

**值的格式要求：**

| 类别 | 格式示例 |
|------|---------|
| 颜色 | `#000000`, `rgba(0, 0, 0, 0.5)` |
| 尺寸 | `16px`, `1.5rem` |
| 字体族 | `'Fredoka', sans-serif` |
| 字重 | `400`, `700`, `900` |
| 行高 | `1.2`, `1.5` |
| 缓动 | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| 时长 | `200ms`, `300ms` |

---

### 4. 【推荐】组件规范中的 Token 映射

在定义组件时，明确标注使用的具体 Tokens：

**示例：Button 组件**
```markdown
## Button Component

**Primary Button (Default State):**
- **Background:** `{color.semantic.background.button.primary.default}` → `#000000`
- **Text Color:** `{color.semantic.text.button.primary.default}` → `#FFFFFF`
- **Border:** `{stroke.semantic.button.primary}` → `3px solid #000000`
- **Border Radius:** `{radius.semantic.button.primary}` → `24px`
- **Padding:** `{spacing.primitive.md} {spacing.primitive.lg}` → `16px 24px`
- **Font:** `{typography.semantic.button}`
  - Family: `{font.primitive.family.primary}` → `'Fredoka'`
  - Size: `{font.primitive.size.base}` → `16px`
  - Weight: `{font.primitive.weight.bold}` → `700`

**Primary Button (Hover State):**
- **Background:** `{color.semantic.background.button.primary.hover}` → `#1F2937`
- **Transform:** `scale(1.05)`
- **Transition:** `{animation.semantic.button.hover}` → `300ms cubic-bezier(...)`
```

**价值：**
- 开发者知道使用哪些 CSS Variables
- 自动化工具能生成准确组件示例
- 设计与代码保持一致

---

## ✅ 质量检查清单

完成 `docs/front-end-spec.md` 后，逐项检查：

### Token 本体论
- [ ] 所有 Tokens 明确标注 `primitive` 或 `semantic` 层级
- [ ] Primitive Tokens 是独立的物理值
- [ ] Semantic Tokens 使用 `'{token.name}'` 格式引用 Primitive

### 命名规范
- [ ] 所有 Tokens 遵循统一格式（`category.level.context...`）
- [ ] 命名全部小写，点号分隔
- [ ] 没有不一致的命名（如混用驼峰、下划线）

### 精确值
- [ ] 所有 Tokens 有具体、可执行的值
- [ ] **无**模糊描述（如 'large', 'primary'）
- [ ] 颜色值使用 HEX/RGBA，尺寸值带单位

### 品牌文法对齐
- [ ] Colors: 黑白灰主导 (80%) + 红黄点缀 (20%)
- [ ] Stroke: 3-5px 粗描边
- [ ] Radius: 16-24px+ 极端圆角
- [ ] Typography: 圆润粗体（Fredoka/Baloo）
- [ ] Animation: 弹性缓动

### 组件规范
- [ ] 每个组件标注使用的 Token 名称
- [ ] 包含所有状态（Default, Hover, Active, Disabled）
- [ ] Token 名称和具体值都显示

### 自动化可行性
- [ ] 开发者/MCP Server 读取后能**无需额外询问**地实现
- [ ] 无需 "目视确认" 或 "根据喜好调整"

---

## 🎯 实战示例

### 场景：定义 Button 的完整 Token 体系

**第 1 步：Primitive Tokens**
```markdown
### Primitive Tokens

**Colors:**
- `color.primitive.black`: `#000000`
- `color.primitive.white`: `#FFFFFF`

**Spacing:**
- `spacing.primitive.md`: `16px`
- `spacing.primitive.lg`: `24px`

**Border Radius:**
- `radius.primitive.lg`: `24px`

**Stroke:**
- `stroke.primitive.md`: `3px`
```

**第 2 步：Semantic Tokens**
```markdown
### Semantic Tokens

**Button - Primary:**
- `color.semantic.background.button.primary.default`: `'{color.primitive.black}'`
- `color.semantic.background.button.primary.hover`: `'{color.primitive.gray.900}'`
- `color.semantic.text.button.primary.default`: `'{color.primitive.white}'`
- `radius.semantic.button.primary`: `'{radius.primitive.lg}'`
```

**第 3 步：Component Specification**
```markdown
## Button Component

### Primary Button

**Default State:**
- Background: `{color.semantic.background.button.primary.default}` → `#000000`
- Text: `{color.semantic.text.button.primary.default}` → `#FFFFFF`
- Border: `{stroke.semantic.button.primary}` → `3px solid #000000`
- Radius: `{radius.semantic.button.primary}` → `24px`
```

---

## 🐛 常见问题

### Q: Agent 没有应用增强要求？

**A:** 确认同时加载了：
1. `agents/ux-expert.txt`
2. `guide/frontend-spec-enhancer/agent-prompt.md`

并在开始时明确提醒 Agent 遵循增强要求。

### Q: 如何判断 Token 是 Primitive 还是 Semantic？

**Primitive：**
- 不依赖其他 Token
- 描述物理特征（如 `#000000`, `16px`）
- 可被多个 Semantic 引用

**Semantic：**
- 引用 Primitive Token
- 描述使用场景（如按钮背景、卡片圆角）
- 包含 UI 元素名称（button, card, input）

### Q: 命名太长，可以简化吗？

**不建议。** 原因：
1. 结构化命名便于自动化解析
2. 清晰层级避免命名冲突
3. 符合 W3C 规范

**妥协：** Primitive 可简化，Semantic 保留完整结构

### Q: 增强后影响可读性吗？

**不会，反而更清晰：**

**Before：** 按钮背景色：黑色（模糊）  
**After：** `{color.semantic.background.button.primary.default}` → `#000000`（既有语义又有具体值）

---

## 📚 相关资源

- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Design Tokens 格式规范](https://design-tokens.github.io/community-group/format/)
- [本项目 Front-End Spec 模板](../../docs/front-end-spec.md)
- [Teaching Plan Week 3-4](../teaching-plan.md)

---

## 💡 核心价值

增强版 Front-End Spec 是项目成败的**关键基石**：

1. **质量决定一切** - 规范质量直接影响 Figma 自动化成功率
2. **一次投入，多次收益** - 规范定义好，开发、可视化、维护都省心
3. **规范即文档** - 好规范本身就是最好的文档

**记住核心原则：**
- **层级清晰** - Primitive/Semantic 分明
- **命名一致** - 结构化、可解析
- **值精确** - 无歧义、可执行

**准备好创建高质量规范了吗？** 🚀

---

**License:** MIT  
**Maintainer:** Product Design Course Team  
**Contact:** 如有问题请联系课程教师

