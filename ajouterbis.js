let table = [
    {
        prenom: "Joel",
        nom: "MPUNGA",
        telephone: "0842672114",
        groupe:"L1",
        email: "joel@gmail.com",
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam repudiandae voluptatem officia voluptate excepturi eligendi mollitia et. Adipisci qui tenetur ipsam perferendis laborum, tempora assumenda totam quidem consectetur optio reiciendis sint expedita aspernatur, officia commodi enim veniam temporibus ab, fuga alias? Aspernatur eius nesciunt aliquid earum odio dolorem nobis. ",
        image:"joel.jpg",
    },
];
let imageEnCours="";
function addContact(table){
    const contact = {
        prenom: inputPrenom,
        nom: inputNom,
        telephone: inputTelephone,
        groupe:inputGroupe,
        email: inputEmail,
        bio:textareaBio,
        image:image,
    }
    table.push(contact);
}
let inputImage = document.querySelector('.container-image-form');
let divEnfant = document.querySelector('.form-input-image');
let container = document.querySelector('.container-fields-form')
inputImage.dragglable=true;
let erreurImage = false;

let inputPrenom = document.querySelector('#inputPrenom');
let inputNom = document.querySelector('#inputNom');
let inputTelephone = document.querySelector('#inputTelephone');
let inputGroupe = document.querySelector('#inputGroupe');
let inputEmail = document.querySelector('#inputEmail');
let textareaBio = document.querySelector('#textareaBio');
let btnReinit = document.querySelector('.container-button-reinit');


btnReinit.addEventListener('click',function(event){
    reinitialiser();
})


let divinputEmail = document.querySelector('#cont-email');
inputEmail.addEventListener('blur', function () {
    let regexinputEmail = /^\w+(\.\w+)?@\w+\.[a-z]{2,}\b/i;
    let erreur = document.createElement('span');
    let valueinputEmail = inputEmail.value;
    erreur.setAttribute("style", "color:#f00;margin-bottom:300px;")
    if (!regexinputEmail.test(valueinputEmail)) {
        erreur.innerText = "votre adresse Mail n'est pas valide";
        divinputEmail.appendChild(erreur);
        // inputEmail.setAttribute("style","border:2px red solid;");
        inputEmail.style.border = "2px solid red";

    }
    inputEmail.addEventListener('focus', function () {
        inputEmail.style.border = "";
        erreur.innerText = "";
    })
})

inputImage.addEventListener('dragover',function(e){
    e.stopPropagation();
    e.preventDefault();
    inputImage.setAttribute('style','border-color:"";');
    e.dataTransfer.dropEffect='copy';
})

inputImage.addEventListener('drop',function(e){
    e.stopPropagation();
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    let longeur = fileList.length;
    let file = fileList[longeur-1];
    const size = file.size;
    const ext = file.type;
    divEnfant.style.display="block";
    let span = document.createElement('span');

    if(erreurImage){
        container.lastChild.remove();
    }
    if(ext!="image/png" && ext!="image/jpg" && ext!="image/jpeg"){
        inputImage.setAttribute('style','border-color:red;');
        //cette ligne ne doit s'executer si l'erreur existe
        if(!erreurImage){
            inputImage.lastChild.remove();
        }
        span.innerHTML= "Le format autorisé c'est png et jpg";
        span.style.color = "red";
        erreurImage=true;
        container.appendChild(span);
    }
    else if(size>5000000){
        inputImage.setAttribute('style','border-color:red;');
        //cette ligne ne doit s'executer si l'erreur est la
        if(!erreurImage){
            inputImage.lastChild.remove();
        }
        span.innerHTML= "La taille de l'image doit etre inferieur à 5MB";
        span.style.color = "red";
        erreurImage=true;
        inputImage.appendChild(span);
    }
    else{
        divEnfant.style.display="none";
        if(!erreurImage){
            container.lastChild.remove;
            inputImage.lastChild.remove();
        }
        let nameImg =afficherImage(inputImage,file);
        imageEnCours=nameImg;
        erreurImage = false;
    }
})

