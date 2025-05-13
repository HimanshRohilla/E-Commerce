import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate(); // Hook for navigation

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Cartons",
      description: "Sustainable packaging made from recycled materials",
      image: "./images/EcoFriendly.jpg",
    },
    {
      id: 2,
      name: "Custom Printed Boxes",
      description: "Fully customizable designs for your brand",
      image: "./images/CustomPrinted.jpg",
    },
    {
      id: 3,
      name: "Shipping Boxes",
      description: "Durable protection for your shipments",
      image: "./images/Shipping.jpg",
    },
    {
      id: 4,
      name: "Luxury Gift Boxes",
      description: "Premium packaging for high-end products",
      image: "./images/LuxryGift.jpg",
    },
  ];

  const handleViewDetails = (productId) => {
    // Navigate to products page with the product ID
    navigate(`/products/${productId}`);
    // Optional: Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Carton Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  onClick={() => handleViewDetails(product.id)}
                  className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;