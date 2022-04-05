import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUNbBuG2pH1-N3Uhx6Ho8t1I1VnnJXeQ4",
  authDomain: "sysped-433e3.firebaseapp.com",
  projectId: "sysped-433e3",
  storageBucket: "sysped-433e3.appspot.com",
  messagingSenderId: "970493482486",
  appId: "1:970493482486:web:f3ce4fcd0a9c59ec70e3d7",
  measurementId: "G-0BQ2B7PCED"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;