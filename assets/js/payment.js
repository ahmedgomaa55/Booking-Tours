"use strict";

function pay() {
  if (validate()) {
    setTimeout(() => {
      window.location = "profile.html";
    }, 2000);
  }
}
var PayForm = document.getElementById("PayForm");
var PayButton = document.getElementById("PayButton");
var Thank = document.getElementById("Thank");
//console.log(Thank);

PayButton.addEventListener("click", function () {
  if (validate()) {
    PayForm.classList.add("d-none");
    Thank.classList.replace("d-none", "d-block");
  }
});

// var name1 = document.getElementById('name1');
// const cardNumber = document.getElementById('cardNumber');
// const expiry = document.getElementById('expiry');
// const cvv = document.getElementById('cvv');
// console.log(cvv);

// function validateForm() {
//   // Regex patterns
//   const namePattern = /^[a-zA-Z\s]+$/;
//   const cardPattern = /^\d{16}$/;
//   const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
//   const cvvPattern = /^\d{3,4}$/;

//   // Get form elements
//   const name2 = name1.value;
//   const cardNumber2 = cardNumber.value;
//   const expiry2 = expiry.value;
//   const cvv2 = cvv.value;

//   // Get error elements
//   const nameError = document.getElementById('nameError');
//   const cardError = document.getElementById('cardError');
//   const expiryError = document.getElementById('expiryError');
//   const cvvError = document.getElementById('cvvError');

//   // Validate fields
//   let valid = true;

//   if (!namePattern.test(name2)) {
//       nameError.style.display = 'block';
//       valid = false;
//   } else {
//       nameError.style.display = 'none';
//   }

//   if (!cardPattern.test(cardNumber2)) {
//       cardError.style.display = 'block';
//       valid = false;
//   } else {
//       cardError.style.display = 'none';
//   }

//   if (!expiryPattern.test(expiry2)) {
//       expiryError.style.display = 'block';
//       valid = false;
//   } else {
//       expiryError.style.display = 'none';
//   }

//   if (!cvvPattern.test(cvv2)) {
//       cvvError.style.display = 'block';
//       valid = false;
//   } else {
//       cvvError.style.display = 'none';
//   }

//   if (valid) {
//       alert('Payment successful!');
//   }
// }

// PayButton.addEventListener('click',validateForm);

console.log(name1);
// const cardNumber = document.getElementById('cardNumber');
// const expiry = document.getElementById('expiry');
// const cvv = document.getElementById('cvv');
// console.log(cvv);
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

PayButton.addEventListener("click", validate);
