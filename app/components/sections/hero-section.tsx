import React from "react";
import hero from "../../../public/hero.png";
import Image from "next/image";
import photo1 from "../../../public/Property 1=Variant2.png";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen  -mt-[100px]">
      {/* Background image - fixed to cover entire section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>

      {/* Content */}
      <div
        style={{ fontFamily: "Aeonik" }}
        className="relative z-0 flex flex-col items-center justify-center h-full w-full pt-60 px-4"
      >
        <div className="w-full md:w-[70%] text-center space-y-6">
          <h1
            style={{ fontSize: "clamp(2rem, 2.5vw, 4rem)" }}
            className="w-full  md:w-[90%] mx-auto text-white text-5xl leading-tight font-semibold px-4 tracking-widest"
          >
            Transforming Challenges Into{" "}
            <span className="block"> Opportunities With Technology</span>
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 1.1vw, 1.2rem)" }}
            className="w-full md:w-[52%] text-white  mx-auto leading-relaxed tracking-wide"
          >
            We turn into Opportunities with innovative IT solutions, helping
            your business thrive and grow in a competetive world
          </p>
        </div>

        <div
          style={{ fontFamily: "Noir" }}
          className="flex justify-center mt-4 space-x-3"
        >
          <Link href={"/contact"}>
           <button className="cursor-pointer relative overflow-hidden group px-5 py-3 pt-5 border border-brand text-white flex items-center rounded-full bg-transparent z-10">
  <span className="relative z-20 flex items-center">
    Lets Talk
    <ChevronRight className="mb-1 ml-1 w-3" />
  </span>

  {/* Background Layers */}
  <span className="absolute inset-0 bg-gradient-to-r from-brand-light to-brand transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 z-10" />
  <span className="absolute inset-0 bg-gradient-to-l from-brand-light to-brand transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 z-10" />
</button>

          </Link>

          <button className="px-5 py-2 pt-4 bg-white text-brand-primary rounded-full transition-colors duration-700 ease-in-out hover:text-white hover:bg-brand cursor-pointer">
            Explore Services
          </button>
        </div>

        {/* Image */}
        <div className="container mx-auto mt-8 ">
          <Image src={photo1} alt="Hero Image" width={1600} height={800} />
        </div>
        <div className=" flex text-center  text-white my-4 text-2xl pb-8">
          <h2 style={{ fontFamily: "Aeonik" }}>
            Powered by{" "}
            <span className="font-semibold tracking-wider">Abhyam Groups</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
