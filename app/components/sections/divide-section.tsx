import Image from "next/image";
import Link from "next/link";
import React from "react";

const DivideSection = ({ title }: { title: string }) => {
  return (
    <div
      style={{ fontFamily: "Aeonik" }}
      className="w-full hidden md:flex flex-col items-center bg bg-linear-to-r from-[#069188] to-[#04413D] space-y-14 py-16 text-white"
    >
      <h2 className="text-3xl tracking-wider">{title}</h2>

      <div className="flex container mx-auto justify-around items-center font-semibold text-2xl  tracking-wider">
        <Link
          href={"https://ismt.edu.np/campuses/ismt-college-butwal" }
          target="_blank"
        >
          <div className="flex items-center gap-5">
            <Image
              className="rounded-full"
              src={
                "https://www.e-aribt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoismt.84940331.png&w=2048&q=75"
              }
              width={100}
              height={100}
              alt="ISMT"
            />
            <span>ISMT College Butwal</span>
          </div>
        </Link>

        <Link href={"https://www.facebook.com/aksharclz/"} target="_blank">
          <div className="flex items-center gap-5">
            <Image
              className="rounded-full"
              src={
                "https://www.e-aribt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faksharlogo.420aef73.png&w=2048&q=75"
              }
              width={100}
              height={100}
              alt="Akshar College Butwal"
            />
            <span>Akshar College Butwal</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DivideSection;
