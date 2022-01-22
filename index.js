/**
 * 勇敢填词 (勇敢牛牛排列组合歌词生成)
 * @Author Black Doom
 * @Version 0.0
 */
let braveCowAudio; // 勇敢牛牛音频
let $braveCowScroll;
let $braveCowTextareaLeft;
let $braveCowTextareaRight;
let $braveCowPhonetic;
let braveCowOption = {
  isPlayAudio: false,
  maxDictWords: 3 // 最大单词字数
};

// 勇敢牛牛词典
let braveCowDict = [];
let braveCowDictWeight = [];

let braveCowScrollCont = [
  {text: "拉姐B站主页 @贝拉kira", href: "https://space.bilibili.com/672353429"},
  {text: "拉姐B站主页 @贝拉kira", href: "https://space.bilibili.com/672353429"},
  {text: "拉姐B站主页 @贝拉kira", href: "https://space.bilibili.com/672353429"},
  {text: "【舞蹈剧】舞蹈就是我的生命，重新认识下，我是贝拉", href: "https://www.bilibili.com/video/BV1oo4y1X7Ca"},
  {text: "【舞蹈剧】舞蹈就是我的生命，重新认识下，我是贝拉", href: "https://www.bilibili.com/video/BV1oo4y1X7Ca"},
  {text: "【舞蹈剧】舞蹈就是我的生命，重新认识下，我是贝拉", href: "https://www.bilibili.com/video/BV1oo4y1X7Ca"},
  {text: "【全新单曲】《Shiny Dancer》完整版MV", href: "https://www.bilibili.com/video/BV1JM4y137qB"},
  {text: "【全新单曲】《Shiny Dancer》完整版MV", href: "https://www.bilibili.com/video/BV1JM4y137qB"},
  {text: "【全新单曲】《Shiny Dancer》完整版MV", href: "https://www.bilibili.com/video/BV1JM4y137qB"},
  {text: "欢迎来到贝拉的生日派对", href: "https://www.bilibili.com/video/BV1kv411n7bX"},
  {text: "欢迎来到贝拉的生日派对", href: "https://www.bilibili.com/video/BV1kv411n7bX"},
  {text: "欢迎来到贝拉的生日派对", href: "https://www.bilibili.com/video/BV1kv411n7bX"},
  {text: "勇敢牛牛™是个啥呀", href: "https://www.bilibili.com/video/BV14y4y1M7cC"},
  {text: "勇敢牛牛™是个啥呀", href: "https://www.bilibili.com/video/BV14y4y1M7cC"},
  {text: "勇敢牛牛™是个啥呀", href: "https://www.bilibili.com/video/BV14y4y1M7cC"},
  {text: "【A-SOUL翻跳】精修舞台版《寄明月》MV", href: "https://www.bilibili.com/video/BV1Q541177wA"},
  {text: "贝拉 《City of stars》", href: "https://www.bilibili.com/video/BV1S64y1D7sT"},
  {text: "【翻唱】贝拉x乃琳 《后会无期》", href: "https://www.bilibili.com/video/BV1ji4y1N7iP"},
  {text: "【翻唱】贝拉x珈乐《我只在乎你》", href: "https://www.bilibili.com/video/BV1vV411n7Zb"},
  {text: "【翻跳】贝拉《Put It Straight》 ", href: "https://www.bilibili.com/video/BV1uK4y1m7EF"},
  {text: "【翻唱】贝拉 《Fly me to the moon》", href: "https://www.bilibili.com/video/BV1r54y1b7a1"},
  {text: "【翻唱】贝拉《无限重播》", href: "https://www.bilibili.com/video/BV1HK4y1K7Zq"},
  {text: "【翻跳】贝拉《猫步轻悄》", href: "https://www.bilibili.com/video/BV195411c7Dm"},
  {text: "【舞蹈】Catallena", href: "https://www.bilibili.com/video/BV165411g7zz"},
  {text: "【翻跳】《大声ダイヤモンド》", href: "https://www.bilibili.com/video/BV1oV411773o"},
  {text: "【翻跳】《One shot, two shot》", href: "https://www.bilibili.com/video/BV1K64y1m7jv"},
  {text: "【翻唱】乃琳&贝拉《Wonderful U》", href: "https://www.bilibili.com/video/BV1J64y1y7em"},
  {text: "【翻跳】《うまるん体操》", href: "https://www.bilibili.com/video/BV1JQ4y1d7wM"},
  {text: "【翻唱】乃琳&贝拉《海底》", href: "https://www.bilibili.com/video/BV1cK4y1V7mf"},
  {text: "【翻唱】贝拉&乃琳《偿还》", href: "https://www.bilibili.com/video/BV1Y54y1V7Pv"},
  {text: "【翻唱】《遇见》——A-SOUL", href: "https://www.bilibili.com/video/BV1yA411g7e9"},
  {text: "【翻跳】《霍元甲》", href: "https://www.bilibili.com/video/BV1gy4y1u753"},
  {text: "【翻唱】时光荏苒，《少年》依旧", href: "https://www.bilibili.com/video/BV1ug411G7n1"},
  {text: "【翻唱】《你真漂亮》", href: "https://www.bilibili.com/video/BV1Yy4y137Bf"},
  {text: "【翻唱】《斯卡布罗集市》", href: "https://www.bilibili.com/video/BV13g411G7FE"},
  {text: "【翻唱】毕业了也要记得《北京东路的日子》", href: "https://www.bilibili.com/video/BV1o44y1z78Q"},
  {text: "【翻唱】乃琳&贝拉《甜蜜蜜》", href: "https://www.bilibili.com/video/BV1mU4y1V7j2"},
  {text: "【翻跳】《回る空うさぎ》", href: "https://www.bilibili.com/video/BV1T5411u7mZ"},
  {text: "【翻唱】《霞光》", href: "https://www.bilibili.com/video/BV1Fb4y1o7zV"},
  {text: "【翻唱】《路边的野花不要采》", href: "https://www.bilibili.com/video/BV1yM4y1u71J"},
  {text: "【翻唱】《月光》", href: "https://www.bilibili.com/video/BV1fX4y1c76B"},
  {text: "【翻唱】《欧若拉》", href: "https://www.bilibili.com/video/BV1Pw411Z79r"},
  {text: "【翻跳】《Honey》", href: "https://www.bilibili.com/video/BV1ah411h7FT"},
  {text: "【A-SOUL翻唱】宁夏", href: "https://www.bilibili.com/video/BV1zf4y1L7xL"},
  {text: "【翻跳】刀剑如梦——且柔且刚，舞力担当", href: "https://www.bilibili.com/video/BV1Bf4y1j7DL"},
  {text: "【翻唱】《隐形的翅膀》——贝极星就是我的方向", href: "https://www.bilibili.com/video/BV1eB4y1N7kJ"},
  {text: "【翻跳】你没见过的蒙古舞《博克颂》", href: "https://www.bilibili.com/video/BV1W54y1E7jf"},
  {text: "【翻唱】《追光者》", href: "https://www.bilibili.com/video/BV1qU4y1n7FX"},
  {text: "【翻唱】经典ACG歌曲3连唱——送给贝极星的歌", href: "https://www.bilibili.com/video/BV12v411n7e9"},
  {text: "【翻唱】猪之歌——超可爱的版本", href: "https://www.bilibili.com/video/BV1Lq4y1D7Ea"},
  {text: "【翻唱】 Lover Boy 88 每天都有情话想不想听？", href: "https://www.bilibili.com/video/BV1Lv411N7Bm"},
  {text: "【翻唱】想你的365天", href: "https://www.bilibili.com/video/BV16L4y1a7Xe"},
  {text: "【翻唱】中华美食颂 ", href: "https://www.bilibili.com/video/BV1b3411i7bk"},
  {text: "【翻唱】魔鬼中的天使", href: "https://www.bilibili.com/video/BV1GQ4y1y7XM"},
  {text: "【翻唱】Lucky ", href: "https://www.bilibili.com/video/BV1hq4y1f73Z"},
  {text: "【翻唱】贝拉&乃琳《梁山伯与茱丽叶》", href: "https://www.bilibili.com/video/BV1k44y1b7VL"},
  {text: "【翻唱】我怀念的", href: "https://www.bilibili.com/video/BV1Wq4y1K7UX"},
  {text: "【翻唱】何必诗债换酒钱", href: "https://www.bilibili.com/video/BV1ff4y1E7Yt"},
  {text: "【翻唱】《邋遢大王》——我们才不是小邋遢呢~~", href: "https://www.bilibili.com/video/BV11L411s7dm"},
  {text: "【翻跳】拟剧论", href: "https://www.bilibili.com/video/BV1gL4y1h7XS"},
  {text: "【翻跳】贝拉《怎叹》超温柔的舞蹈送给你", href: "https://www.bilibili.com/video/BV1Hf4y1g7Zs"},
  {text: "【翻唱】贝拉&乃琳《如果的事》超甜的合唱", href: "https://www.bilibili.com/video/BV1uT4y1o7za"},
  {text: "【翻唱】《风中奇缘》侠女贝拉和你的江湖之约", href: "https://www.bilibili.com/video/BV1XQ4y1i7NC"},
  {text: "【翻唱】Pretty boy", href: "https://www.bilibili.com/video/BV1Qu411d7wb"},
  {text: "【翻跳】贝拉《take a hike》请查收今日份的酷girl", href: "https://www.bilibili.com/video/BV1Qu411d7wb"},
  {text: "【翻跳】贝拉《gunshot》就问你跳的酷不酷？！", href: "https://www.bilibili.com/video/BV1jv411u7JR"},
  {text: "【珈乐&贝拉】❤ TROUBLE MAKER ❤生日就是要HOT！", href: "https://www.bilibili.com/video/BV1df4y1M7as"},
  {text: "【翻跳】贝拉《Genius》G-G-G-G-G中你们的心啦！", href: "https://www.bilibili.com/video/BV1Hh41147L6"},
  {text: "【翻唱】贝拉《鸟之诗》|总有一天，展翅高飞吧！❤", href: "https://www.bilibili.com/video/BV1aM4y1P7DV"},
  {text: "【翻唱】贝拉《云烟成雨》| 我多想再见你~❤", href: "https://www.bilibili.com/video/BV1yb4y1q73m"},
  {text: "【翻唱】贝拉《月亮代表我的心》| 你问我爱你有多深~", href: "https://www.bilibili.com/video/BV1dh41147jL"},
  {text: "【翻唱】贝拉《永远的奥特曼》| 一起冲破黑暗吧！", href: "https://www.bilibili.com/video/BV1Eb4y1B7Ut"},
  {text: "【舞蹈】贝拉《囍》| 惊世一舞，她自绝望中重生", href: "https://www.bilibili.com/video/BV1NL4y1p7Tf"},
  {text: "【A-SOUL】《朋友》一生一起走~❤", href: "https://www.bilibili.com/video/BV12L4y1H7zy"},
  {text: "【嘉然&贝拉&乃琳】❤《时候》❤ 绝美国风舞蹈，身姿摇曳，翩然若仙~", href: "https://www.bilibili.com/video/BV1e44y1E78a"},
  {text: "【翻唱】贝拉《走过咖啡屋》❤", href: "https://www.bilibili.com/video/BV1Va411r7jp"},
  {text: "【翻唱】乃琳&贝拉 ❤ 海底 ❤", href: "https://www.bilibili.com/video/BV1Jr4y1v7ms"},
  {text: "【翻跳】贝拉 ❤ 美人关", href: "https://www.bilibili.com/video/BV1XZ4y1S7yr"},
  {text: "【翻唱】贝拉《赤伶》深情演绎高能戏腔", href: "https://www.bilibili.com/video/BV1CR4y1M7Jt"},
];


