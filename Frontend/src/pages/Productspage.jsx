import React, { useState } from 'react';
import axios from 'axios';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Productspage = () => {
  const [activeCategory, setActiveCategory] = useState('eco-friendly');
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sampleForm, setSampleForm] = useState({ email: '', shippingAddress: '' });
  const [customizationForm, setCustomizationForm] = useState({
    email: '',
    customText: '',
    colorPreference: '',
    additionalNotes: ''
  });

  const categories = [
    { id: 'eco-friendly', name: 'Eco-Friendly Boxes' },
    { id: 'custom-printed', name: 'Custom Printed Boxes' },
    { id: 'shipping', name: 'Shipping Boxes' },
    { id: 'luxury', name: 'Luxury Gift Boxes' }
  ];

  const productImages = {
    'eco-friendly': ['./images/EcoFriendly3.jpg', './images/EcoFriendly2.jpg'],
    'custom-printed': ['./images/CustomPrinted2.jpg', './images/CustomPrinted3.jpg'],
    'shipping': ['./images/ShippingBox.jpg', './images/ShippingBox1.jpg'],
    'luxury': ['./images/LuxuryGift1.jpg', './images/LuxuryGift2.jpg']
  };

  const products = {
    'eco-friendly': [
      {
        id: 1,
        name: 'Recycled Cardboard Box',
        price: '$0.50',
        description: 'Made from 100% post-consumer recycled materials',
        features: ['FSC-certified', 'Biodegradable', 'Custom sizes']
      },
      {
        id: 2,
        name: 'Kraft Paper Box',
        price: '$0.75',
        description: 'Unbleached natural kraft paper',
        features: ['No plastic coatings', 'Reinforced corners']
      }
    ],
    'custom-printed': [
      {
        id: 3,
        name: 'Standard Print Box',
        price: '$1.20',
        description: 'Vibrant CMYK printing on one side',
        features: ['250gsm cardstock', '1-3 day turnaround']
      },
      {
        id: 4,
        name: 'Premium Print Box',
        price: '$2.00',
        description: 'Full color printing on all sides',
        features: ['350gsm premium stock', 'Embossing available']
      }
    ],
    'shipping': [
      {
        id: 5,
        name: 'Standard Shipping Box',
        price: '$0.80',
        description: '32 ECT corrugated cardboard',
        features: ['Burst strength: 200lbs', 'Weather resistant']
      },
      {
        id: 6,
        name: 'Heavy Duty Box',
        price: '$1.50',
        description: '44 ECT construction',
        features: ['Burst strength: 275lbs', 'Double-wall']
      }
    ],
    'luxury': [
      {
        id: 7,
        name: 'Velvet Gift Box',
        price: '$3.50',
        description: 'Premium velvet finish',
        features: ['Custom color matching', 'Debossed logo']
      },
      {
        id: 8,
        name: 'Embossed Gift Box',
        price: '$4.00',
        description: 'Gold or silver foil embossed',
        features: ['Linen texture', 'Custom inserts']
      }
    ]
  };

  const openSampleModal = (product) => {
    setSelectedProduct(product);
    setShowSampleModal(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const openCustomizeModal = (product) => {
    setSelectedProduct(product);
    setShowCustomizeModal(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const closeModals = () => {
    setShowSampleModal(false);
    setShowCustomizeModal(false);
    setSampleForm({ email: '', shippingAddress: '' });
    setCustomizationForm({
      email: '',
      customText: '',
      colorPreference: '',
      additionalNotes: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (showSampleModal) {
      setSampleForm((prev) => ({ ...prev, [name]: value }));
    } else if (showCustomizeModal) {
      setCustomizationForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSampleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://e-commerce-ir67.onrender.com/api/productsamples',
        {
          productId: selectedProduct.id,
          email: sampleForm.email,
          shippingAddress: sampleForm.shippingAddress
        },
        { headers: { 'x-auth-token': token } }
      );
      setSuccessMessage('Sample request submitted! You will receive a confirmation email shortly.');
      setTimeout(closeModals, 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to submit request. Please try again.');
    }
  };

  const handleCustomizeSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://e-commerce-ir67.onrender.com/api/customizations',
        {
          productId: selectedProduct.id,
          email: customizationForm.email,
          customText: customizationForm.customText,
          colorPreference: customizationForm.colorPreference,
          additionalNotes: customizationForm.additionalNotes
        },
        { headers: { 'x-auth-token': token } }
      );
      setSuccessMessage('Customization request submitted! You will receive a confirmation email shortly.');
      setTimeout(closeModals, 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to submit request. Please try again.');
    }
  };

  const categoryDescription = {
    'eco-friendly': 'Our eco-friendly packaging solutions are made from sustainable materials that don\'t compromise on quality.',
    'custom-printed': 'Make your brand stand out with fully customizable printed boxes with high-quality, fade-resistant inks.',
    'shipping': 'Designed for protection and durability, our shipping boxes undergo rigorous testing to ensure your products arrive safely.',
    'luxury': 'Elevate your unboxing experience with our premium luxury packaging designed to make a lasting impression.'
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <h1 className="text-3xl font-bold text-center mb-8">Our Packaging Solutions</h1>
        </FadeInOnScroll>

        {/* Category buttons */}
        <FadeInOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Product cards */}
        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeCategory].map((product, index) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={productImages[activeCategory][index]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-bold">{product.price}</span>
                    <div className="space-x-3">
                      <button
                        onClick={() => openSampleModal(product)}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                      >
                        Request Sample
                      </button>
                      <button
                        onClick={() => openCustomizeModal(product)}
                        className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100 transition"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Description */}
        <FadeInOnScroll>
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              About Our {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-600">{categoryDescription[activeCategory]}</p>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Modals */}
      {(showSampleModal || showCustomizeModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              {showSampleModal ? `Request Sample: ${selectedProduct?.name}` : `Customize: ${selectedProduct?.name}`}
            </h3>
            {successMessage && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">{successMessage}</div>}
            {errorMessage && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{errorMessage}</div>}
            <form onSubmit={showSampleModal ? handleSampleSubmit : handleCustomizeSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={showSampleModal ? sampleForm.email : customizationForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                  placeholder="example@email.com"
                />
              </div>

              {showCustomizeModal && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Custom Text</label>
                    <input
                      type="text"
                      name="customText"
                      value={customizationForm.customText}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Your text here"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Color Preference</label>
                    <select
                      name="colorPreference"
                      value={customizationForm.colorPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select a color</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="Black">Black</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={customizationForm.additionalNotes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows="3"
                      placeholder="Any extra details..."
                    />
                  </div>
                </>
              )}

              {showSampleModal && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Shipping Address</label>
                  <textarea
                    name="shippingAddress"
                    value={sampleForm.shippingAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows="3"
                    required
                    placeholder="123 Main St, City, Country"
                  />
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button type="button" onClick={closeModals} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productspage;