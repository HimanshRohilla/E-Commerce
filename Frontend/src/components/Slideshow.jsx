import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: './images/SlideShow1.jpg',
  },
  {
    image: './images/SlideShow2.jpg',
  },
  {
    image: './images/SlideShow3.jpg',
  }
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current
              ? 'opacity-100 scale-100 z-20'
              : 'opacity-0 scale-105 z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {index === current && (
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Welcome to Cartonize
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
                Start building your smart packaging solutions!
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;