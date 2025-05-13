import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sustainability Commitment</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            At Cartonize, sustainability isn't just a buzzword - it's at the core of everything we do.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Materials</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>100% recycled cardboard and paper</li>
            <li>Plant-based inks</li>
            <li>Biodegradable protective materials</li>
            <li>Water-based adhesives</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Carbon Neutral Shipping</h2>
          <p>
            We offset all shipping emissions through verified carbon credit programs.
          </p>
        </div>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Sustainability;