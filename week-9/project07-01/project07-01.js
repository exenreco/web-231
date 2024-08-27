"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Exenreco Bell
      Date:   08/27/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  // prevent browser submits
  e.preventDefault();

  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  let // regular expression A - Z
    regex1 = /[A-Z]/,
    // regular expression 0 - 9
    regex2 = /\d/,
    // regular expression !$#%
    regex3 = /[!\$#%]/;

  // Conditions
  pwd && pwd.length < 8
    ? // pass minimum not met
      (feedback.textContent = "Your password must be at least 8 characters.")
    : // passed password minimum
    regex1.test(pwd) === false
    ? // regEx 1 [A-Z] not met
      (feedback.textContent =
        "Your password must include an upper case letter.")
    : // passed regEx 1 [A-Z]
    regex2.test(pwd) === false
    ? // regEx 2 [0-9] not met
      (feedback.textContent = "Your password must include a number.")
    : // passed regEx 2 [0-9]
    regex3.test(pwd) === false
    ? // regEx 3 [!$#%] not met
      (feedback.textContent =
        "Your password must include one of the following '!$#%'.")
    : // valid password [submit form]
      signupForm.submit();
});
