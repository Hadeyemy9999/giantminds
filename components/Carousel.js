import { useState, useEffect } from 'react';

export default function Carousel({ slides, dots = true, testId = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const updateCarousel = (slide) => {
    setCurrentSlide(slide % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.3s ease',
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={testId ? 'testimonial-slide' : 'carousel-slide'}>
              <div className={testId ? 'testimonial-content' : 'carousel-content'}>
                {slide}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      {dots && (
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              data-slide={index}
              onClick={() => updateCarousel(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
