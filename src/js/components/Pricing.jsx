import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Pricing() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <section className="pricing">
      <div className="pricing__title">
        <h2>Expand your options with a subscription</h2>
        <p>
          Choose the plan that suits you best! More features will be available
          thanks to individual plans.
        </p>
      </div>
      <div className="pricing__cards">
        <span>
          <p>Bill Monthly</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isSwitchOn}
              onChange={handleSwitchToggle}
            />
            <span className="slider"></span>
          </label>
          <p>Bill Anually</p>
        </span>
        <div className="pricing__cards--columns">
          <div className="card">
            <h2>Base</h2>
            <p>Free start for your project on our platform.</p>
            <span>
              <h3>0$</h3>
              <p>Per User / Per {isSwitchOn ? "Year" : "Month"}</p>
            </span>
            <hr />
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to editing all blocks
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Editing blocks together
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to all premium icons
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />A dedicated domain
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Ability to integrate with CMS
              </li>
            </ul>
            <Link to="/pricing" className="secondary-btn">
              Start for free
            </Link>
          </div>
          <div className="card">
            <h2>Standard</h2>
            <p>For a small company that wants to show what it&apos;s worth.</p>
            <span>
              <h3>{isSwitchOn ? "300$" : "30$"}</h3>
              <p>Per User / Per {isSwitchOn ? "Year" : "Month"}</p>
            </span>
            <hr />
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to editing all blocks
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Editing blocks together
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to all premium icons
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />A dedicated domain
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Ability to integrate with CMS
              </li>
            </ul>
            <Link to="/pricing" className="primary-btn">
              Start 14 Days Free Trial
            </Link>
          </div>
          <div className="card">
            <h2>Ultimate</h2>
            <p>For a large company that wants to achieve maximum returns</p>
            <span>
              <h3>{isSwitchOn ? "600$" : "60$"}</h3>
              <p>Per User / Per {isSwitchOn ? "Year" : "Month"}</p>
            </span>
            <hr />
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to editing all blocks
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Editing blocks together
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Access to all premium icons
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />A dedicated domain
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Ability to integrate with CMS
              </li>
            </ul>
            <Link to="/pricing" className="secondary-btn">
              Start 14 Days free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
