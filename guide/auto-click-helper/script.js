// CodeGeeX 自动同意脚本 - 极简版
// 用途：在使用智谱 AI 驱动 Cursor Talk to Figma MCP Server 时，自动点击"同意"按钮
// 版本：v1.0
// 最后更新：2025-10-27

let autoClickInterval;
let clickCount = 0;

/**
 * 启动自动点击
 * 每 300ms 检查一次是否有"同意"按钮，如果有则自动点击
 */
function startAutoClick() {
    if (autoClickInterval) {
        console.log('⚠️ 自动点击已经在运行中');
        return;
    }
    
    autoClickInterval = setInterval(() => {
        const btn = document.querySelector('.codegeex-tool-confirm__btn--confirm');
        if (btn && btn.textContent?.includes('同意') && btn.offsetParent) {
            btn.click();
            clickCount++;
            console.log(`✅ 已自动点击 ${clickCount} 次`);
        }
    }, 300);
    
    console.log('🚀 自动点击已启动！');
    console.log('💡 运行 stopAutoClick() 可以停止');
    console.log('📊 运行 getClickCount() 可以查看点击次数');
}

/**
 * 停止自动点击
 */
function stopAutoClick() {
    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        console.log(`⏹️ 已停止自动点击，共点击 ${clickCount} 次`);
    } else {
        console.log('⚠️ 自动点击未运行');
    }
}

/**
 * 重置点击计数
 */
function resetClickCount() {
    clickCount = 0;
    console.log('🔄 点击计数已重置');
}

/**
 * 获取当前点击次数
 */
function getClickCount() {
    console.log(`📊 当前已点击 ${clickCount} 次`);
    return clickCount;
}

// 自动启动
startAutoClick();

// 提示信息
console.log('====================================');
console.log('CodeGeeX 自动同意脚本已加载');
console.log('====================================');
console.log('可用命令：');
console.log('  startAutoClick()    - 启动自动点击');
console.log('  stopAutoClick()     - 停止自动点击');
console.log('  getClickCount()     - 查看点击次数');
console.log('  resetClickCount()   - 重置计数');
console.log('====================================');