function afficherImage(div,file){
    let image = document.createElement('img');
    let nameImage ="";
    image.setAttribute('style','width:50%;height:100%;margin:auto;');
    image.alt="La photo deposée est ici";
    div.appendChild(image);
    const reader = new FileReader();
    reader.onload = (e) => {
      image.src = e.target.result;
      nameImage = image.src;
    };
    reader.readAsDataURL(file);
    return nameImage;
}

function afficherImageContact(div,name){
    let image = document.createElement('img');
    image.setAttribute('style','width:7rem;height:7rem;margin:auto;border-radius:50%');
    image.alt="La photo deposée est ici";
    div.appendChild(image);
    image.src = name;
}


function isinputEmailExits(inputEmail,contacts){
    if(contacts.length==0){
        return false;
    }
    else{
        for(const contact of contacts){
            if(contact.inputEmail==inputEmail){
                return true;
            }
        }
    }
    return false;
}

function isinputTelephoneExits(inputTelephone,contacts){
    if(contacts.length==0){
        return false;
    }
    else{
        for(const contact of contacts){
            if(contact.inputTelephone==inputTelephone){
                return true;
            }
        }
    }
    return false;
}

function viewsContact(table){
    let longueur = table.length;
    let dernierContact = table[longueur-1];
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
    identite_oneContact.innerHTML = dernierContact.prenom + " - " +dernierContact.nom+ " - " +dernierContact.groupe
    let container_icones_oneContact = document.createElement('div');
    container_icones_oneContact.classList="container-icones-oneContact"
    let aModif = document.createElement('a');
    aModif.href=""
    aModif.addEventListener('click',function(){
        //afficherAvantModif(longueur-1)
    })

    let faModif = document.createElement('i');
    faModif.classList="fa fa-user-pen icone-modification"

    let aSuppr = document.createElement('a');
    aSuppr.href=""
    aSuppr.addEventListener('click',function(){
        //supprimer(longueur-1)
    })

    let faSuppr = document.createElement('i');
    faSuppr.classList="fa fa-trash-o icone-suppression"

    let numero_oneContact = document.createElement('div');
    numero_oneContact.classList="numero-oneContact"

    let textareaBio_oneContact = document.createElement('div');
    textareaBio_oneContact.classList="textareaBio-oneContact"

    let contenaire_principale = document.querySelector('.container-cont');
    contenaire_principale.appendChild(container_oneContact);
    container_oneContact.appendChild(container_image_contact);
    afficherImageContact(container_image_contact,dernierContact.image)
    container_oneContact.appendChild(container_detail_contact);
    container_detail_contact.appendChild(container_entete);
    container_entete.appendChild(identite_oneContact);
    container_entete.appendChild(container_icones_oneContact);
    container_icones_oneContact.appendChild(aModif)
    aModif.appendChild(faModif)
    container_icones_oneContact.appendChild(aSuppr)
    aSuppr.appendChild(faSuppr)
    container_detail_contact.appendChild(numero_oneContact);
    numero_oneContact.innerHTML=dernierContact.telephone;
    container_detail_contact.appendChild(textareaBio_oneContact);
    textareaBio_oneContact.innerHTML=dernierContact.bio;
}

//let rep=isinputEmailExits("joel@gmail.com",table);
//alert(rep);

viewsContact(table)

function reinitialiser(){
    inputPrenom.value="";
    inputNom.value="";
    inputTelephone.value="";
    inputGroupe.value="";
    inputEmail.value="";
    textareaBio.innerHTML=""
    image.innerHTML="";
}
function afficherAvantModif(contacts,index){
    let contact = contacts[index];
    inputPrenom.value=contact.prenom;
    inputNom.value=contact.nom;
    inputTelephone.value=contact.telephone;
    inputGroupe.value=contact.groupe;
    inputEmail.value=contact.email;
    textareaBio.innerHTML=contact.bio;
}
afficherAvantModif(table,0);
