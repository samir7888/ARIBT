import React from "react";
import { PortfolioList } from "../../Types/portfolio-types";

const WorkDivider =({portfolio}:{portfolio:PortfolioList}) => {
  return (
    <div className="w-full h-[344px] bg-gradient-to-r text-white from-brand-footer-left to-brand-primary flex justify-center pt-15 pb-48 font-aeonik">
      <div className="flex justify-center flex-col space-y-8">
        {/* <p className="flex items-center justify-center  text-center">
          <span className="font-bold mx-2 mb-2">.</span>
          <span>Branding</span>
          <span className="font-bold mx-2 mb-2">.</span>
          <span>Web Design</span>
        </p> */}
        <h1 className="text-4xl font-semibold tracking-wider  text-center">
         {portfolio[0].title}
        </h1>
      </div>
    </div>
  );
};

export default WorkDivider;
