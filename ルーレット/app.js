// ==========================================
// Roulette Timer v2.0
// app.js
// ==========================================


// ==========================================
// ボタン
// ==========================================

const startButton =
    document.getElementById("startButton");

const stopButton =
    document.getElementById("stopButton");

const settingsButton =
    document.getElementById("settingsButton");


// ==========================================
// 状態
// ==========================================

let appRunning = false;

let waitingForTimer = false;


// ==========================================
// モード④ お仕置き確率
// ==========================================

let currentEventProbability = 0;


// モード③・④の罰判定待ち

let waitingForAdditionalEvent = false;


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


        // ======================================
        // モード④の確率を初期化
        // ======================================

        currentEventProbability =
            settings.eventProbability;


        console.log(
            "START：お仕置き確率を初期化",
            currentEventProbability + "%"
        );


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


    // ======================================
    // メンバー表示
    // ======================================

    if (member) {


        memberName.textContent =
            member.name;


        memberImage.src =
            member.image ||
            NO_IMAGE;

    }


    // ======================================
    // お仕置き表示
    // ======================================

    const eventResultDisplay =
        document.getElementById(
            "eventResult"
        );


    // いったん表示を消す

    if (eventResultDisplay) {

        eventResultDisplay.textContent = "";

    }


    // ======================================
    // モード③・④
    // 強制インターバル後のみ抽選
    // ======================================

    if (
        (
            settings.mode === "forceIntervalEvent" ||
            settings.mode === "progressiveEvent"
        ) &&
        waitingForAdditionalEvent
    ) {


        const eventResult =
            decideAdditionalEvent();


        if (eventResult) {

            eventResultDisplay.textContent =
                "罰：あり";

        } else {

            eventResultDisplay.textContent =
                "罰：なし";

        }


        console.log(
            "罰抽選結果:",
            eventResult ? "あり" : "なし"
        );


        // ==================================
        // 使用した確率を表示
        // ==================================

        if (
            settings.mode === "progressiveEvent"
        ) {

            console.log(
                "モード④：使用したお仕置き確率:",
                currentEventProbability + "%"
            );

        } else {

            console.log(
                "モード③：設定確率:",
                settings.eventProbability + "%"
            );

        }


        // ==================================
        // 判定済みにする
        // ==================================

        waitingForAdditionalEvent =
            false;

    }


    // ======================================
    // メインタイマー開始
    // ======================================

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


        // ==================================
        // 罰判定状態をリセット
        // ==================================

        waitingForAdditionalEvent =
            false;


        // ==================================
        // モード④の確率をリセット
        // ==================================

        currentEventProbability =
            settings.eventProbability;


        stopRoulette();

        stopTimer();


        // ==================================
        // 罰表示を消す
        // ==================================

        const eventResultDisplay =
            document.getElementById(
                "eventResult"
            );


        if (eventResultDisplay) {

            eventResultDisplay.textContent = "";

        }


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


// ==========================================
// カウンター機能
// ==========================================

let counter = 0;


// ==========================================
// カウンター表示更新
// ==========================================

function updateCounter() {


    document.getElementById(
        "counterValue"
    ).textContent =
        counter;

}


// ==========================================
// ＋ボタン
// ==========================================

document
    .getElementById("plusButton")
    .addEventListener(
        "click",
        () => {


            // ==================================
            // カウンター＋1
            // ==================================

            counter++;

            updateCounter();


            console.log(
                "＋ボタンが押されました"
            );


            console.log(
                "現在のモード:",
                settings.mode
            );


            console.log(
                "タイマーモード:",
                getTimerMode()
            );


            console.log(
                "アプリ動作中:",
                appRunning
            );


            // ==================================
            // モード②・③・④
            // ==================================

            if (
                settings.mode === "forceInterval" ||
                settings.mode === "forceIntervalEvent" ||
                settings.mode === "progressiveEvent"
            ) {


                console.log(
                    "モード②・③・④です"
                );


                // ==================================
                // アプリが動作中か確認
                // ==================================

                if (appRunning) {


                    console.log(
                        "アプリは動作中です"
                    );


                    // ==================================
                    // メインタイマー中のみ発動
                    // ==================================

                    if (
                        getTimerMode() === "main"
                    ) {


                        console.log(
                            "メインタイマーを停止して強制インターバルへ"
                        );


                        // ==================================
                        // モード③
                        // 罰判定を予約
                        // ==================================

                        if (
                            settings.mode ===
                            "forceIntervalEvent"
                        ) {


                            waitingForAdditionalEvent =
                                true;


                            console.log(
                                "モード③：罰判定を予約"
                            );

                        }


                        // ==================================
                        // モード④
                        // 罰判定を予約＋確率上昇
                        // ==================================

                        if (
                            settings.mode ===
                            "progressiveEvent"
                        ) {


                            waitingForAdditionalEvent =
                                true;


                            // ==================================
                            // お仕置き確率を上昇
                            // ==================================

                            currentEventProbability +=
                                settings.eventIncrease;


                            // ==================================
                            // 上限を超えないようにする
                            // ==================================

                            if (
                                currentEventProbability >
                                settings.eventMaxProbability
                            ) {

                                currentEventProbability =
                                    settings.eventMaxProbability;

                            }


                            console.log(
                                "モード④：罰判定を予約"
                            );


                            console.log(
                                "現在のお仕置き確率:",
                                currentEventProbability + "%"
                            );

                        }


                        // ==================================
                        // 強制インターバル開始
                        // ==================================

                        startForceIntervalTimer();

                    }

                }

            }

        }
    );


// ==========================================
// －ボタン
// ==========================================

document
    .getElementById("minusButton")
    .addEventListener(
        "click",
        () => {


            if (counter > 0) {

                counter--;

            }


            updateCounter();

        }
    );


// ==========================================
// リセット
// ==========================================

document
    .getElementById("resetCounterButton")
    .addEventListener(
        "click",
        () => {


            counter = 0;


            updateCounter();

        }
    );


// ==========================================
// お仕置き抽選
// ==========================================

function decideAdditionalEvent() {


    // ======================================
    // モード③・④以外では抽選しない
    // ======================================

    if (
        settings.mode !== "forceIntervalEvent" &&
        settings.mode !== "progressiveEvent"
    ) {

        return false;

    }


    // ======================================
    // 使用する確率
    // ======================================

    let probability;


    if (
        settings.mode === "progressiveEvent"
    ) {


        // ==================================
        // モード④
        // 上昇後の確率を使用
        // ==================================

        probability =
            currentEventProbability;

    } else {


        // ==================================
        // モード③
        // 固定確率を使用
        // ==================================

        probability =
            settings.eventProbability;

    }


    // ======================================
    // ランダム抽選
    // ======================================

    const random =
        Math.random() * 100;


    console.log(
        "お仕置き抽選",
        "確率:",
        probability + "%",
        "乱数:",
        random
    );


    // ======================================
    // 判定
    // ======================================

    if (
        random < probability
    ) {

        return true;

    }


    return false;

}