"use strict";
// import { renderTour } from "./tourRender";
//show pakages
// (function showProductsUI(){

// })();

// function to render 3 popular packages in the main page.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOhJGBurCJBHqLZpqbrTXgfzSe0tU_iQQ",
  authDomain: "travel-website-4ddc8.firebaseapp.com",
  projectId: "travel-website-4ddc8",
  storageBucket: "travel-website-4ddc8.appspot.com",
  messagingSenderId: "1086268801335",
  appId: "1:1086268801335:web:7cb3dd42e2eb94f02ddab2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// function addToCart(tourName) {
//   console.log("done called");
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("done singed");

//     localStorage.setItem("tourName", tourName);
//     window.open("tour.html", "_blank");
//   } else {
//     console.log("not singed");

//     window.location = "login.html";
//   }
// });
// }

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("popularPackages")
    .addEventListener("click", function (event) {
      if (
        event.target &&
        event.target.nodeName === "BUTTON" &&
        event.target.classList.contains("btn-secondary")
      ) {
        addToCart(event.target.value);
      }
    });
});

async function showPopularPackages() {
  try {
    const res = await fetch("./tours.json");
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    //console.log(data);
    let count = 0;
    for (const [key, value] of Object.entries(data)) {
      if (count < 3) {
        document.getElementById("popularPackages").innerHTML += ` <li>
        <div class="package-card">
          <figure class="card-banner">
            <img
              src=${value.images[0]}
              alt="Experience The Great Holiday On Beach"
              loading="lazy"
            />
          </figure>

          <div class="card-content">
            <h3 class="h3 card-title">
             ${value.cardHead}
            </h3>

            <p class="card-text">
              ${value.cardBody}
            </p>

            <ul class="card-meta-list">
              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="time"></ion-icon>

                  <p class="text">${value.time}</p>
                </div>
              </li>

              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="people"></ion-icon>

                  <p class="text">pax: ${value.PARTICIPANTS}</p>
                </div>
              </li>

              <li class="card-meta-item">
                <div class="meta-box">
                  <ion-icon name="location"></ion.icon>

                  <p class="text">${value.location}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="card-price">
            <div class="wrapper">
              <p class="reviews">(${value.reviews} reviews)</p>

              <div class="card-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion.icon>
                <ion-icon name="star"></ion.icon>
                <ion-icon name="star"></ion.icon>
                <ion-icon name="star"></ion.icon>
              </div>
            </div>

            <p class="price">
              $${value.price}
              <span>/ per person</span>
            </p>

            <button class="btn btn-secondary" value="${key}">
              Details
            </button>
          </div>
        </div>
      </li>`;

        count++;
      } else {
        count = 0;
        break;
      }
    }

    return data;
  } catch (err) {
    throw err;
  }
}

function addToCart(tourName) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("tourName", tourName);
      window.open("tour.html", "_blank");
    } else {
      window.location = "login.html";
    }
  });
}


function page() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      window.open("package.html", "_blank");
    } else {
      window.location = "login.html";
    }
  });
}


// when the main page load render the 3 packages
document.getElementById("top").addEventListener("load", showPopularPackages());

// add new element to card menu by click on product
let additems = localStorage.getItem("itemCart")
  ? JSON.parse(localStorage.getItem("itemCart"))
  : [];

document
  .getElementById("viewAllPackages")
  .addEventListener("click", function () {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location = "package.html";
      } else {
        window.location = "login.html";
      }
    });
  });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     localStorage.setItem("tourName", tourName);
//     window.open("tour.html", "_blank");
//   } else {
//     window.location = "login.html";
//   }
// })
