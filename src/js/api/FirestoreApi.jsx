import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

const dbRef = collection(firestore, "jobs");

export const addJob = (jobObject) => {
  return addDoc(dbRef, jobObject)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
