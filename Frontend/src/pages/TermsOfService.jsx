import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">General Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these terms. 
              You must be at least 18 years old to use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Orders and Payments</h2>
            <p>
              All orders are subject to acceptance and availability. Prices are subject to change without notice. 
              Payment is required at the time of order.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <p>
              All content included in our services, such as text, graphics, logos, and images, 
              is our property or the property of our licensors and is protected by copyright laws.
            </p>
          </section>
        </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default TermsOfService;