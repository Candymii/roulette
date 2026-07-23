// メンバー管理画面


// 保存データ読み込み

const savedMembers =
    localStorage.getItem("members");


if(savedMembers){

    members.splice(
        0,
        members.length,
        ...JSON.parse(savedMembers)
    );

}
const memberManagerButton =
    document.getElementById("memberManagerButton");


const memberManagerPanel =
    document.getElementById("memberManagerPanel");


const closeMemberManagerButton =
    document.getElementById("closeMemberManagerButton");


const memberList =
    document.getElementById("memberList");




// 開く

memberManagerButton.addEventListener(
    "click",
    () => {


        settingsPanel.style.display = "none";


        memberManagerPanel.style.display = "block";


        displayMembers();


    }
);




// 閉じる

closeMemberManagerButton.addEventListener(
    "click",
    () => {


        memberManagerPanel.style.display = "none";


        settingsPanel.style.display = "block";


    }
);




// 一覧表示

function displayMembers(){


    memberList.innerHTML = "";


    members.forEach((member)=>{


        const div =
            document.createElement("div");


        div.className =
            "member-item";


        div.innerHTML = `

            ${member.name}

            <button
            onclick="openMemberEdit(${member.id})">

            編集

            </button>

        `;


        memberList.appendChild(div);


    });


}



let editTargetMember = null;



function openMemberEdit(id){

    // =========================================
// メンバー編集 保存
// =========================================


const saveMemberEditButton =
    document.getElementById(
        "saveMemberEditButton"
    );



saveMemberEditButton.addEventListener(
    "click",
    () => {


        if(!editTargetMember){

            return;

        }



        // 名前更新

        editTargetMember.name =
            document.getElementById(
                "editMemberName"
            ).value;



        // 画像更新

        editTargetMember.image =
            document.getElementById(
                "editMemberImage"
            ).src;

// 保存

localStorage.setItem(
    "members",
    JSON.stringify(members)
);

        // 編集画面を閉じる

        document.getElementById(
            "memberEditPanel"
        ).style.display="none";



        document.getElementById(
            "memberList"
        ).style.display="block";



        // 一覧更新

        displayMembers();


    }
);

// =========================================
// 編集キャンセル
// =========================================


const cancelMemberEditButton =
    document.getElementById(
        "cancelMemberEditButton"
    );



cancelMemberEditButton.addEventListener(
    "click",
    () => {


        document.getElementById(
            "memberEditPanel"
        ).style.display="none";


        document.getElementById(
            "memberList"
        ).style.display="block";


    }
);

    editTargetMember =
        members.find(
            member => member.id === id
        );


    document.getElementById(
        "memberList"
    ).style.display="none";


    document.getElementById(
        "memberEditPanel"
    ).style.display="block";



    document.getElementById(
        "editMemberName"
    ).value =
        editTargetMember.name;


    document.getElementById(
        "editMemberImage"
    ).src =
        editTargetMember.image;


}
// =========================================
// 画像変更
// =========================================


const imageUpload =
    document.getElementById("imageUpload");



imageUpload.addEventListener(
    "change",
    function(event){


        const file =
            event.target.files[0];


        if(!file){

            return;

        }



        const reader =
            new FileReader();



        reader.onload =
            function(e){


                document.getElementById(
                    "editMemberImage"
                ).src =
                    e.target.result;


            };



        reader.readAsDataURL(file);


    }
);
