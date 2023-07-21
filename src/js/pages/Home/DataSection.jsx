import cliImg from "../../../assets/cli-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DataSection() {
  return (
    <section className="homepage__data">
      <div className="test">
        <img src={cliImg} />
        <div>
          <h2>Universal access to your data</h2>
          <p>
            Get access to your data through any additional software or try
            integrating it into our system, while we show you resource usage
            statistics.
          </p>
          <ul>
            <li>
              <span>5.0/5.0</span>
              <p>Review Score</p>
            </li>
            <li>
              <span>300K+</span>
              <p>Monthly Installs</p>
            </li>
            <li>
              <span>99.99%</span>
              <p>Satisfaction</p>
            </li>
          </ul>
          <Link>
            View our API <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DataSection;
