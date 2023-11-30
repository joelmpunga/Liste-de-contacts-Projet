const dialog = document.querySelector("dialog");
const modButton = document.querySelector("dialog button");
// const fermerButton = document.querySelector("dialog button");


modButton.addEventListener("click", () => {
  dialog.showModal(modButton);
});


// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

//féntre modale deuxième essaie
let modal=document.querySelector("myModal");
let btn=document.querySelector("myBtn");
let span=document.querySelector("close") [0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}