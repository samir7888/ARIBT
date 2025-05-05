import {  Mail } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function TopHeader() {
  return (
    <div className="w-full font-aeonik min-h-9 bg bg-linear-to-r from-[#04413D] to-[#069188] py-2 px-9 flex items-center justify-between z-1000">
      <div
        className="text-white flex   text-sm gap-2"
      >
        <p>Abhyam Robotics</p>
        <p>Butwal 10, Tinkune</p>
      </div>
      <div className="flex items-center gap-2">
        <FaFacebook className="text-white w-4" />
        <FaLinkedin className="text-white w-4" />
        <Mail className="text-white w-4" />
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
