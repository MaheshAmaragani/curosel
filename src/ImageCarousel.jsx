import React, { useState, useEffect } from 'react';


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoSlide) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoSlide]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsAutoSlide(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoSlide(false);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
    setIsAutoSlide(false);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <button
          className="carousel-button prev"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button
          className="carousel-button next"
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
        >
          &gt;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;