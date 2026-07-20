const startButton = document.getElementById("startButton");
const result = document.getElementById("result");

const items = [
    "井上和",
    "賀喜遥香",
    "遠藤さくら",
    "梅澤美波",
    "齋藤飛鳥",
    "一ノ瀬美空",
    "中西アルノ",
    "奥田いろは",
    "岩本蓮加",
    "冨里奈央",
    "川﨑桜",
    "五百城茉央",
    "小川彩",
    "池田瑛紗",
    "日向坂",
    "菅原咲月",
    "与田祐希",
    "田村真佑",
    "山下美月",
    "筒井あやめ",
    "岡本姫奈",
    "金川紗耶",
    "櫻坂"
];

let roulette;
let lastResult = -1;

startButton.addEventListener("click", function () {
    startButton.disabled = true;
    startRoulette();
});

function startRoulette() {

    roulette = setInterval(function () {

        const random = Math.floor(Math.random() * items.length);

        result.textContent = items[random];

    }, 100);

    setTimeout(finishRoulette, 2000);

}

function finishRoulette() {

    clearInterval(roulette);

    let random;

    do {
        random = Math.floor(Math.random() * items.length);
    } while (random === lastResult);

    lastResult = random;

    result.textContent = items[random];

    startButton.disabled = false;

}