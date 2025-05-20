import {  Mail } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function TopHeader() {
  return (
    <div className="w-full font-aeonik min-h-9 bg bg-linear-to-r from-[#04413D] to-[#069188] pb-3 px-9 flex items-center justify-between z-1000">
      <div
        className="text-white flex   text-sm gap-2"
      >
        <p>Abhyam Robotics</p>
        <p>Butwal 10, Tinkune</p>
      </div>
      <div className="flex items-center gap-2">
        <Link href={'https://www.facebook.com/watch/abhyamrobotics/'} target="_blank">
        <FaFacebook className="text-white w-4" />
        </Link>
        <Link href={'https://www.linkedin.com/company/abhyam-robotics-institution-of-business-and-technology-aribt/posts/?feedView=all'} target="_blank">
        <FaLinkedin className="text-white w-4" />
        </Link>
        <Link href={'mailto:info@e-aribt.com'} target="_blank">
        <Mail className="text-white w-4" />
        </Link>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
    </>
  );
};

export default Header;
