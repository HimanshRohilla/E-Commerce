import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const DesignTips = () => {
  const tips = [
    "Keep your design simple and clean for maximum impact",
    "Use your brand colors consistently",
    "Consider how your packaging will look on shelves",
    "Leave space for required labeling and barcodes",
    "Think about the unboxing experience",
    "Test your design at actual size before finalizing"
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Packaging Design Tips</h1>
        <div className="prose prose-lg text-gray-600 mb-8">
          <p>
            Professional tips to make your packaging stand out while remaining functional.
          </p>
        </div>
        
        <ul className="space-y-4 list-disc pl-6">
          {tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default DesignTips;