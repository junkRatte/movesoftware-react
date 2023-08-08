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
    const jobData = doc.data();
    const requirementsArray = jobData.requirements
      .split(",")
      .map((requirement) => requirement.trim());

    jobs.push({
      id: doc.id,
      ...jobData,
      requirements: requirementsArray,
    });
  });

  return jobs;
};
