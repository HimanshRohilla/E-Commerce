import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Process = () => {
  const navigate = useNavigate();
  const steps = [
    {
      title: "1. Consultation",
      description: "We discuss your packaging needs, brand identity, and sustainability goals.",
      icon: "🗣️"
    },
    {
      title: "2. Design",
      description: "Our team creates custom packaging designs tailored to your products.",
      icon: "✏️"
    },
    {
      title: "3. Prototyping",
      description: "We develop physical prototypes for your review and approval.",
      icon: "🛠️"
    },
    {
      title: "4. Production",
      description: "Your packaging is manufactured using sustainable materials and processes.",
      icon: "🏭"
    },
    {
      title: "5. Delivery",
      description: "Your custom packaging is delivered ready for use.",
      icon: "🚚"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <FadeInOnScroll>
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          ← Back
        </button>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h1>
        <p className="text-lg text-gray-600 mb-12">
          We follow a meticulous 5-step process to deliver packaging that perfectly represents your brand.
        </p>
        
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-4xl">{step.icon}</div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h2>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
    </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Process;