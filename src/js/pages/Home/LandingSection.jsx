import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import homeBg from "../../../assets/home-bg.png";

function LandingSection() {
  return (
    <section className="homepage__landing">
      <h1>Move is the perfect development tool</h1>
      <p>
        We have created software for each employee of your team to help them do
        their work more efficiently and better to plan, track and release great
        software!
      </p>
      <div className="homepage__landing--buttons">
        <Link to="/">
          <button className="secondary-btn">
            <FontAwesomeIcon icon={faGrinHearts} />
            View on Github
          </button>
        </Link>
        <Link to="/pricing">
          <button className="primary-btn">Go Premium</button>
        </Link>
      </div>
      <img src={homeBg} />
    </section>
  );
}

export default LandingSection;