/**
 * 勇敢牛牛词典 初始数据
 * 参数 name: 中文, words: 字数, weight: 权重,
 * phonetic: 拼音，一字的为实际拼音，超过两字的为根据一字强行转化来，比如抵用(di3yong4)为第(di4)+勇(yong3)活字印刷，实际为(di4yong3)
 */
let braveCowDictRaw = [
  // {name: '第', words: 1, weight: 5, phonetic: 'di4'},
  // {name: '一', words: 1, weight: 5, phonetic: 'yi1'},
  // {name: '次', words: 1, weight: 5, phonetic: 'ci4'},
  // {name: '勇', words: 1, weight: 5, phonetic: 'yong3'},
  // {name: '敢', words: 1, weight: 5, phonetic: 'gan3'},
  {name: '牛', words: 1, weight: 10, phonetic: 'niu2'},
  // {name: '不', words: 1, weight: 5, phonetic: 'bu2'},
  // {name: '怕', words: 1, weight: 5, phonetic: 'pa4'},
  // {name: '困', words: 1, weight: 5, phonetic: 'kun4'},
  // {name: '难', words: 1, weight: 5, phonetic: 'nan2'},
  // {name: '二', words: 1, weight: 5, phonetic: 'er4'},
  // {name: '终', words: 1, weight: 5, phonetic: 'zhong1'},
  // {name: '级', words: 1, weight: 5, phonetic: 'ji2'},
  {name: '弟弟', words: 2, weight: 10, phonetic: 'di4 di4'},
  {name: '地底', words: 2, weight: 10, phonetic: 'di4 di4'},
  {name: '第一', words: 2, weight: 10, phonetic: 'di4 yi1'},
  {name: '敌意', words: 2, weight: 10, phonetic: 'di4 yi1'},
  {name: '地磁', words: 2, weight: 10, phonetic: 'di4 ci1'},
  {name: '抵用', words: 2, weight: 10, phonetic: 'di4 yong3'},
  {name: '抵用', words: 2, weight: 10, phonetic: 'di4 yong3'},
  {name: '地卜', words: 2, weight: 10, phonetic: 'di4 bu2'},
  {name: '第二', words: 2, weight: 10, phonetic: 'di4 er4'},
  {name: '低级', words: 2, weight: 10, phonetic: 'di4 ji2'},
  {name: '异地', words: 2, weight: 10, phonetic: 'yi1 di4'},
  {name: '一地', words: 2, weight: 10, phonetic: 'yi1 di4'},
  {name: '一滴', words: 2, weight: 10, phonetic: 'yi1 di4'},
  {name: '意义', words: 2, weight: 10, phonetic: 'yi1 yi1'},
  {name: '意义', words: 2, weight: 10, phonetic: 'yi1 yi1'},
  {name: '一次', words: 2, weight: 10, phonetic: 'yi1 ci4'},
  {name: '依次', words: 2, weight: 10, phonetic: 'yi1 ci4'},
  {name: '异次', words: 2, weight: 10, phonetic: 'yi1 ci4'},
  {name: '医用', words: 2, weight: 10, phonetic: 'yi1 yong3'},
  {name: '易用', words: 2, weight: 10, phonetic: 'yi1 yong3'},
  // {name: '已用', words: 2, weight: 10, phonetic: 'yi1 yong3'},
  // {name: '义勇', words: 2, weight: 10, phonetic: 'yi1 yong3'},
  {name: '一部', words: 2, weight: 10, phonetic: 'yi1 bu2'},
  {name: '一步', words: 2, weight: 10, phonetic: 'yi1 bu2'},
  {name: '一种', words: 2, weight: 10, phonetic: 'yi1 zhong1'},
  {name: '一中', words: 2, weight: 10, phonetic: 'yi1 zhong1'},
  {name: '一众', words: 2, weight: 10, phonetic: 'yi1 zhong1'},
  {name: '异种', words: 2, weight: 10, phonetic: 'yi1 zhong1'},
  {name: '一级', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '以及', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '一击', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '遗迹', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '一集', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '一记', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '艺伎', words: 2, weight: 10, phonetic: 'yi1 ji2'},
  {name: '词义', words: 2, weight: 10, phonetic: 'ci4 yi1'},
  {name: '词意', words: 2, weight: 10, phonetic: 'ci4 yi1'},
  {name: '次次', words: 2, weight: 10, phonetic: 'ci4 ci4'},
  {name: '词干', words: 2, weight: 10, phonetic: 'ci4 gan3'},
  {name: '刺激', words: 2, weight: 10, phonetic: 'ci4 ji2'},
  {name: '次级', words: 2, weight: 10, phonetic: 'ci4 ji2'},
  {name: '用意', words: 2, weight: 10, phonetic: 'yong3 yi1'},
  {name: '泳衣', words: 2, weight: 10, phonetic: 'yong3 yi1'},
  {name: '庸医', words: 2, weight: 10, phonetic: 'yong3 yi1'},
  {name: '勇敢', words: 2, weight: 100, phonetic: 'yong3 gan3'},
  {name: '拥挤', words: 2, weight: 10, phonetic: 'yong3 ji2'},
  {name: '用词', words: 2, weight: 10, phonetic: 'yong3 ci4'},
  {name: '用用', words: 2, weight: 10, phonetic: 'yong3 yong3'},
  {name: '永不', words: 2, weight: 10, phonetic: 'yong3 bu2'},
  {name: '肝帝', words: 2, weight: 10, phonetic: 'gan3 di4'},
  {name: '敢用', words: 2, weight: 10, phonetic: 'gan3 yong3'},
  // {name: '赶赶', words: 2, weight: 10, phonetic: 'gan3 gan3'},
  {name: '敢干', words: 2, weight: 10, phonetic: 'gan3 gan3'},
  {name: '赶牛', words: 2, weight: 10, phonetic: 'gan3 niu2'},
  {name: '干部', words: 2, weight: 10, phonetic: 'gan3 bu2'},
  {name: '干趴', words: 2, weight: 10, phonetic: 'gan3 pa4'},
  // {name: '赣南', words: 2, weight: 10, phonetic: 'gan3 nan2'},
  {name: '感激', words: 2, weight: 10, phonetic: 'gan3 ji2'},
  {name: '赶集', words: 2, weight: 10, phonetic: 'gan3 ji2'},
  {name: '牛肝', words: 2, weight: 10, phonetic: 'niu2 gan3'},
  {name: '牛牛', words: 2, weight: 100, phonetic: 'niu2 niu2'},
  {name: '妞妞', words: 2, weight: 10, phonetic: 'niu2 niu2'},
  {name: '扭扭', words: 2, weight: 10, phonetic: 'niu2 niu2'},
  {name: '牛腩', words: 2, weight: 10, phonetic: 'niu2 nan2'},
  {name: '牛二', words: 2, weight: 10, phonetic: 'niu2 er4'},
  {name: '牛二', words: 2, weight: 10, phonetic: 'niu2 er4'},
  {name: '不敌', words: 2, weight: 10, phonetic: 'bu2 di4'},
  {name: '不易', words: 2, weight: 10, phonetic: 'bu2 yi1'},
  {name: '不易', words: 2, weight: 10, phonetic: 'bu2 yi1'},
  {name: '布衣', words: 2, weight: 10, phonetic: 'bu2 yi1'},
  {name: '不辞', words: 2, weight: 10, phonetic: 'bu2 ci4'},
  {name: '不次', words: 2, weight: 10, phonetic: 'bu2 ci4'},
  {name: '不用', words: 2, weight: 10, phonetic: 'bu2 yong3'},
  {name: '不敢', words: 2, weight: 10, phonetic: 'bu2 gan3'},
  {name: '不牛', words: 2, weight: 10, phonetic: 'bu2 niu2'},
  {name: '不怕', words: 2, weight: 50, phonetic: 'bu2 pa4'},
  {name: '不困', words: 2, weight: 10, phonetic: 'bu2 kun4'},
  {name: '不难', words: 2, weight: 10, phonetic: 'bu2 nan2'},
  {name: '趴地', words: 2, weight: 10, phonetic: 'pa4 di4'},
  {name: '爬竿', words: 2, weight: 10, phonetic: 'pa4 gan3'},
  {name: '怕怕', words: 2, weight: 10, phonetic: 'pa4 pa4'},
  // {name: '爬爬', words: 2, weight: 10, phonetic: 'pa4 pa4'},
  {name: '扒鸡', words: 2, weight: 10, phonetic: 'pa4 ji2'},
  {name: '帕吉', words: 2, weight: 10, phonetic: 'pa4 ji2'},
  {name: '困意', words: 2, weight: 10, phonetic: 'kun4 yi1'},
  {name: '困难', words: 2, weight: 50, phonetic: 'kun4 nan2'},
  {name: '男佣', words: 2, weight: 10, phonetic: 'nan2 yong3'},
  {name: '难干', words: 2, weight: 10, phonetic: 'nan2 gan3'},
  {name: '男男', words: 2, weight: 10, phonetic: 'nan2 nan2'},
  {name: '二弟', words: 2, weight: 10, phonetic: 'er4 di4'},
  {name: '二姨', words: 2, weight: 10, phonetic: 'er4 yi1'},
  {name: '二中', words: 2, weight: 10, phonetic: 'er4 zhong1'},
  {name: '二级', words: 2, weight: 10, phonetic: 'er4 ji1'},
  {name: '种地', words: 2, weight: 10, phonetic: 'zhong1 di4'},
  {name: '中医', words: 2, weight: 10, phonetic: 'zhong1 yi1'},
  {name: '中意', words: 2, weight: 10, phonetic: 'zhong1 yi1'},
  {name: '忠义', words: 2, weight: 10, phonetic: 'zhong1 yi1'},
  {name: '重用', words: 2, weight: 10, phonetic: 'zhong1 yong3'},
  {name: '中部', words: 2, weight: 10, phonetic: 'zhong1 bu2'},
  {name: '中级', words: 2, weight: 10, phonetic: 'zhong1 ji2'},
  {name: '终极', words: 2, weight: 50, phonetic: 'zhong1 ji2'},
  {name: '重疾', words: 2, weight: 10, phonetic: 'zhong1 ji2'},
  {name: '重击', words: 2, weight: 10, phonetic: 'zhong1 ji2'},
  {name: '基地', words: 2, weight: 10, phonetic: 'ji2 di4'},
  {name: '极地', words: 2, weight: 10, phonetic: 'ji2 di4'},
  {name: '几滴', words: 2, weight: 10, phonetic: 'ji2 di4'},
  {name: '机翼', words: 2, weight: 10, phonetic: 'ji2 yi1'},
  {name: '几次', words: 2, weight: 10, phonetic: 'ji2 ci4'},
  {name: '急用', words: 2, weight: 10, phonetic: 'ji2 yong3'},
  {name: '即用', words: 2, weight: 10, phonetic: 'ji2 yong3'},
  {name: '鸡肝', words: 2, weight: 10, phonetic: 'ji2 gan3'},
  {name: '基纽', words: 2, weight: 10, phonetic: 'ji2 niu2'},
  {name: '济南', words: 2, weight: 10, phonetic: 'ji2 nan2'},
  {name: '集中', words: 2, weight: 10, phonetic: 'ji2 niu2'},
  {name: '积极', words: 2, weight: 10, phonetic: 'ji2 ji2'},
  {name: '第一次', words: 3, weight: 100, phonetic: 'di4 yi1 ci4'},
  {name: '第一牛', words: 3, weight: 10, phonetic: 'di4 yi1 niu2'},
  {name: '第一种', words: 3, weight: 10, phonetic: 'di4 yi1 zhong1'},
  {name: '第一季', words: 3, weight: 10, phonetic: 'di4 yi1 ji2'},
  {name: '第一集', words: 3, weight: 10, phonetic: 'di4 yi1 ji2'},
  {name: '第一级', words: 3, weight: 10, phonetic: 'di4 yi1 ji2'},
  {name: '第一季', words: 3, weight: 10, phonetic: 'di4 yi1 ji2'},
  {name: '第二次', words: 3, weight: 100, phonetic: 'di4 er4 ci4'},
  {name: '牛牛牛', words: 3, weight: 10, phonetic: 'niu2 niu2 niu2'},
];

