import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import MobileView from "./MobileView";

export default function Navbar() {
  return (
    <nav
      style={{ fontFamily: "Noir", zIndex: "1000" }}
      className="sticky top-0 flex justify-center py-4 px-4"
    >
      <div className="w-full max-w-4xl mx-auto bg-white rounded-full shadow-md border border-gray-200 h-16 flex items-center  ">
        <div className="w-full p-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-bold ">
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
            <Link href="/" className="text-black  ">
              Home
            </Link>
            <div className="relative group">
              <Link href="#" className="text-black font-medium  flex items-center">
                Products
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </Link>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Product 3
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="#"
                className="text-gray-800 font-medium  flex items-center transition-colors"
              >
                Portfolio
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </Link>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Project 3
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="#"
                className="text-gray-800 font-medium flex items-center transition-colors"
              >
                Why Us
                <ChevronDown className="group-hover:hidden ml-1  mb-1" />
                <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
              </Link>
              {/* Dropdown for desktop */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blogs" className="text-gray-800 font-medium ">
              Blogs
            </Link>
          </div>

          {/* Contact Us Button (Desktop) */}
          <button
            className="hidden group md:flex bg-brand text-white w-40  h-13 px-5 items-center  rounded-full border hover:pl-8  duration-600 border-brand font-aeonik"
            
          >
            Contact Us
            <ChevronRight className="group-hover:hidden" />
          </button>


          <MobileView />
        </div>
      </div>
    </nav>
  );
}
