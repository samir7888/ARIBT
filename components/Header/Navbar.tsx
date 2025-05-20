import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileView from "./MobileView";
import NavLinks from "./Navlinks";
import { LogoList } from "../Footer/components/footer-types";
import { serverFetch } from "../../libs/server-fetch";

export default async function Navbar() {
    const logoDetails = await serverFetch<LogoList>("logo");
    if (!logoDetails) {
      return <div>No logo available</div>
    }
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
                src={`${logoDetails[0].colorImage}`}
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
            <ChevronRight className=" group-hover:translate-x-2 transition-transform" />
          </button>
          </Link>

          <MobileView />
        </div> 
      </div>
    </nav>
  );
}
