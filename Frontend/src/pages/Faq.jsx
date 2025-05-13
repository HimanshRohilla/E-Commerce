import React from 'react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Faq = () => {
  const questions = [
    {
      question: "What materials do you use?",
      answer: "We use 100% recycled cardboard, plant-based inks, and biodegradable materials."
    },
    {
      question: "How long does production take?",
      answer: "Standard production takes 2-3 weeks. Rush options are available."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with carbon-neutral shipping options."
    },
    {
      question: "Can I get samples before ordering?",
      answer: "Yes, we provide sample kits for a small fee that's credited toward your first order."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <FadeInOnScroll>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.question}</h2>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
      </div>
    </div>
  );
};

export default Faq;