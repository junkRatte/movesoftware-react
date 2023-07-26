import { useEffect, useState } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import ImageCarouselMobile from "../../components/ImageCarouselMobile";

function AboutCarouselSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="aboutpage__carousel">
      <h2>What we&apos;re about</h2>
      <p>
        View our weekdays at the office! We work hard every day to create great
        products
        <br /> that will help you in your work.
      </p>
      {isMobile ? <ImageCarouselMobile /> : <ImageCarousel />}
    </section>
  );
}

export default AboutCarouselSection;
