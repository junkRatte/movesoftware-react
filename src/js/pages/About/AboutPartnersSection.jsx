import { BusinessPartners } from "../../data/BusinessPartners";

function AboutPartners() {
  return (
    <section className="aboutpage__partners">
      <h2>Companies that have already rated us</h2>
      <p>
        Read reviews of popular companies that have already appreciated working
        with our team and are happy with the result.
      </p>
      <div className="aboutpage__partners--cards">
        {BusinessPartners.map((partner) => (
          <div key={partner.id}>
            <img src={partner.img} />
            <p>&quot;{partner.comment}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPartners;
