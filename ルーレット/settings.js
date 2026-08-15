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

const modeInput =
    document.getElementById("modeInput");

const forceIntervalInput =
    document.getElementById("forceIntervalInput");

const eventProbabilityInput =
    document.getElementById("eventProbabilityInput");

const eventIncreaseInput =
    document.getElementById("eventIncreaseInput");

const eventMaxProbabilityInput =
    document.getElementById("eventMaxProbabilityInput");

const forceIntervalSetting =
    document.getElementById("forceIntervalSetting");

const eventProbabilitySetting =
    document.getElementById("eventProbabilitySetting");

const eventIncreaseSetting =
    document.getElementById("eventIncreaseSetting");

const eventMaxProbabilitySetting =
    document.getElementById("eventMaxProbabilitySetting");

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

    modeInput.value =
        settings.mode;

    forceIntervalInput.value =
        settings.forceInterval;

    eventProbabilityInput.value =
        settings.eventProbability;

    eventIncreaseInput.value =
        settings.eventIncrease;

    eventMaxProbabilityInput.value =
        settings.eventMaxProbability;


    updateModeSetting();


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
// モード設定表示
// ==========================================

function updateModeSetting() {

    // ======================================
    // 強制インターバル設定
    // ======================================

    if (
        settings.mode === "forceInterval" ||
        settings.mode === "forceIntervalEvent" ||
        settings.mode === "progressiveEvent"
    ) {

        forceIntervalSetting.style.display =
            "block";

    } else {

        forceIntervalSetting.style.display =
            "none";

    }


    // ======================================
    // お仕置き初期確率
    // ======================================

    if (
        modeInput.value === "forceIntervalEvent" ||
        modeInput.value === "progressiveEvent"
    ) {

        eventProbabilitySetting.style.display =
            "block";

    } else {

        eventProbabilitySetting.style.display =
            "none";

    }


    // ======================================
    // モード④専用
    // ======================================

    if (
        modeInput.value === "progressiveEvent"
    ) {

        eventIncreaseSetting.style.display =
            "block";

        eventMaxProbabilitySetting.style.display =
            "block";

    } else {

        eventIncreaseSetting.style.display =
            "none";

        eventMaxProbabilitySetting.style.display =
            "none";

    }

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

    const forceInterval =
        Number(forceIntervalInput.value);

    const eventProbability =
        Number(eventProbabilityInput.value);

    const eventIncrease =
        Number(eventIncreaseInput.value);

    const eventMaxProbability =
        Number(eventMaxProbabilityInput.value);


    // ======================================
    // 入力チェック
    // ======================================

    if (
        mainTime <= 0 ||
        intervalTime <= 0 ||
        minShuffle <= 0 ||
        maxShuffle <= minShuffle ||
        forceInterval <= 0 ||
        eventProbability < 0 ||
        eventProbability > 100 ||
        eventIncrease < 0 ||
        eventIncrease > 100 ||
        eventMaxProbability < 0 ||
        eventMaxProbability > 100 ||
        eventMaxProbability < eventProbability
    ) {

        alert(
            "設定値を確認してください"
        );

        return;

    }


    // ======================================
    // 設定を保存
    // ======================================

    settings.mainTimer =
        mainTime;

    settings.intervalTimer =
        intervalTime;

    settings.minShuffleCount =
        minShuffle;

    settings.maxShuffleCount =
        maxShuffle;

    settings.mode =
        modeInput.value;

    settings.forceInterval =
        forceInterval;

    settings.eventProbability =
        eventProbability;

    settings.eventIncrease =
        eventIncrease;

    settings.eventMaxProbability =
        eventMaxProbability;


    // ======================================
    // 設定画面を閉じる
    // ======================================

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


// ==========================================
// モード変更
// ==========================================

modeInput.addEventListener(
    "change",
    updateModeSetting
);


// 初期状態

updateModeSetting();