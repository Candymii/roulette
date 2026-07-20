// ==========================================
// Roulette Timer v2.0
// app.js
// ==========================================


// ボタン

const startButton =
    document.getElementById("startButton");

const stopButton =
    document.getElementById("stopButton");

const settingsButton =
    document.getElementById("settingsButton");


// 状態

let appRunning = false;

let waitingForTimer = false;


// ==========================================
// START
// ==========================================

startButton.addEventListener(
    "click",
    () => {


        if (appRunning) {

            return;

        }


        appRunning = true;


        startNextRoulette();


    }
);



// ==========================================
// 次のルーレット開始
// ==========================================

function startNextRoulette() {


    if (!appRunning) {

        return;

    }


    statusTextUpdate(
        "ルーレット中"
    );


    startRoulette();


}



// ==========================================
// ルーレット完了後
// ==========================================


// roulette.jsから呼ばれる

function rouletteFinished() {


    if (!appRunning) {

        return;

    }


    const member =
        getSelectedMember();



    if (member) {


        memberName.textContent =
            member.name;


        memberImage.src =
            member.image ||
            NO_IMAGE;


    }



    startMainTimer();


}



// ==========================================
// インターバル終了後
// ==========================================


// timer.jsから呼ばれる

function intervalFinished() {


    if (!appRunning) {

        return;

    }


    startNextRoulette();


}



// ==========================================
// STOP
// ==========================================

stopButton.addEventListener(
    "click",
    () => {


        appRunning = false;


        stopRoulette();

        stopTimer();


        statusTextUpdate(
            "停止"
        );


    }
);



// ==========================================
// 状態表示
// ==========================================

function statusTextUpdate(text) {


    const status =
        document.getElementById("status");


    status.textContent =
        text;


}



// ==========================================
// 設定ボタン
// ==========================================

settingsButton.addEventListener(
    "click",
    () => {


     openSettings();

    }
);