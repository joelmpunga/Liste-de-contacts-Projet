let form = document.querySelector("#form");
const prenom = document.querySelector("#inputPrenom");
const nom = document.querySelector("#inputNom");
const telephone = document.querySelector("#inputTelephone");

//fonction prenom

   prenom.addEventListener('blur',function (e){
  
   if (!prenom.value.match(/^([a-zA-Z]){3,50}$/)){
      let mySpan = document.createElement("span");
      let containerInput = document.querySelector(".container-fields-form")
    mySpan.innerHTML="Invalide";
    mySpan.style.color='red';
    prenom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     prenom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        prenom.style.border=''

    
     })
    }
   })

   //fonction nom
   nom.addEventListener('blur',function (e){
  
   if (!nom.value.match(/^([a-zA-Z]){3,50}$/)){
      let mySpan = document.createElement("span");
      let containerInput = document.querySelector(".container-fields-form")
    mySpan.innerHTML="Invalide";
    mySpan.style.color='red';
    nom.style.border='1px solid red';
     containerInput.appendChild(mySpan)
     nom.addEventListener('focus',function(e){
        mySpan.parentNode.removeChild(mySpan)
        nom.style.border=''

    
     })
   }
    })
 

//fonction telephone

telephone.addEventListener('blur', function (e) {
   if(!telephone.value.match(/^(081|082|084|089|090|091|093|097|099)([0-9]){7}$/)){
      let mySpan = document.createElement("span");
      let containerInput = document.querySelector(".container-fields-form")

      mySpan.innerHTML="Invalide";
      mySpan.style.color='red';
      telephone.style.border='1px solid red';
       containerInput.appendChild(mySpan)
       telephone.addEventListener('focus',function(e){
          mySpan.parentNode.removeChild(mySpan)
          telephone.style.border=''
   })
   
} 
   
 })

