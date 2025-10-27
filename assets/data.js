// 本文件包含网站的所有数据。
// 为了方便初学者，我们将数据附加到全局的 'window' 对象上，
// 这样 script.js 就可以在不需要模块化的情况下访问它。

/*
  法务与 IP 护栏声明：
  本项目中使用的所有资产必须遵守 V2 法务与 IP 护栏文档中定义的
  “基线库 (Baseline Library)” 规范。
  这意味着它们必须严格基于 1928年《威利号汽船》的视觉语汇。
*/

window.APP_DATA = {
    ILLUSTRATION_IMAGES: [
        { id: 1, src: 'assets/illustration/01-reading-light-illustration.jpg', alt: '书页间流淌的光，温柔地照亮每一个深夜的梦想', legalTier: 'BASELINE' },
        { id: 2, src: 'assets/illustration/02-rainy-voyage-illustration.jpg', alt: '雨幕中的航程，每一滴雨都是通往远方的诗句', legalTier: 'BASELINE' },
        { id: 3, src: 'assets/illustration/03-starry-fridge-illustration.jpg', alt: '冰箱里藏着星空，平凡日常中的宇宙奇迹', legalTier: 'BASELINE' },
        { id: 4, src: 'assets/illustration/04-little-tree-illustration.jpg', alt: '小树在心中生长，每一片叶子都是希望的低语', legalTier: 'BASELINE' },
        { id: 5, src: 'assets/illustration/05-distant-stamp-illustration.jpg', alt: '远方的邮戳，承载着跨越时空的温柔问候', legalTier: 'BASELINE' },
        { id: 6, src: 'assets/illustration/06-rooftop-cat-illustration.jpg', alt: '屋顶上的猫，守望着城市的黄昏与黎明', legalTier: 'BASELINE' },
        { id: 7, src: 'assets/illustration/07-rainbow-thread-illustration.jpg', alt: '彩虹般的丝线，编织着生活中每一个温暖的瞬间', legalTier: 'BASELINE' },
        { id: 8, src: 'assets/illustration/08-polar-bathtub-illustration.jpg', alt: '极地的浴缸，在冰雪中寻找温暖的避风港', legalTier: 'BASELINE' },
        { id: 9, src: 'assets/illustration/09-curtain-canyon-illustration.jpg', alt: '窗帘后的峡谷，家中藏着未知的壮丽风景', legalTier: 'BASELINE' },
        { id: 10, src: 'assets/illustration/10-coffee-islands-illustration.jpg', alt: '咖啡杯中的群岛，每一口都是一场微型的环球旅行', legalTier: 'BASELINE' },
        { id: 11, src: 'assets/illustration/11-book-spine-climbing-illustration.jpg', alt: '攀登书脊的旅人，在知识的山峰间寻找真理', legalTier: 'BASELINE' },
        { id: 12, src: 'assets/illustration/12-pencil-shavings-maze-illustration.jpg', alt: '铅笔屑的迷宫，创作的痕迹铺成通往灵感的小径', legalTier: 'BASELINE' },
    ],
    PRODUCT_IMAGES: [
        { id: 1, src: 'assets/products/01-cat-lamp-product.jpg', alt: '书页间流淌的光，温柔地照亮每一个深夜的梦想', name: '阅读之光猫咪台灯', price: '¥268.00', dimensions: '陶瓷底座 LED光源 高20cm', legalTier: 'BASELINE' },
        { id: 2, src: 'assets/products/02-scented-candle-product.jpg', alt: '雨幕中的航程，每一滴雨都是通往远方的诗句', name: '雨后航行香薰蜡烛', price: '¥158.00', dimensions: '天然大豆蜡 200g 燃烧时长40小时', legalTier: 'BASELINE' },
        { id: 3, src: 'assets/products/03-storage-box-product.jpg', alt: '冰箱里藏着星空，平凡日常中的宇宙奇迹', name: '星空收纳盒', price: '¥188.00', dimensions: '木质 25x18x12cm 多层分隔', legalTier: 'BASELINE' },
        { id: 4, src: 'assets/products/04-humidifier-product.jpg', alt: '小树在心中生长，每一片叶子都是希望的低语', name: '小树加湿器', price: '¥298.00', dimensions: '超声波静音 300ml 续航8小时', legalTier: 'BASELINE' },
        { id: 5, src: 'assets/products/05-book-clip-product.jpg', alt: '远方的邮戳，承载着跨越时空的温柔问候', name: '旅行邮戳书签夹', price: '¥88.00', dimensions: '黄铜镀金 6枚套装 复古设计', legalTier: 'BASELINE' },
        { id: 6, src: 'assets/products/06-keyboard-light-product.jpg', alt: '屋顶上的猫，守望着城市的黄昏与黎明', name: '守望者键盘灯', price: '¥218.00', dimensions: 'USB供电 触控调光 硅胶材质', legalTier: 'BASELINE' },
        { id: 7, src: 'assets/products/07-sewing-kit-product.jpg', alt: '彩虹般的丝线，编织着生活中每一个温暖的瞬间', name: '彩虹针线套装', price: '¥168.00', dimensions: '24色刺绣线 便携收纳盒 含工具', legalTier: 'BASELINE' },
        { id: 8, src: 'assets/products/08-bath-bomb-product.jpg', alt: '极地的浴缸，在冰雪中寻找温暖的避风港', name: '极地温泉浴球', price: '¥128.00', dimensions: '天然精油 6枚装 薄荷与雪松香', legalTier: 'BASELINE' },
        { id: 9, src: 'assets/products/09-door-curtain-product.jpg', alt: '窗帘后的峡谷，家中藏着未知的壮丽风景', name: '峡谷风景门帘', price: '¥238.00', dimensions: '棉麻混纺 85x150cm 印染工艺', legalTier: 'BASELINE' },
        { id: 10, src: 'assets/products/10-coffee-cup-set-product.jpg', alt: '咖啡杯中的群岛，每一口都是一场微型的环球旅行', name: '群岛咖啡杯组', price: '¥328.00', dimensions: '骨瓷 4件套 杯碟配套 礼盒装', legalTier: 'BASELINE' },
        { id: 11, src: 'assets/products/11-desk-calendar-product.jpg', alt: '攀登书脊的旅人，在知识的山峰间寻找真理', name: '书山日历', price: '¥198.00', dimensions: '立体设计 365页 可撕式 含笔筒', legalTier: 'BASELINE' },
        { id: 12, src: 'assets/products/12-pencil-sharpener-product.jpg', alt: '铅笔屑的迷宫，创作的痕迹铺成通往灵感的小径', name: '迷宫削笔器', price: '¥118.00', dimensions: '锌合金 双孔设计 透明储屑盒', legalTier: 'BASELINE' },
    ]
};