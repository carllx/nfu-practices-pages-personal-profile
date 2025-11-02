# IDE Course Design Checklist


<!-- Powered by BMAD™ Core -->

# Checklist: IDE Course Design Quality

## 目的 (Purpose)

在设计和评审嵌入 IDE 的学习模块/课程时，使用此清单确保其符合教学最佳实践、开发者工作流要求，并具备高质量的学习体验。

## 使用说明 (Instructions)

由 `IDE Course Architect` agent 或相关人员在模块设计完成后、实施前或评审阶段使用。逐项检查，标记状态 (`[x]` 已满足, `[ ]` 未满足, `[N/A]` 不适用)，并添加必要的注释。

### 1. 学习目标与内容 (Learning Objectives & Content)

[[LLM: 检查目标是否清晰，内容是否与目标对齐，且适合 IDE 环境。]]

- `[ ]` **目标明确 (Clear Objectives)**: 学习目标是否具体、可衡量、可实现、相关且有时间限制 (SMART)？
    
    - _注释:_
        
- `[ ]` **内容对齐 (Content Alignment)**: 所有学习活动和评估是否直接服务于学习目标？
    
    - _注释:_
        
- `[ ]` **粒度适中 (Appropriate Granularity)**: 模块/活动的范围是否适合一次学习会话？既不太长也不太碎？
    
    - _注释:_
        
- `[ ]` **真实性 (Authenticity)**: 任务和代码示例是否反映了真实的开发实践和场景？
    
    - _注释:_
        
- `[ ]` **概念准确 (Conceptual Accuracy)**: 教学内容和代码示例是否技术准确无误？
    
    - _注释:_
        

### 2. 交互设计与开发者体验 (Interaction Design & Developer Experience)

[[LLM: 核心检查点：是否保护了生产性流？认知负担是否最小化？]]

- `[ ]` **工作流整合 (Workflow Integration)**: 学习活动是否尽可能利用 IDE 原生功能 (编辑器、调试器、终端、版本控制)？
    
    - _注释:_
        
- `[ ]` **低中断性 (Minimal Disruption)**: 学习干预 (指令、反馈、提示) 是否设计为**非阻塞**和**上下文感知**的？是否容易被忽略或稍后处理？[cite: Persona Core Principle - Flow Preservation]
    
    - _注释:_
        
- `[ ]` **低认知负担 (Low Cognitive Load)**: 交互是否清晰、一致、可预测？是否应用了认知维度原则 (低粘滞性、高可见性等)？[cite: Task - evaluate-interaction-burden]
    
    - _注释:_
        
- `[ ]` **反馈及时性与清晰度 (Timely & Clear Feedback)**: 反馈 (例如: 代码错误、测试结果) 是否即时、具体且可操作？
    
    - _注释:_
        
- `[ ]` **导航清晰 (Clear Navigation)**: 在模块的不同活动或部分之间移动是否容易？学习路径是否清晰？
    
    - _注释:_
        

### 3. 脚手架与支持 (Scaffolding & Support)

[[LLM: 检查是否提供了恰当的帮助，并能适应学习者进步。]]

- `[ ]` **适度脚手架 (Appropriate Scaffolding)**: 是否为初学者提供了足够的初始结构 (例如: 代码模板、清晰指令)？
    
    - _注释:_
        
- `[ ]` **上下文提示 (Contextual Hints)**: 提供的提示是否与当前任务和学习者可能遇到的具体困难相关？
    
    - _注释:_
        
- `[ ]` **难度递进 (Progressive Difficulty)**: 活动的难度是否逐步增加？
    
    - _注释:_
        
- `[ ]` **支持淡出 (Fading Support)**: 随着学习者能力的提升，脚手架或提示是否会逐渐减少或变得可选？[cite: Persona Core Principle - Scaffolding & Fading]
    
    - _注释:_
        
- `[ ]` **外部资源链接 (External Resource Linking)**: 是否在适当的时候提供了指向官方文档、教程或其他高质量资源的链接？
    
    - _注释:_
        

### 4. 评估与衡量 (Assessment & Measurement)

[[LLM: 检查评估是否有效、集成且能够提供洞察。]]

- `[ ]` **评估对齐 (Assessment Alignment)**: 评估方法是否直接衡量了定义的学习目标？
    
    - _注释:_
        
- `[ ]` **评估集成 (Integrated Assessment)**: 评估是否尽可能嵌入在编码实践中 (例如: 通过运行测试、代码分析) 而非孤立的测验？
    
    - _注释:_
        
- `[ ]` **形成性评估 (Formative Assessment)**: 是否提供了促进学习过程的形成性反馈机会？
    
    - _注释:_
        
- `[ ]` **可衡量性 (Measurability)**: 学习进度和成果是否可以通过定义的遥测数据点进行有效衡量？[cite: Task - define-learning-telemetry]
    
    - _注释:_
        
- `[ ]` **评估可靠性 (Reliability)**: 自动化评估 (如测试用例) 是否准确可靠？
    
    - _注释:_
        

### 5. 技术实现与平台适应性 (Technical Implementation & Platform Adaptability)

[[LLM: 检查设计是否在技术上可行，并考虑了目标 IDE 的特性。]]

- `[ ]` **技术可行性 (Technical Feasibility)**: 设计的交互和功能在目标 IDE 平台上是否可以实现？是否考虑了 API 限制？[cite: data/ide-platform-capabilities.md]
    
    - _注释:_
        
- `[ ]` **性能影响 (Performance Impact)**: 学习插件/扩展对 IDE 的性能影响是否被考虑并降至最低？
    
    - _注释:_
        
- `[ ]` **可维护性 (Maintainability)**: 模块结构和代码是否易于更新和维护？
    
    - _注释:_
        
- `[ ]` **可扩展性 (Extensibility)**: 设计是否允许未来添加更多内容或功能？
    
    - _注释:_
        
- `[ ]` **IDE 一致性 (IDE Consistency)**: 交互和外观是否尽可能与目标 IDE 的原生体验保持一致？
    
    - _注释:_
        

### 6. 隐私与伦理 (Privacy & Ethics)

[[LLM: 检查数据收集是否符合规范。]]

- `[ ]` **数据最小化 (Data Minimization)**: 遥测数据收集是否遵循最小必要原则？
    
    - _注释:_
        
- `[ ]` **透明度与同意 (Transparency & Consent)**: 是否清晰告知用户收集了哪些数据及其用途，并获得同意？
    
    - _注释:_
        
- `[ ]` **用户控制 (User Control)**: 用户是否可以选择退出数据收集？
    
    - _注释:_
        

## 总体评估 (Overall Assessment)

- **设计优势 (Strengths)**:
    
- **需改进领域 (Areas for Improvement)**:
    
- **关键风险 (Key Risks)**:
    
- **准备状态 (Readiness Status)**: (例如: 准备实施 / 需要重大修改 / 概念验证阶段)
    

**评审人 (Reviewer):** **日期 (Date):**