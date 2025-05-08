import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import CompaniesGrid from "./components/CompaniesCards";
import FooterSection from "../../components/Footer/FooterSection";

const page = () => {
  return (
    <div className="min-h-screen">
      <BlogHeroSection title="Our Companies" />

      <div className="w-full py-8 mx-auto md:w-4/5">
        <CompaniesGrid />
      </div>
      <FooterSection />
    </div>
  );
};

export default page;
