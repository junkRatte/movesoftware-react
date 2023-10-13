import iconFonts from "../../../assets/icon-fonts.png";
import iconSupport from "../../../assets/icon-support.png";
import iconImage from "../../../assets/icon-images.png";
import iconPremium from "../../../assets/icon-premium.png";
import iconResponsive from "../../../assets/icon-responsive.png";
import iconLayout from "../../../assets/icon-layout.png";

function PurchaseAdvantageSection() {
  return (
    <div className="pricingpage__advantage">
      <h2>View all of our advantages before purchasing</h2>
      <div className="pricingpage__advantage--grid">
        <div className="grid-card">
          <img src={iconLayout} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconResponsive} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconPremium} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconImage} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconSupport} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
        <div className="grid-card">
          <img src={iconFonts} />
          <h3>Flexible Planning</h3>
          <p>
            The rich features of our platform make it easy for your team members
            to plan with your product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PurchaseAdvantageSection;
