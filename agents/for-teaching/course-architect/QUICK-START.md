# 快速开始指南

<!-- Powered by BMAD™ Core -->

> **文档定位**: 实用教程 - 通过场景示例快速掌握课程设计 Agent 的使用方法。
> 
> **目标用户**: 课程设计者、教师、教学内容创作者
> 
> **架构文档**: 见 [DEPENDENCY-GRAPH.md](DEPENDENCY-GRAPH.md) | **概述**: 见 [README.md](README.md)

## 🚀 三步开始

### 第 1 步：激活 Agent

```
请加载并激活 @agents/course-architect/course-architect.md 中的 IDE Course Architect agent
```

### 第 2 步：查看可用命令

```
*help
```

你将看到 7 个可用命令及其用途。

### 第 3 步：选择场景开始

跳转到下方对应的**使用场景**。

## 📋 命令速查表

| 命令 | 用途 | 何时使用 |
|------|------|---------|
| `design-learning-flow {topic}` | 设计课程流程和内容结构 | 新课程的整体规划 |
| `define-interaction-patterns {module_id}` | 定义课程内容交互模式 | 设计课程 UI/UX 和呈现方式 |
| `create-module-structure {module_id} {ide_target}` | 创建课程模块结构 | 生成课程技术实现方案 |
| `specify-practice-strategy {module_id}` | 设计实践活动策略 | 定义练习和动手任务 |
| `integrate-with-dev-workflow {feature}` | 集成课程内容到开发工作流 | 融入 Git、测试等工具 |
| `define-content-feedback {module_id}` | 定义课程内容反馈机制 | 设计课程质量改进的数据收集 |
| `review-course-architecture {doc}` | 评审课程架构 | 质量检查和优化建议 |

## 🎯 使用场景

### 场景 A：从零设计新课程模块

**目标**: 为"Python 函数编程"主题设计完整的学习模块。

#### 步骤 1：设计学习流程

```
design-learning-flow Python函数编程

目标学员：初学者，已掌握 Python 基本语法
目标 IDE：VS Code
预计时长：30-45 分钟
```

**Agent 会引导你**：
- 定义 SMART 学习目标
- 确定前置知识要求
- 设计活动序列（理论→实践→评估）
- 识别需要的 IDE 功能

#### 步骤 2：定义交互模式

```
define-interaction-patterns python-functions-module

请重点考虑：
- 如何在不打断编码流的情况下提供提示？
- 如何即时反馈代码错误？
- 如何设计调试练习的交互？
```

**Agent 会**：
- 应用认知维度框架评估
- 识别潜在的认知负担
- 建议低干扰的交互方式

#### 步骤 3：创建技术结构

```
create-module-structure python-functions-module VS-Code

请生成：
- 文件组织结构
- 需要的 VS Code 扩展
- 配置文件示例
- 代码模板
```

**Agent 会**：
- 生成标准化的模块定义文件（YAML）
- 说明技术实现要点

#### 步骤 4：定义评估与遥测

```
specify-assessment-strategy python-functions-module

学习目标：
1. 能够定义带参数的函数
2. 理解函数返回值
3. 能够使用函数解决实际问题

---

define-metrics-telemetry python-functions-objectives

请为每个学习目标定义可衡量的数据点
```

#### 步骤 5：最终评审

```
review-course-architecture [粘贴生成的模块定义]

请特别关注：
- 是否符合"保护生产性流"原则？
- 认知负担是否过高？
- 评估机制是否有效？
```

---

### 场景 B：评估并改进现有设计

**目标**: 检查现有课程设计的质量并提出改进建议。

```
review-course-architecture [粘贴你的课程架构文档]
```

**Agent 会使用检查清单**：
1. 验证学习目标是否 SMART
2. 检查交互设计的认知负担
3. 评估技术可行性
4. 验证评估机制的有效性
5. 生成详细的评审报告

**如发现问题**，针对性地使用其他命令改进：

```
# 如果交互设计有问题
define-interaction-patterns {module_id}

# 如果评估策略不足
specify-assessment-strategy {module_id}
```

