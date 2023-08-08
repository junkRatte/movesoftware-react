import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getJobs } from "../../api/FirestoreApi";
import Loader from "../../components/Loader";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobApplyForm from "../../components/JobApplyForm";

function CareersPost() {
  const { title } = useParams();
  const [jobData, setJobData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobsData = await getJobs();
        const job = jobsData.find(
          (job) => job.jobTitle === decodeURIComponent(title)
        );
        setJobData(job);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobData();
  }, [title]);

  return (
    <div className="careers__bg">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Careers
          </Link>
          <section className="careers__post">
            <div className="careers__post--title">
              <div>
                <h2>{jobData.jobTitle}</h2>
                <p>
                  {jobData.jobCategory}, {jobData.location}
                </p>
              </div>
              <button className="primary-btn">Apply Now</button>
            </div>
            <hr />
            <div className="careers__post--body">
              <h5>Description:</h5>
              <p>{jobData.description}</p>
              <h5>Requirements:</h5>
              <p>{jobData.description}</p>
              <ul>
                {jobData.requirements.map((requirement) => (
                  <li key={jobData.id}>{requirement}</li>
                ))}
              </ul>
            </div>
          </section>
          <JobApplyForm />
        </>
      )}
    </div>
  );
}

export default CareersPost;
