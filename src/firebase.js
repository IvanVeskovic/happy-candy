import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDkzYOtTwmiYhGr7RlsQ8HATzvz2MESFiU",
    authDomain: "donut-shop-be503.firebaseapp.com",
    projectId: "donut-shop-be503",
    storageBucket: "donut-shop-be503.appspot.com",
    messagingSenderId: "613072371728",
    appId: "1:613072371728:web:f7d4b113c15c805ddfca95",
    measurementId: "G-6EN21TLB18"
  };


  firebase.initializeApp(firebaseConfig);

  
  export const firebaseAuth = firebase.auth();