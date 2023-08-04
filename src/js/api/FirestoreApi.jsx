import { addDoc, collection, getDocs } from "firebase/firestore";
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

export const getJobs = async () => {
  const querySnapshot = await getDocs(dbRef);
  const jobs = [];

  querySnapshot.forEach((doc) => {
    jobs.push({ id: doc.id, ...doc.data() });
  });
  return jobs;
};
