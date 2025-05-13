import React from 'react';
import Slideshow from '../components/Slideshow';
import Products from '../components/Products';
import AboutUs from '../components/AboutUs';
import FadeInOnScroll from '../components/FadeInOnScroll';


const Home = () => {
  return (
    <div>
      <Slideshow /> 
      <FadeInOnScroll>
        <Products />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <AboutUs />
      </FadeInOnScroll>
    </div>
  );
};

export default Home;