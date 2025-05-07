import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Common nav links component with improved styling
  const NavLinks = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'flex flex-col space-y-2' : 'hidden md:flex items-center space-x-2'}`}>
      <NavLink 
        to="/" 
        className={({ isActive }) =>    
          `px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive ? 'text-white font-medium bg-gray-900/80' : 'text-gray-200 hover:bg-gray-800/80'
          }`
        }
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink 
        to="/productspage" 
        className={({ isActive }) => 
          `px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive ? 'text-white font-medium bg-gray-900/80' : 'text-gray-200 hover:bg-gray-800/80'
          }`
        }
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        Products
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive ? 'text-white font-medium bg-gray-900/80' : 'text-gray-200 hover:bg-gray-800/80'
          }`
        }
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive ? 'text-white font-medium bg-gray-900/80' : 'text-gray-200 hover:bg-gray-800/80'
          }`
        }
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        Contact
      </NavLink>
    </div>
  );

  return (
    <>
      <nav className="bg-gray-900/90 text-white fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Name */}
            <Link to="/" className="text-3xl md:text-4xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-200">
              Cartonize
            </Link>

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800/80 focus:outline-none transition-colors duration-200"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-900/95 backdrop-blur-md">
            <NavLinks isMobile />
          </div>
        </div>
      </nav>

      {/* Add padding to the top of the page content to account for the fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;