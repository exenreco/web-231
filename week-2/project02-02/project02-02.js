/**
 * JavaScript 7th Edition
 * Chapter 2
 * Hands-on Project 2-2
 *
 * Author: Exenreco E. Bell
 * Date:   08/22/2024
 *
 * Filename: project02-02.js
 */

//Function to verify form
function verifyForm() {
  let // Variables

    // Get Value from form name
    name = document.getElementById("name").value,
    // Get Value from form email
    email = document.getElementById("email").value,
    // Get Value from form phone
    phone = document.getElementById("phone").value;

  // Form input conditions
  name !== "" && email !== "" && phone !== ""
    ? // when valid
      window.alert("Thank you!")
    : // when invalid
      window.alert("Please fill in all fields");
}

//Event Listener
document.getElementById("submit").addEventListener("click", verifyForm);
