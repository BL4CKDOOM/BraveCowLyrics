/**
 * 勇敢填词 (勇敢牛牛排列组合歌词生成)
 * @Author Black Doom
 * @Version 0.0
 */
let braveCowAudio; // 勇敢牛牛音频
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
        let name = phonetic ? randomDict[i].phonetic + ' ': randomDict[i].name;
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