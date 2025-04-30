import { Box } from "lucide-react";
import ProductShowcase from "../cards/productCard";

import React from "react";

const ProductShowcaseSection: React.FC = () => {
  return (
    <>
      <ProductShowcase
        title="Our Products"
        categories={[
          "Educational system",
          "Financial",
          "Hotel Management",
          "Enterprise management",
          "Corporate management",
        ]}
        products={[
          {
            id: 1,
            icon: <Box />,
            title: "Abhyam School Management System",
            subtitle:
              "Mark and track attendance digitally with a single click. Notify parents instantly about absences and generate attendance reports in seconds.",
            image: "/path/to/your/image.jpg",
            category: "Educational system",
          },
          // Add more products here
        ]}
        defaultCategory="Educational system"
      />
    </>
  );
};

export default ProductShowcaseSection;
