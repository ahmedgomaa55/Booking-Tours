




"use strict";

// Extract tour information from the URL
let newTour = window.location.search.slice(window.location.search.indexOf("=") + 1, window.location.search.length);


// window.location.search=""
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOhJGBurCJBHqLZpqbrTXgfzSe0tU_iQQ",
  authDomain: "travel-website-4ddc8.firebaseapp.com",
  projectId: "travel-website-4ddc8",
  storageBucket: "travel-website-4ddc8.appspot.com",
  messagingSenderId: "1086268801335",
  appId: "1:1086268801335:web:7cb3dd42e2eb94f02ddab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let _user;
const auth = getAuth();

// Wait for authentication state to change
const userPromise = new Promise((resolve, reject) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      _user = user.email;
      resolve(user.email);
    } else {
      reject("User not authenticated");
    }
  });
});

// Write user data to the database

// Fetch user data from the database
async function fetchUserData() {
  try {
    const email = await userPromise;
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, email.slice(0,email.indexOf("@"))));
    if (snapshot.exists()) {
      const temp=snapshot.val();
      if(temp.includes(newTour)){
        newTour =  temp
      }
      else{
        newTour += "#" + snapshot.val();
      }
      console.log(snapshot.val());
     
      return snapshot.val();
    } else {
      console.log("No data available");
      return "No data available";
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}
async function writeUserData() {
  try {
    const email = await userPromise;
    const db = getDatabase();
    // console.log(email.slice(0,email.indexOf("@")));
    
    await set(ref(db, email.slice(0,email.indexOf("@"))), newTour);
    console.log("Data written for user:", email);
  } catch (error) {
    console.error(error);
  }
}


window.remove =async function (key) {
  try {
    console.log(key);
    key = decodeURIComponent(key);
    let value = await fetchUserData();
    value = value.replace(key, "");
    console.log(value);

    const email = await userPromise;
    const db = getDatabase();
    await set(ref(db, email.slice(0, email.indexOf("@"))), value);
    console.log("Tour removed:", key);

    // Update the UI after removing the tour
    document.getElementById("cont").innerHTML = "";
    tourArray = value.split("#");
    await renderTour();
  } catch (error) {
    console.error(error);
  }
}

let tourArray
// Render tour information
async function renderTour() {
  try {
    const res = await fetch("./tours.json");
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    
    for (const [key, value] of Object.entries(data)) {
      for (let i = 0; i < tourArray.length; i++) {
        if (key === tourArray[i]) {
          document.getElementById("cont").innerHTML += `
            
            <div class="col-3">
              <div class="card" style="width: 18rem">
                <img src="./assets/images/${value.name}.jpg" class="card-img-top" alt="tour" />
                <div class="card-body" data-tour-key="${key}">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text">
                    <strong>NEXT DATE :</strong> ${value.date}<br>
                    <strong>PARTICIPANTS :</strong> ${value.PARTICIPANTS} People<br>
                    <strong>RATING :</strong> ${value.rating}<br>
                  </p>
                  <a href="#" class="btn btn-primary"  onclick="remove(this.parentElement.dataset.tourKey)">Cancel Tour</a>
                </div>
              </div>
            </div>
            </div>
            
          `;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}

// Execute the functions in sequence
(async function() {
  await userPromise;
  
  await fetchUserData();
  await writeUserData();
  tourArray = newTour.split("#");
  console.log("kdkdkk");
  console.log(tourArray)
  await renderTour();
  
})();


// window.open('mailto:ahmed.m.shaban183@gmail.com?subject=hello&body=thanks');

