/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Exenreco Bell
      Date:   08/27/2024

      Filename: project03-01.js
*/

// Collection of menu items
const menuItems = document.getElementsByClassName("menuItem");

// loop used to adds event listener to all menu items
for (let i = 0; i <= menuItems.length - 1; i++) {
  menuItems[i].addEventListener("click", calcTotal); // bind click listener to current menu item
}

// Function to calculate and print order totals
function calcTotal() {
  // variable used to store current order total
  let orderTotal = 0;

  // loop for checked menu items
  for (i = 0; i <= menuItems.length - 1; i++) {
    // if current menu item checked:
    menuItems[i].checked
      ? // true - increase total
        (orderTotal += Number(menuItems[i].value) * 1)
      : // false - do nothing
        null;

    // print new total
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
