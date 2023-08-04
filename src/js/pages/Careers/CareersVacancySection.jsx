import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../../api/FirestoreApi";

function CareersVacancySection() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobsData = async () => {
      const jobsData = await getJobs();
      setJobs(jobsData);
    };
    fetchJobsData();
  }, []);

  return (
    <section className="careerspage__vacancy">
      <div className="content-container">
        <div className="careerspage__vacancy--title">
          <h2>Free vacancy</h2>
          <p>
            Jobs that are available from us and looking for their own people!
            Browse our vacancies and find the one that is right for you!
          </p>
        </div>
        <div className="careerspage__vacancy--table">
          <table>
            <tr>
              <th>Position</th>
              <th>Department</th>
              <th>Location</th>
            </tr>
            {jobs.map((job) => (
              <Link
                key={job.id}
                to={`/careers/${encodeURIComponent(job.jobTitle)}`}
              >
                <tr>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobCategory}</td>
                  <td>{job.location}</td>
                </tr>
              </Link>
            ))}
          </table>
          <a className="secondary-btn">
            Don&apos;t see a good fit? Submit your resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default CareersVacancySection;
