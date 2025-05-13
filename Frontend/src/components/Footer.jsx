import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  // For React Router v6 active styling
  const navLinkClass = ({ isActive }) => 
    `hover:text-white transition ${isActive ? 'text-white' : 'text-gray-400'}`;

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
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className={navLinkClass}>
                  Our Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/sustainability" className={navLinkClass}>
                  Sustainability
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/faq" className={navLinkClass}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/packaging-guide" className={navLinkClass}>
                  Packaging Guide
                </NavLink>
              </li>
              <li>
                <NavLink to="/design-tips" className={navLinkClass}>
                  Design Tips
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/privacy-policy" className={navLinkClass}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className={navLinkClass}>
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/shipping-policy" className={navLinkClass}>
                  Shipping Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/returns" className={navLinkClass}>
                  Returns
                </NavLink>
              </li>
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