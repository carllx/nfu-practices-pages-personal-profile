# 自动点击辅助工具

> **解决智谱 AI 在使用 MCP Server 时频繁中断确认的问题**

---

## 📖 工具简介

### 这是什么？

当你使用智谱 AI 驱动 **Cursor Talk to Figma MCP Server** 进行 Figma 自动化操作时，智谱 AI 会在每次调用 MCP 工具时弹出确认对话框，需要手动点击"同意"按钮。

这个脚本会自动检测并点击这些按钮，让整个流程真正实现全自动化。

### 工作原理

```
智谱 AI 调用 MCP 工具
    ↓
弹出确认对话框 "是否同意执行？"
    ↓
脚本自动检测按钮 (每 300ms)
    ↓
自动点击"同意"按钮
    ↓
继续执行下一步
```

---

## 🚀 快速开始

### 步骤 1：打开 VS Code 开发者工具

**快捷键：**
- **Windows/Linux:** `Ctrl + Shift + I`
- **macOS:** `Cmd + Opt + I`

**或通过命令面板：**
1. `Ctrl+Shift+P` / `Cmd+Shift+P`
2. 输入 `Toggle Developer Tools`
3. 回车

### 步骤 2：切换到 Console 面板

在开发者工具中点击 **Console** 标签

### 步骤 3：复制粘贴脚本

1. 打开 `guide/auto-click-helper/script.js`
2. 全选并复制所有代码（`Ctrl+A` → `Ctrl+C`）
3. 在 Console 中粘贴（`Ctrl+V`）
4. 按 `Enter` 执行

### 步骤 4：确认脚本已启动

看到以下信息表示成功：

```text
====================================
CodeGeeX 自动同意脚本已加载
====================================
可用命令：
  startAutoClick()    - 启动自动点击
  stopAutoClick()     - 停止自动点击
  getClickCount()     - 查看点击次数
  resetClickCount()   - 重置计数
====================================
🚀 自动点击已启动！
```

### 步骤 5：开始你的 MCP 任务

现在可以开始使用智谱 AI 执行 Figma 自动化任务，脚本会自动处理所有确认对话框！

---

## 💻 可用命令

### startAutoClick()
启动自动点击

```javascript
startAutoClick()
```

### stopAutoClick()
停止自动点击

```javascript
stopAutoClick()
```

### getClickCount()
查看已点击次数

```javascript
getClickCount()
```

### resetClickCount()
重置计数器

```javascript
resetClickCount()
```

---

## ⚙️ 配置说明

### 修改检查频率

脚本默认每 300ms 检查一次按钮。如需修改，编辑 `script.js` 中的这一行：

```javascript
autoClickInterval = setInterval(() => {
    // ...
}, 300); // ← 修改这个数字（单位：毫秒）
```

**建议值：**
- `300ms` - 默认，平衡性能和响应速度 ✅
- `500ms` - 降低检查频率，减少性能消耗
- `100ms` - 提高响应速度（不推荐低于此值）

---

## ⚠️ 注意事项

### 1. 脚本作用域
- 脚本仅在当前 VS Code 窗口有效
- 关闭 VS Code 或刷新开发者工具后需重新执行
- 建议在开始 MCP 任务**之前**就启动脚本

### 2. 开发者工具保持打开
- 在整个 MCP Server 执行过程中保持开发者工具打开
- 如果不小心关闭，重新打开并重新执行脚本即可

### 3. 不影响正常使用
- 脚本只会自动点击特定的"同意"按钮
- 不会影响其他操作或正常对话
- 随时可以运行 `stopAutoClick()` 停止

### 4. 安全性
脚本仅查找以下特征的按钮：
- CSS 类名：`.codegeex-tool-confirm__btn--confirm`
- 文本内容：包含"同意"
- 可见性：按钮必须可见

只有同时满足这三个条件才会点击，不会误触其他按钮。

---

## 🐛 故障排查

### 问题：脚本没有自动点击

**可能原因及解决方法：**

1. **脚本未正确启动**
   - 在 Console 输入 `startAutoClick()` 重新启动
   - 检查是否有错误信息

2. **按钮选择器已更改**
   - 智谱 AI 插件更新可能改变按钮的 CSS 类名
   - 在 Console 中输入以下代码查找按钮：
   ```javascript
   document.querySelectorAll('button')
   ```
   - 找到实际的"同意"按钮，记录其 class
   - 修改 `script.js` 中的选择器

3. **开发者工具被关闭**
   - 重新打开开发者工具
   - 重新执行脚本

### 问题：如何确认脚本正在运行？

**方法 1：** 查看 Console 日志
- 每次自动点击都会输出 `✅ 已自动点击 X 次`

**方法 2：** 运行检查命令
```javascript
getClickCount()
```
如果返回数字 > 0，说明脚本在工作

### 问题：VS Code 重启后需要重新执行吗？

**是的。** 脚本在内存中运行，VS Code 重启后会清空。

**解决方法：**
- 将 `script.js` 内容保存为 VS Code Snippet，快速调用
- 或创建快捷方式，一键执行

---

## 📚 适用场景

### ✅ 推荐使用场景

- 使用 MCP Server 进行 Figma Design System 自动化生成
- 需要连续执行多个 MCP 工具调用（10+ 次）
- 希望实现完全无人值守的自动化流程

### ❌ 不需要使用场景

- 只是与智谱 AI 进行普通对话
- 只执行 1-2 次 MCP 调用（手动点击更快）
- 需要仔细审查每一步操作的情况

---

## 🎓 教学建议

### 对学生

**第一次使用：**
1. 保持 Console 可见，观察脚本日志
2. 记录总共点击了多少次
3. 对比手动操作需要的时间，体会自动化的价值

**进阶练习：**
1. 修改检查频率，观察性能影响
2. 尝试添加日志记录功能（记录每次点击的时间戳）
3. 扩展脚本，支持其他自动化场景

### 对教师

**演示要点：**
1. 先展示不使用脚本的情况（手动点击，效率低）
2. 再展示使用脚本后的效果（完全自动化）
3. 强调自动化思维的重要性

**注意事项：**
- 提前测试脚本，确保在你的环境中可用
- 准备好截图或录屏作为参考
- 预留 5-10 分钟帮助学生配置

---

## 📖 相关文档

- [Teaching Plan Week 5-6](../teaching-plan.md#第-5-6-周mcp-server-驱动-figma-自动化)
- [Cursor Talk to Figma MCP Server](../../agents/talk-to-figma-instructions-v13.md)

---

## 📝 更新日志

| 日期 | 版本 | 说明 |
|------|------|------|
| 2025-10-27 | v1.0 | 初始版本，支持自动点击智谱 AI 的"同意"按钮 |

---

## 💡 核心价值

这个小工具体现了**自动化思维**的核心：

> **将重复、机械的操作交给工具，让人类专注于创造性工作。**

在本项目中，你将学习从设计规范到代码的自动化流程。这个脚本只是开始，真正的自动化是：

1. **规范驱动** - `front-end-spec.md` 驱动 Figma Design System
2. **工具辅助** - MCP Server 自动生成 Styles 和 Variables
3. **人类监督** - 你把控质量，确保输出符合预期

**准备好体验自动化的威力了吗？** 🚀

---

**License:** MIT  
**Maintainer:** Product Design Course Team  
**Contact:** 如有问题请联系课程教师

