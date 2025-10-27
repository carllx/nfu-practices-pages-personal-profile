# Figma 变量转换器

> **将 CSS Variables 转换为 Figma "Export/Import Variables" 插件格式**

---

## 📖 工具简介

**Figma 变量转换器 (Varuna)** 是一个 AI Agent，能够将你的 Design Tokens（CSS Variables 或 front-end-spec.md）转换为 Figma "Export/Import Variables" 插件所需的特定 JSON 格式。

### 工作流程

```
1. 定义 Design Tokens (front-end-spec.md)
   ↓
2. 使用本工具转换为 JSON
   ↓
3. 导入 Figma "Export/Import Variables" 插件
   ↓
4. 生成可视化 Design System Variables
```

---

## 🚀 快速开始

### 步骤 1：安装 Figma 插件

1. 打开 Figma
2. 前往：[Export/Import Variables](https://www.figma.com/community/plugin/1256972111705530093/export-import-variables)
3. 点击 **Install**

### 步骤 2：加载 AI Agent

在 VS Code 智谱 AI 中：

1. 打开 `guide/figma-variable-converter/agent-prompt.md`
2. 复制全部内容
3. 粘贴到智谱 AI 对话框并发送
4. 等待 Agent 激活确认

### 步骤 3：启动转换

根据输入类型选择命令：

**从设计规范转换：**
```
convert style-doc
```

**从 CSS 代码转换：**
```
convert css-code
```

### 步骤 4：提供输入内容

**方式 A：提供文档路径**
```
请读取 docs/front-end-spec.md 中的 Design Tokens 部分
```

**方式 B：直接粘贴 CSS**
```css
:root {
  --color-primitive-black: #000000;
  --spacing-primitive-md: 16px;
  --radius-primitive-lg: 24px;
}
```

### 步骤 5：确认配置

Agent 会引导你确认：

1. **Collection 名称** - 建议使用 "Design Tokens"
2. **Modes** - 本项目建议仅使用 "Default" 模式
3. **Token 类型** - Agent 会自动推断并请你确认
4. **Scopes** - 为 FLOAT 类型 Token 指定作用域

### 步骤 6：生成并保存 JSON

```
generate-json
```

Agent 输出 JSON 后：

1. 复制 JSON 内容
2. 保存为 `exports/figma-variables.json`

### 步骤 7：导入 Figma

1. 在 Figma 中运行插件：`Plugins` → `Export/Import Variables`
2. 选择 **Import**
3. 上传 `exports/figma-variables.json`
4. 点击 **Import**

✅ 完成！你的 Design Tokens 现已在 Figma 中以 Variables 形式存在。

---

## 💻 可用命令

### help
显示所有可用命令
```
help
```

### convert
启动转换流程
```
convert style-doc    # 从设计规范转换
convert css-code     # 从 CSS 代码转换
```

### suggest-vars
分析 CSS 并建议变量化方案（仅当 CSS 中无变量时）
```
suggest-vars <CSS代码>
```

### generate-json
生成最终 JSON（在所有确认完成后）
```
generate-json
```

### doc-out
输出当前已生成的 JSON（用于预览）
```
doc-out
```

### exit
退出转换器模式
```
exit
```

---

## 📋 输入格式要求

### Design Tokens 命名规范

**✅ 推荐格式：**
```css
--color-primitive-black
--color-semantic-background-button-primary-default
--spacing-primitive-md
--radius-semantic-button-primary
```

**特点：**
- 全部小写
- 连字符分隔（kebab-case）
- 结构化：`--category-level-context-element-variant-state`

### Token 值格式

| 类型 | 输入格式 | 转换为 |
|------|---------|--------|
| **颜色** | `#000000` | `COLOR` → `{r:0, g:0, b:0, a:1}` |
| **尺寸** | `16px` | `FLOAT` → `16` |
| **时长** | `300ms` | `FLOAT` → `300` |
| **rem** | `1.5rem` | `FLOAT` → `24` (1.5 × 16) |
| **字体** | `'Fredoka', sans-serif` | `STRING` |
| **纯数字** | `0.5` | `FLOAT` → `0.5` |

---

## 🎯 实战示例

### 示例：完整流程

**输入 CSS:**
```css
:root {
  /* Primitive */
  --color-primitive-black: #000000;
  --color-primitive-white: #FFFFFF;
  --spacing-primitive-md: 16px;
  --radius-primitive-lg: 24px;
  
  /* Semantic */
  --color-semantic-bg-button-primary: var(--color-primitive-black);
  --color-semantic-text-button-primary: var(--color-primitive-white);
}
```

**执行:**
```
用户: convert css-code

Agent: 请提供 CSS 代码

用户: [粘贴上述 CSS]

Agent: 已解析 6 个 Variables:
- 4 个 Primitive Tokens
- 2 个 Semantic Tokens (引用关系已识别)

Collection 名称? (默认: Design Tokens)

用户: [回车]

Agent: ✅ 开始转换...

[确认 Token 类型和 Scopes...]

Agent: ✅ JSON 生成完成！

{
  "id": "VariableCollectionId:TBD:1",
  "name": "Design Tokens",
  "modes": {
    "modeId:1:1": "Default"
  },
  ...
}
```

---

## ⚠️ 注意事项

### 1. 跨 Collection 引用限制

**问题：** Figma 插件不支持跨 Collection 的 Variable 引用

**解决：** 将所有相互引用的 Tokens 放在同一个 Collection 中

### 2. ID 占位符

生成的 JSON 使用占位符 ID（如 `VariableCollectionId:TBD:1`），Figma 插件导入时会自动替换为真实 ID。

### 3. 颜色格式

**JSON 中的颜色使用 0-1 范围：**
```json
{
  "type": "COLOR",
  "resolvedValue": {
    "r": 0,      // #000000
    "g": 0,
    "b": 0,
    "a": 1
  }
}
```

### 4. Semantic Token 引用

**在 CSS 中：**
```css
--color-semantic-bg: var(--color-primitive-black);
```

**Agent 处理：**
- 识别 `var()` 引用关系
- 在 JSON 中设置 `alias` 字段
- Figma 中显示为引用关系（→ 图标）

---

## 🐛 常见问题

### Q: Agent 无法识别我的 Token 命名？

**A:** 确保使用结构化命名：
- ✅ `--color-primitive-black`
- ✅ `--color-semantic-background-button-primary-default`
- ❌ `--blackColor`（驼峰式）
- ❌ `--button_bg_color`（下划线）

### Q: 生成的 JSON 在 Figma 插件中导入失败？

**A:** 检查以下几点：
1. 使用 [JSONLint](https://jsonlint.com/) 验证 JSON 格式
2. 确认 JSON 中没有注释（不应有 `//` 或 `/* */`）
3. 确认颜色值是 `{r,g,b,a}` 对象，而非 HEX 字符串
4. 查看 Figma 插件的错误提示

### Q: 如何处理 rem 单位？

**A:** Agent 会询问基础字号：
```
Agent: 检测到 rem 单位，基础字号？(默认 16)

用户: [回车使用 16，或输入其他值]
```

计算公式：`1.5rem × 16 = 24px`

### Q: 如何更新已导入的 Variables？

**方式 1：重新导入（覆盖）**
1. 修改源文件
2. 重新运行 Agent 转换
3. 在 Figma 插件中选择覆盖模式导入

**方式 2：在 Figma 中手动编辑**
1. 打开 Figma Variables 面板
2. 直接编辑 Variable 值
3. 使用插件的 Export 功能导出（如需同步回代码）

---

## 📚 相关资源

- [Figma Export/Import Variables 插件](https://www.figma.com/community/plugin/1256972111705530093/export-import-variables)
- [Figma Variables 文档](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [W3C Design Tokens 规范](https://www.w3.org/community/design-tokens/)
- [本项目 Front-End Spec 模板](../../docs/front-end-spec.md)

---

## 💡 学习建议

### 第一次使用
1. 只转换 5-10 个简单 Tokens，熟悉流程
2. 打开生成的 JSON，理解其结构
3. 在 Figma 中验证导入结果

### 进阶练习
1. 尝试创建 Light/Dark 两个 Modes
2. 创建多层引用（Primitive → Semantic → Component）
3. 为不同类型的 FLOAT Tokens 指定精确 Scopes

### 调试技巧
1. 使用 `doc-out` 命令预览 JSON
2. 分批转换（先 Colors，再 Spacing）
3. 保留成功的中间版本（`v1.json`, `v2.json`）

---

**License:** MIT  
**Maintainer:** Product Design Course Team  
**Contact:** 如有问题请联系课程教师

