// =========================================
// Roulette Timer
// data.js
// =========================================

// ---------- メンバー一覧 ----------
const members = [
    {
        id: 1,
        name: "井上和",
        image: "images/inoue_nagi.jpg"
    },
    {
        id: 2,
        name: "賀喜遥香",
        image: "images/kaki_haruka.jpg"
    },
    {
        id: 3,
        name: "遠藤さくら",
        image: "images/endo_sakura.jpg"
    },
    {
        id: 4,
        name: "梅澤美波",
        image: "images/umezawa_minami.jpg"
    },
    {
        id: 5,
        name: "齋藤飛鳥",
        image: "images/saito_asuka.jpg"
    },
    {
        id: 6,
        name: "一ノ瀬美空",
        image: "images/ichinose_miku.jpg"
    },
    {
        id: 7,
        name: "中西アルノ",
        image: "images/nakanishi_aruno.jpg"
    },
    {
        id: 8,
        name: "奥田いろは",
        image: "images/okuda_iroha.jpg"
    },
    {
        id: 9,
        name: "岩本蓮加",
        image: "images/iwamoto_renka.jpg"
    },
    {
        id: 10,
        name: "冨里奈央",
        image: "images/tomisato_nao.jpg"
    },
    {
        id: 11,
        name: "川﨑桜",
        image: "images/kawasaki_sakura.jpg"
    },
    {
        id: 12,
        name: "五百城茉央",
        image: "images/ioki_mao.jpg"
    },
    {
        id: 13,
        name: "小川彩",
        image: "images/ogawa_aya.jpg"
    },
    {
        id: 14,
        name: "池田瑛紗",
        image: "images/ikeda_teresa.jpg"
    },
    {
        id: 15,
        name: "日向坂",
        image: "images/hinatazaka.jpg"
    },
    {
        id: 16,
        name: "菅原咲月",
        image: "images/sugawara_satsuki.jpg"
    },
    {
        id: 17,
        name: "与田祐希",
        image: "images/yoda_yuki.jpg"
    },
    {
        id: 18,
        name: "田村真佑",
        image: "images/tamura_mayu.jpg"
    },
    {
        id: 19,
        name: "山下美月",
        image: "images/yamashita_mizuki.jpg"
    },
    {
        id: 20,
        name: "筒井あやめ",
        image: "images/tsutsui_ayame.jpg"
    },
    {
        id: 21,
        name: "岡本姫奈",
        image: "images/okamoto_hina.jpg"
    },
    {
        id: 22,
        name: "金川紗耶",
        image: "images/kanagawa_saya.jpg"
    },
    {
        id: 23,
        name: "櫻坂",
        image: "images/sakurazaka.jpg"
    }
];

// ---------- アプリ設定 ----------
const settings = {

    // メインタイマー（秒）
    mainTimer: 10,

    // インターバル（秒）
    intervalTimer: 5,

    // スロット演出時間（秒）
    slotDuration: 5,

    // スロットの最小切替回数
    minShuffleCount: 50,

    // スロットの最大切替回数
    maxShuffleCount: 80

};

// ---------- 画像がない場合 ----------
const NO_IMAGE = "images/noimage.png";