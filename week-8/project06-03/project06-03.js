"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Exenreco Bell
      Date:   08/24/2024

      Filename: project06-03.js
*/

// selector useShip
let useShip = document.getElementById("useShip");

// Use Shipping address listener
useShip.addEventListener("click", copyShippingToBilling);

/**
 * Copy Shipping To Billing
 *
 * Function that copies values from shipping fields
 * to corresponding billing fields.
 *
 * @param void
 *
 * @return void
 */
function copyShippingToBilling() {
  if (useShip && useShip.checked) {
    // copy first name from shipping
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;

    // copy last name from shipping
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;

    // copy address 1 from shipping
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;

    // copy address 2 from shipping
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;

    // copy city from shipping
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;

    // copy country from shipping
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;

    // copy zip code from shipping
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;

    // copy state index from shipping
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

let // var - selected inputs fields
  formElements = document.querySelectorAll("input[type='text']"),
  // var - number of fields
  fieldCount = formElements.length,
  // var - select error box
  errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount - 1; i++) {
  // bind event listen to all fields
  formElements[i].addEventListener("invalid", showValidationError);
}

/**
 * Show Validation Error
 *
 * Function used to displays validation errors on form.
 *
 * @param {*} evt - targeted form field.
 *
 * @return void
 */
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