---

### 场景 C：集成到开发工作流

**目标**: 设计一个与 Git 版本控制深度集成的学习体验。

```
integrate-with-dev-workflow Git版本控制学习模块

请设计如何：
- 在学员每次 commit 时提供反馈
- 引导学员养成良好的 commit message 习惯
- 可视化分支和合并操作
- 追踪学员的 Git 操作模式
```

**Agent 会**：
- 分析 IDE 的 Git 集成能力
- 设计非侵入式的学习介入点
- 建议工作流集成方案

---

## 💡 实用技巧

### 技巧 1：逐步迭代

不要一次完成所有设计。推荐顺序：

```
大纲 → 交互 → 结构 → 指标 → 验证
```

### 技巧 2：显式请求依赖知识

需要理论支持时：

```
请基于 learning-theories-summary 中的建构主义理论设计这个模块
```

```
请应用 hci-devtool-principles 中的认知维度框架评估这个交互
```

### 技巧 3：了解平台限制

设计前查询技术约束：

```
请查阅 ide-platform-capabilities，告诉我在 VS Code 中实现代码可视化需要哪些技术
```

### 技巧 4：使用模板生成标准化输出

```
请使用 ide-course-module-tmpl 模板为我生成完整的模块定义文件
```

### 技巧 5：定期质量检查

```
请使用 ide-course-design-checklist 评审当前设计
```

---

## 🔧 常见问题

### Q1: Agent 没有加载依赖文件？

**A**: 显式请求加载：

```
请先加载 tasks/design-ide-learning-module.md，然后执行任务
```

### Q2: 生成的内容不符合预期？

**A**: 提供更详细的上下文：

```
请基于以下约束重新设计：
- 学员：有 Java 背景的 Python 初学者
- 时间：仅 15 分钟
- 环境：受限的云 IDE（无法安装扩展）
```

### Q3: 不确定使用哪个命令？

**A**: 描述你的需求，让 Agent 推荐：

```
我需要评估这个学习界面是否会过度干扰开发者工作流，应该怎么做？
```

Agent 会自动选择合适的命令。

### Q4: 想深入了解某个理论或原则？

**A**: 直接请求查看：

```
请详细解释 hci-devtool-principles 中的认知维度框架
```

---

## 📚 进阶使用

### 组合多个命令

```
请完成以下工作流：
1. 使用 design-learning-flow 设计"Git 版本控制"模块的大纲
2. 使用 integrate-with-dev-workflow 设计如何与 VS Code 的源代码控制功能集成
3. 使用 define-metrics-telemetry 定义追踪学员 Git 操作的遥测点
4. 最后使用 review-course-architecture 检查设计质量
```

### 自定义特殊场景

```
我想设计一个特殊的学习体验：
- 学员在调试器中学习数据结构
- 通过可视化变量状态理解算法
- 不需要编写代码，只需要单步执行和观察

请建议使用哪些命令和依赖来完成这个设计
```

---

## ✅ 完成检查清单

设计完成后，确保：

- [ ] 所有学习目标清晰且可衡量
- [ ] 交互设计经过认知负担评估
- [ ] 技术实现考虑了目标 IDE 的能力和限制
- [ ] 定义了明确的评估机制
- [ ] 设计了遥测数据收集方案
- [ ] 通过了 `ide-course-design-checklist` 的检查
- [ ] 生成了标准化的模块定义文件

---

## 🆘 获取更多帮助

1. **查看架构文档**: [DEPENDENCY-GRAPH.md](DEPENDENCY-GRAPH.md)
2. **查看完整概述**: [README.md](README.md)
3. **运行验证脚本**: `./validate-dependencies.sh`
4. **查看任务详情**: 请求 Agent 展示具体任务文件内容

---

**记住核心原则**: DevTool First | Flow Preservation | Pedagogical Integrity | Measurable Outcomes | Situated Learning | Scaffolding & Fading | Iterative Design

**Happy Architecting! 🏗️🎓**
