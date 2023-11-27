let table = [
    {
        prenom: "Joel",
        nom: "MPUNGA",
        telephone: "0842672114",
        groupe:"L1",
        email: "joel@gmail.com",
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam repudiandae voluptatem officia voluptate excepturi eligendi mollitia et. Adipisci qui tenetur ipsam perferendis laborum, tempora assumenda totam quidem consectetur optio reiciendis sint expedita aspernatur, officia commodi enim veniam temporibus ab, fuga alias? Aspernatur eius nesciunt aliquid earum odio dolorem nobis. ",
        image:"user-austin-ortiz-270x270.jpg",
    },
];
let imageEnCours="";
function addContact(table){
    const contact = {
        prenom: prenom,
        nom: nom,
        telephone: telephone,
        groupe:groupe,
        email: email,
        bio:bio,
        image:image,
    }
    table.push(contact);
}
let inputImage = document.querySelector('.container-image-form');
let divEnfant = document.querySelector('.form-input-image');
let container = document.querySelector('.container-fields-form')
inputImage.dragglable=true;
let erreurImage = false;


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
    const name = file.name;
    const size = file.size;
    const ext = file.type;
    divEnfant.style.display="block";
    let span = document.createElement('span');
    if(erreurImage){
        container.lastChild.remove();
    }
    if(ext!="image/png" && ext!="image/jpg" && ext!="image/jpeg"){
        inputImage.setAttribute('style','border-color:red;');
        //cette ligne ne doit s'executer si l'erreur est la
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
        container.appendChild(span);
    }
    else{
        divEnfant.style.display="none";
        if(!erreurImage){
            container.lastChild.remove;
            inputImage.lastChild.remove();
        }
        afficherImage(inputImage,name);
        imageEnCours=name;
        erreurImage = false;
    }
})

function afficherImage(div,name){
    let image = document.createElement('img');
    image.src = name;
    image.setAttribute('style','width:50%;height:100%;margin:auto;');
    image.alt="La photo deposée est ici";
    div.appendChild(image);
}


function isEmailExits(email,contacts){
    if(contacts.length==0){
        return false;
    }
    else{
        for(const contact of contacts){
            if(contact.email==email){
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
    faModif.classList="fa fa-user"

    let aSuppr = document.createElement('a');
    aSuppr.href=""
    aSuppr.addEventListener('click',function(){
        //supprimer(longueur-1)
    })

    let faSuppr = document.createElement('i');
    faSuppr.classList="fa fa-trash-o"

    let numero_oneContact = document.createElement('div');
    numero_oneContact.classList="numero-oneContact"

    let bio_oneContact = document.createElement('div');
    bio_oneContact.classList="bio-oneContact"

    let contenaire_principale = document.querySelector('.container-cont');
    contenaire_principale.appendChild(container_oneContact);
    container_oneContact.appendChild(container_image_contact);
    afficherImage(container_image_contact,dernierContact.image)
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
    container_detail_contact.appendChild(bio_oneContact);
    bio_oneContact.innerHTML=dernierContact.bio;
}

// let rep=isEmailExits("joel@gmail.com",table);
// alert(rep);

viewsContact(table)

function reinitialiser(){
    prenom.value="";
    nom.value=""
    telephone.value=""
    groupe.value=""
    telephone.value=""
    email.value="";
}
