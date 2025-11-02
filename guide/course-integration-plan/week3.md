# 第三周：基于设计系统的迭代开发与部署

## 📋 课程基本信息

**课程名称**：从零到一：AI辅助的现代Web开发工作流（逆向工程版）  
**本周主题**：基于设计系统的迭代开发与部署  
**课堂时长**：90分钟  
**课间作业**：持续迭代  
**核心交付物**：部署上线的完整网站 + 系统进化计划

---

## 🎯 本周学习目标

将 Figma 设计系统应用到代码中，学习专业的开发实践，部署网站上线，建立长期主义的产品思维。

### 核心能力
- CSS 变量系统（Design Tokens 的代码化）
- 代码重构与优化
- 响应式设计基础
- 无障碍性验收
- GitHub Pages 部署
- 版本化与系统进化思维

---

## 📝 课前准备清单

### 学员必须完成

**必需完成**：
- [ ] 完成第二周的所有作业（Figma 设计系统 + 更新的文档）
- [ ] 准备展示你的 Figma 设计系统（至少 2-3 个组件）
- [ ] 确保 GitHub 账号可用

**预习内容**（可选）：
- [ ] 了解什么是 CSS 变量（CSS Custom Properties）
- [ ] 了解 GitHub Pages 是什么
- [ ] 浏览响应式设计案例

### 教师准备

**核心教学工具**：
- [ ] 准备代码重构演示案例（硬编码 → 变量化）
- [ ] 测试 GitHub Pages 部署流程
- [ ] 准备 Lighthouse 无障碍性检查演示
- [ ] 准备优秀学员 Figma 展示列表（2-3位）

**教学辅助材料**：
- [ ] CSS 变量速查表
- [ ] 无障碍性检查清单（WCAG 核心要点）
- [ ] GitHub Pages 部署步骤图解
- [ ] 版本规划模板

---

## 📚 课堂环节（90分钟）

### 第一部分：设计系统成果展示（15分钟）

#### 1. 学员 Figma 展示（2-3位，共10分钟）

**展示内容**：
- 变量系统（颜色、间距）
- 核心组件（按钮、卡片等）
- 用组件重建的页面

**同伴互评**：
- 这个设计系统是否清晰？
- Token 命名是否语义化？
- 组件是否便于复用？

#### 2. 教师点评要点（5分钟）

**评价维度**：
- Token 命名规范性
- 组件状态定义完整性
- 系统可扩展性
- 与原网站的一致性

**表扬亮点 + 改进建议**

---

### 第二部分：应用设计系统优化代码（30分钟）

#### 1. CSS 变量系统（Design Tokens 的代码化）（10分钟）

**教师演示**：将 Figma Token 转换为 CSS 自定义属性

**步骤**：

1. **打开 `style.css` 文件**

2. **在文件顶部定义 `:root` 选择器**
   ```css
   :root {
     /* ========== 颜色系统 ========== */
     
     /* 主色 */
     --color-primary: #1976D2;
     --color-primary-light: #42A5F5;
     --color-primary-dark: #1565C0;
     
     /* 点缀色 */
     --color-accent-dark: #D32F2F;
     --color-accent-light: #FF6659;
     
     /* 背景色 */
     --color-bg-primary: #FFFFFF;
     --color-bg-secondary: #F5F5F5;
     --color-bg-tertiary: #EEEEEE;
     
     /* 文字色 */
     --color-text-primary: #212121;
     --color-text-secondary: #757575;
     --color-text-disabled: #BDBDBD;
     
     /* ========== 间距系统 ========== */
     --spacing-xs: 4px;
     --spacing-sm: 8px;
     --spacing-md: 16px;
     --spacing-lg: 24px;
     --spacing-xl: 32px;
     --spacing-2xl: 48px;
     
     /* ========== 字体系统 ========== */
     --font-size-h1: 48px;
     --font-size-h2: 36px;
     --font-size-h3: 24px;
     --font-size-h4: 20px;
     --font-size-body: 16px;
     --font-size-small: 14px;
     
     --font-weight-bold: 700;
     --font-weight-regular: 400;
     --font-weight-light: 300;
     
     --line-height-tight: 1.2;
     --line-height-normal: 1.5;
     --line-height-relaxed: 1.8;
     
     /* ========== 圆角 ========== */
     --radius-sm: 4px;
     --radius-md: 8px;
     --radius-lg: 16px;
     --radius-full: 9999px;
     
     /* ========== 阴影 ========== */
     --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
     --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
     --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
   }
   ```

