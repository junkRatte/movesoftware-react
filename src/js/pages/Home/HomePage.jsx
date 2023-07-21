import ClientSection from "./ClientSection";
import DataSection from "./DataSection";
import FeaturesGridSection from "./FeaturesGridSection";
import FeaturesSection from "./FeaturesSection";
import LandingSection from "./LandingSection";
import VideoSection from "./VideoSection";

function Homepage() {
  return (
    <>
      <LandingSection />
      <ClientSection />
      <FeaturesSection />
      <DataSection />
      <VideoSection />
      <FeaturesGridSection />
    </>
  );
}

export default Homepage;
