"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileView = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:hidden">
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
            <div className="relative group">
              <Link
                href="/products"
                className="text-black font-medium justify-between  flex items-center"
              >
                Products
              </Link>
            
            </div>

            <div className="relative group">
              <Link
                href="/portfolio"
                className="text-gray-800 font-medium  flex items-center justify-between transition-colors"
              >
                Portfolio
              </Link>
             
            </div>

            <div className="relative group ">
              <Link
                href="#"
                className="text-gray-800 font-medium flex items-center transition-colors justify-between "
              >
                Why Us
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </Link>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    href="/companies"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Companies
                  </Link>
                  <Link
                    href="/teams"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/blogs"
              className="text-gray-800 font-medium hover:text-teal-600 py-2 transition-colors"
            >
              Blogs
            </Link>

            {/* Contact Us Button (Mobile) */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-gradient-to-r from-teal-800 to-teal-600 text-white py-2 px-4 rounded-full font-medium hover:shadow-md transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
