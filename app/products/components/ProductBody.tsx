import Frame from "@/components/cards/filterCard";
import { ChevronRight } from "lucide-react";
import React from "react";
import ProductsCards from "./ProductsCards";

const ProductBody = () => {
  return (
    <div className="p-10  mx-auto space-y-4 w-[70%]">
      <h2 className="font-aeonik text-2xl">Our recents Products</h2>
      <div className="flex  justify-between">
        <div>
          <Frame isProduct={true}  tabs={[
            "Educational system",
            "Financial",
            "Hotel Management",
            "Enterprise management",
            "Corporate management",
          ]}/>
        </div>
        <button className="font-noir px-5 py-3 pt-5 border border-brand bg-gradient-to-r from-brand-light to-brand text-white flex items-center rounded-full transition-all duration-700 ease-in-out hover:bg-gradient-to-l hover:from-brand-light hover:to-brand">
          Show All
          <ChevronRight className="mb-1 ml-1 w-3" />
        </button>
      </div>

      {/* <ProductsCards /> */}
    </div>
  );
};

export default ProductBody;
