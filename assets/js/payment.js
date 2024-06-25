"use strict";

var PayForm = document.getElementById("PayForm");
var PayButton = document.getElementById("PayButton");
var Thank = document.getElementById("Thank");


function pay() {
  if (validate()) {
    PayForm.classList.add("d-none");
    Thank.classList.replace("d-none", "d-block");
    setTimeout(() => {
      window.location = "profile.html"+window.location.search;
    }, 2000);
  }
}



function validate() {
  var flag = true;
  const namePattern = /^[a-zA-Z\s]+$/;
  const cardPattern = /^\d{16}$/;
  const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvPattern = /^\d{3,4}$/;
  var name1 = document.getElementById("name1").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var expiry = document.getElementById("expiry").value;
  var cvv = document.getElementById("cvv").value;

  //

  const nameError = document.getElementById("nameError");
  const cardError = document.getElementById("cardError");
  const expiryError = document.getElementById("expiryError");
  const cvvError = document.getElementById("cvvError");
  if (!namePattern.test(name1)) {
    nameError.classList.replace("d-none", "d-block");
    nameError.style.color = "red";

    flag = false;
  } else {
    nameError.classList.replace("d-block", "d-none");
  }

  if (!cardPattern.test(cardNumber)) {
    cardError.classList.replace("d-none", "d-block");
    cardError.style.color = "red";
    flag = false;
  } else {
    cardError.classList.replace("d-block", "d-none");
  }
  if (!expiryPattern.test(expiry)) {
    expiryError.classList.replace("d-none", "d-block");
    expiryError.style.color = "red";
    flag = false;
  } else {
    expiryError.classList.replace("d-block", "d-none");
  }

  if (!cvvPattern.test(cvv)) {
    cvvError.classList.replace("d-none", "d-block");
    cvvError.style.color = "red";
    flag = false;
  } else {
    cvvError.classList.replace("d-block", "d-none");
  }
  return flag;
}


