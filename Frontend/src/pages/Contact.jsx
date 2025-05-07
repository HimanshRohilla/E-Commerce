import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boxType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await axios.post(
        'http://localhost:5000/api/contact', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.data.success) {
        setSubmitStatus({
          success: true,
          message: response.data.message
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          boxType: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 
                'There was an error submitting your form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-4"><strong>Email:</strong> cartonizeofficial@gmail.com</p>
            <p className="mb-4"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-4"><strong>Address:</strong> 123 Packaging St, Boxville</p>
            <p className="mb-4"><strong>Hours:</strong> Mon-Fri: 9AM-5PM</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Request a Quote</h2>
            
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`mb-4 p-4 rounded ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                />
              </div>
              
              <div>
                <label htmlFor="boxType" className="block mb-1">Box Type Needed</label>
                <select
                  id="boxType"
                  name="boxType"
                  value={formData.boxType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select a box type</option>
                  <option value="eco-friendly">Eco-Friendly Boxes</option>
                  <option value="custom-printed">Custom Printed Boxes</option>
                  <option value="shipping">Shipping Boxes</option>
                  <option value="luxury">Luxury Gift Boxes</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;