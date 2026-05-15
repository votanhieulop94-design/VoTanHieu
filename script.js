const data =
JSON.parse(
    localStorage.getItem(
        "portfolioData"
    )
);

if(data){

    if(data.name){

        document.getElementById(
            "name"
        ).innerText = data.name;

    }

    if(data.nickname){

        document.getElementById(
            "nickname"
        ).innerText = data.nickname;

    }

    if(data.tag){

        document.getElementById(
            "tag"
        ).innerText = data.tag;

    }

    if(data.intro){

        document.getElementById(
            "intro"
        ).innerText = data.intro;

    }

    if(data.facebook){

        document.getElementById(
            "facebook"
        ).innerText = data.facebook;

    }

    if(data.github){

        document.getElementById(
            "github"
        ).innerText = data.github;

    }

    if(data.email){

        document.getElementById(
            "email"
        ).innerText = data.email;

    }

    if(data.avatar){

        document.getElementById(
            "avatar"
        ).src = data.avatar;

    }

}