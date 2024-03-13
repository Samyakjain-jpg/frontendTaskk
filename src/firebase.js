import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg66qjKzmnaXJbMoJzXspUT9YGmLkhbNY",
  authDomain: "chat-a6a02.firebaseapp.com",
  projectId: "chat-a6a02",
  storageBucket: "chat-a6a02.appspot.com",
  messagingSenderId: "972242828019",
  appId: "1:972242828019:web:850a7d8031c7adc9821586",
  measurementId: "G-0500EWC6RV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
