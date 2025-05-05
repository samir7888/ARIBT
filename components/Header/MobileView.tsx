'use client'
import React, { useState } from "react";

const MobileView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:hidden"
    >
      {/* Mobile Menu Button */}
      <button className=" flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 right-4 md:hidden bg-white shadow-lg border border-gray-200 p-4 rounded-xl mt-2 z-50">
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Home
            </a>

            {/* Mobile dropdown menu items */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
                >
                  Products
                </a>
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
                >
                  Portfolio
                </a>
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
                >
                  Why Us
                </a>
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <a
              href="#"
              className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Blogs
            </a>

            {/* Contact Us Button (Mobile) */}
            <div className="pt-2">
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-teal-800 to-teal-600 text-white py-2 px-4 rounded-full font-medium hover:shadow-md transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
