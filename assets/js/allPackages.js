"use strict";

var arr = [];
var numPages;
var currentpage = 1;
const pagin = document.getElementById("pagination");
const b = document.getElementById("next");
// function to render all packages in the package page.
async function showAllPackages(x) {
  try {
    const res = await fetch("./tours.json");
    const data = await res.json();
    //  console.log(data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // console.log(data);
    // arr=data
    // for (const iterator of arr) {
    //   console.log(iterator);
    // }
    //convert obj to array
    for (const [key, value] of Object.entries(data)) {
      arr.push(value);
    }
    numPages = arr.length / 5;

    // console.log(arr.length);
    // console.log(numPages +" in main func");

    //   for (const iterator of arr) {
    //   console.log(iterator);
    // }

    // for (const [key, value] of Object.entries(data)) {
    for (const value of getPagination(currentpage)) {
      // console.log(key);
      // arr.push(value)
      // console.log(arr);

      document.getElementById("allPackages").innerHTML += ` <li>
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
                      <ion-icon name="location"></ion-icon>
    
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
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
    
                <p class="price">
                  $${value.price}
                  <span>/ per person</span>
                </p>
    
                <button class="btn btn-secondary class="bookBtn" value="${
                  (value.name.toLowerCase())
                }" " onclick="addCart(this.value)">
                  Book Now
                </button>
              </div>
            </div>
          </li>`;
    }
    // console.log(numPages+"mm");

    function paginationView() {
      // Page 1, and there are other pages
      pagin.innerHTML = ``;

      if (numPages > 1) {
        return (pagin.innerHTML += `
        <button style="float: right;" id="next" onclick="myFunction()">
          <span>Next Page</span>
        </button>

         <button style="float: left;" id="previous" onclick="myFunction2()">
          <span>previous Page</span>
        </button>
      `);
      }
    }

    //     b.addEventListener('click',myFunction)

    //  myFunction();

    paginationView();
    //document.addEventListener('load',paginationView)
    // function()
    // {var b;
    //   paginationView();
    //   b=document.getElementById("next")
    //   b.addEventListener('click',myFunction)
    // }

    return data;
    console.log(data);
  } catch (err) {
    throw err;
  }
}
function myFunction() {
  // console.log(numPages);
  // console.log("current " +currentpage);

  if (currentpage >= 2) {
    document.getElementById("next").disabled = true;
    // currentpage=numPages
  } else {
    ++currentpage;
  }

  // console.log(currentpage+"now");
  // window.open('../../package.html')
  document
    .getElementById("backageBody")
    .addEventListener("DOMContentLoaded", showAllPackages());
  document.getElementById("allPackages").innerHTML = ``;

  // getPagination(currentpage)
  // window.location.href="package.html";
}
function myFunction2() {
  if (currentpage <= 1) {
    document.getElementById("previous").disabled = true;
    // document.getElementById('previous').style.visibility='hidden';
  } else {
    --currentpage;
  }
  // window.open('../../package.html')
  document
    .getElementById("backageBody")
    .addEventListener("DOMContentLoaded", showAllPackages());
  document.getElementById("allPackages").innerHTML = ``;

  // getPagination(currentpage)
  // window.location.href="package.html";
}

function addCart(tourName) {
  console.log(tourName);
  localStorage.setItem("tourName", tourName);
  window.open("tour.html", "_blank");
}

// when the package page load render all packages
document
  .getElementById("backageBody")
  .addEventListener("DOMContentLoaded", showAllPackages(currentpage));

const getPagination = function (page) {
  const start = (page - 1) * 5;
  const end = page * 5;
  return arr.slice(start, end);
};

// const pagin=document.getElementById("pagination")
console.log(numPages + "is");
// const paginationView=function(){
//   if(numPages==1)
//     pagin.innerHTML=`<h2>first page</h2>`
//    if(numPages>1)
//     pagin.innerHTML+=` <div class="parent" style="display: flex;justify-content: space-between;">
//       <button><a>x</a></button>
//       <button><a>y</a></button>
//   </div>`

// }
//   pagin.innerHTML+=`<div class="parent" style="display: flex;justify-content: space-between;">
//   <button>x</button>
//   <button>y</button>
// </div>`
// paginationView()
// pagin.innerHTML=`<h2>Simple Pagination</h2>`
