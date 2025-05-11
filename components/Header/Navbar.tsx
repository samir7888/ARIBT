import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import MobileView from "./MobileView";
import NavLinks from "./Navlinks";

export default function Navbar() {
  return (
    <nav
      style={{ fontFamily: "Noir", zIndex: "1000" }}
      className="sticky top-0 flex justify-center py-4 px-4"
    >
      <div className="w-full max-w-4xl   bg-white rounded-full shadow-md border border-gray-200 h-16 flex items-center  ">
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

          <NavLinks />

          {/* Contact Us Button (Desktop) */}
          <Link href='/contact'>
          <button className="hidden group md:flex bg-brand text-white w-40  h-13 pl-8 items-center  rounded-full border   duration-600  border-brand hover:bg-brand-primary font-aeonik cursor-pointer ">
            Contact Us
            <ChevronRight className="group-hover:hidden" />
          </button>
          </Link>

          <MobileView />
        </div>
      </div>
    </nav>
  );
}
