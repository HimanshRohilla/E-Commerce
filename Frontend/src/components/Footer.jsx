import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info - Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Cartonize</h2>
          <p className="text-gray-400">Premium packaging solutions for modern brands</p>
          <div className="pt-2">
            <p className="text-gray-400">Email us at:</p>
            <a href="mailto:cartonizeofficial@gmail.com" className="text-white hover:text-gray-300 transition">
            cartonizeofficial@gmail.com
            </a>
          </div>
        </div>

        {/* Policies - Right Side */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/about" className="hover:text-white transition">Our Process</a></li>
              <li><a href="/about" className="hover:text-white transition">Sustainability</a></li>
              <li><a href="" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Packaging Guide</a></li>
              <li><a href="#" className="hover:text-white transition">Design Tips</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="md:col-span-3 border-t border-gray-800 pt-8 mt-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Cartonize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;