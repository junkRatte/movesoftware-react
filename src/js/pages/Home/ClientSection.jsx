import goldline from "../../../assets/goldline.png";
import aven from "../../../assets/aven.png";
import kanba from "../../../assets/kanba.png";
import kyan from "../../../assets/kyan.png";
import spotify from "../../../assets/spotify.png";

function ClientSection() {
  return (
    <section className="homepage__clients">
      <div className="content-container">
        <h5>We are trusted by the best in the world</h5>
        <div className="homepage__clients--logos">
          <img src={goldline} />
          <img src={aven} />
          <img src={kanba} />
          <img src={kyan} />
          <img src={spotify} />
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
