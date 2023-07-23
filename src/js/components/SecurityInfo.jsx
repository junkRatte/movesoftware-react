import { Link } from "react-router-dom";

function SecurityInfo() {
  return (
    <section className="security-info">
      <div className="security-info__container">
        <div className="security-info__text">
          <h2>Secure your data in minutes.</h2>
          <p>Prevent security breaches and save money.</p>
        </div>
        <div className="security-info__buttons">
          <Link className="secondary-btn">Learn more</Link>
          <Link className="primary-btn">Get started</Link>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default SecurityInfo;
