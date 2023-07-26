import { useState } from "react";
import carouselImg1 from "../../assets/carousel-1.png";
import carouselImg2 from "../../assets/carousel-2.jpg";
import carouselImg3 from "../../assets/carousel-3.jpg";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImageCarousel() {
  const images = [carouselImg1, carouselImg2, carouselImg3];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentImage]} />
      <div className="carousel__controls">
        <FontAwesomeIcon
          className="carousel__controls--left"
          icon={faArrowLeft}
          onClick={handlePrev}
        />
        <FontAwesomeIcon
          className="carousel__controls--right"
          icon={faArrowRight}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
