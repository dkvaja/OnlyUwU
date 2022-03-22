import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9ha-IwqCizBb7n22HJJXZ4nOONGLZYm4",
  authDomain: "chatwithme-d8fbb.firebaseapp.com",
  projectId: "chatwithme-d8fbb",
  storageBucket: "chatwithme-d8fbb.appspot.com",
  messagingSenderId: "896775636831",
  appId: "1:896775636831:web:7aa6bfb021b06ad3a7d8ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