$(document).ready(function () {
  let leftText = "天涯的尽头 有谁去过\n" +
    "山水优雅着 保持沉默\n" +
    "我们的青春却热闹很多\n" +
    "而且是谁都 不准偷\n" +
    "故事怎么写 才像小说\n" +
    "真实的伤口 从不回收\n" +
    "跟着马蹄进入江湖的我\n" +
    "有一些话想 对你说\n" +
    "传说的世界 有你相陪\n" +
    "双向的穿越 每一场风雪\n" +
    "红尘我不累 天涯我不追\n" +
    "彼此的了解不只一些 耶\n" +
    "传说的世界 有你相陪\n" +
    "双向的对决 距离不是一切\n" +
    "什么是撤退 我们不会写\n" +
    "突破了黑夜永不凋谢\n" +
    "青石板街头 岁月悠悠\n" +
    "远处是霓虹 还是烛火\n" +
    "这画面在更新可能都有\n" +
    "一起将梦想 都打勾\n" +
    "琴声在枝头 风来就走\n" +
    "追梦的时候 不能逐流\n" +
    "逆向的温柔给了你就走\n" +
    "而你的生活 都有我\n" +
    "传说的世界 有你相陪\n" +
    "双向的穿越 每一场风雪\n" +
    "红尘我不累 天涯我不追\n" +
    "彼此的了解不只一些 耶\n" +
    "传说的世界 有你相陪\n" +
    "双向的对决 距离不是一切\n" +
    "什么是撤退 我们不会写\n" +
    "突破了黑夜永不凋谢\n" +
    "风声很轻 谁在安静\n" +
    "谁在寻找知音 (穿越竹林)\n" +
    "谁在聆听 远处古琴\n" +
    "谁的弦绷太紧 (想解释命运)\n" +
    "不再飘零 不再任性\n" +
    "我们都答应\n" +
    "我们也都相信\n" +
    "一起走过 古风的边境\n" +
    "传说的世界 有你相陪\n" +
    "双向的穿越 每一场风雪\n" +
    "红尘我不累 天涯我不追\n" +
    "彼此的了解不只一些 耶\n" +
    "传说的世界 有你相陪\n" +
    "双向的对决 距离不是一切\n" +
    "什么是撤退 我们不会写\n" +
    "突破了黑夜永不凋谢";
  $("#braveCowTextareaLeft").val(leftText);
  $braveCowTextareaLeft = $("#braveCowTextareaLeft");
  $braveCowTextareaRight = $("#braveCowTextareaRight");
  $braveCowPhonetic = $("#braveCowPhonetic");
  $braveCowScroll = $("#braveCowScroll");
  braveCowOption.scrollLength = braveCowScrollCont.length;
  setInterval(braveCowScroll, 5000);
  initBraveCowAudio();
  initBraveCowDict();
  if (braveCowDict.length === 0 || braveCowDictWeight[0] < 1) {
    alert('初始化词典失败');
    return false;
  }
  // 勇敢牛牛音频播放及暂停
  $("#playBraveCowBtn").click(function () {
    if (braveCowOption.isPlayAudio) {
      braveCowOption.isPlayAudio = false;
      $("#playBraveCowBtn").removeClass('brave-cow-playing');
      braveCowAudio.pause();
    } else {
      braveCowOption.isPlayAudio = true;
      $("#playBraveCowBtn").addClass('brave-cow-playing');
      braveCowAudio.play();
    }
  });
  $("#braveCowFillNumBtn").click(function () {
    let fillNum = $("#braveCowFillNum").val();
    if (fillNum < 1) {
      alert("请填写正整数字数");
      return false;
    }
    let phonetic = $braveCowPhonetic.val() === "1" ? true : false;
    fillLyricsWithWords(fillNum, phonetic);
  });
  $(".brave-cow-fill-btn").click(function () {
    let dataNum = Number($(this).attr('data-num'));
    if (!isNaN(dataNum)) {
      let phonetic = $braveCowPhonetic.val() === "1" ? true : false;
      fillLyricsWithWords(dataNum, phonetic);
    }
  });
  $("#braveCowTransBtn").click(function () {
    let phonetic = $braveCowPhonetic.val() === "1" ? true : false;
    braveCowTrans(phonetic);
  });
})

