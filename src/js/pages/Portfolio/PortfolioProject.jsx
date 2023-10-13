import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPortfolioDataWithImages } from "../../api/FirestoreApi";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import BreakTextIntoLines from "../../utils/BreakTextIntoLines";

function PortfolioProject() {
  const { title } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const splitDescription = projectData
    ? BreakTextIntoLines(projectData.description)
    : [];

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectData = await fetchPortfolioDataWithImages();
        const project = projectData.find(
          (job) => job.projectName === decodeURIComponent(title)
        );
        setProjectData(project);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjectData();
  }, [title]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="project__post">
          <div className="project__post--title">
            <p>{projectData.category}</p>
            <h2>{projectData.projectName}</h2>
            <p>{projectData.projectDesc}</p>
            <img src={projectData.thumbnailImage} />
          </div>
          <div className="project__post--columns">
            <div className="left-column">
              {projectData.images.map((image) => (
                <img key={image.id} src={image} />
              ))}
            </div>
            <div className="right-column">
              <h2>{projectData.projectName}</h2>
              {splitDescription.map((line, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
              <hr />
              <div className="list-one">
                <ul>
                  <li>
                    <span>Designers</span>
                  </li>
                  <li>
                    <span>Company</span>
                  </li>
                  <li>
                    <span>Partners</span>
                  </li>
                  <li>
                    <span>Awards</span>
                  </li>
                </ul>
                <ul>
                  <li>{projectData.designers}</li>
                  <li>{projectData.companyName}</li>
                  <li>{projectData.partners}</li>
                  <li>{projectData.awards}</li>
                </ul>
              </div>
              <hr />
              <div className="list-two">
                <span>Share</span>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faDribbble} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default PortfolioProject;
