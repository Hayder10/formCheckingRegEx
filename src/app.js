/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { format } from "prettier";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let errors = [];

  let empty = /^$/;
  let formatCard = /[0-9]{13,16}/;
  let formatCVC = /[0-9]{3}/;
  let formatAmount = /[0-9]+/;
  let formatNames = /[A-Za-z]+/;

  let card = document.querySelector("#cardNumber");
  let CVC = document.querySelector("#cardCVC");
  let amount = document.querySelector("#amount");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let city = document.querySelector("#city");
  let state = document.querySelector("#stateSelect");
  let postalCode = document.querySelector("#postalCode");
  let message = document.querySelector("#message");

  /* Error Checking */
  if (empty.test(card.value)) {
    errors.push(["card", "blank"]);
  } else if (!formatCard.test(card.value)) {
    errors.push(["card", "typo"]);
  }

  if (empty.test(CVC.value)) {
    errors.push(["cvc", "blank"]);
  } else if (!formatCVC.test(CVC.value)) {
    errors.push(["cvc", "typo"]);
  }

  if (empty.test(amount.value)) {
    errors.push(["amount", "blank"]);
  } else if (!formatAmount.test(amount.value)) {
    errors.push(["amount", "typo"]);
  }

  if (empty.test(firstName.value)) {
    errors.push(["firstName", "blank"]);
  } else if (!formatNames.test(firstName.value)) {
    errors.push(["firstName", "typo"]);
  }

  if (empty.test(lastName.value)) {
    errors.push(["lastName", "blank"]);
  } else if (!formatNames.test(lastName.value)) {
    errors.push(["lastName", "typo"]);
  }

  if (empty.test(city.value)) {
    errors.push(["city", "blank"]);
  } else if (!formatNames.test(city.value)) {
    errors.push(["city", "typo"]);
  }

  if (empty.test(state.value)) {
    errors.push(["state", "blank"]);
  } else if (!formatNames.test(state.value)) {
    errors.push(["state", "typo"]);
  }

  if (empty.test(postalCode.value)) {
    errors.push(["postalCode", "blank"]);
  } else if (!formatAmount.test(postalCode.value)) {
    errors.push(["postalCode", "typo"]);
  }

  if (empty.test(message.value)) {
    errors.push(["message", "blank"]);
  }

  console.log(errors);
});
