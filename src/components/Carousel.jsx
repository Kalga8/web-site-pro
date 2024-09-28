import ArrowBack from "../assets/arrows/arrow-back.webp";
import ArrowForward from "../assets/arrows/arrow-forward.webp";
import { useState } from "react";

function Carousel({ pictures }) {
  /*Fonctionnement slider*/
  console.log(pictures);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="slideContainer">
      {/*Flèches de navigation*/}
      {pictures.length > 1 && (
        <div className="slides-navigation">
          <img
            className="navigation-back"
            src={ArrowBack}
            alt="Previous"
            onClick={goToPreviousSlide}
          />
          <img
            className="navigation-forward"
            src={ArrowForward}
            alt="Next"
            onClick={goToNextSlide}
          />
        </div>
      )}

      {/*Slide*/}
      <div className="slider">
        <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
    </div>
  );
}

export default Carousel;