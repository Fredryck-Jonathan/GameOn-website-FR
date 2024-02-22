function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
*
*
*Récuperation des éléments du DOM
*/
const modalbg = document.querySelector(".bground");
const modalbgValidated = document.querySelector(".bground-validated");

const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloseBtn = document.querySelectorAll(".close");
const modalValidatedCloseBtn = document.querySelectorAll(".close-validated");





/*
*
*
*launch modal event
*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


/*
*
*
*launch modal form
*/
function launchModal() {
  modalbg.style.display = "block";
}


/*
*
*
*close modals event
*/
modalCloseBtn.forEach((btnCLose) => btnCLose.addEventListener("click", closeModal));

modalValidatedCloseBtn.forEach((btnCLose) => btnCLose.addEventListener("click", closeModalValidated));

/*
*
*
*close modals events
*/
function closeModal() {
  modalbg.style.display = "none";
}

function closeModalValidated() {

  modalbgValidated.style.display = "none";

}


/** 
* 
*
*Cette fonction permet d'initier les fonctions de vérification des valeurs des inputs, une fois le bouton submit activer, si les vérifications sont valides affiche la module de validation d'inscriptions.
*/

function validate(event) {

  event.preventDefault();

  let allErrorMessage = document.querySelectorAll('.formData[data-error-visible="true"]');

  for (let ErrorMessage of allErrorMessage) {

    ErrorMessage.setAttribute('data-error-visible','false')

  }

  let allResultsOfVerification = [];

  let firstName = verificationFirstName();

  let lastName = verificationLastName();

  let email = verificationEmail();

  let birthdate = verificationBirthdate();

  let quantity = verificationNumberOfCompetition();

  let location = verificationWishTournament();

  let checkbox = verificationConditionOfUtilisation();

  allResultsOfVerification.push(firstName, lastName, email, birthdate, quantity, location, checkbox)

  console.log("allResult is " + allResultsOfVerification)


  let i = 1

  for (let oneResult of allResultsOfVerification) {

    console.log(i)

    if (i === allResultsOfVerification.length) {

      console.log(allResultsOfVerification.length)

      if (oneResult === true) {

        console.log("its good")
        modalbg.style.display = "none";
        modalbgValidated.style.display = "flex";



      } else {

        console.log("not good " + i)

        return false

      }

    } else {

      if (oneResult === true){

        i++

      } else {

        console.log("not good " + i)

        return false

      }

    }

  }

}





/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Prénom, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationFirstName(){ 
  let inputFirstName = document.getElementById("first");

  let regex = /^(?=.{2})/g;

  if (regex.test(inputFirstName.value)) {

    return true

  } else {

    inputFirstName.classList.add = "Input-Error"

    let formDataEvent = inputFirstName.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }

}



/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Nom, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationLastName() { 

  let inputLastName = document.getElementById("last");

  let regex = /^(?=.{2})/g;

  if (regex.test(inputLastName.value)) {

    return true

  } else {
    
    inputLastName.classList.add = "Input-Error"

    let formDataEvent = inputLastName.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }

}


/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Email, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationEmail() { 

  let inputEmail = document.getElementById("email");

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(inputEmail.value)) {

    return true

  } else {

    let formDataEvent = inputEmail.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }


}


/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifié la valeur de l'input Date de naissance, grace à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationBirthdate() {

  let inputBirthdate = document.getElementById("birthdate");

  const regex = /^.{1,}$/;

  if (regex.test(inputBirthdate.value)) {

    return true

  } else {

    let formDataEvent = inputBirthdate.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }


}


/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifier la valeur de l'input du Nombre de tournois auquel la personne a déjà participer, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationNumberOfCompetition() { 

  let inputQuantity = document.getElementById("quantity");

  let regex = /^(0|[0-9]{1,})$/;


  if (regex.test(inputQuantity.value) === true) {

    return true

  } else {

    let formDataEvent = inputQuantity.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }



}


/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifier la valeur de l'input du Nombre de tournois auquel la personne a déjà participer, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationWishTournament() { 

  let inputsLocation = document.getElementsByName('location');

  let i = 1

  for (let oneLocation of inputsLocation) {

    console.log(i)

    if (i === inputsLocation.length) {

      console.log(inputsLocation.length)

      if (oneLocation.checked === true) {

        return true

      } else {

        let formDataEvent = oneLocation.parentElement;

        console.log(formDataEvent)

        formDataEvent.setAttribute("data-error-visible" , "true")

        return false

      }

    } else {

      if (oneLocation.checked === true){

        console.log(oneLocation.value)
        return true

      } else {

        i++

      }

    }


  }

  console.log(inputsLocation);



  return true



}


/** 
* 
*Return Boolean(True or False)
*Cette fonction permet de vérifier si les conditions d'utilisation sont accepeté via le check de la checkbox, grâce à une regex, si elle est valide renvoie True sinon renvoie False.
*/
function verificationConditionOfUtilisation() { 

  let inputConditionOfUtilisation = document.getElementById("checkbox1")


  if (inputConditionOfUtilisation.checked === true) {

    return true

  } else {

    let formDataEvent = inputConditionOfUtilisation.parentElement;

    formDataEvent.setAttribute("data-error-visible" , "true")

    return false

  }


}

window.addEventListener("DOMContentLoaded", (event) => {
  init();
})


