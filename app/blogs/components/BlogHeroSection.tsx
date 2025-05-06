import React from "react";
import hero from '../../../public/blogHero.png'
const BlogHeroSection = () => {
  return (
    <div className="relative min-h-[386px] w-full -mt-[100px]">
      {/* Background image - fixed to cover entire section */}
      <div
        className="absolute opacity-95 inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
        <div className="absolute text-5xl font-semibold left-0 right-0 bottom-12 text-white flex flex-col justify-between items-center">
          <h2>BLOGS</h2>
        </div>
    </div>
  );
};

export default BlogHeroSection;
