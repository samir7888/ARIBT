import Frame from "@/components/cards/filterCard";
import { ChevronRight } from "lucide-react";
import React from "react";

const ProductBody = () => {
  return (
    <div className="container  mx-auto space-y-4 w-[70%]">
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