function braveCowScroll() {
  $braveCowScroll.hide();
  let randomIndex = Math.floor(Math.random() * braveCowOption.scrollLength);
  $braveCowScroll.html(braveCowScrollCont[randomIndex].text).attr('href', braveCowScrollCont[randomIndex].href);
  $braveCowScroll.fadeIn(300);
}

// 初始化勇敢牛牛音频
function initBraveCowAudio() {
  braveCowAudio = $('#braveCowAudio')[0];
  braveCowAudio.addEventListener('ended', playBraveCowAudio, false);
}

// 播放音频 第一次勇敢牛牛 第二次勇敢牛牛 终极勇敢牛牛
function playBraveCowAudio() {
  braveCowAudio.currentTime = 0;
  braveCowAudio.play();
}

// 初始化勇敢牛牛词典及权重列表
function initBraveCowDict() {
  let maxDictWords = braveCowOption.maxDictWords;
  for (let i = 0; i < maxDictWords; i++) {
    braveCowDict.push([]);
    braveCowDictWeight.push([]);
  }
  for (let i = 0; i < braveCowDictRaw.length; i++) {
    let weight = braveCowDictRaw[i].weight;
    let words = braveCowDictRaw[i].words;
    if (words > maxDictWords) {
      alert('最大单词字数配置错误');
      return false;
    }
    for (let j = words - 1; j < maxDictWords; j++) {
      braveCowDict[j].push(braveCowDictRaw[i]);
      let totalWeight = braveCowDictWeight[j].length > 0 ? braveCowDictWeight[j][braveCowDictWeight[j].length - 1] + weight : weight;
      braveCowDictWeight[j].push(totalWeight);
    }
  }
}

