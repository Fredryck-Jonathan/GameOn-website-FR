function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*
*Récuperation des éléments du DOM
*/
const modalbg = document.querySelector(".bground");
const modalbgValidated = document.querySelector(".bground-validated");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const modalValidatedCloseBtn = document.querySelectorAll(".close-validated");
/*
*launch modal event
*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
/*
*launch modal form
*/
function launchModal() {
  modalbg.style.display = "block";
}
/*
*close modals event
*/
modalCloseBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));
modalValidatedCloseBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModalValidated));
/*
*close modals Fonction
*/
function closeModal() {
  modalbg.style.display = "none";
}
function closeModalValidated() {
  modalbgValidated.style.display = "none";
}
/** 
*Cette fonction permet d'initier les fonctions de vérification des valeurs des inputs, une fois le bouton submit activer, si les vérifications sont valides affiche la module de validation d'inscriptions.
*/
function validate(event) {
  event.preventDefault();
  const allErrorMessage = document.querySelectorAll('.formData[data-error-visible="true"]');
  for (let ErrorMessage of allErrorMessage) {
    ErrorMessage.setAttribute('data-error-visible','false')
  }
  if (verificationFirstName() && verificationLastName() && verificationEmail() && verificationBirthdate() && verificationNumberOfCompetition() && verificationWishTournament() && verificationConditionOfUtilisation()) {
    modalbg.style.display = "none";
    modalbgValidated.style.display = "flex";
    document.querySelector('form').reset();
  } else {
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Prénom, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationFirstName(){ 
  const inputFirstName = document.getElementById("first");
  const regex = /^[^%$€"'~*+.;:!?, <>"#°=+£¤&²{}[\]`@()_|\/[\\^¨§µ\d]{2,}$/g;
  if (regex.test(inputFirstName.value)) {
    return true
  } else {
    inputFirstName.classList.add = "Input-Error"
    const formDataEvent = inputFirstName.parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Nom, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationLastName() {
  const inputLastName = document.getElementById("last");
  const regex = /^[^%$€"'~*+.;:!?,<> "#°=+£¤&²{}[\]`@()_|\/[\\^¨§µ\d]{2,}$/g;
  if (regex.test(inputLastName.value)) {
    return true
  } else {
    inputLastName.classList.add = "Input-Error"
    const formDataEvent = inputLastName.parentElement;
    formDataEvent.setAttribute("data-error-visible", "true")
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Email, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationEmail() { 
  const inputEmail = document.getElementById("email");
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(inputEmail.value)) {
    return true
  } else {
    const formDataEvent = inputEmail.parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Date de naissance, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationBirthdate() {
  const inputBirthdate = document.getElementById("birthdate");
  const regex = /^.{1,}$/;
  if (regex.test(inputBirthdate.value)) {
    return true
  } else {
    const formDataEvent = inputBirthdate.parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifier la valeur de l'input du Nombre de tournois auquel la personne a déjà participer, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationNumberOfCompetition() { 
  const inputQuantity = document.getElementById("quantity");
  const regex = /^(0|[0-9]{1,})$/;
  if (regex.test(inputQuantity.value) === true) {
    return true
  } else {
    const formDataEvent = inputQuantity.parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifier la valeur de l'input du Nombre de tournois auquel la personne a déjà participer, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationWishTournament() { 
  const inputsLocationChecked = document.querySelector('input[name^="location"]:checked');
  if (!inputsLocationChecked) {
    const formDataEvent = document.getElementById('location1').parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  } else { 
    return true
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifier si les conditions d'utilisation sont accepeté via le check de la checkbox, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationConditionOfUtilisation() { 
  const inputConditionOfUtilisation = document.getElementById("checkbox1")
  if (inputConditionOfUtilisation.checked === true) {
    return true
  } else {
    const formDataEvent = inputConditionOfUtilisation.parentElement;
    formDataEvent.setAttribute("data-error-visible" , "true")
    return false
  }
}


