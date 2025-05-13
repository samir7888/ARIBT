import Frame from "@/components/cards/filterCard";
import { ChevronRight } from "lucide-react";
import React from "react";


const ProductBody = () => {
  return (
    <div className="container  mx-auto space-y-4 w-[70%]">
      <div className="flex justify-between items-center">
        <h2 className="font-aeonik text-2xl   py-5">Our recents Products</h2>
        <button className="font-noir h-12 px-5 pt-1 border border-brand bg-gradient-to-r from-brand-light to-brand text-white flex items-center rounded-full transition-all duration-700 ease-in-out hover:bg-gradient-to-l hover:from-brand-light hover:to-brand">
          Show All
          <ChevronRight className="mb-1 ml-1 w-4" />
        </button>
      </div>
      <div className="container mx-auto flex w-fit lg:justify-center mb-8 overflow-x-auto ">
        <Frame
          isProduct={true}
          tabs={[
            "Educational system",
            "Financial",
            "Hotel Management",
            "Enterprise management",
            "Corporate management",
          ]}
        />
      </div>
    </div>
  );
};

export default ProductBody;
