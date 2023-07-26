import { Link } from "react-router-dom";
import teamImg from "../../../assets/about-landing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AboutLandingSection() {
  return (
    <section className="aboutpage__landing">
      <img src={teamImg} />
      <div>
        <h1>A team that creates amazing products</h1>
        <p>
          Get to know our team members better. Find out what we do and how we
          want to make the world a better place.
        </p>
        <Link>
          Meet the crew <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
}

export default AboutLandingSection;
