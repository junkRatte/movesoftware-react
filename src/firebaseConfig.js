import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCY-B7aHW4rRccwMTZJmIQu628D1Rfr_nM",
  authDomain: "move-software.firebaseapp.com",
  projectId: "move-software",
  storageBucket: "move-software.appspot.com",
  messagingSenderId: "867199092595",
  appId: "1:867199092595:web:14a290118200fa185c2706",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
