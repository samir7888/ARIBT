import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import WorksMain from "./components/WorksMain";

const PortfolioPage = () => {
  return (
    <div>
      <BlogHeroSection title="Our Works" />
      <WorksMain />
    </div>
  );
};

export default PortfolioPage;
