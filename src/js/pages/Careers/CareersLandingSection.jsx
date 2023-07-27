import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CareersImg from "../../../assets/careers-landing.png";

function CareersLandingSection() {
  return (
    <div className="content-container">
      <section className="carrerspage__landing">
        <div>
          <h1>We are a small team that thinks big!</h1>
          <p>
            Have you been looking for a job for a long time where you will be
            welcome? Send your resume to work with us!
          </p>
          <Link to="/careers">
            Find an opening
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <img src={CareersImg} />
      </section>
    </div>
  );
}

export default CareersLandingSection;
