let userName=document.querySelector("#form3Example1c");
let email=document.querySelector("#form3Example3c");
let passWord=document.querySelector("#form3Example4c");
let aggre=document.querySelector("#form2Example3c");
let register_btn=document.querySelector("#sign-up");
// register_btn.addEventListener("click",function(e){
//     e.preventDefault();
//     if(userName.value===""||email.value===""||passWord.value===""){
       
//         alert("please enter all data");
//     }
//     else{
//        localStorage.setItem("username",userName.value);
//        localStorage.setItem("email",email.value);
//        localStorage.setItem("password",passWord.value);

//         setTimeout(()=> {
//             window.location="login.html";
//         },1500);
//     }
   
// })


// { initializeApp } from
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


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

  register_btn.addEventListener("click",function(e){
    e.preventDefault()
    var ema=email.value;
    var pass=passWord.value;
    createUserWithEmailAndPassword(auth, ema, pass)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setTimeout(()=> {
                      window.location="login.html";
                },1500);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        console.log(errorMessage);
        
      });

  });