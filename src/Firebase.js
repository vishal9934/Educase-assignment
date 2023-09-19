import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIlYlUce2d7Ft5YTCpoG5GPdda_ASiMuw",
    authDomain: "educase-d4c0b.firebaseapp.com",
    projectId: "educase-d4c0b",
    storageBucket: "educase-d4c0b.appspot.com",
    messagingSenderId: "1051513560385",
    appId: "1:1051513560385:web:acc77a8e19ede2be1255c0",
    databaseURL: "https://educase-d4c0b-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);