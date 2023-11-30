let form = document.querySelector("#form");
const prenom = document.querySelector("#inputPrenom");
const nom = document.querySelector("#inputNom");
const telephone = document.querySelector("#inputTelephone");

//Evenements prenom

prenom.addEventListener('blur',function (e){
    e.preventDefault();

    form_verify_prenom();
})

// fonctions

function form_verify_prenom(){
   //obtenir toutes les valeurs des inputs
   let prenomLength = prenom.value.length;
   const nomValue = nom.value.length;
   const telephoneValue = telephone.value.length;
  let mySpan = document.createElement("span");
  let containerInput = document.querySelector(".container-fields-form")
  
   if (prenomLength===0){
    mySpan.innerHTML="Veuillez insérer votre prenom";
    mySpan.style.color='red';
    prenom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     prenom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        prenom.style.border=''

    
     })
    }
    else if(prenomLength<3){
        mySpan.innerHTML="Veuillez siasir plus de 3 caractères";
        mySpan.style.color='red';
        prenom.style.border='1px solid red';
         containerInput.appendChild(mySpan)
         prenom.addEventListener('focus',function(e){
            mySpan.parentNode.removeChild(mySpan)
            prenom.style.border=''
    
    })
    }
    else if(prenomLength>50){
        mySpan.innerHTML="Veuillez saisir moins de 50 caractères";
        mySpan.style.color='red';
        prenom.style.border='1px solid red';
         containerInput.appendChild(mySpan)
         prenom.addEventListener('focus',function(e){
            mySpan.parentNode.removeChild(mySpan)
            prenom.style.border=''
    
    })
    
    }
    

}

//Evenements nom

nom.addEventListener('blur',function (e){
    e.preventDefault();

    form_verify_nom();
})

// fonctions

function form_verify_nom(){
   //obtenir toutes les valeurs des inputs
   let prenomValue = prenom.value.length;
   let nomLength = nom.value.length;
   const telephoneValue = telephone.value.length;
  let mySpan = document.createElement("span");
  let containerInput = document.querySelector(".container-fields-form")
  
   if (nomLength===0){
    mySpan.innerHTML="Veuillez insérer votre nom";
    mySpan.style.color='red';
    nom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     nom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        nom.style.border=''

    
     })
}
else if(nomLength<3){
    mySpan.innerHTML="Veuillez siasir plus de 3 caractères";
    mySpan.style.color='red';
    nom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     nom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        nom.style.border=''

    
     })

}
else if(nomLength>50){
    mySpan.innerHTML="Veuillez saisir moins de 50 caractères";
    mySpan.style.color='red';
    nom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     nom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        nom.style.border=''

    
     })

}

}

