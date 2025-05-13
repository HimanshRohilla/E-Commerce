import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const PackagingGuide = () => {
  const sections = [
    {
      title: "Choosing the Right Materials",
      content: "Learn how to select materials that protect your product while aligning with your sustainability goals."
    },
    {
      title: "Design Considerations",
      content: "Key factors to consider when designing your packaging for both aesthetics and functionality."
    },
    {
      title: "Size Optimization",
      content: "How to choose the right package size to minimize waste and shipping costs."
    },
    {
      title: "Branding Your Packaging",
      content: "Tips for making your packaging an extension of your brand identity."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Packaging Guide</h1>
        <div className="prose prose-lg text-gray-600 mb-8">
          <p>
            Our comprehensive guide to help you make informed decisions about your packaging needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default PackagingGuide;