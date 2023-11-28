let divEmail = document.querySelector('#cont-email');
let email = document.getElementById("email");
email.addEventListener('blur', function () {
    let regexEmail = /^\w+(\.\w+)?@\w+\.[a-z]{2,}\b/i;
    let erreur = document.createElement('span');
    let valueEmail = email.value;
    erreur.setAttribute("style", "color:#f00;margin-bottom:300px;")
    if (!regexEmail.test(valueEmail)) {
        erreur.innerText = "votre adresse Mail n'est pas valide";
        divEmail.appendChild(erreur);
        // email.setAttribute("style","border:2px red solid;");
        email.style.border = "2px solid red";

    }
    email.addEventListener('focus', function () {
        email.style.border = "";
        erreur.innerText = "";
    })
})


