const PASSWORD = "123456";

function loginAdmin(){

    const password =
    document.getElementById(
        "password"
    ).value;

    if(password === PASSWORD){

        document.getElementById(
            "loginBox"
        ).style.display = "none";

        document.getElementById(
            "adminPanel"
        ).style.display = "block";

        loadCurrentData();

    }else{

        alert("Sai mật khẩu");

    }

}

function logoutAdmin(){

    document.getElementById(
        "loginBox"
    ).style.display = "block";

    document.getElementById(
        "adminPanel"
    ).style.display = "none";

}

function previewAvatar(event){

    const file =
    event.target.files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload =
        function(e){

            document.getElementById(
                "avatarPreview"
            ).src = e.target.result;

        }

        reader.readAsDataURL(file);

    }

}

function saveContent(){

    const file =
    document.getElementById(
        "avatarInput"
    ).files[0];

    const reader =
    new FileReader();

    reader.onload =
    function(){

        const data = {

            name:
            document.getElementById(
                "nameInput"
            ).value,

            nickname:
            document.getElementById(
                "nicknameInput"
            ).value,

            tag:
            document.getElementById(
                "tagInput"
            ).value,

            intro:
            document.getElementById(
                "introInput"
            ).value,

            facebook:
            document.getElementById(
                "facebookInput"
            ).value,

            github:
            document.getElementById(
                "githubInput"
            ).value,

            email:
            document.getElementById(
                "emailInput"
            ).value,

            avatar:
            file
            ? reader.result
            : localStorage.getItem(
                "currentAvatar"
            )

        };

        localStorage.setItem(
            "portfolioData",
            JSON.stringify(data)
        );

        localStorage.setItem(
            "currentAvatar",
            data.avatar
        );

        alert("Đã lưu!");

    }

    if(file){

        reader.readAsDataURL(file);

    }else{

        reader.onload();

    }

}

function loadCurrentData(){

    const data =
    JSON.parse(
        localStorage.getItem(
            "portfolioData"
        )
    );

    if(!data) return;

    document.getElementById(
        "nameInput"
    ).value = data.name || "";

    document.getElementById(
        "nicknameInput"
    ).value = data.nickname || "";

    document.getElementById(
        "tagInput"
    ).value = data.tag || "";

    document.getElementById(
        "introInput"
    ).value = data.intro || "";

    document.getElementById(
        "facebookInput"
    ).value = data.facebook || "";

    document.getElementById(
        "githubInput"
    ).value = data.github || "";

    document.getElementById(
        "emailInput"
    ).value = data.email || "";

    if(data.avatar){

        document.getElementById(
            "avatarPreview"
        ).src = data.avatar;

    }

}