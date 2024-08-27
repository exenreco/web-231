/*  JavaScript 7th Edition
    Chapter 2
    Project 02-04

    Application to calculate the cost of a restaurant order plus tax
    Author: Exenreco E. Bell
    Date: 08/26/2024

    Filename: project02-04.js
 */

const // Variables of items prices and taxes
  CHICKEN_PRICE = 10.95,
  HALIBUT_PRICE = 13.95,
  BURGER_PRICE = 9.95,
  SALMON_PRICE = 18.95,
  SALAD_PRICE = 7.95,
  SALES_TAX = 0.07;

// handel chicken events
document.getElementById("chicken").addEventListener("click", calcTotal);

// handel halibut events
document.getElementById("halibut").addEventListener("click", calcTotal);

// handel burger events
document.getElementById("burger").addEventListener("click", calcTotal);

// handel salmon events
document.getElementById("salmon").addEventListener("click", calcTotal);

// handel salad events
document.getElementById("salad").addEventListener("click", calcTotal);

// Function to calculate total
function calcTotal() {
  let cost = 0,
    buyChicken = document.getElementById("chicken").checked,
    buyHalibut = document.getElementById("halibut").checked,
    buyBurger = document.getElementById("burger").checked,
    buySalmon = document.getElementById("salmon").checked,
    buySalad = document.getElementById("salad").checked;

  // Set Chicken price
  cost =
    (buyChicken && buyChicken === true) || buyChicken == 1
      ? // add to total
        cost + CHICKEN_PRICE
      : // nothing to add
        cost + 0;

  // Set Halibut price
  cost =
    (buyHalibut && buyHalibut === true) || buyHalibut == 1
      ? // add to total
        cost + HALIBUT_PRICE
      : // nothing to add
        cost + 0;

  // Set Burger price
  cost =
    (buyBurger && buyBurger === true) || buyBurger == 1
      ? // add to total
        cost + BURGER_PRICE
      : // nothing to add
        cost + 0;

  // Set Salmon price
  cost =
    (buySalmon && buySalmon === true) || buySalmon == 1
      ? // add to total
        cost + SALMON_PRICE
      : // nothing to add
        cost + 0;

  // Set Salad price
  cost +=
    (buySalad && buySalad === true) || buySalad == 1
      ? // add to total
        SALAD_PRICE
      : // nothing to add
        0;

  // Print food total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // calculate taxes
  let tax = cost * SALES_TAX;

  // print taxes
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // calculate total
  let totalCost = cost + tax;

  // print total
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
