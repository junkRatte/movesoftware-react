import DreamJobImg from "../../../assets/dream-job.png";

function CareersDreamSection() {
  return (
    <div className="content-container">
      <section className="careerspage__dream">
        <img src={DreamJobImg} />
        <div className="careerspage__dream--text">
          <h2>Find your dream job in our company</h2>
          <p>
            We hope that you will find a job that you have been dreaming about
            for a long time. If we don&apos;t have any vacancies send us your
            resume!
          </p>
        </div>
      </section>
    </div>
  );
}

export default CareersDreamSection;
