import React from "react";
import FAQ from "./FaqSection";

const FooterSection = () => {
  return (
    <div   style={{ fontFamily: "Aeonik" }} className=" bg-gradient-to-r from-brand-light to-brand pt-10 ">
      <div className="w-full px-2 mx-auto container md:w-1/2">
        <FAQ />
      </div>
    </div>
  );
};

export default FooterSection;
