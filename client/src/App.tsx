import { Container, NextArrow, PrevArrow } from "./components";
import Slider from "react-slick";
import carousel1 from "./assets/carousel1.webp";
import carousel2 from "./assets/carousel2.webp";
import carousel3 from "./assets/carousel3.webp";

function App() {
  const images: string[] = [carousel1, carousel2, carousel3];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Container>
      <Slider {...settings} className="relative overflow-hidden">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt="carousel_img"
            className="h-[650px] w-full object-cover object-center"
          />
        ))}
      </Slider>
    </Container>
  );
}

export default App;
