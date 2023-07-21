import iconPlanning from "../../../assets/icon-planning.png";
import iconTransparent from "../../../assets/icon-transparent.png";
import iconResults from "../../../assets/icon-results.png";
import iconScalable from "../../../assets/icon-scalable.png";
import iconCloud from "../../../assets/icon-cloud.png";
import iconaAnalytics from "../../../assets/icon-analytics.png";

function FeaturesGridSection() {
  return (
    <section className="homepage__grid">
      <div className="homepage__grid--title">
        <h2>Go Move with ease</h2>
        <p>
          Learn all the features to make your process even faster and more
          exciting. Our product is ready to give you a pleasant interaction
          experience.
        </p>
      </div>
      <div className="homepage__grid--grid">
        <div className="grid-card">
          <img src={iconPlanning} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconTransparent} />
          <h3>Transparent execution</h3>
          <p>
            Our software brings transparency to your work processes and the
            entire ecosystem.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconResults} />
          <h3>Actionable results</h3>
          <p>
            When working with metrica our API manager can help you connect it
            safely and get the latest statistics.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconScalable} />
          <h3>Scalable evolution</h3>
          <p>
            Move software helps people in your team work with project resolution
            without losing quality.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconCloud} />
          <h3>Cloud Storage</h3>
          <p>
            You can store your projects without leaving our product. Move Cloud
            will help you do this.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconaAnalytics} />
          <h3>Analytics API</h3>
          <p>
            When working with metrica our API manager can help you connect it
            safely and get the latest statistics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesGridSection;
