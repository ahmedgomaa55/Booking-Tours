// "use strict";

// let newTour=window.location.search.slice(window.location.search.indexOf("=")+1,window.location.search.length);



// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import  {  getDatabase, ref, child, get,set  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"
// import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// const firebaseConfig = {
//     apiKey: "AIzaSyCOhJGBurCJBHqLZpqbrTXgfzSe0tU_iQQ",
//     authDomain: "travel-website-4ddc8.firebaseapp.com",
//     projectId: "travel-website-4ddc8",
//     storageBucket: "travel-website-4ddc8.appspot.com",
//     messagingSenderId: "1086268801335",
//     appId: "1:1086268801335:web:7cb3dd42e2eb94f02ddab2"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);





// let _user;

// const auth = getAuth();



// // onAuthStateChanged(auth, async(user) => {
// //     if (user) {
     
      
// //        _user=await user.email;
// //     }
// //     else{
// //       console.log("hhhhhhhhhhhhhhhhhhhh");
// //     }
// //   });


// //  async function writeUserData() {
// //     const auth = getAuth();
// //     await onAuthStateChanged(auth, async(user) => {
// //         if (user) {
         
          
// //            _user=await user.email;
// //         }
// //         else{
// //           console.log("hhhhhhhhhhhhhhhhhhhh");
// //         }
// //         const db = getDatabase();
// //         set(ref(db, user.email), newTour);
// //         console.log(user.email)
// //       });
   
    
// //   }
 
// // await writeUserData();


// // const dbRef = ref(getDatabase());
// // get(child(dbRef, `_user`)).then((snapshot) => {
// //   if (snapshot.exists()) {
// //     console.log(snapshot.val())
// //     newTour+="#"+snapshot.val()
// //   } else {
// //    console.log("no");
    
// //   }
// //   writeUserData()

// // }).catch((error) => {
// //   console.error(error);
// // });





// // Wait for authentication state to change
// const userPromise = new Promise((resolve, reject) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       _user = user.email;
//       resolve(user.email);
//     } else {
//       reject("User not authenticated");
//     }
//   });
// });

// // Write user data to the database
// async function writeUserData() {
//   try {
//     const email = await userPromise;
//     const db = getDatabase();
//     await set(ref(db, email), newTour);
//     console.log("Data written for user:", email);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Fetch user data from the database
// async function fetchUserData() {
//   try {
//     const email = await userPromise;
//     const dbRef = ref(getDatabase());
//     const snapshot = await get(child(dbRef, email));
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//       newTour += "#" + snapshot.val();
//     } else {
//       console.log("No data available");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }



// var tourArray=newTour.split("#");
// console.log(tourArray)









// async function renderTour() {
//   try {
//     const res = await fetch("./tours.json");
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    
//     for (const [key, value] of Object.entries(data)) {
//       for(var i=0; i<tourArray.length;i++){
//       if (key == tourArray[i]) {

//         document.getElementById("cont").innerHTML = `
//      <div class="container position-absolute m-5">
//       <div class="text-center"><h1 class="m-5">Your Purchases</h1></div>
//       <div class="card" style="width: 18rem">
//         <img src="./assets/images/${value.name}.jpg" class="card-img-top" alt="tour" />
//         <div class="card-body">
//           <h5 class="card-title">${value.name}</h5>
//           <p class="card-text">
//            <strong>NEXT DATE :</strong> ${value.date}<br>
//            <strong>PARTICIPANTS :</strong> ${value.PARTICIPANTS} People<br>
//            <strong>RATING :</strong> ${value.rating}<br>
//           </p>
          
//         </div>
//       </div>
//     </div>
//         `;
//       } else {
//         continue;
//       }
//     }}
//     // console.log(key);

//     return data;
//   } catch (err) {
//     throw err;
//   }
// }

// (async function() {
//   await userPromise;
//   await writeUserData();
//   await fetchUserData();
//   const tourArray = newTour.split("#");
//   await renderTour();
// })();
// document.getElementById("tourBody").addEventListener("load", await renderTour());




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
      console.log(snapshot.val());
      newTour += "#" + snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
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
                <div class="card-body">
                  <h5 class="card-title">${value.name}</h5>
                  <p class="card-text">
                    <strong>NEXT DATE :</strong> ${value.date}<br>
                    <strong>PARTICIPANTS :</strong> ${value.PARTICIPANTS} People<br>
                    <strong>RATING :</strong> ${value.rating}<br>
                  </p>
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
  await renderTour();
})();


// window.location="profile.html"