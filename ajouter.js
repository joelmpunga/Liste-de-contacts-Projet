let table = [];
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
    let longeur = fileList.length-1;
    let file = fileList[longeur];
    const name = file.name;
    const size = file.size;
    const ext = file.type;
    console.log(fileList);
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
        console.log(size);
    }
    else{
        console.log("autorisé");
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
    let style = div.classList;
    image.src = name;
    //image.classList=style;
    image.setAttribute('style','width:50%;height:100%;margin:auto;');
    image.alt="La photo deposée est ici";
    div.appendChild(image);
    console.log("image affiché");
    console.log(style);
}
