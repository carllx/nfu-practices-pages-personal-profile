// ============================================
// carllllllllx 作品集 - 主 JavaScript 文件
// ============================================
// 
// 📚 学习提示：
// 这个文件展示了如何用纯 JavaScript 创建动态交互。
// 虽然代码量不大（约 200 行），但展示了完整的 Web 应用结构。
//
// ============================================

// -------------------- IIFE 封装 --------------------
// 🎓 教学要点：IIFE (Immediately Invoked Function Expression)
//
// 为什么使用 IIFE？
// 1. 避免全局作用域污染 - 所有变量和函数都在这个"容器"内
// 2. 引入作用域概念 - 为后续学习模块化打基础
// 3. 依然保持简单 - 不需要构建工具或 ES6 模块
//
// 类比：想象这是一个"工作台"，所有工具都在台面上，
//      但不会和厨房、卧室的东西混在一起。
(function(appData) {
    'use strict'; // ← 严格模式：帮助捕获常见错误

    // -------------------- 配置常量 --------------------
    // 🎓 教学要点：集中管理配置
    // 好处：修改 ID 或类名时，只需改这里一处
    const CONFIG = {
        LIGHTBOX_ID: 'lightbox',
        GALLERY_SELECTOR: '.gallery',
        ACTIVE_CLASS: 'active'
    };

    // -------------------- 工具函数 --------------------
    
    /**
     * 获取当前页面文件名
     * 🎓 用途：判断哪个导航链接应该高亮
     * 
     * 示例：
     * - 访问 illustrations.html → 返回 'illustrations.html'
     * - 访问根路径 → 返回 'index.html'
     */
    function getCurrentPage() {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    // -------------------- 页眉渲染 --------------------
    
    /**
     * 渲染导航栏
     * 🎓 教学要点：动态生成 HTML
     * 
     * 为什么动态生成？
     * - 添加新页面时，只需修改 navItems 数组
     * - 自动高亮当前页面
     * - 避免在每个 HTML 文件中重复写导航代码
     * 
     * 💡 挑战任务：尝试添加一个"联系"页面到导航中
     */
    function renderHeader() {
        // 🛡️ 防御性编程：确保元素存在
        // 如果 HTML 中没有 <header> 元素，直接返回避免报错
        const header = document.querySelector('header');
        if (!header) {
            console.warn('⚠️ 未找到 <header> 元素，跳过导航渲染');
            return;
        }

        const currentPage = getCurrentPage();
        
        // 导航项配置
        // 💡 提示：想添加新页面？在这里加一项即可！
        const navItems = [
            { href: 'index.html', text: '首页' },
            { href: 'about.html', text: '关于' },
            { href: 'illustrations.html', text: '插画' },
            { href: 'products.html', text: '产品' }
        ];
        
        // 🎓 教学要点：数组 map() 方法 + 模板字符串
        // 这是现代 JavaScript 的常见模式
        const navHTML = navItems.map(item => {
            // 当前页面的链接添加 'active' 类
            const activeClass = currentPage === item.href ? CONFIG.ACTIVE_CLASS : '';
            return `<li><a href="${item.href}" class="${activeClass}">${item.text}</a></li>`;
        }).join(''); // ← join('') 将数组合并成一个字符串
        
        // 一次性插入完整的 HTML
        header.innerHTML = `
            <div class="container header-content">
                <div class="logo">carllllllllx</div>
                <nav>
                    <ul>${navHTML}</ul>
                </nav>
            </div>
        `;
    }

    // -------------------- 画廊渲染 --------------------
    
    /**
     * 渲染插画画廊
     * 🎓 教学要点：数据驱动的 UI
     * 
     * 数据流：data.js → appData → 这个函数 → 页面显示
     * 
     * 为什么这样设计？
     * - 数据和展示分离（关注点分离原则）
     * - 添加新图片只需修改 data.js，无需改这里的代码
     * - 同样的模式可以渲染 100 张图片，不用写 100 遍 HTML
     */
    function renderIllustrationGallery() {
        const container = document.querySelector(CONFIG.GALLERY_SELECTOR);
        
        // 🛡️ 防御性编程：提前返回模式
        // 好处：避免后续代码在 container 为 null 时崩溃
        if (!container) {
            // console.log('💡 当前页面没有画廊，这是正常的（只有 illustrations.html 有）');
            return;
        }

        // 🛡️ 确保数据已加载
        if (!appData || !appData.ILLUSTRATION_IMAGES) {
            console.error('❌ 数据未加载！请确保 data.js 在 script.js 之前加载');
            return;
        }

        const illustrations = appData.ILLUSTRATION_IMAGES;
        
        // 🎓 教学要点：可访问性属性
        // - tabindex="0": 让键盘用户可以选中这个元素
        // - role="button": 告诉屏幕阅读器这是一个按钮
        // - aria-label: 为屏幕阅读器用户提供描述
        const html = illustrations.map(item => `
            <div class="gallery-item" 
                 data-id="${item.id}" 
                 data-src="${item.src}" 
                 data-alt="${item.alt}"
                 tabindex="0"
                 role="button"
                 aria-label="查看 ${item.alt}">
                <img src="${item.src}" 
                     alt="${item.alt}" 
                     loading="lazy">
            </div>
        `).join('');
        
        container.innerHTML = html;
        
        // ♿ 可访问性：支持键盘 Enter 键触发点击
        container.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    item.click();
                }
            });
        });
    }

    /**
     * 渲染产品展示
     * 🎓 与 renderIllustrationGallery() 类似，但包含更多信息
     * 
     * 💡 学习建议：对比这两个函数，找出相似和不同之处
     */
    function renderProductGrid() {
        const container = document.querySelector(CONFIG.GALLERY_SELECTOR);
        if (!container) return;

        // 🛡️ 数据验证
        if (!appData || !appData.PRODUCT_IMAGES) {
            console.error('❌ 产品数据未加载！');
            return;
        }

        const products = appData.PRODUCT_IMAGES;
        
        const html = products.map(item => `
            <div class="gallery-item" 
                 data-id="${item.id}"
                 data-src="${item.src}"
                 data-alt="${item.alt}"
                 tabindex="0"
                 role="button"
                 aria-label="查看 ${item.name}">
                <img src="${item.src}" 
                     alt="${item.alt}" 
                     loading="lazy">
                <div class="product-info">
                    <div class="product-name">${item.name}</div>
                    <div class="product-price">${item.price}</div>
                    <div class="product-dimensions">${item.dimensions}</div>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = html;

        // ♿ 可访问性：键盘支持
        container.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    item.click();
                }
            });
        });
    }

    // -------------------- 灯箱功能 --------------------
    
    /**
     * 设置图片灯箱（Lightbox）
     * 🎓 教学要点：事件处理 + DOM 操作 + 可访问性
     * 
     * 灯箱是什么？
     * - 点击图片 → 全屏显示大图 + 半透明背景
     * - 常见于图片画廊和产品展示
     * 
     * 可访问性考虑：
     * - 焦点管理：打开时焦点移到关闭按钮
     * - 键盘支持：ESC 键关闭
     * - ARIA 属性：通知屏幕阅读器灯箱状态
     * 
     * ⚠️ 性能约束（遵循设计系统规范）：
     * - 所有动画只能使用 transform 和 opacity 属性
     * - 禁止使用：filter, box-shadow, width/height 等高开销属性
     * - 参考：docs/ui-ux-spec.md 第 2.4 节 "动效性能白名单"
     */
    function setupLightbox() {
        const lightbox = document.getElementById(CONFIG.LIGHTBOX_ID);
        
        // 如果页面没有灯箱元素（如首页），直接返回
        if (!lightbox) return;

        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');

        // 🛡️ 确保所有必需元素存在
        if (!lightboxImage || !lightboxCaption || !closeBtn) {
            console.error('❌ 灯箱结构不完整！检查 HTML 中是否有 .lightbox-image, .lightbox-caption, .lightbox-close');
            return;
        }

        /**
         * 打开灯箱
         * 🎓 这是一个"闭包"：内部函数可以访问外部变量
         */
        function openLightbox(src, alt) {
            lightboxImage.src = src;
            lightboxImage.alt = alt;
            lightboxCaption.textContent = alt;
            
            lightbox.style.display = 'flex';
            
            // ♿ 可访问性：更新 ARIA 属性
            lightbox.setAttribute('aria-hidden', 'false');
            
            // ♿ 可访问性：将焦点移到关闭按钮
            // 好处：键盘用户可以立即按 Tab 或 Enter 关闭
            closeBtn.focus();
            
            // ♿ 可访问性：禁用背景滚动
            document.body.style.overflow = 'hidden';
        }

        /**
         * 关闭灯箱
         */
        function closeLightbox() {
            lightbox.style.display = 'none';
            
            // ♿ 可访问性：更新 ARIA 属性
            lightbox.setAttribute('aria-hidden', 'true');
            
            // ♿ 可访问性：恢复背景滚动
            document.body.style.overflow = '';
        }

        // 🎓 事件委托：在画廊容器上监听，而不是每个图片
        // 好处：性能更好，新添加的图片自动有效
        document.querySelectorAll('.gallery-item').forEach(item => {
            // 鼠标点击
            item.addEventListener('click', () => {
                const src = item.dataset.src;
                const alt = item.dataset.alt;
                openLightbox(src, alt);
            });
        });

        // 关闭按钮点击事件
        closeBtn.addEventListener('click', closeLightbox);

        // 点击背景（黑色半透明区域）关闭
        lightbox.addEventListener('click', (e) => {
            // 只有点击背景时关闭，点击图片不关闭
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // ♿ 可访问性：ESC 键关闭灯箱
        // 🎓 教学要点：键盘事件处理
        document.addEventListener('keydown', (e) => {
            // 只在灯箱打开时响应 ESC 键
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                closeLightbox();
            }
        });
    }

    // -------------------- 初始化 --------------------
    
    /**
     * 页面初始化函数
     * 🎓 教学要点：初始化模式
     * 
     * 为什么需要 init() 函数？
     * - 集中管理所有初始化逻辑
     * - 确保 DOM 完全加载后再执行
     * - 容易理解页面的启动流程
     */
    function init() {
        console.log('🚀 页面初始化开始...');

        // 所有页面都需要渲染导航
        renderHeader();

        // 根据当前页面渲染相应内容
        const currentPage = getCurrentPage();
        
        if (currentPage === 'illustrations.html') {
            console.log('📷 渲染插画画廊...');
            renderIllustrationGallery();
            setupLightbox();
        } else if (currentPage === 'products.html') {
            console.log('🛍️ 渲染产品展示...');
            renderProductGrid();
            setupLightbox();
        }

        console.log('✅ 页面初始化完成！');
    }

    // 🎓 教学要点：DOMContentLoaded 事件
    // 
    // 为什么要等待这个事件？
    // - 确保 HTML 完全加载后再运行 JavaScript
    // - 避免"找不到元素"的错误
    // - 这是 Web 开发的标准实践
    //
    // 类比：等厨房准备好再开始做菜，而不是原料还没到就开始炒
    document.addEventListener('DOMContentLoaded', init);

    // 🎓 可选：在控制台暴露一些调试工具
    // 在开发时很有用，生产环境可以删除
    if (typeof window !== 'undefined') {
        window.DEBUG = {
            appData: appData,
            renderHeader: renderHeader,
            renderIllustrationGallery: renderIllustrationGallery,
            renderProductGrid: renderProductGrid
        };
        console.log('🔧 调试工具已启用，在控制台输入 window.DEBUG 查看');
    }

})(window.APP_DATA); // ← 将全局数据传入 IIFE

// ============================================
// 🎓 学习建议
// ============================================
// 
// 1. 从 init() 函数开始阅读 - 这是入口点
// 2. 理解数据流：data.js → window.APP_DATA → 这个文件 → DOM
// 3. 尝试修改：
//    - 在 navItems 中添加新页面
//    - 在 renderIllustrationGallery() 中添加 console.log 看数据结构
//    - 修改灯箱的背景颜色（在 CSS 中）
// 4. 使用浏览器控制台：
//    - 输入 window.DEBUG.appData 查看所有数据
//    - 输入 window.DEBUG.renderHeader() 手动触发渲染
//
// 💡 记住：写代码是学习，读代码也是学习！
//    仔细阅读注释，理解每一行的作用。
// ============================================

