import { Productcard } from "@/components/sections/product-section";
import React from "react";

const ProductsCards = () => {
  return (
    <div className="space-y-12 py-12">
      <Productcard />
      <Productcard />
    </div>
  );
};

export default ProductsCards;
