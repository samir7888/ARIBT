import React from 'react';
import AcademyHeroSection from './AcademyHero';

const OverflowCard = () => {
  return (
    <div className="relative p-5 bg-white h-[350px] md:h-[516px]  ">
      <div className="absolute w-3/4 -top-24 left-1/2 transform -translate-x-1/2">
        <AcademyHeroSection />
      </div>
    </div>
  );
};

export default OverflowCard;
