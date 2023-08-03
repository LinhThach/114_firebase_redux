// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1SealbvQaFMW6dx0NECT7Cpbmb-CKtXw",
  authDomain: "notereact23.firebaseapp.com",
  databaseURL: "https://notereact23-default-rtdb.firebaseio.com",
  projectId: "notereact23",
  storageBucket: "notereact23.appspot.com",
  messagingSenderId: "1089454642877",
  appId: "1:1089454642877:web:d9593a7313eb78a56e89d4"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const data = firebase.database().ref("dataForNote");
