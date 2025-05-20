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
          <div className="flex flex-col space-y-4">
            <div>
              <Link
                href="/"
                className="text-black font-medium justify-between  flex items-center"
                onClick={() => setIsMenuOpen(false)}
               >
                Home
              </Link>
            </div>

            {/* Mobile dropdown menu items */}
            <div className="">
              <Link
                href="/services"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </div>

            <div className="">
              <Link
                href="/portfolio"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </div>

            <div>
              <Link
                href="/teams"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </Link>
            </div>

            <div>
              <Link
                href="/gallery"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Gallery
              </Link>
            </div>

            <div>
              <Link
                href="/testimonials"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Testimonial
              </Link>
            </div>

            <div>
              <Link
                href="/blogs"
                className="text-black font-medium justify-between  flex items-center"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Blogs
              </Link>
            </div>

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
