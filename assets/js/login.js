let userName=document.querySelector("#typeEmailX");
let passWord=document.querySelector("#typePasswordX");
let login_btn=document.querySelector("#signIn");

let getUser=localStorage.getItem("username");
let getPassword=localStorage.getItem("password");
// login_btn.addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("fkdsgfkdjfgdkjb");
//     if(userName.value===""||passWord.value===""){
//         alert("please enter all data in login");
//     }
//     else{
//       if(getUser&&getUser===userName.value&&getPassword&&getPassword===passWord.value){
//         setTimeout(()=> {
//             window.location="index.html";
//         },1500);
//     }else{
//         console.log("password or username is wrong!!!");
//     }
//   }
   
// })





// { initializeApp } from
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  login_btn.addEventListener("click",function(e){
    e.preventDefault()
    var ema=userName.value;
    var pass=passWord.value;
    signInWithEmailAndPassword(auth, ema, pass)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("login in is ok ")
        setTimeout(()=> {
                      window.location="index.html";
                   },1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        alert("Email or password is wrongs")
        
      });

  });