# 教学工具总览

> **本项目提供的辅助工具与 AI Agent 指南**

---

## 📚 工具分类

本项目为学生提供了三个核心工具，帮助实现从设计规范到 Figma Design System 的自动化流程：

### 1. 自动点击辅助工具
**目录：** `guide/auto-click-helper/`  
**类型：** JavaScript 脚本  
**作用：** 解决智谱 AI 在使用 MCP Server 时频繁中断确认的问题

### 2. Figma 变量转换器
**目录：** `guide/figma-variable-converter/`  
**类型：** AI Agent  
**作用：** 将 CSS Variables 转换为 Figma "Export/Import Variables" 插件格式

### 3. 前端规范增强器
**目录：** `guide/frontend-spec-enhancer/`  
**类型：** AI Agent 任务指令  
**作用：** 指导 UX Expert 创建可视化就绪、自动化友好的 Front-End Spec

---

## 🛠️ 工具详解

### 工具 1：自动点击辅助工具

#### 📁 文件结构
```
guide/auto-click-helper/
├── script.js          # 自动点击脚本
└── README.md          # 使用说明
```

#### 🎯 使用场景
- **Week 5-6：** Figma Design System 自动化生成阶段
- 当需要连续执行多个 MCP Server 调用时

#### ⚡ 快速使用
1. 打开 VS Code 开发者工具（`Ctrl/Cmd + Shift + I`）
2. 切换到 Console 面板
3. 复制 `script.js` 的全部内容并粘贴执行
4. 看到 "🚀 自动点击已启动！" 即成功

#### 📖 详细文档
查看 `guide/auto-click-helper/README.md`

---

### 工具 2：Figma 变量转换器

#### 📁 文件结构
```
guide/figma-variable-converter/
├── agent-prompt.md    # Agent 指令（加载到智谱 AI）
└── README.md          # 使用说明
```

#### 🎯 使用场景
- **Week 5-6：** 将 Design Tokens 导入 Figma
- **Week 7 之后：** 将 CSS Variables 反向同步回 Figma

