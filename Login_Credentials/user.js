function signup() {
    let Username = document.getElementById('reg-email').value
    let Password = document.getElementById('reg.pass').value

    let dat = {
        Username,
        Password
    };

    fetch("/mmo/signup", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*"
            },
            method: "POST",
            body: JSON.stringify(dat)
        })
        .then(responseJSON => responseJSON.json())
        .then(body => {
            console.log(body)
        })
}

function login() {
    let Username = document.getElementById('reg-email').value
    let Password = document.getElementById('reg.pass').value

    let dat = {
        Username,
        Password
    };

    fetch("/mmo/login", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*"
            },
            method: "POST",
            body: JSON.stringify(dat)
        })
        .then(responseJSON => responseJSON.json())
        .then(body => {
            console.log(body)
        })
}