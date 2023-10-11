function PortfolioContactSection() {
  return (
    <section className="portfoliopage__contact">
      <div className="content-container">
        <h2>Get great articles direct to your inbox</h2>
        <p>
          The latest Move news, articles and resources, sent straight to your
          inbox every month.
        </p>
        <div className="portfoliopage__contact--input">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioContactSection;
