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
/*
*Paramétre "element" - L'élément dont l'erreur doit être affichée.
*Return Boolean - Retourne toujours false pour indiquer qu'il y a eu une erreur.
*Cette fonction affiche les erreurs lors de la validation si la valeur ne passe pas.
*/ 
function montrerErreur(element) {
  const formDataEvent = element.parentElement;
  formDataEvent.setAttribute("data-error-visible", "true");
  return false
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
    inputFirstName.classList.add = "Input-Error";
    montrerErreur(inputFirstName);
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
    inputLastName.classList.add = "Input-Error";
    montrerErreur(inputLastName);
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
    montrerErreur(inputEmail);
    return false
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Date de naissance, si elle est valide renvoie True sinon renvoie False.
*/
function verificationBirthdate() {
  const inputBirthdate = document.getElementById("birthdate");
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(inputBirthdate.value)) {
    montrerErreur(inputBirthdate);
    return false
  } else {
    const parties = inputBirthdate.value.split('-');
    const année = parseInt(parties[0], 10);
    const mois = parseInt(parties[1], 10) - 1;
    const jour = parseInt(parties[2], 10);
    const dateBirthdate = new Date(année, mois, jour);
    const dateActuelle = new Date();
    dateActuelle.setHours(0, 0, 0, 0);
    if (dateBirthdate > dateActuelle) {
      montrerErreur(inputBirthdate);
    } else {
      let difference = dateActuelle - dateBirthdate;
      difference = new Date(difference);
      const age = Math.abs((difference).getUTCFullYear() - 1970);
      if (age < 13 || age > 90) {
        montrerErreur(inputBirthdate);
      } else {
        return true
      }
    }
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
    montrerErreur(inputQuantity);
  }
}
/** 
*Return Boolean(True or False)
*Cette fonction permet de vérifier la valeur de l'input du Nombre de tournois auquel la personne a déjà participer, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationWishTournament() { 
  const inputsLocationChecked = document.querySelector('input[name^="location"]:checked');
  if (!inputsLocationChecked) {
    montrerErreur(document.getElementById('location1'));
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
    montrerErreur(inputConditionOfUtilisation)
  }
}


