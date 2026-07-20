// ==========================================
// Roulette Timer v2.0
// timer.js
// ==========================================


// 表示要素

const timerDisplay =
    document.getElementById("timer");

const statusDisplay =
    document.getElementById("status");


// タイマー状態

let timerInterval = null;

let remainingTime = 0;

let timerRunning = false;


// 現在のモード

let timerMode = "idle";


// ==========================================
// メインタイマー開始
// ==========================================

function startMainTimer() {


    stopTimer();


    remainingTime =
        settings.mainTimer;


    timerMode =
        "main";


    timerRunning = true;


    updateTimerDisplay();


    statusDisplay.textContent =
        "タイマー中";



    timerInterval =
        setInterval(() => {


            remainingTime--;


            updateTimerDisplay();



            if (remainingTime <= 0) {


                stopTimer();


                startIntervalTimer();


            }


        }, 1000);


}



// ==========================================
// インターバル開始
// ==========================================

function startIntervalTimer() {


    stopTimer();


    remainingTime =
        settings.intervalTimer;


    timerMode =
        "interval";


    timerRunning = true;


    updateTimerDisplay();



    statusDisplay.textContent =
        "インターバル";



    timerInterval =
        setInterval(() => {


            remainingTime--;


            updateTimerDisplay();



            if (remainingTime <= 0) {


                stopTimer();


                statusDisplay.textContent =
                    "次のルーレット準備";


                // app.js側で再スタート

                if (
                    typeof intervalFinished === "function"
                ) {

                    intervalFinished();

                }


            }


        }, 1000);


}



// ==========================================
// 表示更新
// ==========================================

function updateTimerDisplay() {


    const minutes =
        Math.floor(
            remainingTime / 60
        );


    const seconds =
        remainingTime % 60;



    timerDisplay.textContent =

        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(seconds).padStart(2, "0");


}



// ==========================================
// 停止
// ==========================================

function stopTimer() {


    if (timerInterval) {


        clearInterval(timerInterval);


    }


    timerInterval = null;


    timerRunning = false;


}



// ==========================================
// 全リセット
// ==========================================

function resetTimer() {


    stopTimer();


    remainingTime = 0;


    timerMode = "idle";


    updateTimerDisplay();


    statusDisplay.textContent =
        "待機中";


}



// ==========================================
// 状態取得
// ==========================================

function getTimerMode() {


    return timerMode;


}