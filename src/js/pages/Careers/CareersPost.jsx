import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobs } from "../../api/FirestoreApi";
import Loader from "../../components/Loader";

function CareersPost() {
  const { title } = useParams();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobsData = await getJobs();
        const job = jobsData.find(
          (job) => job.jobTitle === decodeURIComponent(title)
        );
        setJobData(job);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobData();
  }, [title]);

  if (!jobData) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{jobData.jobTitle}</h1>
      <h1>{jobData.location}</h1>
    </div>
  );
}

export default CareersPost;
