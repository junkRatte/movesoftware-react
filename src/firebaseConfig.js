import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: process.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.VITE_REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
