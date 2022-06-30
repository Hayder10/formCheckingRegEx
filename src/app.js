/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

  let errorBox = document.querySelector("#errorMsg");
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
    errors.push(["CVC", "blank"]);
  } else if (!formatCVC.test(CVC.value)) {
    errors.push(["CVC", "typo"]);
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

  if (state.value == "Pick a state") {
    errors.push(["state", "blank"]);
  }

  if (empty.test(postalCode.value)) {
    errors.push(["postalCode", "blank"]);
  } else if (!formatAmount.test(postalCode.value)) {
    errors.push(["postalCode", "typo"]);
  }

  if (empty.test(message.value)) {
    errors.push(["message", "blank"]);
  }

  /* Errors to show in form */
  let typoErrors = 0;
  let blankErrors = 0;
  if (errors.length != 0) {
    errors.forEach(element => {
      if (element[0] == "card") {
        card.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "CVC") {
        CVC.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "amount") {
        amount.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "firstName") {
        firstName.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "lastName") {
        lastName.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "city") {
        city.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "state") {
        state.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "postalCode") {
        postalCode.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }

      if (element[0] == "message") {
        message.style.backgroundColor = "#ffcccb";
        if (element[1] == "blank") {
          blankErrors = 1;
        } else if (element[1] == "typo") {
          typoErrors = 1;
        }
      }
    });
  }

  if (blankErrors == 1 && typoErrors == 0) {
    errorBox.style.display = "block";
  } else if (blankErrors == 1 && typoErrors == 1) {
    errorBox.innerHTML = "Some fields have missing or invalid inputs";
    errorBox.style.display = "block";
  } else if (blankErrors == 0 && typoErrors == 1) {
    errorBox.innerHTML = "Some fields have invalid inputs";
    errorBox.style.display = "block";
  }
  console.log(blankErrors + " , " + typoErrors);
});
