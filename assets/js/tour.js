"use strict";

async function renderTour() {
  try {
    const res = await fetch("./tours.json");
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let tourName = localStorage.getItem("tourName");
    for (const [key, value] of Object.entries(data)) {
      if (key == tourName) {
        document.getElementById("cont").innerHTML = `
            <section class="tour" id="home" style="background-image: url('./assets/images/${value.name}.jpg');">
            <div class="header-top">
          <div class="container">
            <a href="tel:+01123456790" class="helpline-box">
              <div class="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              
              <div class="wrapper">
              <p class="helpline-title">For Further Inquires :</p>

              <p class="helpline-number">+20 112041734</p>
            </div>
          </a>

          <a href="#" class="logo">
            <img src="./assets/images/logo.svg" alt="Tourly logo" />
          </a>

          <div class="header-btn-group">
                      <button class="btn btn-primary" onclick="window.location='payment.html?name=${key}'">Book Now</button>

                      
                      </div>
                      </div>
                      </div>
                      
                      
                      <h2 class="h1 tour-title">${value.name}</h2>
                      
                      

        <div class="btn-group">
          <p class="tour-text">
        
          <p class="tour-text">
          <i
          class="fa-solid fa-location-dot fa-lg"
          style="color: #74c0fc"
          ></i>
          ${value.location}
          </p>
        </div>
      </div>
    </section>
    
    
    
    
    <section id="tour-details">
    <aside id="tour-details-left">
    <h2 style="text-align: center">About ${value.name} Tour</h2>
    <p style="margin-top: 20px; text-align: center">${value.about}</p>
          </aside>
          <aside id="tour-details-right">
          <h2 style="text-align: center">Quick Facts</h2>
          <p style="text-align: center; margin-top: 20px">
          <i
            class="fa-solid fa-calendar-days fa-lg"
            style="color: #74c0fc; padding: 10px"
          ></i>
          <strong>NEXT DATE :</strong> ${value.date}
        </p>
        <p style="text-align: center; margin-top: 20px">
          <i
            class="fa-solid fa-person fa-xl"
            style="color: #74c0fc; padding: 10px"
            ></i>
          <strong>PARTICIPANTS :</strong> ${value.PARTICIPANTS} People
          </p>
          <p style="text-align: center; margin-top: 20px">
          <i
          class="fa-solid fa-star fa-lg"
          style="color: #74c0fc; padding: 10px"
          ></i>
          <strong>RATING :</strong> ${value.rating}
          </p>
          <br /><br /><br />
          <h2 style="text-align: center">YOUR TOUR GUIDES</h2>
        <div id="tour-guides">
          <img src="./assets/images/guide1.jpg" alt="guide1" />
          <span><strong>Miyah Myles </strong> </span>
          <img src="./assets/images/guide2.jpg" alt="guide2" />
          <span><strong>John Smith </strong> </span>
        </div>
      </aside>
    </section>

   <section>
    <div class="container ">
      <div class="row ">
        <div class="col-12 text-center" >
        <p id="travellrsParagrah" class="m-1" >PHOTO GALLERY</p>
          <h1>PHOTO'S FROM TRAVELLERS</h1>
          <p id="travellrsParagrah" class="m-1">Many of our travellers enjoy taking photos of the cities they go to, </p>
          <p id="travellrsParagrah" class="lh-1">Here are some of the best collection.</p>
        </div>
        <div class="col-md-4 " >
        <img class="w-100 mb-5 mt-4  rounded-4" src="assets/images/Miami Images/young-stylish-hipster-beautiful-couple-summer-vacation-thailand-flirty-fashion-trend-outfit-sunglasses-tropical-romance-smiling-happy-listening-music-party-mood-beach-cafe.jpg" alt="young-stylish-hipster-beautiful-couple-summer-vacation-thailand-flirty-fashion-trend-outfit-sunglasses-tropical-romance-smiling-happy-listening-music-party-mood-beach-cafe">
          <img class="w-100 mb-5  rounded-4" src="assets/images/Miami Images/woman-taking-photograph-her-boyfriend-camera-near-sea.jpg" alt="woman-taking-photograph-her-boyfriend-camera-near-sea">
        </div>
        <div class="col-md-4 " >
          <img class="w-100 my-3 rounded-4" src="assets/images/Miami Images/women-taking-selfie-near-street-lamp.jpg ">
        </div>
        <div class="col-md-4 " >
          <img class="w-100 mb-5 mt-4  rounded-4" src="assets/images/Miami Images/couple-taking-walk-by-pool-vacation.jpg" alt="couple-taking-walk-by-pool-vacation">
          <img class="w-100 mb-5  rounded-4" src="assets/images/Miami Images/back-view-women-taking-photos-park.jpg" alt="back-view-women-taking-photos-park">
        </div>
      </div>
    </div>
   </section>

   
   <div class="container w-50 mb-5">
   <div class="  text-center" >
       
       <h1 class="mt-5 mb-5">REVIEWS FROM TRAVELLERS</h1>
      </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card w-100" >
            <img class="card-img-top" src="assets/images/Persons Images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${value.reviewText[0]}</h5>
    <p class="card-text">${value.reviewText[1]}
      
    </p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              
              </div>
              </div>
              
        </div>
        <div class="carousel-item">
          <div class="card w-100" >
            <img class="card-img-top" src="assets/images/Persons Images/front-view-smiley-male-photographer-with-camera.jpg" alt="Card image cap">
            <div class="card-body">
              
              <h5 class="card-title">${value.reviewText[0]}</h5>
    <p class="card-text">${value.reviewText[1]}
    <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              
            </div>
          </div>
          
        </div>
        <div class="carousel-item">
          <div class="card w-100" >
          <img class="card-img-top" src="assets/images/Persons Images/young-bearded-man-with-striped-shirt.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${value.reviewText[0]}</h5>
    <p class="card-text">${value.reviewText[1]}</p>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span> 
    
            </div>
          </div>
          
        </div>
      </div>
      <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>

    <div class="card text-center">
      <div class="card-body">
      <h5 class="card-title">WHAT ARE YOU WAITING FOR?</h5>
        <p class="card-text">
          7 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <a href="#" class="btn btn-primary" onclick="window.location=payment.html?name=${key}''">BOOK TOUR</a>
      </div>
    </div>


    <footer>
      <div class="footer-bottom">
        <div class="container">
        <p class="copyright">
            &copy; 2024 <a href="">ITI</a>. All rights reserved
          </p>

          <ul class="footer-bottom-list">
            <li>
              <a href="#" class="footer-bottom-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" class="footer-bottom-link">Term & Condition</a>
            </li>
            
            <li>
              <a href="#" class="footer-bottom-link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    `;
      } else {
        continue;
      }
    }
    // console.log(key);

    return data;
  } catch (err) {
    throw err;
  }
}

document.getElementById("tourBody").addEventListener("load", renderTour());
console.log("hjjhdjf")