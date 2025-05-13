import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Returns = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Exchanges</h1>
        <div className="prose prose-lg text-gray-600">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Return Policy</h2>
            <p>
              We accept returns of unused items within 30 days of delivery. Custom packaging 
              is non-returnable unless defective.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Return</h2>
            <p>
              Contact our customer service to initiate a return. You will receive instructions 
              and a return authorization number.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Refunds</h2>
            <p>
              Refunds are processed within 5-10 business days after we receive your return. 
              Original shipping costs are non-refundable.
            </p>
          </section>
        </div>
    </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Returns;