let table = [];
let imageEnCours = "";
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
let inputImage = document.querySelector('.container-image-form');
let divEnfant = document.querySelector('.form-input-image');
let container = document.querySelector('.container-fields-form')
let erreurImage = false;
let inputPrenom = document.querySelector('#inputPrenom');
let inputNom = document.querySelector('#inputNom');
let inputTelephone = document.querySelector('#inputTelephone');
let inputGroupe = document.querySelector('#inputGroupe');
let inputEmail = document.querySelector('#inputEmail');
let textareaBio = document.querySelector('#textareaBio');
let btnCreer = document.querySelector('.container-button-creer')
let btnReinit = document.querySelector('.container-button-reinit')
let divInputPrenom = document.querySelector("#prenom")
let divInputNom = document.querySelector("#nom")
let divInputTelephone = document.querySelector("#telephone")
let divInputEmail = document.querySelector('#email');
let container_image = document.querySelector('#image');
let inputfile = document.querySelector('#inputfile');
let regexEmail = /^\w+(\.\w+)?@\w+\.[a-z]{2,}\b/i;
let regexNom = /^([a-zéèçàùïêëîA-ZÉÈÇÀÙÏÊËÎ -]){3,50}$/;
let regexTelephone = /^(080|081|082|084|085|089|090|091|097|098|099)([0-9]){7}$/;
let prenomIsOk = false;
let nomIsOk = false;
let emailIsOk = false;
let telephoneIsOk = false;
inputEmail.addEventListener('blur', function () {
    validateInput(divInputEmail, inputEmail, regexEmail, "votre adresse Mail n'est pas valide")
})
function validateInput(divInput, input, regex, errorMesage) {
    let spanAEffacer = divInput.querySelector('span');
    if (!regex.test(input.value.trim())) {
        let spanError = document.createElement('span');
        if (spanAEffacer) {
            clearErrorAfterValidation(divInput, input, spanAEffacer)
            errorOnValidate(divInput, errorMesage, input, spanError)
            return false;
        }
        else {
            errorOnValidate(divInput, errorMesage, input, spanError)
            return false;
        }
    }
    else {
        if (spanAEffacer) {
            clearErrorAfterValidation(divInput, input, spanAEffacer)
        }
        return true;
    }
}
function errorOnValidate(divParent, errorMesage, input, span) {
    span.innerText = errorMesage;
    divParent.appendChild(span);
    input.style.border = "2px solid red";
    span.setAttribute("style", "color:#f00;")
}
function clearErrorAfterValidation(divParent, input, span) {
    divParent.removeChild(span);
    input.style.border = '';
}
function errorOnDropImage(inputImage, erreurImage, span, container, MesageErreur) {
    divEnfant.style.display = "block";
    let image = inputImage.querySelector('img');
    if (image)
        image.parentNode.removeChild(image);
    let spanAEffacer = container.querySelector('span');
    if (spanAEffacer)
        container.removeChild(spanAEffacer);
    inputImage.setAttribute('style', 'border-color:red;');
    span.innerHTML = MesageErreur;
    span.style.color = "red";
    erreurImage = true;
    container.appendChild(span);
    imageEnCours = "";
}
inputPrenom.addEventListener('blur', function () {
    validateInput(divInputPrenom, inputPrenom, regexNom, "Le prenom est invalide, de 3 à 50 caracteres requis")
})
inputNom.addEventListener('blur', function () {
    validateInput(divInputNom, inputNom, regexNom, "Le nom est invalide, de 3 à 50 caracteres requis")
})
inputTelephone.addEventListener('blur', function () {
    validateInput(divInputTelephone, inputTelephone, regexTelephone, "Le numero est invalide! exemple : 0971112233")
})
inputImage.addEventListener('dragover', function (e) {
    e.preventDefault();
    inputImage.setAttribute('style', 'border-color:"";');
    e.dataTransfer.dropEffect = 'copy';
})

