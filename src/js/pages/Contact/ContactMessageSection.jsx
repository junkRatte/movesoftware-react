function ContactMessageSection() {
  return (
    <section className="contactpage__message">
      <div className="content-container">
        <div className="contactpage__message--title">
          <h2>Leave a message</h2>
          <p>
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
        </div>
        <div className="contactpage__message--form">
          <form>
            <div>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Contact Number" />
            </div>
            <textarea placeholder="How can we help?" />
            <button className="primary-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMessageSection;
