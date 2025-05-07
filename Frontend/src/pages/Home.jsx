import React from 'react';
import Slideshow from '../components/Slideshow';
import Products from '../components/Products';
import AboutUs from '../components/AboutUs';


const Home = () => {
  return (
    <div>
      <Slideshow /> 
      <Products />
      <AboutUs />
    </div>
  );
};

export default Home;