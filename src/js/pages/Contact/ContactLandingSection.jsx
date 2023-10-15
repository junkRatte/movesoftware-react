import iconMail from "../../../assets/icon-mail.png";
import iconMap from "../../../assets/icon-map.png";
import iconPhone from "../../../assets/icon-phone.png";
function ContactLandingSection() {
  return (
    <section className="contactpage__landing">
      <div className="content-container">
        <div className="contactpage__landing--title">
          <h1>We&apos;re here to help</h1>
          <p>
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
        </div>
        <div className="contactpage__landing--cards">
          <div className="grid-card">
            <img src={iconMail} />
            <h3>Email Us</h3>
            <p>
              Ask us a question by email and we will respond within a few days.
            </p>
          </div>
          <div className="grid-card">
            <img src={iconMap} />
            <h3>Drop in on us</h3>
            <p>
              You can meet us at our office and discuss the details of your
              question.
            </p>
          </div>
          <div className="grid-card">
            <img src={iconPhone} />
            <h3>Call any time</h3>
            <p>Call us if your question requires an immediate response.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLandingSection;
