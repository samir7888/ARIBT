import React from "react";
import hero from "../../../public/blogHero.png";
import BreadCrumb from "./BlogBreadCrumb";
const BlogHeroSection = ({title}:{title:string}) => {
  return (
    <div className="relative min-h-[386px] w-full -mt-[100px]">
      {/* Background image - fixed to cover entire section */}
      <div
        className="absolute opacity-95 inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="absolute space-y-8 text-5xl font-semibold left-0 right-0 bottom-10 text-white flex flex-col justify-between items-center">
        <div><BreadCrumb /></div>
        <h3 className="font-aeonik tracking-wide" >{title}</h3>
      </div>
    </div>
  );
};

export default BlogHeroSection;