3. **使用变量**
   ```css
   /* 旧代码（硬编码）*/
   .button {
     background-color: #1976D2;
     color: #FFFFFF;
     padding: 16px 24px;
     font-size: 16px;
     border-radius: 8px;
   }
   
   /* 新代码（使用变量）*/
   .button {
     background-color: var(--color-primary);
     color: var(--color-bg-primary);
     padding: var(--spacing-md) var(--spacing-lg);
     font-size: var(--font-size-body);
     border-radius: var(--radius-md);
   }
   ```

**演示效果**：
- 修改 `--color-primary` 的值
- 刷新页面，观察所有按钮颜色同时更新
- 强调：这就是设计系统的威力

#### 2. 重构现有代码（20分钟）

**教师演示**（5分钟）：

1. **查找硬编码**
   - 在代码中搜索颜色值（如 `#D32F2F`）
   - 搜索固定数值（如 `padding: 16px`）

2. **逐步替换**
   ```css
   /* 示例1：导航栏 */
   .nav {
     /* 旧 */
     background-color: #1976D2;
     padding: 16px 32px;
     
     /* 新 */
     background-color: var(--color-primary);
     padding: var(--spacing-md) var(--spacing-2xl);
   }
   
   /* 示例2：卡片 */
   .card {
     /* 旧 */
     background-color: #FFFFFF;
     padding: 24px;
     border-radius: 8px;
     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
     
     /* 新 */
     background-color: var(--color-bg-primary);
     padding: var(--spacing-lg);
     border-radius: var(--radius-md);
     box-shadow: var(--shadow-md);
   }
   ```

**学员实操**（15分钟）：

**任务**：
1. 在 `style.css` 顶部添加 CSS 变量定义（参考 `design-tokens.md`）
2. 找到至少 5 处硬编码
3. 替换为对应的 CSS 变量
4. 在浏览器中测试，确保效果一致

**巡回指导**：
- 帮助学员找到硬编码
- 确保变量命名与 `design-tokens.md` 一致
- 检查浏览器兼容性（现代浏览器都支持 CSS 变量）

---

### 第三部分：内容建模与动态渲染（15分钟）（可选）

#### 1. 为什么要内容建模（5分钟）

**对比演示**：

**硬编码方式**：
```html
<div class="gallery">
  <div class="artwork">
    <img src="./assets/images/work-001.jpg" alt="作品1">
    <h3>春天的猫</h3>
    <p>1930年代橡皮管风格的猫咪插画</p>
  </div>
  <div class="artwork">
    <img src="./assets/images/work-002.jpg" alt="作品2">
    <h3>夏日冰淇淋</h3>
    <p>复古风格的美食插画</p>
  </div>
  <!-- 重复10次... -->
</div>
```

**数据驱动方式**：
```javascript
// data.js
const artworks = [
  {
    id: "work-001",
    title: "春天的猫",
    image: "./assets/images/work-001.jpg",
    description: "1930年代橡皮管风格的猫咪插画",
    year: 2024,
    tags: ["插画", "复古"]
  },
  {
    id: "work-002",
    title: "夏日冰淇淋",
    image: "./assets/images/work-002.jpg",
    description: "复古风格的美食插画",
    year: 2024,
    tags: ["插画", "美食"]
  }
];
```

**好处**：
- 易于更新：只需修改数据文件
- 易于扩展：添加新作品无需改HTML
- 代码量更少：一个模板生成所有内容
- 便于排序、筛选、搜索

#### 2. JavaScript 动态渲染（10分钟）

