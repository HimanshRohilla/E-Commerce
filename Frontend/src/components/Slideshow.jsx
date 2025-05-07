import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/6169641/pexels-photo-6169641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    image: 'https://images.pexels.com/photos/6170396/pexels-photo-6170396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    image: 'https://images.pexels.com/photos/6169054/pexels-photo-6169054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Welcome to Cartonize
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
              Start building your smart packaging solutions!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;