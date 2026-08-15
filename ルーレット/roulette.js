// ==========================================
// Roulette Timer v2.0
// roulette.js
// ==========================================


// 表示用要素
const memberImage = document.getElementById("memberImage");
const memberName = document.getElementById("memberName");
const statusText = document.getElementById("status");


// 状態
let rouletteRunning = false;

let rouletteTimer = null;

let currentMemberIndex = -1;

let lastMemberIndex = -1;


// 設定値
let shuffleCount = 0;
let maxShuffleCount = 0;


// ==========================================
// ルーレット開始
// ==========================================

function startRoulette() {

    if (rouletteRunning) return;


    rouletteRunning = true;


    statusText.textContent = "ルーレット中";


    shuffleCount = 0;


    // 切替回数決定

    maxShuffleCount =
        Math.floor(
            Math.random() *
            (
                settings.maxShuffleCount -
                settings.minShuffleCount
            )
        )
        +
        settings.minShuffleCount;



    runShuffle();

}


// ==========================================
// 切替処理
// ==========================================

function runShuffle() {


    if (!rouletteRunning) return;



    let nextIndex;


    do {

        nextIndex =
            Math.floor(
                Math.random() * members.length
            );


    } while (

        nextIndex === currentMemberIndex

    );



    currentMemberIndex = nextIndex;



    updateMember(currentMemberIndex);



    shuffleCount++;



    // 減速処理

    let delay;


    const progress =
        shuffleCount / maxShuffleCount;



    if (progress < 0.5) {

        // 高速

        delay = 50;


    } else {

        // 徐々に遅くする

        delay =
            50 +
            (
                progress * 250
            );

    }



    if (shuffleCount >= maxShuffleCount) {


        finishRoulette();


        return;

    }



    rouletteTimer =
        setTimeout(
            runShuffle,
            delay
        );

}



// ==========================================
// メンバー表示更新
// ==========================================

function updateMember(index) {


    const member =
        members[index];



    memberName.textContent =
        member.name;



    if (member.image) {


        memberImage.src =
            member.image;


    } else {


        memberImage.src =
            NO_IMAGE;


    }


}



// ==========================================
// ルーレット終了
// ==========================================

function finishRoulette() {


    rouletteRunning = false;


    clearTimeout(rouletteTimer);



    lastMemberIndex =
        currentMemberIndex;



    statusText.textContent =
        "選択完了";

        if (typeof rouletteFinished === "function") {

    rouletteFinished();

}



    return members[currentMemberIndex];

}



// ==========================================
// 強制停止
// ==========================================

function stopRoulette() {


    rouletteRunning = false;


    clearTimeout(rouletteTimer);



    statusText.textContent =
        "停止";

}



// ==========================================
// 現在選択されたメンバー取得
// ==========================================

function getSelectedMember() {


    if (currentMemberIndex < 0) {

        return null;

    }


    return members[currentMemberIndex];

}