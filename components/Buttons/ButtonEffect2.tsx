import { ChevronRight } from "lucide-react";
import React from "react";

const ButtonEffect2 = () => {
  return (
    <button className="group text-xl text-black tracking-widest md:pt-10 font-medium flex items-center hover:text-teal-700 transition-all duration-300 cursor-pointer">
      <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-700 group-hover:after:w-full after:transition-all after:duration-300 ">
        Read more
      </span>
      <ChevronRight className="pt-1 w-8 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

export default ButtonEffect2;