**教师演示**：

```javascript
// script.js

// 1. 获取容器元素
const galleryContainer = document.querySelector('.gallery');

// 2. 遍历数据，生成HTML
artworks.forEach(artwork => {
  // 创建元素
  const artworkDiv = document.createElement('div');
  artworkDiv.className = 'artwork';
  
  // 设置内容
  artworkDiv.innerHTML = `
    <img src="${artwork.image}" alt="${artwork.title}">
    <h3>${artwork.title}</h3>
    <p>${artwork.description}</p>
    <div class="tags">
      ${artwork.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  
  // 添加到容器
  galleryContainer.appendChild(artworkDiv);
});
```

**学员实操**（可选）：
- 尝试将一个页面改为动态渲染
- 时间不够可课后完成

---

### 第四部分：响应式设计与无障碍性优化（15分钟）

#### 1. 响应式设计基础（5分钟）

**如果时间允许，简单介绍**：

**CSS Media Queries**：
```css
/* 桌面端（默认）*/
.nav {
  display: flex;
  flex-direction: row;
}

/* 平板端 */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}

/* 移动端 */
@media (max-width: 480px) {
  .nav {
    font-size: var(--font-size-small);
    padding: var(--spacing-sm);
  }
}
```

**演示**：
- 调整浏览器窗口大小
- 观察布局变化

**提示**：
- 初学者可以先专注桌面端
- 移动端适配可作为进阶任务

#### 2. 无障碍性验收（10分钟）

**使用浏览器 Lighthouse 工具**

**教师演示步骤**：

1. **打开 Chrome 浏览器**
2. **访问你的网站**（本地或在线）
3. **打开开发者工具**（F12 或右键 → 检查）
4. **切换到 "Lighthouse" 标签**
5. **选择检查项**：
   - ✅ Performance（性能）
   - ✅ Accessibility（无障碍性）
   - ✅ Best Practices（最佳实践）
   - ✅ SEO
6. **点击 "Analyze page load"**
7. **查看报告**

**重点关注 Accessibility 分数**

**常见问题与解决方案**：

| 问题 | 解决方案 |
|------|---------|
| 图片没有 alt 属性 | 为所有图片添加描述性的 `alt` 文本 |
| 颜色对比度不足 | 调整文字颜色或背景色，确保对比度达到 4.5:1 |
| 链接文本不明确 | 避免使用"点击这里"，改为"查看作品集" |
| 表单没有 label | 为所有输入框添加 `<label>` 标签 |
| 按钮没有可访问名称 | 使用语义化的 `<button>` 标签，添加文本 |

**学员实操**（5分钟）：
- 在自己的网站上运行 Lighthouse
- 记录 Accessibility 分数
- 识别至少 2 个需要改进的地方

---

### 第五部分：部署到 GitHub Pages（10分钟）

#### 部署流程演示

**教师演示步骤**：

**方法1：通过 GitHub 网页界面（推荐初学者）**

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角 "+" → "New repository"
   - 仓库名：`portfolio`（或 `username.github.io`）
   - 设置为 Public（公开）
   - 创建仓库

2. **上传文件**
   - 点击 "Add file" → "Upload files"
   - 拖拽项目文件夹中的所有文件
   - 确保 `index.html` 在根目录
   - 填写 Commit message："Initial commit"
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库 "Settings"（设置）
   - 左侧菜单找到 "Pages"
   - Source（来源）选择 "Deploy from a branch"
   - Branch 选择 "main"，文件夹选择 "/ (root)"
   - 点击 "Save"

4. **访问网站**
   - 等待 1-2 分钟
   - 访问：`https://username.github.io/portfolio`
   - 🎉 网站上线！

**方法2：通过命令行（适合进阶学员）**

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加文件
git add .

# 3. 提交
git commit -m "Initial commit"

# 4. 关联远程仓库
git remote add origin https://github.com/username/portfolio.git

