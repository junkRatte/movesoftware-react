import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

const dbRefJobs = collection(firestore, "jobs");
const dbRefStudies = collection(firestore, "studies");
const dbRefBlogs = collection(firestore, "blogs");
const dbRefPortfolios = collection(firestore, "portfolios");

export const addJob = (jobObject) => {
  return addDoc(dbRefJobs, jobObject)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const getJobs = async () => {
  const querySnapshot = await getDocs(dbRefJobs);
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

export const addStudy = (studyObject) => {
  return addDoc(dbRefStudies, studyObject)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const fetchStudyDataWithImages = async () => {
  const querySnapshot = await getDocs(dbRefStudies);
  const studyDataArray = [];

  querySnapshot.forEach((doc) => {
    const studyData = doc.data();
    studyDataArray.push(studyData);
  });

  return studyDataArray;
};

export const addBlog = (blogObject) => {
  return addDoc(dbRefBlogs, blogObject)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const fetchBlogDataWithImages = async () => {
  const querySnapshot = await getDocs(dbRefBlogs);
  const blogDataArray = [];

  querySnapshot.forEach((doc) => {
    const blogData = doc.data();
    blogDataArray.push(blogData);
  });

  return blogDataArray;
};

export const addPortfolio = (portfolioObject) => {
  return addDoc(dbRefPortfolios, portfolioObject)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const fetchPortfolioDataWithImages = async () => {
  const querySnapshot = await getDocs(dbRefPortfolios);
  const portfolioDataArray = [];

  querySnapshot.forEach((doc) => {
    const portfolioData = doc.data();
    portfolioDataArray.push(portfolioData);
  });

  return portfolioDataArray;
};
