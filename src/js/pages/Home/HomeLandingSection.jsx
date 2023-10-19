import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import homeBg from "../../../assets/home-bg.png";

function HomeLandingSection() {
  return (
    <section className="homepage__landing">
      <div className="content-container">
        <h1>test3</h1>
        <h1>Move is the perfect development tool</h1>
        <p>
          We have created software for each employee of your team to help them
          do their work more efficiently and better to plan, track and release
          great software!
        </p>
        <div className="homepage__landing--buttons">
          <Link to="/">
            <button className="secondary-btn">
              <FontAwesomeIcon icon={faCodeCompare} />
              View on Github
            </button>
          </Link>
          <Link to="/pricing">
            <button className="primary-btn">Go Premium</button>
          </Link>
        </div>
        <img src={homeBg} />
      </div>
    </section>
  );
}

export default HomeLandingSection;
