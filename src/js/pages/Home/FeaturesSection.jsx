import stats from "../../../assets/stats.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FeaturesSection() {
  return (
    <section className="homepage__features">
      <div>
        <h2>Everything you need in one place</h2>
        <p>
          Powerful metrics to better understand your business are right at your
          fingertips, once you start working with them!
        </p>
        <div className="homepage__features--checks">
          <p>
            <FontAwesomeIcon icon={faCheck} />
            Real-time data
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            End-to-end encryption
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            FDIC Insured
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            REST API enabled
          </p>
        </div>
        <Link to="/pricing">
          Explore more features
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <img src={stats} id="stats" />
    </section>
  );
}

export default FeaturesSection;
