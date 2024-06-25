let userInfo=document.querySelector("#user-info");
let userDom=document.querySelector("#user");
let links=document.querySelector("#links");
// let username=localStorage.getItem("username");
let log_out=document.querySelector("#log-out");
// if(username){
//     console.log(username);
//     links.remove();
//     userInfo.style.display="flex";
//     userInfo.style.gap="30px"
//     userInfo.style.color="#fff"
//     // userInfo.classList.add("row");
//     userDom.innerHTML=username;
// }
// log_out.addEventListener("click",function(e){
//     e.preventDefault();
//     localStorage.clear();
//     setTimeout(()=>window.location="index.html",1500);
// })


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



 // Your web app's Firebase configuration
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

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      links.remove();
      userInfo.style.display="flex";
      userInfo.style.gap="30px"
      userInfo.style.color="#fff"
      // userInfo.classList.add("row");
      userDom.innerHTML=user.email;
  
      //console.log(user.email);
     
      // ...
    } else {
      
      
    }
  });



log_out.addEventListener("click",function(e){
    e.preventDefault();
    signOut(auth).then(() => {
        setTimeout(()=>window.location="index.html",1500);
      
      }).catch((error) => {
        alert(error.message);
      });
    
})






