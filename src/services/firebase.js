import firebase from 'firebase/app'
import 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUNbBuG2pH1-N3Uhx6Ho8t1I1VnnJXeQ4",
  authDomain: "sysped-433e3.firebaseapp.com",
  projectId: "sysped-433e3",
  storageBucket: "sysped-433e3.appspot.com",
  messagingSenderId: "970493482486",
  appId: "1:970493482486:web:f3ce4fcd0a9c59ec70e3d7",
  measurementId: "G-0BQ2B7PCED"
};


export const app = initializeApp(firebaseConfig)

