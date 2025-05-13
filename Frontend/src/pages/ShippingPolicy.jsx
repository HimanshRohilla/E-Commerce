import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
        <div className="prose prose-lg text-gray-600">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Processing Time</h2>
            <p>
              Orders are typically processed within 2-3 business days. During peak seasons, 
              processing may take longer.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Options</h2>
            <p>
              We offer standard and expedited shipping options. All shipping is carbon-neutral. 
              International shipping is available to most countries.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tracking</h2>
            <p>
              You will receive a tracking number once your order ships. Delivery times are estimates 
              and not guaranteed.
            </p>
          </section>
        </div>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default ShippingPolicy;