// 勇敢填词，一键替换原来的词
function braveCowTrans(phonetic) {
  let chineseReg = /[\u4e00-\u9fa5]{1,}/g;
  let textLeft = $("#braveCowTextareaLeft").val();
  if (textLeft === "") {
    return false;
  }
  let leftTextOriList = textLeft.split('\n');
  let rightTextList = [];
  for (let i = 0; i < leftTextOriList.length; i++) {
    let curLine = $.trim(leftTextOriList[i]);
    let chnLeftList = curLine.match(chineseReg);
    if (!chnLeftList) {
      rightTextList.push(curLine);
      continue;
    }
    let curLineList = [];
    for (let j = 0; j < chnLeftList.length; j++) {
      let thisWords = getBraveCowLyrics(chnLeftList[j].length, phonetic);
      curLineList.push(thisWords);
    }
    rightTextList.push(curLineList.join(" "));
  }
  let textRight = rightTextList.join("\n");
  let textRightOri = $braveCowTextareaRight.val();
  $braveCowTextareaRight.val(textRight);
  // if (textRightOri === "") {
  //   $braveCowTextareaRight.val(textRight);
  // } else {
  //   $braveCowTextareaRight.val(textRightOri + "\n" + textRight);
  // }
}

// 勇敢填词，根据字数返回对应字数的随机内容
function getBraveCowLyrics(wordsNum, phonetic) {
  wordsNum = Number(wordsNum);
  if (isNaN(wordsNum) || wordsNum < 1) {
    return "";
  }
  let braveCowLyrics = "";
  if (wordsNum > braveCowOption.maxDictWords) {
    let smallerNum = Math.ceil(Math.random() * braveCowOption.maxDictWords);
    braveCowLyrics += getBraveCowLyrics(smallerNum, phonetic);
    braveCowLyrics += getBraveCowLyrics(wordsNum - smallerNum, phonetic);
  } else {
    let randomDict = braveCowDict[wordsNum - 1];
    let randomDictWeight = braveCowDictWeight[wordsNum - 1];
    let dictLength = randomDict.length;
    let maxIndex = randomDictWeight[dictLength - 1];
    let randomNum = Math.ceil(Math.random() * maxIndex);
    for (let i = 0; i < dictLength; i++) {
      let curWeight = randomDictWeight[i];
      if (randomNum <= curWeight) {
        let name = phonetic ? randomDict[i].phonetic + ' ' : randomDict[i].name;
        let words = randomDict[i].words;
        if (words === wordsNum) {
          return name;
        } else {
          return name + getBraveCowLyrics(wordsNum - words, phonetic);
        }
      }
    }
  }
  return braveCowLyrics;
}

// 获取指定字数的填词并填入文本区域中
function fillLyricsWithWords(fillNum) {
  let fillLyrics = getBraveCowLyrics(fillNum);
  // console.log(fillLyrics.length);
  let curText = $braveCowTextareaRight.val();
  $braveCowTextareaRight.val(curText + fillLyrics);
}