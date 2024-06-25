var searrchInput = document.querySelector(".input-wrapper #destination");

var searchBtn = document.getElementById("searchBtn");
var popularPackagesSearchContainer = document.getElementById(
  "popularPackagesSearchContainer"
);
var popularPackagesSearchItem = document.getElementById(
  "popularPackagesSearch"
);
var mainButton = document.getElementById("Main");
console.log(mainButton);

console.log(popularPackagesSearchItem);
// var pp =document.getElementById("popularPackagesSearch");
// console.log(pp);مش هينفع عشان هيشوفها في صفحة وصفحة لا ف الحل هو اللجوء لل localStorage

// console.log(destinations);

var respon;
var finalRes;

async function getTours() {
  respon = await fetch("./tours.json");
  finalRes = await respon.json();

  //console.log(finalRes);
  var destinations = [];
  for (const [key, value] of Object.entries(finalRes)) {
    if (
      value.name.toLowerCase().includes(searrchInput.value.toLowerCase()) ==
      true
    ) {
      destinations.push(value);
    }
  }
  console.log(destinations);
  var cartoona = ``;
  for (let i = 0; i < destinations.length; i++) {
    cartoona += `<li>
           <div class="package-card">
             <figure class="card-banner">
              <img
                src=${destinations[i].images[0]}
                alt="Experience The Great Holiday On Beach"
                loading="lazy"
              />
            </figure>
  
            <div class="card-content">
              <h3 class="h3 card-title text-dark">

               ${destinations[i].cardHead}
              </h3>
              
  
              <p class="card-text">
                ${destinations[i].cardBody}
              </p>
  
              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>
  
                    <p class="text">${destinations[i].time}</p>
                  </div>
                </li>
  
                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="people"></ion-icon>
  
                    <p class="text">pax: ${destinations[i].PARTICIPANTS}</p>
                  </div>
                </li>
  
                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>
  
                    <p class="text">${destinations[i].location}</p>
                  </div>
                </li>
              </ul>
            </div>
  
            <div class="card-price">
              <div class="wrapper">
                <p class="reviews">(${destinations[i].reviews} reviews)</p>
  
                <div class="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
  
              <p class="price">
                $${destinations[i].price}
                <span>/ per person</span>
              </p>
  
              <button class="btn btn-secondary" Btn" value="${destinations[
                i
              ].name.toLowerCase()}" onclick="addCart(this.value)">
                Book Now
              </button>
            </div>
          </div>
        </li>
`;
  }

  popularPackagesSearch.innerHTML = cartoona;
  console.log(cartoona);
}
// localStorage.setItem('searrchInput',JSON.stringify(destinations))
// showPopularPackages()
//  getTours();
//searrchInput.addEventListener('input',getTours)
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getTours();
  if (searrchInput.value != "") {
    popularPackagesSearchContainer.classList.replace("d-none", "d-block");
  }
});
mainButton.addEventListener("click", function () {
  popularPackagesSearchContainer.classList.replace("d-block", "d-none");
});

function addCart(tourName) {
  localStorage.setItem("tourName", tourName);
  window.open("tour.html", "_blank");
}
// searrchInput.addEventListener('input',function()
// {

//   getTours();
//   popularPackagesSearchContainer.classList.replace('d-none','d-block');

// })

// async function showPopularPackages() {

//     const res = await fetch("./tours.json");
//     const data = await res.json();

//     for (const [key, value] of Object.entries(data)) {

//         document.getElementById("popularPackagesSearch").innerHTML += `
// <li>
//           <div class="package-card">
//             <figure class="card-banner">
//               <img
//                 src=${value.images[0]}
//                 alt="Experience The Great Holiday On Beach"
//                 loading="lazy"
//               />
//             </figure>

//             <div class="card-content">
//               <h3 class="h3 card-title">
//                ${value.cardHead}
//               </h3>

//               <p class="card-text">
//                 ${value.cardBody}
//               </p>

//               <ul class="card-meta-list">
//                 <li class="card-meta-item">
//                   <div class="meta-box">
//                     <ion-icon name="time"></ion-icon>

//                     <p class="text">${value.time}</p>
//                   </div>
//                 </li>

//                 <li class="card-meta-item">
//                   <div class="meta-box">
//                     <ion-icon name="people"></ion-icon>

//                     <p class="text">pax: ${value.PARTICIPANTS}</p>
//                   </div>
//                 </li>

//                 <li class="card-meta-item">
//                   <div class="meta-box">
//                     <ion-icon name="location"></ion-icon>

//                     <p class="text">${value.location}</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div class="card-price">
//               <div class="wrapper">
//                 <p class="reviews">(${value.reviews} reviews)</p>

//                 <div class="card-rating">
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                 </div>
//               </div>

//               <p class="price">
//                 $${value.price}
//                 <span>/ per person</span>
//               </p>

//               <button class="btn btn-secondary" Btn" value="${key}" onclick="addToCart(this.value)">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </li>`;

//       }

//     }
