(function () {
})


// 第一次勇敢牛牛
function loopBraveCowAudio() {
    let braveCowAudio =  $('#braveCowAudio')[0];
    braveCowAudio.currentTime = 0;
    braveCowAudio.play();
    braveCowAudio.addEventListener('ended', playBraveCowAudio, false);
}

// 第二次勇敢牛牛 终极勇敢牛牛
function playBraveCowAudio() {
    let braveCowAudio =  $('#braveCowAudio')[0];
    braveCowAudio.currentTime = 0;
    braveCowAudio.play();
}

document.addEventListener('DOMContentLoaded', loopBraveCowAudio);