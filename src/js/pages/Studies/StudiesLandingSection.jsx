import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import studiesLandingImg from "../../../assets/studies-landing.png";

function StudiesLandingSection() {
  return (
    <section className="studiespage__landing">
      <div className="content-container">
        <div className="studiespage__landing--wrapper">
          <div>
            <h1>Hashtags affect the growth of product indicators</h1>
            <p>
              Today we spoke with Alpamys Moldashev, the founder of the
              Rockfiller studio. Here he will tell you how to use hashtags!
            </p>
            <Link>
              Read story <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <img src={studiesLandingImg} />
        </div>
      </div>
    </section>
  );
}

export default StudiesLandingSection;
