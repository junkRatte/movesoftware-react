import carouselImg1 from "../../assets/carousel-1.png";
import carouselImg2 from "../../assets/carousel-2.jpg";
import carouselImg3 from "../../assets/carousel-3.jpg";
import Slider from "infinite-react-carousel";

function ImageCarouselMobile() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  };

  return (
    <>
      <Slider {...settings}>
        <img src={carouselImg1} />
        <img src={carouselImg2} />
        <img src={carouselImg3} />
      </Slider>
    </>
  );
}

export default ImageCarouselMobile;
