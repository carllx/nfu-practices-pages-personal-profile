# IDE Course Architect Agent

<!-- Powered by BMAD™ Core -->

## 概述

**IDE Course Architect** (Athena) 是专门用于设计和制作 IDE 内嵌课程内容与课件的 AI Agent。融合学习科学、HCI/UX for DevTools 和软件工程原则，帮助课程设计者创建有效、非干扰且高质量的课程内容。

**Agent ID**: `course-architect` | **图标**: 🏗️🎓 | **版本**: 1.0

## 文件结构

```
agents/course-architect/
├── course-architect.md          # Agent 定义（主 instruction）
├── README.md                    # 本文件：总览与导航
├── QUICK-START.md              # 快速开始教程
├── DEPENDENCY-GRAPH.md         # 依赖关系技术文档
├── validate-dependencies.sh    # 依赖验证脚本
├── tasks/                      # 可执行任务脚本
│   ├── design-ide-learning-module.md
│   ├── evaluate-interaction-burden.md
│   └── define-learning-telemetry.md
├── templates/                  # 输出模板
│   └── ide-course-module-tmpl.yaml
├── checklists/                 # 质量检查清单
│   └── ide-course-design-checklist.md
└── data/                       # 知识库
    ├── learning-theories-summary.md
    ├── hci-devtool-principles.md
    └── ide-platform-capabilities.md
```

**总计**: 13 个文件（1 agent + 3 tasks + 1 template + 1 checklist + 3 data + 4 文档）

## 快速导航

### 🚀 我想开始使用
→ 阅读 [QUICK-START.md](QUICK-START.md) - 5分钟上手指南

### 🏗️ 我想了解架构
→ 阅读 [DEPENDENCY-GRAPH.md](DEPENDENCY-GRAPH.md) - 完整依赖关系图

### ✅ 我想验证完整性
→ 运行 `./validate-dependencies.sh` - 自动检查所有依赖

### 📚 我想扩展功能
→ 参考下方的**扩展指南**

## 核心原则

Agent 设计遵循七大原则：

1. **DevTool First** - 课程内容作为开发工具链的一部分
2. **Flow Preservation** - 保护开发者的生产性流
3. **Pedagogical Integrity** - 教学完整性
4. **Content Quality** - 课程内容质量
5. **Situated Learning** - 情境化课程设计
6. **Progressive Structure** - 渐进式内容结构
7. **Iterative Design** - 迭代优化课程内容

## 可用命令

| 命令 | 用途 |
|------|------|
| `design-learning-flow {topic}` | 设计课程流程和内容结构 |
| `define-interaction-patterns {module_id}` | 定义课程内容交互模式 |
| `create-module-structure {module_id} {ide_target}` | 创建课程模块结构 |
| `specify-practice-strategy {module_id}` | 设计实践活动策略 |
| `integrate-with-dev-workflow {feature}` | 集成课程内容到开发工作流 |
| `define-content-feedback {module_id}` | 定义课程内容反馈机制 |
| `review-course-architecture {doc}` | 评审课程架构 |

详细说明见 [QUICK-START.md](QUICK-START.md#常用命令速查)

## 依赖机制

基于 **B-MAD 按需加载规则**：

- ✅ 执行命令时自动加载必需依赖
- ✅ 用户可显式请求加载特定依赖
- ✅ 支持级联加载（任务内部引用）

详细机制见 [DEPENDENCY-GRAPH.md](DEPENDENCY-GRAPH.md#依赖加载规则)

## 使用方式

### 1. 激活 Agent

```
请加载并激活 @agents/course-architect/course-architect.md
```

### 2. 执行命令

```
design-learning-flow Python函数编程
```

### 3. 查看帮助

```
*help
```

完整教程见 [QUICK-START.md](QUICK-START.md)

## 扩展指南

### 添加新 Task

1. 在 `tasks/` 创建 `.md` 文件，使用标准格式：
```markdown
<!-- Powered by BMAD™ Core -->
# Task: 任务名称
## 目的 (Purpose)
## 输入 (Inputs)
## 步骤 (Process)
## 输出 (Output)
```

2. 在 `course-architect.md` 的 `dependencies.tasks` 注册：
```yaml
- name: new-task-name
  path: tasks/new-task-name.md
  purpose: "任务说明"
```

3. 在相关命令的 `uses_tasks` 引用

### 添加新 Data

1. 在 `data/` 创建 `.md` 文件
2. 在 `course-architect.md` 的 `dependencies.data` 注册
3. 在命令中通过 `uses_data` 引用

### 添加新 Command

在 `course-architect.md` 的 `commands` 部分：
```yaml
- new-command {param}:
    description: "命令描述"
    uses_tasks: [相关任务]
    uses_data: [相关数据]
```

### 验证更改

```bash
./validate-dependencies.sh
```

## 相关资源

- [Pipeline Charter](../../docs/pipeline-charter.md)
- [BMAD™ Core 文档](../../docs/README.md)
- [完整依赖关系图](DEPENDENCY-GRAPH.md)
- [快速开始教程](QUICK-START.md)

## 版本信息

- **Agent**: 1.0
- **Template**: 1.0
- **更新日期**: 2025-10-29
- **状态**: ✅ Active

---

**快速链接**: [开始使用](QUICK-START.md) | [架构文档](DEPENDENCY-GRAPH.md) | [验证脚本](validate-dependencies.sh)
