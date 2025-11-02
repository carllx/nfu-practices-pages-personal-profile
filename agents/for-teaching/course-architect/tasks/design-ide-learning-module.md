<!-- Powered by BMAD™ Core -->

# Task: 设计 IDE 课程模块

## 目的

结构化地设计一个嵌入 IDE 的课程模块，确保其符合教学原则、开发者工作流，并提供优质的课程内容和实践活动。

**重要**: 这是为**课程设计者**设计课程内容的工具，而非评估学生的系统。

## 输入

- `module_topic`: 模块主题 (例如: "Python 函数基础")
- `target_ide`: 目标 IDE (例如: "VS Code")
- `teaching_objectives`: 清晰的教学目标列表 (例如: "教会学生定义和调用带参数的 Python 函数")
- `prerequisites`: 前置知识要求
- `context`: (可选) 相关项目或代码库上下文

## 步骤

### 1. 确认教学目标

- 与用户一起审查教学目标，确保其具体、可实现、相关
- 将目标分解为更小的知识点或技能点

### 2. 设计课程内容结构

基于建构主义和情境认知理论 [cite: data/learning-theories-summary.md]，设计课程内容结构：

**内容组织**:
- 概念讲解（文字、代码示例）
- 实践活动（动手编码任务）
- 参考资料（文档链接、扩展阅读）

**示例结构**:
```
1. 概念介绍
   - Markdown 文档或内嵌注释
   - 代码示例演示

2. 实践活动
   - 在提供的代码模板中完成函数定义
   - 使用 IDE 调试器单步执行
   - 编写单元测试验证功能

3. 参考资源
   - 官方文档链接
   - 进阶材料
```

### 3. 定义交互模式

参照 `evaluate-interaction-burden` 任务和 `hci-devtool-principles.md`。

为课程内容设计**低干扰**的呈现方式：

- **内容呈现**: 如何展示课程材料（Markdown 文件、编辑器内注释、专用侧边栏）
- **实践指导**: 如何引导实践活动（代码模板、步骤清单、提示系统）
- **辅助材料**: 如何提供帮助（上下文感知提示、文档链接、示例代码）

优先使用 IDE 原生或轻量级扩展机制。

### 4. 规划实践活动

设计与教学目标对应的实践任务：

**活动类型**:
- **代码补全**: 在模板中完成代码
- **调试练习**: 修复给定的bug
- **重构任务**: 改进代码结构
- **项目任务**: 综合应用所学知识

**活动设计要点**:
- 明确的任务说明
- 合适的难度递进
- 即时的反馈机制（代码检查、测试）

### 5. 确定技术结构

基于 `create-module-structure` 命令的逻辑。

规划模块所需的文件结构：

```
module-python-functions/
├── README.md                 # 模块说明
├── 01-introduction/
│   ├── concept.md           # 概念讲解
│   └── examples.py          # 示例代码
├── 02-practice/
│   ├── instructions.md      # 练习说明
│   ├── template.py          # 代码模板
│   └── tests.py             # 测试文件
├── 03-advanced/
│   └── references.md        # 进阶资料
└── .vscode/
    └── settings.json        # IDE 配置
```

识别可能需要的 IDE 扩展或特定配置。

### 6. 指定内容反馈点

基于 `define-content-feedback` 任务 [cite: tasks/define-content-feedback.md]。

识别需要收集哪些数据来评估**课程内容质量**：
- 内容章节查看情况
- 实践活动完成率
- 用户反馈和评分
- 技术问题追踪

### 7. 生成模块定义

使用 `ide-course-module-tmpl.yaml` 模板。

将上述所有设计决策填充到模板中，生成结构化的模块定义文件。

### 8. 评审与迭代

使用 `ide-course-design-checklist.md` 进行自检。

与用户一起评审生成的模块定义，根据反馈进行修改。

## 输出

- 一个结构化的课程模块定义文件（基于 `ide-course-module-tmpl.yaml`）
- (可选) 对相关设计决策的说明和理由

## 关键原则

- **DevTool First** - 开发者工具优先
- **Flow Preservation** - 保护生产性流
- **Pedagogical Integrity** - 教学完整性
- **Content Quality** - 内容质量
- **Situated Learning** - 情境化学习
- **Progressive Structure** - 渐进结构
- **Iterative Design** - 迭代设计
