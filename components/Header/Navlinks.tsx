// app/components/NavLinks.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-brand font-semibold" : "text-black";

  return (
    <div className="hidden md:flex mt-2 items-center space-x-8 text-xl">
      <Link href="/" className={isActive("/")}>
        Home
      </Link>
      <div className="relative group">
        <Link
          href="/services"
           className={isActive("/services")}
        >
          Services
        </Link>
      </div>
      <div className="relative group">
        <Link
          href="/portfolio"
          className={isActive("/portfolio")}
        >
          Portfolio
        </Link>
      </div>
       <Link href="/blogs" className={isActive("/blogs")}>
        Blogs
      </Link>
      <div className="relative group">
        <Link
          href="#"
          className="text-gray-800 font-medium flex items-center transition-colors "
        >
          Why Us
          <ChevronDown className="group-hover:hidden ml-1  mb-1" />
          <ChevronUp className="hidden group-hover:inline ml-1 mb-1" />
        </Link>
        {/* Dropdown for desktop */}
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <div className="py-1">
            
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
     
    </div>
  );
};

export default NavLinks;
