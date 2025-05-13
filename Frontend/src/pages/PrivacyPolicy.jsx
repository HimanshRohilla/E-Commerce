import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly, including when you place an order, 
              or contact us for support. This may include name, email, shipping address, and payment information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Information</h2>
            <p>
              We use the information we collect to process orders, improve our services, communicate with you, 
              and for security and fraud prevention.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              Payment information is processed through secure third-party processors.
            </p>
          </section>
        </div>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default PrivacyPolicy;