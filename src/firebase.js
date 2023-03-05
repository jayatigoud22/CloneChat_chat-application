import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1l91qNt78mkDoN4Pe2rhSZbC7XFo2aHc",
  authDomain: "chat-9f46b.firebaseapp.com",
  projectId: "chat-9f46b",
  storageBucket: "chat-9f46b.appspot.com",
  messagingSenderId: "490240494245",
  appId: "1:490240494245:web:26b996ea6b54be1d9cdb4c"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
export const storage = getStorage();
export const db = getFirestore();