inputfile.addEventListener('change', function (e) {
    e.preventDefault();
    const fileList = inputfile.files[0];
    let longeur = fileList.length;
    let file = fileList[longeur - 1];
    divEnfant.style.display = "block";
    let span = document.createElement('span');
    if (erreurImage)
        container.lastChild.remove();
    if (file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg")
        errorOnDropImage(inputImage, erreurImage, span, container_image, "Le format autorisé c'est png et jpg")
    else if (file.size > 5000000)
        errorOnDropImage(inputImage, erreurImage, span, container_image, "La taille autorisé est d'au plus 5Mo")
    else {
        divEnfant.style.display = "none";
        let spanAEffacer = container_image.querySelector('span');
        let imageExistante = inputImage.querySelector('img');
        if (imageExistante)
            imageExistante.parentNode.removeChild(imageExistante)
        if (spanAEffacer)
            container_image.removeChild(spanAEffacer);
        if (!erreurImage)
            inputImage.lastChild.remove;
        afficherImage(inputImage, file);
        erreurImage = false;
    }
})
inputImage.addEventListener('drop', function (e) {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    let longeur = fileList.length;
    let file = fileList[longeur - 1];
    divEnfant.style.display = "block";
    let span = document.createElement('span');
    if (erreurImage)
        container.lastChild.remove();
    if (file.type != "image/png" && file.type != "image/jpg" && file.type != "image/jpeg")
        errorOnDropImage(inputImage, erreurImage, span, container_image, "Le format autorisé c'est png et jpg")
    else if (file.size > 5000000)
        errorOnDropImage(inputImage, erreurImage, span, container_image, "La taille autorisé est d'au plus 5Mo")
    else {
        divEnfant.style.display = "none";
        let spanAEffacer = container_image.querySelector('span');
        let imageExistante = inputImage.querySelector('img');
        if (imageExistante)
            imageExistante.parentNode.removeChild(imageExistante)
        if (spanAEffacer)
            container_image.removeChild(spanAEffacer);
        if (!erreurImage)
            inputImage.lastChild.remove;
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
    readerFile(image, file)
}
function readerFile(image, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        image.src = e.target.result;
    };
    if (reader.DONE)
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
function verifierAvantDeCreer() {
    prenomIsOk = validateInput(divInputPrenom, inputPrenom, regexNom, "Le prenom est invalide, de 3 à 50 caracteres requis")
    nomIsOk = validateInput(divInputNom, inputNom, regexNom, "Le nom est invalide, de 3 à 50 caracteres requis")
    emailIsOk = validateInput(divInputEmail, inputEmail, regexEmail, "votre adresse Mail n'est pas valide")
    telephoneIsOk = validateInput(divInputTelephone, inputTelephone, regexTelephone, "Le numero est invalide! exemple : 0971112233")
    let span = document.createElement('span');
    if (!imageEnCours)
        errorOnDropImage(inputImage, erreurImage, span, container_image, "Veuillez glisser une image")
    if (verifyIfEmailExits(inputEmail.value, table)) {
        errorOnValidate(divInputEmail, "votre adresse e-mail existe deja", inputEmail, span)
        return false;
    }
    else if (verifyIfTelephoneExits(inputTelephone.value, table)) {
        errorOnValidate(divInputTelephone, "votre numéro existe deja", inputTelephone, span)
        return false;
    }
    else if (prenomIsOk && nomIsOk && telephoneIsOk && emailIsOk && imageEnCours)
        return true;
    else
        return false;
}
function verifyIfEmailExits(inputEmail, contacts) {
    if (contacts.length == 0)
        return false;
    else {
        for (const contact of contacts)
            if (contact.email == inputEmail)
                return true;
    }
    return false;
}
function verifyIfTelephoneExits(telephone, contacts) {
    if (contacts.length == 0)
        return false;
    else {
        for (const contact of contacts)
            if (contact.telephone == telephone)
                return true;
    }
    return false;
}
function viewsContact(table) {
    let longueur = table.length;
    let dernierContact = table[longueur - 1];
    let container_oneContact = document.createElement('div');
    container_oneContact.classList = "container-oneContact";
    let container_image_contact = document.createElement('div');
    container_image_contact.classList = "container-image-contact";
    let container_detail_contact = document.createElement('div');
    container_detail_contact.classList = "container-detail-contact";
    let container_entete = document.createElement('div');
    container_entete.classList = "container-entete";
    let identite_oneContact = document.createElement('h5');
    identite_oneContact.classList = "identite-oneContact";
    identite_oneContact.innerHTML = dernierContact.prenom + " - " + dernierContact.nom + " - " + dernierContact.groupe
    let container_icones_oneContact = document.createElement('div');
    container_icones_oneContact.classList = "container-icones-oneContact";
    let aModif = document.createElement('i');
    let linkModifClicked = false;
    aModif.addEventListener('click', function (e) {
        e.preventDefault();
        let btnModif = document.createElement('button');
        btnModif.innerText = "Modifier";
        let divBtn = document.querySelector('.container-button-form');
        btnCreer.style.display="none";
        btnReinit.style.display="none";
        btnModif.classList = "container-button-modifier";
        let btnAnnuler = document.createElement('button');
        btnAnnuler.innerText = "Annuler";
        let btnModifAEffacer = divBtn.querySelector('.container-button-modifier')
        if (!btnModifAEffacer) {
            if (!linkModifClicked) {
                divBtn.appendChild(btnModif)
                divBtn.appendChild(btnAnnuler)
            }
        }
        else {
            if (!linkModifClicked) {
                let btnAnnulerAEffacer = divBtn.querySelector('.container-button-annuler')
                btnModifAEffacer.parentNode.removeChild(btnModifAEffacer);
                btnAnnulerAEffacer.parentNode.removeChild(btnAnnulerAEffacer);
                divBtn.appendChild(btnModif)
                divBtn.appendChild(btnAnnuler)
            }
        }
        btnAnnuler.classList = "container-button-annuler";
        afficherAvantModif(table, longueur - 1)
        linkModifClicked = true;
        btnModif.addEventListener('click', function () {
            let data = modifierTableau(table, longueur - 1)
            identite_oneContact.innerHTML = data.prenom + " - " + data.nom + " - " + data.groupe
            numero_oneContact.innerHTML = data.telephone;
            let image = container_image_contact.querySelector('img');
            if (imageEnCours)
                readerFile(image, imageEnCours)
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
        btnCreer.style.display = 'block';
        btnReinit.style.display = 'block';
        btnModif.style.display = 'none';
        btnAnnuler.style.display = 'none';
        divEnfant.style.display = 'block';
        reinitialiser();
    }
    aModif.classList = "fa fa-user-pen icone-modification"
    let aSuppr = document.createElement('i');
    aSuppr.addEventListener('click', function (e) {
        e.preventDefault();
        let isApproved = confirm("Etes vou sûrs de vouloir Supprimer? La suppression est irreversible!")
        if (isApproved)
            if (supprimer(table, longueur - 1))
                container_oneContact.parentNode.removeChild(container_oneContact);
    })
    aSuppr.classList = "fa fa-trash-o icone-suppression"
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
    container_icones_oneContact.appendChild(aSuppr)
    container_detail_contact.appendChild(numero_oneContact);
    numero_oneContact.innerHTML = dernierContact.telephone;
    container_detail_contact.appendChild(textareaBio_oneContact);
    textareaBio_oneContact.innerHTML = dernierContact.bio;
}
btnCreer.addEventListener('click', function () {
    let checkInputs = verifierAvantDeCreer();
    if (checkInputs) {
        addContact(table);
        viewsContact(table);
        reinitialiser();
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
    if (image)
        image.parentNode.removeChild(image);
    imageEnCours = "";
    prenomIsOk = false;
    nomIsOk = false;
    emailIsOk = false;
    telephoneIsOk = false;
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
    image.classList = 'image-form';
    image.alt = "image à modifier";
    image.src = contact.image;
}
