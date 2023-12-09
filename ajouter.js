alert("donnée inserée!");
let table = [];
let imageEnCours;
function addContact(table) {
    let nomImage;
    const reader = new FileReader();
    reader.onload = function (e) {
        nomImage = e.target.result;
    };
    reader.readAsDataURL(imageEnCours);
    if (reader.DONE) {
        alert("donnée inserée!");
        const contact = {
            prenom: inputPrenom.value,
            nom: inputNom.value,
            telephone: inputTelephone.value,
            groupe: inputGroupe.value,
            email: inputEmail.value,
            bio: textareaBio.value,
            image: nomImage,
        }
        table.push(contact);
    }
}
alert("donnée inserée!");

let inputImage = document.querySelector('.container-image-form');
let divEnfant = document.querySelector('.form-input-image');
let container = document.querySelector('.container-fields-form')
inputImage.dragglable = true;
let erreurImage = false;
let inputPrenom = document.querySelector('#inputPrenom');
let inputNom = document.querySelector('#inputNom');
let inputTelephone = document.querySelector('#inputTelephone');
let inputGroupe = document.querySelector('#inputGroupe');
let inputEmail = document.querySelector('#inputEmail');
let textareaBio = document.querySelector('#textareaBio');
let btnCreer = document.querySelector('.container-button-creer')
let btnReinit = document.querySelector('.container-button-reinit')
let divinputPrenom = document.querySelector("#prenom")
let divinputNom = document.querySelector("#nom")
let divinputTelephone = document.querySelector("#telephone")
let regexEmail = /^\w+(\.\w+)?@\w+\.[a-z]{2,}\b/i;
let regexPrenom = /^([a-zéèçàùïêA-ZÉÈÇÀÙÏÊ- ]){3,50}$/;
let regexNom = /^([a-zéèçàùïêA-ZÉÈÇÀÙÏ- ]){3,50}$/;
alert("donnée inserée!");

spanError = document.createElement('span');
let prenomIsOk=false;
let nomIsOk=false;
let emailIsOk=false;
let telephoneIsOk=false;
inputEmail.addEventListener('blur', function () {
    let divinputEmail = document.querySelector('#email');
    validateInput(divinputEmail,inputEmail,regexEmail,"votre adresse Mail n'est pas valide")
})

function validateInput(divInput,input,regex,errorMesage){
    if (!regex.test(input.value)) {
        errorOnValidate(divInput,errorMesage, input, spanError)
        return false;
    }
    else{
        clearErrorAfterValidation(divInput, input,spanError)
        return true;
    }
}

function errorOnValidate(divParent, errorMesage, input, span) {
    span.innerText = errorMesage;
    divParent.appendChild(span);
    input.style.border = "2px solid red";
    span.setAttribute("style", "color:#f00;")
}
function clearErrorAfterValidation(divParent,input, span) {
    divParent.removeChild(span);
    input.style.border='';
}

inputPrenom.addEventListener('blur', function () {
    prenomIsOk=validateInput(divinputPrenom,inputPrenom,regexPrenom,"Le prenom est invalide, de 3 à 50 caracteres requis")
})

//fonction nom
inputNom.addEventListener('blur', function () {
    nomIsOk=validateInput(divinputNom,inputNom,regexNom,"Le nom est invalide, de 3 à 50 caracteres requis")
})
inputTelephone.addEventListener('blur', function () {
    let regexTelephone = /^(081|082|084|089|090|091|093|097|099)([0-9]){7}$/;
    telephoneIsOk=validateInput(divinputTelephone,inputTelephone,regexTelephone,"Le numero est invalide! exemple : 0971112233")
})
alert("donnée inserée!");