#### ⚡ 快速使用
1. 安装 Figma 插件：[Export/Import Variables](https://www.figma.com/community/plugin/1256972111705530093/export-import-variables)
2. 在智谱 AI 中加载 `agent-prompt.md` 的全部内容
3. 运行命令：`convert style-doc` 或 `convert css-code`
4. 按提示提供输入（front-end-spec.md 或 CSS 代码）
5. 确认 Token 类型和 Scopes
6. 生成 JSON 并保存为 `exports/figma-variables.json`
7. 在 Figma 插件中导入 JSON

#### 📖 详细文档
查看 `guide/figma-variable-converter/README.md`

---

### 工具 3：前端规范增强器

#### 📁 文件结构
```
guide/frontend-spec-enhancer/
├── agent-prompt.md    # Agent 任务指令（加载到智谱 AI）
└── README.md          # 使用说明
```

#### 🎯 使用场景
- **Week 3-4：** 创建 `docs/front-end-spec.md` 阶段
- 确保生成的规范符合自动化要求

#### ⚡ 快速使用
1. 确保完成 `docs/brief.md` 和 `docs/prd.md`
2. 在智谱 AI 中同时加载：
   - `agents/ux-expert.txt`
   - `guide/frontend-spec-enhancer/agent-prompt.md`
3. 运行命令：`使用 create-doc 任务创建 front-end-spec.md`
4. 按增强要求填充内容：
   - 明确 Primitive/Semantic 层级
   - 使用统一命名规范
   - 提供精确的 Token 值
5. 完成后使用质量检查清单验证

#### 📖 详细文档
查看 `guide/frontend-spec-enhancer/README.md`

---

## 🔄 工具协作流程

这三个工具在项目中的完整协作流程：

```
Week 3-4: 定义 Design Tokens
├─ 使用【工具 3】前端规范增强器
│  └─ 创建高质量的 front-end-spec.md
│
Week 5-6: Figma 自动化
├─ 使用【工具 1】自动点击辅助工具
│  └─ 启动脚本，避免手动确认中断
├─ 使用【工具 2】Figma 变量转换器
│  ├─ 将 front-end-spec.md 转换为 JSON
│  └─ 导入 Figma 插件生成 Variables
│
Week 7: 代码实现
└─ 可选：使用【工具 2】反向同步
   └─ 将 CSS Variables 同步回 Figma
```

---

## 📊 工具对比表

| 工具 | 类型 | 输入 | 输出 | 使用频率 |
|------|------|------|------|----------|
| 自动点击辅助工具 | JS 脚本 | 无 | 自动点击"同意"按钮 | 每次使用 MCP Server |
| Figma 变量转换器 | AI Agent | CSS / front-end-spec.md | JSON 文件 | 1-2 次（首次 + 更新） |
| 前端规范增强器 | AI Agent 指令 | brief.md + prd.md | 增强版 front-end-spec.md | 1 次（创建规范时） |

---

## 🎓 学习路径建议

### 对于初学者

**第 1 次接触（Week 3-4）：**
1. 先阅读 `teaching-plan.md`，了解整体流程
2. 使用【工具 3】创建第一份规范
3. 理解 Design Tokens 本体论的重要性

**第 2 次接触（Week 5-6）：**
1. 使用【工具 1】解决 MCP Server 中断问题
2. 使用【工具 2】将规范转换为 Figma Variables
3. 体验规范驱动自动化的价值

**进阶练习（Week 7+）：**
1. 修改 front-end-spec.md，重新转换
2. 对比 CSS Variables 与 Figma Variables 的同步
3. 尝试自定义工具参数（如自动点击频率）

### 对于进阶学习者

**挑战 1：工具定制**
- 修改自动点击脚本，支持其他确认对话框
- 扩展 Figma 变量转换器，支持更多 Token 类型

**挑战 2：流程优化**
- 将三个工具整合为一键执行的脚本
- 添加自动验证和错误提示

**挑战 3：反向同步**
- 从 Figma 导出 Variables，更新 front-end-spec.md
- 实现设计与代码的双向同步

---

## ⚠️ 常见问题

### Q1: 三个工具必须都用吗？

**A:** 不一定
- **必须：** 工具 3（前端规范增强器）- 规范质量是核心
- **强烈推荐：** 工具 2（Figma 变量转换器）- 自动化关键
- **可选：** 工具 1（自动点击辅助工具）- 提升体验，非必需

### Q2: 工具使用顺序是固定的吗？

**A:** 是的，建议按顺序使用：
1. **工具 3** 先创建规范（Week 3-4）
2. **工具 1** + **工具 2** 再进行自动化（Week 5-6）

### Q3: 工具出错了怎么办？

**A:** 每个工具的 README.md 都有详细的故障排查部分：
- `auto-click-helper/README.md` - 脚本不工作的解决方法
- `figma-variable-converter/README.md` - 转换失败的排查步骤
- `frontend-spec-enhancer/README.md` - 规范质量问题的修正

### Q4: 可以在其他项目中使用这些工具吗？

**A:** 可以！
- **工具 1** 适用于所有使用智谱 AI + MCP Server 的场景
- **工具 2** 适用于任何需要将 CSS Variables 导入 Figma 的项目
- **工具 3** 的增强要求可以应用于任何 Front-End Spec 创建

### Q5: 工具会定期更新吗？

**A:** 会的
- 根据智谱 AI 和 Figma 插件的更新，工具会相应调整
- 查看每个工具 README.md 末尾的"更新日志"部分
- 如发现问题，请联系课程教师

---

## 📚 相关资源

### 教学文档
- [8 周教学计划](teaching-plan.md) - 完整学习路线
- [Design System 最佳实践](best-practices-designSysterm.md) - 深度教程
- [技术实施计划](tech-plan.md) - 技术细节

### 项目文档
- [项目简报](../docs/brief.md) - 项目愿景
- [产品需求文档](../docs/prd.md) - 功能需求
- [前端规范](../docs/front-end-spec.md) - Design Tokens（示例）
- [架构设计](../docs/architecture.md) - 技术架构

### 外部资源
- [W3C Design Tokens 规范](https://www.w3.org/community/design-tokens/)
- [Figma Variables 文档](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [智谱 AI 文档](https://www.zhipuai.cn/devdocs)

---

## 💡 核心理念

这些工具不仅仅是辅助脚本，它们体现了**现代化设计与开发的核心理念**：

### 1. 规范先行
**前端规范增强器**确保你的规范足够精确和结构化，成为自动化的可靠输入源

### 2. 工具辅助
**Figma 变量转换器**和**自动点击辅助工具**让机器处理繁琐工作，人类专注于创造

### 3. 持续验证
每个工具都包含质量检查清单，确保输出符合标准

### 4. 学习成长
通过使用工具，你将理解：
- 为什么规范的精确性如此重要
- 自动化如何提升效率和一致性
- 设计与代码如何保持同步

---

## 🚀 开始使用

**新手入门：**
1. 从 `teaching-plan.md` 开始，了解整体流程
2. 到达 Week 3-4 时，打开 `frontend-spec-enhancer/README.md`
3. 按步骤使用各工具

**快速参考：**
- 需要创建规范？→ `frontend-spec-enhancer/README.md`
- 需要转换为 JSON？→ `figma-variable-converter/README.md`
- 需要自动点击？→ `auto-click-helper/README.md`

**遇到问题：**
- 查看对应工具的 README.md 中的"常见问题"部分
- 参考 `teaching-plan.md` 中的故障排查指南
- 联系课程教师获取帮助

---

**祝你的学习之旅顺利！记住：工具是助手，理解原理才是关键。** 🎓✨

---

**License:** MIT  
**Maintainer:** Product Design Course Team  
**Contact:** 如有问题请联系课程教师

