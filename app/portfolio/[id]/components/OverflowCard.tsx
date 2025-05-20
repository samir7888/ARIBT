import React from "react";
import { PortfolioList } from "../../Types/portfolio-types";
import Link from "next/link";

const OverflowCard =  ({portfolio}:{portfolio:PortfolioList}) => {
  return (
    <div className="relative p-5 bg-white h-[350px] md:h-[516px]  ">
      <div className="absolute w-3/4 -top-24 left-1/2 transform -translate-x-1/2">
        <div className=" overflow-hidden bg-white p-8 rounded-2xl">
          {/* Main Background Image */}
          <Link href={`${portfolio[0].link}`} target="_blank">
          <div className="relative h-96 md:h-[550px] w-full overflow-hidden rounded-lg">
            {/* Background Image */}
            <img
              src={portfolio[0].coverImage}
              alt={portfolio[0].title}
              className="absolute inset-0 w-full h-full rounded-2xl object-cover "
              />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default OverflowCard;