# 5. 推送
git push -u origin main
```

**学员实操**（可选）：
- 如果时间充足，跟随教师步骤部署
- 时间不够可课后完成

---

### 第六部分：系统进化思维与课程总结（15分钟）

#### 1. 版本化与演进计划（5分钟）

**教师演示**：在 `README.md` 中规划未来

```markdown
# 个人作品集网站

一个展示我的插画作品的个人网站。

## 🌐 在线访问

https://username.github.io/portfolio

---

## 📦 版本规划

### v1.0（当前版本）✅
- ✅ 四个核心页面（首页、作品集、关于、联系）
- ✅ 设计系统建立（Design Tokens + 组件库）
- ✅ 基础交互功能
- ✅ 部署到 GitHub Pages

### v1.1（近期计划）
- [ ] 修复 Lighthouse 发现的无障碍性问题
- [ ] 优化图片加载（WebP 格式、懒加载）
- [ ] 添加页面加载动画
- [ ] 完善作品描述和个人简介

### v1.2（中期计划）
- [ ] 移动端响应式优化
- [ ] 增加博客页面
- [ ] 添加作品筛选功能（按标签）
- [ ] SEO 优化（meta 标签、sitemap）

### v2.0（长期愿景）
- [ ] 引入 CMS 内容管理系统
- [ ] 多语言支持（中英文切换）
- [ ] 暗黑模式
- [ ] 3D 作品展示（Three.js）

---

## 🛠️ 技术栈

- HTML5
- CSS3（使用 CSS 变量）
- JavaScript（原生，无框架）
- Figma（设计系统）
- GitHub Pages（托管）

---

## 📚 项目文档

- [项目简报](./docs/brief.md)
- [产品需求文档](./docs/prd.md)
- [前端规范](./docs/front-end-spec.md)
- [设计令牌](./docs/design-tokens.md)
- [技术架构](./docs/architecture.md)

---

## 🎨 设计系统

Figma 设计文件：[链接]

本项目遵循规范的设计系统，所有设计决策已提取为 Design Tokens。

---

## 📝 开发日志

### 2025-11-02
- 完成第一版设计系统
- 部署到 GitHub Pages
- 完成课程第三周学习

### 2025-10-28
- 在 Figma 中重建设计系统
- 创建核心组件库

### 2025-10-25
- 通过 AI Agents 生成网站初稿
- 完成四个核心页面

---

