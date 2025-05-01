"use client";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{ fontFamily: "Noir", zIndex: "1000 !important"}}
      className="fixed top-0   left-0 right-0 flex justify-center py-4 px-4"
    >
      <div className="w-full max-w-4xl mx-auto bg-white rounded-full border border-gray-200 h-16 flex items-center  ">
        <div className="w-full p-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-lg font-bold ">
              <Image
                src={logo}
                width={70}
                height={70}
                alt="ARIBT"
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex mt-2 items-center space-x-8 text-xl">
            <a href="#" className="text-black  ">
              Home
            </a>
            <div
              
              className="relative group"
            >
              <a href="#" className="text-black font-medium  flex items-center">
                Products
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </a>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 3
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-800 font-medium  flex items-center transition-colors"
              >
                Portfolio
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </a>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 3
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="#"
                className="text-gray-800 font-medium flex items-center transition-colors"
              >
                Why Us
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </a>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Vision
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-800 font-medium ">
              Blogs
            </a>
          </div>

          {/* Contact Us Button (Desktop) */}
          <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="hidden md:flex bg-[#04413DCC] text-white w-40  h-13 px-5 items-center   rounded-full border hover:pl-8 ease-in-out duration-600 border-brand"
            style={{ fontFamily: "Aeonik" }}
          >
            Contact Us
            <span>{isHover ? "" : <ChevronRight />}</span>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
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
        </div>
      </div>

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
    </nav>
  );
}
