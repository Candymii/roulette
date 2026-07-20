// ==========================================
// Roulette Timer v2.0
// settings.js
// ==========================================


// ==========================================
// 設定画面 要素
// ==========================================

const settingsPanel =
    document.getElementById("settingsPanel");


const mainTimerInput =
    document.getElementById("mainTimerInput");


const intervalTimerInput =
    document.getElementById("intervalTimerInput");


const minShuffleInput =
    document.getElementById("minShuffleInput");


const maxShuffleInput =
    document.getElementById("maxShuffleInput");



const saveSettingsButton =
    document.getElementById("saveSettingsButton");


const closeSettingsButton =
    document.getElementById("closeSettingsButton");



// ==========================================
// 設定画面を開く
// ==========================================

function openSettings() {


    mainTimerInput.value =
        settings.mainTimer;


    intervalTimerInput.value =
        settings.intervalTimer;


    minShuffleInput.value =
        settings.minShuffleCount;


    maxShuffleInput.value =
        settings.maxShuffleCount;



    settingsPanel.style.display =
        "block";

}



// ==========================================
// 設定画面を閉じる
// ==========================================

function closeSettings() {


    settingsPanel.style.display =
        "none";

}



// ==========================================
// 保存
// ==========================================

function saveSettings() {


    const mainTime =
        Number(mainTimerInput.value);


    const intervalTime =
        Number(intervalTimerInput.value);


    const minShuffle =
        Number(minShuffleInput.value);


    const maxShuffle =
        Number(maxShuffleInput.value);



    if (
        mainTime <= 0 ||
        intervalTime <= 0 ||
        minShuffle <= 0 ||
        maxShuffle <= minShuffle
    ) {

        alert(
            "設定値を確認してください"
        );

        return;

    }



    settings.mainTimer =
        mainTime;


    settings.intervalTimer =
        intervalTime;


    settings.minShuffleCount =
        minShuffle;


    settings.maxShuffleCount =
        maxShuffle;



    closeSettings();



    alert(
        "設定を保存しました"
    );

}



// ==========================================
// ボタン接続
// ==========================================

if (saveSettingsButton) {


    saveSettingsButton.addEventListener(
        "click",
        saveSettings
    );


}



if (closeSettingsButton) {


    closeSettingsButton.addEventListener(
        "click",
        closeSettings
    );


}