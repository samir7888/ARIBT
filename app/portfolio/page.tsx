import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import WorksMain from "./components/WorksMain";
import Frame from "@/components/cards/filterCard";

const PortfolioPage = () => {
  return (
    <div>
      <BlogHeroSection title="Our Works" />
       {/* Filter section */}
            <div className="container mx-auto flex w-fit lg:justify-center overflow-x-auto  mt-8">
              <Frame
                tabs={[
                  "Educational system",
                  "Financial",
                  "Hotel Management",
                  "Enterprise management",
                  "Corporate management",
                ]}
              />
            </div>
      <WorksMain />
    </div>
  );
};

export default PortfolioPage;
