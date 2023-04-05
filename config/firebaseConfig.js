// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP85DWvfQCWeAMY-R4Dvh3fkTKDPs2zbE",
  authDomain: "azuria-d0a5c.firebaseapp.com",
  databaseURL: "https://azuria-d0a5c-default-rtdb.firebaseio.com",
  projectId: "azuria-d0a5c",
  storageBucket: "azuria-d0a5c.appspot.com",
  messagingSenderId: "433235334722",
  appId: "1:433235334722:web:bbb6baac1fc6fde7823fdb",
  measurementId: "G-SERK03XTJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
// const analytics = getAnalytics(app);
