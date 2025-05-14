import React from "react";
import { useNavigate } from "react-router-dom";
import FadeInOnScroll from "../components/FadeInOnScroll";

// Data moved to a separate constant for better organization
const stories = [
    {
      id: 1,
      title: "GreenSneakers: Running Towards Sustainability",
      excerpt: "How our eco-friendly boxes helped a shoe brand stand out in a crowded market",
      image: "./images/About2.jpg",
      logo: "./images/ClientLogo.jpg",
      challenge: "As a new sustainable sneaker brand, GreenSneakers needed packaging that matched their environmental values but also stood out on retail shelves.",
      solution: "We developed a custom corrugated box made from 100% post-consumer recycled materials with a unique origami-inspired opening mechanism that became part of their unboxing experience.",
      results: [
        "40% increase in social media mentions due to unique unboxing experience",
        "First sustainable sneaker brand to be carried in major retail chains",
        "Reduced packaging waste by 75% compared to industry standard"
      ],
      quote: "Cartonize's packaging didn't just hold our shoes—it told our brand story before customers even opened the box. It's been a game-changer for our retail presence."
    },
    {
      id: 2,
      title: "Bloom Cosmetics: Luxury Unboxed",
      excerpt: "Elevating a skincare line with premium packaging that customers keep",
      image: "./images/About3.jpg",
      logo: "./images/ClientLogo1.jpg",
      challenge: "Bloom Cosmetics wanted packaging that reflected their premium positioning but struggled to find options that balanced luxury with sustainability.",
      solution: "We created a signature velvet-finish box with magnetic closure using plant-based materials, including a built-in drawer for samples that increased cross-selling.",
      results: [
        "62% of customers reported reusing the packaging for storage",
        "28% increase in repeat purchases attributed to packaging experience",
        "Featured in 'Top 10 Luxury Packaging Designs' by Beauty Insider"
      ],
      quote: "Our Cartonize boxes have become part of our brand identity. Customers actually collect them—we've had requests to sell empty boxes!"
    },
    {
      id: 3,
      title: "BeanThere Coffee: Brewing a Packaging Revolution",
      excerpt: "How compostable packaging helped a coffee startup disrupt the industry",
      image: "./images/About4.jpg",
      logo: "./images/ClientLogo2.jpg",
      challenge: "BeanThere needed packaging that kept coffee fresh while aligning with their zero-waste mission and standing up to shipping demands.",
      solution: "We developed a multi-layer compostable bag with plant-based barrier protection and matching shipping boxes that customers could plant to grow wildflowers.",
      results: [
        "First coffee company to achieve Plastic Neutral certification",
        "Customer retention increased by 45% after packaging redesign",
        "Featured in Sustainable Business Magazine's 'Top 10 Eco-Packaging'"
      ],
      quote: "Cartonize understood our 'ground-to-ground' philosophy. Their packaging solution helped us differentiate in a market where most bags end up in landfills."
    },
];

const StoryCard = ({ story, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
    onClick={onClick}
  >
    <div className="h-48 relative">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white font-semibold text-lg">{story.title}</h3>
        <p className="text-gray-200 text-sm">{story.excerpt}</p>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img 
            src={story.logo} 
            alt="Client logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">Featured Client</p>
        </div>
      </div>
      <div className="mb-4 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{story.challenge}</p>
      </div>
    </div>
  </div>
);

const CTA = ({ navigate }) => (
  <div className="bg-black text-white p-12 rounded-2xl text-center">
    <h2 className="text-3xl font-bold mb-6">
      Ready to Transform Your Packaging?
    </h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Whether you're a startup or established brand, we'll create packaging that tells your story.
    </p>
    <button
      onClick={() => navigate("/contact")}
      className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
    >
      Get Started Today
    </button>
  </div>
);

const ClientStories = () => {
  const navigate = useNavigate();
  
  const handleStoryClick = (storyId) => {
    navigate(`/client-stories/${storyId}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <FadeInOnScroll>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our packaging solutions have helped brands of all sizes stand out, 
            reduce waste, and create unforgettable unboxing experiences.
          </p>
        </div>
        </FadeInOnScroll>

        {/* Stories Grid */}
        <FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map(story => (
            <StoryCard 
              key={story.id} 
              story={story}
              onClick={() => handleStoryClick(story.id)}
            />
          ))}
        </div>
        </FadeInOnScroll>

        {/* CTA Section */}
        <FadeInOnScroll>
        <CTA navigate={navigate} />
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default ClientStories;