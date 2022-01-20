/**
 * 勇敢填词 (勇敢牛牛排列组合歌词生成)
 * @Author Black Doom
 * @Version 0.0
 */

let braveCowAudio;
let braveCowOption = {
  isPlayAudio: false,
  maxDictWords: 1
};

// 勇敢牛牛词典
let braveCowDict = [];

/**
 * 勇敢牛牛词典 初始数据
 * 参数 name: 中文, words: 字数, weight: 权重,
 * phonetic: 拼音，一字的为实际拼音，超过两字的为根据一字强行转化来，比如抵用(di3yong4)为第(di4)+勇(yong3)活字印刷，实际为(di4yong3)
 */
let braveCowDictRaw = [
  {name: '第', words: 1, weight: 20, phonetic: 'di4'},
  {name: '一', words: 1, weight: 20, phonetic: 'yi1'},
  {name: '次', words: 1, weight: 20, phonetic: 'ci4'},
  {name: '勇', words: 1, weight: 20, phonetic: 'yong3'},
  {name: '敢', words: 1, weight: 20, phonetic: 'gan3'},
  {name: '牛', words: 1, weight: 20, phonetic: 'niu2'},
  {name: '不', words: 1, weight: 20, phonetic: 'bu2'},
  {name: '怕', words: 1, weight: 20, phonetic: 'pa4'},
  {name: '困', words: 1, weight: 20, phonetic: 'kun4'},
  {name: '难', words: 1, weight: 20, phonetic: 'nan2'},
  {name: '二', words: 1, weight: 20, phonetic: 'er4'},
  {name: '终', words: 1, weight: 20, phonetic: 'zhong1'},
  {name: '级', words: 1, weight: 20, phonetic: 'ji2'},
  {name: '弟弟', words: 2, weight: 10, phonetic: 'di4di4'},
  {name: '地底', words: 2, weight: 10, phonetic: 'di4di4'},
  {name: '第一', words: 2, weight: 10, phonetic: 'di4yi1'},
  {name: '敌意', words: 2, weight: 10, phonetic: 'di4yi1'},
  {name: '地磁', words: 2, weight: 10, phonetic: 'di4ci1'},
  {name: '抵用', words: 2, weight: 10, phonetic: 'di4yong3'},
  {name: '抵用', words: 2, weight: 10, phonetic: 'di4yong3'},
  {name: '地卜', words: 2, weight: 10, phonetic: 'di4bu2'},
  {name: '第二', words: 2, weight: 10, phonetic: 'di4er4'},
  {name: '低级', words: 2, weight: 10, phonetic: 'di4ji2'},
  {name: '异地', words: 2, weight: 10, phonetic: 'yi1di4'},
  {name: '一地', words: 2, weight: 10, phonetic: 'yi1di4'},
  {name: '一滴', words: 2, weight: 10, phonetic: 'yi1di4'},
  {name: '意义', words: 2, weight: 10, phonetic: 'yi1yi1'},
  {name: '意义', words: 2, weight: 10, phonetic: 'yi1yi1'},
  {name: '一次', words: 2, weight: 10, phonetic: 'yi1ci4'},
  {name: '依次', words: 2, weight: 10, phonetic: 'yi1ci4'},
  {name: '异次', words: 2, weight: 10, phonetic: 'yi1ci4'},
  {name: '医用', words: 2, weight: 10, phonetic: 'yi1yong3'},
  {name: '易用', words: 2, weight: 10, phonetic: 'yi1yong3'},
  {name: '已用', words: 2, weight: 10, phonetic: 'yi1yong3'},
  {name: '义勇', words: 2, weight: 10, phonetic: 'yi1yong3'},
  {name: '一部', words: 2, weight: 10, phonetic: 'yi1bu2'},
  {name: '一步', words: 2, weight: 10, phonetic: 'yi1bu2'},
  {name: '一种', words: 2, weight: 10, phonetic: 'yi1zhong1'},
  {name: '一中', words: 2, weight: 10, phonetic: 'yi1zhong1'},
  {name: '一众', words: 2, weight: 10, phonetic: 'yi1zhong1'},
  {name: '异种', words: 2, weight: 10, phonetic: 'yi1zhong1'},
  {name: '一级', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '以及', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '一击', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '遗迹', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '一集', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '一记', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '艺伎', words: 2, weight: 10, phonetic: 'yi1ji2'},
  {name: '词义', words: 2, weight: 10, phonetic: 'ci4yi1'},
  {name: '词意', words: 2, weight: 10, phonetic: 'ci4yi1'},
  {name: '次次', words: 2, weight: 10, phonetic: 'ci4ci4'},
  {name: '词干', words: 2, weight: 10, phonetic: 'ci4gan3'},
  {name: '刺激', words: 2, weight: 10, phonetic: 'ci4ji2'},
  {name: '次级', words: 2, weight: 10, phonetic: 'ci4ji2'},
  {name: '用意', words: 2, weight: 10, phonetic: 'yong3yi1'},
  {name: '泳衣', words: 2, weight: 10, phonetic: 'yong3yi1'},
  {name: '庸医', words: 2, weight: 10, phonetic: 'yong3yi1'},
  {name: '拥挤', words: 2, weight: 10, phonetic: 'yong3ji2'},
  {name: '用词', words: 2, weight: 10, phonetic: 'yong3ci4'},
  {name: '用用', words: 2, weight: 10, phonetic: 'yong3yong3'},
  {name: '永不', words: 2, weight: 10, phonetic: 'yong3bu2'},
  {name: '肝帝', words: 2, weight: 10, phonetic: 'gan3di4'},
  {name: '敢用', words: 2, weight: 10, phonetic: 'gan3yong3'},
  {name: '赶赶', words: 2, weight: 10, phonetic: 'gan3gan3'},
  {name: '敢干', words: 2, weight: 10, phonetic: 'gan3gan3'},
  {name: '赶牛', words: 2, weight: 10, phonetic: 'gan3niu2'},
  {name: '干部', words: 2, weight: 10, phonetic: 'gan3bu2'},
  {name: '干趴', words: 2, weight: 10, phonetic: 'gan3pa4'},
  {name: '赣南', words: 2, weight: 10, phonetic: 'gan3nan2'},
  {name: '感激', words: 2, weight: 10, phonetic: 'gan3ji2'},
  {name: '赶集', words: 2, weight: 10, phonetic: 'gan3ji2'},
  {name: '牛肝', words: 2, weight: 10, phonetic: 'niu2gan3'},
  {name: '牛牛', words: 2, weight: 10, phonetic: 'niu2niu2'},
  {name: '妞妞', words: 2, weight: 10, phonetic: 'niu2niu2'},
  {name: '扭扭', words: 2, weight: 10, phonetic: 'niu2niu2'},
  {name: '牛腩', words: 2, weight: 10, phonetic: 'niu2nan2'},
  {name: '牛二', words: 2, weight: 10, phonetic: 'niu2er4'},
  {name: '牛二', words: 2, weight: 10, phonetic: 'niu2er4'},
  {name: '不敌', words: 2, weight: 10, phonetic: 'bu2di4'},
  {name: '不易', words: 2, weight: 10, phonetic: 'bu2yi1'},
  {name: '不易', words: 2, weight: 10, phonetic: 'bu2yi1'},
  {name: '布衣', words: 2, weight: 10, phonetic: 'bu2yi1'},
  {name: '不辞', words: 2, weight: 10, phonetic: 'bu2ci4'},
  {name: '不次', words: 2, weight: 10, phonetic: 'bu2ci4'},
  {name: '不用', words: 2, weight: 10, phonetic: 'bu2yong3'},
  {name: '不敢', words: 2, weight: 10, phonetic: 'bu2gan3'},
  {name: '不牛', words: 2, weight: 10, phonetic: 'bu2niu2'},
  {name: '不怕', words: 2, weight: 10, phonetic: 'bu2pa4'},
  {name: '不困', words: 2, weight: 10, phonetic: 'bu2kun4'},
  {name: '不难', words: 2, weight: 10, phonetic: 'bu2nan2'},
  {name: '趴地', words: 2, weight: 10, phonetic: 'pa4di4'},
  {name: '爬竿', words: 2, weight: 10, phonetic: 'pa4gan3'},
  {name: '怕怕', words: 2, weight: 10, phonetic: 'pa4pa4'},
  {name: '爬爬', words: 2, weight: 10, phonetic: 'pa4pa4'},
  {name: '扒鸡', words: 2, weight: 10, phonetic: 'pa4ji2'},
  {name: '帕吉', words: 2, weight: 10, phonetic: 'pa4ji2'},
  {name: '困意', words: 2, weight: 10, phonetic: 'kun4yi1'},
  {name: '困难', words: 2, weight: 10, phonetic: 'kun4nan2'},
  {name: '男佣', words: 2, weight: 10, phonetic: 'nan2yong3'},
  {name: '难干', words: 2, weight: 10, phonetic: 'nan2gan3'},
  {name: '男男', words: 2, weight: 10, phonetic: 'nan2nan2'},
  {name: '二弟', words: 2, weight: 10, phonetic: 'er4di4'},
  {name: '二姨', words: 2, weight: 10, phonetic: 'er4yi1'},
  {name: '二中', words: 2, weight: 10, phonetic: 'er4zhong1'},
  {name: '二级', words: 2, weight: 10, phonetic: 'er4ji1'},
  {name: '种地', words: 2, weight: 10, phonetic: 'zhong1di4'},
  {name: '中医', words: 2, weight: 10, phonetic: 'zhong1yi1'},
  {name: '中意', words: 2, weight: 10, phonetic: 'zhong1yi1'},
  {name: '忠义', words: 2, weight: 10, phonetic: 'zhong1yi1'},
  {name: '重用', words: 2, weight: 10, phonetic: 'zhong1yong3'},
  {name: '中部', words: 2, weight: 10, phonetic: 'zhong1bu2'},
  {name: '中级', words: 2, weight: 10, phonetic: 'zhong1ji2'},
  {name: '终极', words: 2, weight: 10, phonetic: 'zhong1ji2'},
  {name: '重疾', words: 2, weight: 10, phonetic: 'zhong1ji2'},
  {name: '重击', words: 2, weight: 10, phonetic: 'zhong1ji2'},
  {name: '基地', words: 2, weight: 10, phonetic: 'ji2di4'},
  {name: '极地', words: 2, weight: 10, phonetic: 'ji2di4'},
  {name: '几滴', words: 2, weight: 10, phonetic: 'ji2di4'},
  {name: '机翼', words: 2, weight: 10, phonetic: 'ji2yi1'},
  {name: '几次', words: 2, weight: 10, phonetic: 'ji2ci4'},
  {name: '急用', words: 2, weight: 10, phonetic: 'ji2yong3'},
  {name: '即用', words: 2, weight: 10, phonetic: 'ji2yong3'},
  {name: '鸡肝', words: 2, weight: 10, phonetic: 'ji2gan3'},
  {name: '基纽', words: 2, weight: 10, phonetic: 'ji2niu2'},
  {name: '济南', words: 2, weight: 10, phonetic: 'ji2nan2'},
  {name: '集中', words: 2, weight: 10, phonetic: 'ji2niu2'},
  {name: '积极', words: 2, weight: 10, phonetic: 'ji2ji2'},
  {name: '第一次', words: 3, weight: 10, phonetic: 'di4yi1ci4'},
  {name: '第一牛', words: 3, weight: 10, phonetic: 'di4yi1niu2'},
  {name: '第一种', words: 3, weight: 10, phonetic: 'di4yi1zhong1'},
  {name: '第一季', words: 3, weight: 10, phonetic: 'di4yi1ji2'},
  {name: '第一集', words: 3, weight: 10, phonetic: 'di4yi1ji2'},
  {name: '第一级', words: 3, weight: 10, phonetic: 'di4yi1ji2'},
  {name: '地磁牛', words: 3, weight: 10, phonetic: 'di4ci4niu2'},
  {name: '第一季', words: 3, weight: 10, phonetic: 'di4yi1ji2'},
  {name: '第一季', words: 3, weight: 10, phonetic: 'di4yi1ji2'},
  {name: '', words: 3, weight: 10, phonetic: ''},
  {name: '', words: 3, weight: 10, phonetic: ''},
  {name: '', words: 3, weight: 10, phonetic: ''},
  {name: '', words: 3, weight: 10, phonetic: ''},
  {name: '', words: 3, weight: 10, phonetic: ''},
  {name: '', words: 3, weight: 10, phonetic: ''},
];

$(document).ready(function () {
  initBraveCowAudio();
  initBraveCowDict();
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

// 初始化勇敢牛牛词典
function initBraveCowDict() {

}

// 勇敢填词，根据字数返回对应字数的随机内容
function getBraveCowLyrics(wordsNum) {
  wordsNum = Number(wordsNum);
  if (isNaN(wordsNum) || wordsNum < 1) {
    return "";
  }
  let braveCowLyrics = "";
  if (wordsNum > braveCowOption.maxDictWords) {
    let smallerNum = Math.ceil(Math.random() * braveCowOption.maxDictWords);
    braveCowLyrics += getBraveCowLyrics(smallerNum);
    braveCowLyrics += getBraveCowLyrics(wordsNum - smallerNum);
  } else {

  }
  return braveCowLyrics;
}