**维护者**：[你的名字]  
**最后更新**：2025-11-02
```

**关键要点**：
- 版本号清晰（v1.0, v1.1, v2.0）
- 任务具体可执行
- 短期 + 中期 + 长期规划
- 避免"一次性项目"心态

#### 2. 反思性讨论（元认知培养）（5分钟）

**提问1**：这套 AI + Figma 工作流的最大优势是什么？

**学员分享**（2-3位）

**可能的回答**：
- 快速看到成果，建立信心
- AI 帮助处理重复性工作
- 设计系统让维护更容易
- 逆向工程更符合学习规律

**提问2**：它可能不适用于哪些场景？

**讨论**：
- 大型企业项目（需要更复杂的框架）
- 实时协作（需要专业团队工具）
- 复杂交互（需要前端框架如 React）
- 高性能要求（需要构建工具优化）

**提问3**：如果未来 AI 更强大，这个流程的哪一步最可能被取代？

**引导思考**：
- 代码生成：很可能被完全自动化
- 设计系统：可能由 AI 自动提取
- **但不会被取代的是**：
  - 创意方向（你想要什么）
  - 决策判断（选择哪个方案）
  - 用户理解（为谁设计）
  - 审美品味（什么是好的设计）

**结论**：人类的价值在于创意和决策，而非执行

#### 3. 课程总结：从"学习者"到"创造者"（5分钟）

**你们不仅学会了技术，更重要的是**：

**✅ 协作能力**
- 学会了如何与 AI 协作
- 理解了软件团队的角色分工
- 掌握了结构化对话的技巧

**✅ 系统思维**
- 建立了设计系统的概念
- 理解了可维护性的重要性
- 学会了用 Token 和组件思考

**✅ 长期主义**
- 不是一次性交付，而是持续迭代
- 版本化思维（v1.0 → v2.0）
- 网站应随着你的成长而进化

**✅ 产品思维**
- 不是为了练习而练习
- 创建的是真正的产品
- 可以展示给他人、用于求职

**鼓励**：
- 这只是开始，你的网站应该成为你的"数字花园"
- 持续更新作品、优化体验
- 未来可以探索更多技术（React、3D、动画等）

---

## 📋 课后持续迭代建议

### 短期优化（1-2周内）

**必做任务**：
1. **完善内容**
   - 补充所有页面的真实内容
   - 优化个人简介和作品描述
   - 添加联系方式（邮箱、社交媒体）

2. **修复无障碍性问题**
   - 根据 Lighthouse 报告逐项修复
   - 确保所有图片有 alt 属性
   - 检查颜色对比度

3. **优化图片**
   - 压缩图片文件大小（使用 TinyPNG 等工具）
   - 考虑转换为 WebP 格式
   - 为大图添加加载动画

4. **收集反馈**
   - 请朋友/同学访问你的网站
   - 询问他们的第一印象
   - 记录改进建议

---

### 中期迭代（1-3个月）

**进阶任务**：
1. **移动端响应式优化**
   - 学习 CSS Media Queries
   - 测试在不同设备上的显示
   - 优化触摸交互

2. **增加新功能**
   - 博客页面（记录创作过程）
   - 作品筛选功能（按类型、年份）
   - 联系表单（使用 Formspree 等服务）

3. **SEO 优化**
   - 添加 meta 标签（描述、关键词）
   - 创建 sitemap.xml
   - 提交到 Google Search Console

4. **性能优化**
   - 图片懒加载
   - 使用 CDN 加速资源
   - 代码压缩和合并

---

### 长期进化（持续）

**系统升级**：
1. **定期更新作品**
   - 至少每月添加新作品
   - 保持内容新鲜度

2. **根据用户反馈改进**
   - 使用 Google Analytics 分析访问数据
   - 了解用户行为
   - 持续优化体验

3. **学习新技术并应用**
   - 探索前端框架（React / Vue）
   - 尝试 3D 展示（Three.js）
   - 添加动画效果（GSAP）

4. **将网站作为你的"数字简历"**
   - 用于求职展示
   - 用于接单谈合作
   - 用于建立个人品牌

---

## 🎓 结业与展望

### 可选进阶路径

**路径1：深入前端开发**
- 学习 JavaScript 框架（React / Vue）
- 理解组件化开发的优势
- 将现有网站迁移到框架

**路径2：设计系统专家**
- 深入学习 Design Tokens 规范
- 研究大厂设计系统（Material Design、Ant Design）
- 为团队建立设计系统

**路径3：3D Web 体验**
- 学习 Three.js 或 A-Frame
- 创建 3D 作品展示场景
- 探索元宇宙和 WebXR

**路径4：全栈开发**
- 学习后端技术（Node.js / Python）
- 创建动态内容管理系统
- 实现用户评论、点赞等功能

---

### 社区资源分享

**设计资源**：
- [Dribbble](https://dribbble.com/) - 设计灵感
- [Figma Community](https://www.figma.com/community) - 免费设计资源
- [Coolors](https://coolors.co/) - 配色方案生成器

**开发资源**：
- [MDN Web Docs](https://developer.mozilla.org/) - 权威的 Web 技术文档
- [CSS-Tricks](https://css-tricks.com/) - CSS 技巧和教程
- [Web.dev](https://web.dev/) - Google 的 Web 开发指南

**AI 协作**：
- [Prompt Engineering Guide](https://www.promptingguide.ai/) - Prompt 工程指南
- [OpenAI Cookbook](https://cookbook.openai.com/) - AI 应用案例

**无障碍性**：
- [WCAG 快速指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/) - 无障碍性测试工具

---

## 🎯 三周课程总结

### 第一周：快速实现（看到成果）
- ✅ 通过 AI Agents 生成网站初稿
- ✅ 理解软件开发的完整流程
- ✅ 建立信心和兴趣

### 第二周：逆向设计（建立规范）
- ✅ 从网站反推设计系统
- ✅ 在 Figma 中建立 Token 和组件
- ✅ 理解可维护性的价值

### 第三周：迭代开发（专业实践）
- ✅ 应用设计系统优化代码
- ✅ 学习无障碍性和性能优化
- ✅ 部署网站上线
- ✅ 建立长期主义思维

---

## 💡 课程核心价值回顾

### 1. AI First（AI 优先）
- 不是学完再用 AI，而是从第一天就与 AI 协作
- AI 是团队成员，不只是工具

### 2. 逆向工程方法论
- 从成果到规范，比从理论到实践更有效
- 先快速看到结果，再深入理解原理

### 3. 系统思维培养
- 不教代码片段，教设计系统和工作流
- 从"代码工匠"成长为"系统架构者"

### 4. 长期主义导向
- 强调可维护性和持续进化
- 网站是有生命的产品，应随创作者成长而迭代

### 5. 认知升级
- 学生不是执行者，是产品负责人
- 学会编排 AI 团队，做出正确决策

---

## 🙏 致谢与鼓励

**感谢**：
- 感谢每位学员的积极参与和作品展示
- 感谢同伴之间的互相学习和反馈
- 感谢 AI 技术让我们能够快速实现创意

**鼓励**：
- 你们已经具备了独立创建网站的能力
- 这个网站是你的"数字花园"，需要持续浇灌
- 不要害怕尝试新技术，保持好奇心
- 记住：完成比完美更重要，迭代比一次到位更有效

**最后的话**：
- 你的网站是你的名片，展示给世界
- 持续更新，让它反映你的成长
- 如果遇到问题，回顾课程文档和笔记
- 加入开发者社区，与他人交流学习

---

## 📝 结业作业（可选）

**任务**：撰写一篇反思文章

**主题**：我的第一个个人网站：从想法到上线

**内容建议**：
1. 课程前的期待 vs 实际收获
2. 最大的挑战是什么？如何克服？
3. 对 AI 协作的新认识
4. 对设计系统的理解
5. 未来的网站规划
6. 给未来学员的建议

**提交方式**：
- 写在你的博客页面
- 或发布到社交媒体
- 或提交到课程群

---

## ✅ 课程检查清单

完成这个清单，你就真正完成了整个课程：

**技术交付物**：
- [ ] 网站已部署到 GitHub Pages 并可访问
- [ ] 至少有 4 个页面（首页、作品集、关于、联系）
- [ ] 代码中使用 CSS 变量（Design Tokens）
- [ ] Figma 设计系统包含至少 3 个组件
- [ ] Lighthouse Accessibility 分数 ≥ 80

**文档交付物**：
- [ ] brief.md（项目简报）
- [ ] prd.md（产品需求文档）
- [ ] front-end-spec.md（前端规范）
- [ ] architecture.md（技术架构）
- [ ] design-tokens.md（设计令牌）
- [ ] README.md（包含版本规划）

**学习成果**：
- [ ] 能够独立与 AI Agents 协作生成项目文档
- [ ] 能够在 Figma 中创建和管理设计系统
- [ ] 能够使用 CSS 变量重构代码
- [ ] 能够部署网站到 GitHub Pages
- [ ] 理解设计系统和长期主义的价值

---

## 📚 参考资源

### Web 开发
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### 设计系统
- [Design Tokens 规范](https://www.designtokens.org/)
- [Atomic Design 方法论](https://atomicdesign.bradfrost.com/)

### 无障碍性
- [WCAG 2.1 快速指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### AI 协作
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [AI Agents 设计模式](https://github.com/topics/ai-agents)

### GitHub
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub 学习实验室](https://lab.github.com/)

---

**文档版本**：v1.0  
**最后更新**：2025-11-02  
**维护者**：课程教学团队

---

**🎉 恭喜你完成了整个课程！现在，去创造属于你的精彩网站吧！**

