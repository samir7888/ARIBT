import Image from "next/image";
import React from "react";
import caseImage from "../../../public/caseImage.png";
import { ChevronRight } from "lucide-react";
import ButtonEffect2 from "../../../components/Buttons/ButtonEffect2";
import Link from "next/link";

const CaseStudySection = () => {
  return (
    <div className="container my-12 mx-auto flex flex-col md:flex-row  space-x-14">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={caseImage}
          alt="CEO"
          layout="responsive"
          width={500}
          height={300}
          className="rounded-lg "
        />
      </div>

      {/* Text Content */}
      <div
        style={{ fontFamily: "Aeonik" }}
        className="w-full md:w-1/2 flex flex-col items-start   justify-between py-3"
      >
        <div>
          <div className="space-y-7">
            <div className=" w-fit text-black tracking-wider rounded-4xl font-normal text-xl border border-gray-300  px-6 py-2 mb-2">
              Case Study
            </div>
            <h1
              style={{ fontSize: "clamp(2rem, 2.1vw, 3.2rem)" }}
              className="text-3xl  text-brand-primary pt-4 tracking-wider"
            >
              How schools are achieving more with our management system ?
            </h1>
            <p
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.8rem)" }}
              className="text-gray-500 mb-6 "
            >
              See how schools like yours achieve success with our system,
              improving efficiency, communication, and education outcomes.
            </p>
          </div>
          <Link href={"services"} className="  inline-block">
            <ButtonEffect2 />
          </Link>
        </div>

        {/* stats */}
        <div className="flex w-full mt-10 justify-around px-5 text-xl md:text-3xl ">
          <div className="flex flex-col text-center justify-center">
            <p className="font-semibold tracking-wider">2456+</p>
            <p className="text-sm tracking-wider text-gray-400">Business</p>
          </div>
          <div className="flex flex-col text-center justify-center">
            <p className="font-semibold tracking-wider">2456+</p>
            <p className="text-sm tracking-wider text-gray-400">
              Transaction volumes
            </p>
          </div>
          <div className="flex flex-col text-center justify-center">
            <p className="font-semibold tracking-wider">157M+</p>
            <p className="text-sm tracking-wider text-gray-400">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
