import Pricing from "../../components/Pricing";
import SecurityInfo from "../../components/SecurityInfo";
import ClientSection from "./ClientSection";
import DataSection from "./DataSection";
import FeaturesGridSection from "./FeaturesGridSection";
import FeaturesSection from "./FeaturesSection";
import HomeLandingSection from "./HomeLandingSection";
import VideoSection from "./VideoSection";

function Homepage() {
  return (
    <>
      <HomeLandingSection />
      <ClientSection />
      <FeaturesSection />
      <DataSection />
      <VideoSection />
      <FeaturesGridSection />
      <Pricing />
      <SecurityInfo />
    </>
  );
}

export default Homepage;
