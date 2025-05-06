import React from "react";
import FAQ from "./FaqSection";
import FooterCard from "./FooterCard";

const FooterSection = () => {
  return (
    <div className="font-aeonik bg-gradient-to-r from-brand-footer-left to-brand-primary pt-10 ">
      <div className="w-full px-2 mx-auto container md:w-3/4">
        <FAQ />
        <FooterCard />
      </div>
    </div>
  );
};

export default FooterSection;