inputImage.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    inputImage.setAttribute('style', 'border-color:"";');
    e.dataTransfer.dropEffect = 'copy';
})
inputImage.addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    let longeur = fileList.length;
    let file = fileList[longeur - 1];
    const size = file.size;
    const ext = file.type;
    divEnfant.style.display = "block";
    let span = document.createElement('span');
    if (erreurImage) {
        container.lastChild.remove();
    }
    if (ext != "image/png" && ext != "image/jpg" && ext != "image/jpeg") {
        inputImage.setAttribute('style', 'border-color:red;');
        if (!erreurImage) {
            inputImage.lastChild.remove();
        }
        span.innerHTML = "Le format autorisé c'est png et jpg";
        span.style.color = "red";
        erreurImage = true;
        container.appendChild(span);
    }
    else if (size > 5000000) {
        inputImage.setAttribute('style', 'border-color:red;');
        if (!erreurImage) {
            inputImage.lastChild.remove();
        }
        span.innerHTML = "La taille autorisé est d'au plus 5Mo";
        span.style.color = "red";
        erreurImage = true;
        container.appendChild(span);
    }
    else {
        divEnfant.style.display = "none";
        if (!erreurImage) {
            container.lastChild.remove;
            inputImage.lastChild.remove();
        }
        afficherImage(inputImage, file);
        erreurImage = false;
    }
})
function afficherImage(div, file) {
    let image = document.createElement('img');
    image.classList = 'image-form';
    image.id = "image_formulaire";
    image.alt = "La photo deposée est ici";
    div.appendChild(image);
    const reader = new FileReader();
    reader.onload = (e) => {
        image.src = e.target.result;
    };
    imageEnCours = file;
    reader.readAsDataURL(file);
}
function afficherImageContact(div, name) {
    let image = document.createElement('img');
    image.setAttribute('style', 'width:180px;height:180px;margin:auto;border-radius:50%');
    image.alt = "La photo deposée est ici";
    div.appendChild(image);
    image.src = name;
}
function verifierAvantDeCreer(prenomIsOk, nomIsOk, telephoneIsOk, emailIsOk, imageIsOk) {
    alert(prenomIsOk)
    // alert(nomIsOk)
    // alert(telephoneIsOk)
    // alert(emailIsOk)
    // alert(imageIsOk)

    if (prenomIsOk && nomIsOk && telephoneIsOk && emailIsOk && imageIsOk) {
        return true;
    }
    else {
        return false;
    }
}
function isinputEmailExits(inputEmail, contacts) {
    if (contacts.length == 0) {
        return false;
    }
    else {
        for (const contact of contacts) {
            if (contact.inputEmail == inputEmail) {
                return true;
            }
        }
    }
    return false;
}
function isTelephoneExits(telephone, contacts) {
    if (contacts.length == 0) {
        return false;
    }
    else {
        for (const contact of contacts) {
            if (contact.telephone == telephone) {
                return true;
            }
        }
    }
    return false;
}
function viewsContact(table) {
    let longueur = table.length;
    if (longueur == 0) {
        alert('pas de donnée')
        return false;
    }
    let dernierContact = table[longueur - 1];
    let container_oneContact = document.createElement('div');
    container_oneContact.classList = "container-oneContact";
    let container_image_contact = document.createElement('div');
    container_image_contact.classList = "container-image-contact";
    let container_detail_contact = document.createElement('div');
    container_detail_contact.classList = "container-detail-contact";
    let container_entete = document.createElement('div');
    container_entete.classList = "container-entete";
    let identite_oneContact = document.createElement('h4');
    identite_oneContact.classList = "identite-oneContact";
    identite_oneContact.innerHTML = dernierContact.prenom + " - " + dernierContact.nom + " - " + dernierContact.groupe
    let container_icones_oneContact = document.createElement('div');
    container_icones_oneContact.classList = "container-icones-oneContact";
    let aModif = document.createElement('a');
    aModif.href = "#"
    let linkModifClicked = false;
    aModif.addEventListener('click', function (e) {
        e.preventDefault();
        let btnModif = document.createElement('button');
        btnModif.innerText = "Modifier";
        let divBtn = document.querySelector('.container-button-form');
        btnCreer.setAttribute('style', 'display:none;');
        btnReinit.setAttribute('style', 'display:none;');
        btnModif.classList = "container-button-creer";
        let btnAnnuler = document.createElement('button');
        btnAnnuler.innerText = "Annuler";
        if (!linkModifClicked) {
            divBtn.prepend(btnModif)
            divBtn.appendChild(btnAnnuler)
        }
        btnAnnuler.classList = "container-button-reinit";
        afficherAvantModif(table, longueur - 1)
        linkModifClicked = true;
        btnModif.addEventListener('click', function () {
            let data = modifierTableau(table, longueur - 1)
            identite_oneContact.innerHTML = data.prenom + " - " + data.nom + " - " + data.groupe
            numero_oneContact.innerHTML = data.telephone;
            //afficherImageContact(container_image_contact,data.image)
            textareaBio_oneContact.innerHTML = data.bio;
            annuler(btnModif, btnAnnuler);
            btnCreer.setAttribute('style', 'display:block;');
            btnModif.setAttribute('style', 'display:none;');
        })
        btnAnnuler.addEventListener('click', function () {
            annuler(btnModif, btnAnnuler)
        }
        );
    })
    function annuler(btnModif, btnAnnuler) {
        linkModifClicked = false;
        btnCreer.setAttribute('style', 'display:block;');
        btnReinit.setAttribute('style', 'display:block;');
        btnModif.style.display = 'none';
        btnAnnuler.style.display = 'none';
        divEnfant.style.display = 'block';
        reinitialiser();
    }

    let faModif = document.createElement('i');
    faModif.classList = "fa fa-user-pen icone-modification"
    let aSuppr = document.createElement('a');
    aSuppr.href = ""
    aSuppr.addEventListener('click', function (e) {
        e.preventDefault();
        let isApproved = confirm("Etes vou sûrs de vouloir Supprimer? La suppression est irreversible!")
        if (isApproved) {
            if (supprimer(table, longueur - 1)) {
                container_oneContact.parentNode.removeChild(container_oneContact);
            }
        }
    })
    let faSuppr = document.createElement('i');
    faSuppr.classList = "fa fa-trash-o icone-suppression"
    let numero_oneContact = document.createElement('div');
    numero_oneContact.classList = "numero-oneContact"
    let textareaBio_oneContact = document.createElement('div');
    textareaBio_oneContact.classList = "textareaBio-oneContact"
    let contenaire_principale = document.querySelector('.container-cont');
    contenaire_principale.appendChild(container_oneContact);
    container_oneContact.appendChild(container_image_contact);
    afficherImageContact(container_image_contact, dernierContact.image)
    container_oneContact.appendChild(container_detail_contact);
    container_detail_contact.appendChild(container_entete);
    container_entete.appendChild(identite_oneContact);
    container_entete.appendChild(container_icones_oneContact);
    container_icones_oneContact.appendChild(aModif)
    aModif.appendChild(faModif)
    container_icones_oneContact.appendChild(aSuppr)
    aSuppr.appendChild(faSuppr)
    container_detail_contact.appendChild(numero_oneContact);
    numero_oneContact.innerHTML = dernierContact.telephone;
    container_detail_contact.appendChild(textareaBio_oneContact);
    textareaBio_oneContact.innerHTML = dernierContact.bio;
}
btnCreer.addEventListener('click', function () {
    let checkInputs = verifierAvantDeCreer(prenomIsOk,nomIsOk,telephoneIsOk,emailIsOk,imageEnCours);
    if(checkInputs){
    addContact(table);
    viewsContact(table);
    reinitialiser();
    }
    else{
    alert("La création a echoué! veillez remplir les champ et/ou la photo");
    }
})
btnReinit.addEventListener('click', reinitialiser)
function reinitialiser() {
    inputPrenom.value = "";
    inputNom.value = "";
    inputTelephone.value = "";
    inputGroupe.value = "";
    inputTelephone.value = "";
    inputEmail.value = "";
    textareaBio.value = "";
    divEnfant.style.display = "block";
    let image = document.querySelector('#image_formulaire');
    if (image) {
        image.parentNode.removeChild(image);
    }
    imageEnCours="";
    prenomIsOk=false;
    nomIsOk=false;
    emailIsOk=false;
    telephoneIsOk=false;
}
function modifierTableau(table, index) {
    table[index].prenom = inputPrenom.value;
    table[index].nom = inputNom.value;
    table[index].telephone = inputTelephone.value;
    table[index].groupe = inputGroupe.value;
    table[index].email = inputEmail.value;
    table[index].bio = textareaBio.value;
    table[index].image = imageEnCours;
    return table[index];
}
function supprimer(table, index) {
    if (table.length > 0) {
        table.splice(index, 1);
        return true;
    }
}
function afficherAvantModif(contacts, index) {
    let image = document.createElement('img');
    let contact = contacts[index];
    inputPrenom.value = contact.prenom;
    inputNom.value = contact.nom;
    inputTelephone.value = contact.telephone;
    inputGroupe.value = contact.groupe;
    inputEmail.value = contact.email;
    textareaBio.value = contact.bio;
    //divEnfant.style.display='none';
    image.classList = 'image-form';
    image.alt = "image à modifier";
    image.src = contact.image;
    //inputImage.appendChild(image)
}
