import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const teamDetails = [
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Manish Upadhya",
    role: "UI/UX Specialist",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <TitleCard
        title="Facilities"
        sectionTitle="Our Teams"
        sectionSubtitle="Focus your attention on developing your business, and let us work for your overall school management headache"
      />

      <div
        style={{ fontFamily: "Aeonik" }}
        className="container mx-auto grid grid-rows-2 space-y-12 mt-8"
      >
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 h-fit w-fit gap-8">
          {/* card */}

          <BorderImage />

          <BorderImage />
          <BorderImage />
          <BorderImage />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 h-fit w-fit mx-auto gap-8">
          <BorderImage />
          <BorderImage />
          <BorderImage />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

function BorderImage() {
  return (
    <section
      className="p-[1px] rounded-2xl "
      style={{
        background:
          "linear-gradient(to bottom, var(--color-gray-200), transparent)",
      }}
    >
      <div
        className="bg-white flex flex-col"
        style={{ borderRadius: "calc(var(--radius-3xl) - 1px)" }}
      >
        <div className="h-52 w-64 overflow-hidden bg-linear-to-b from-gray-100 to-white rounded-2xl">
          <Image
            src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={800}
            height={500}
            className="bg-cover h-full w-full p-2 rounded-2xl"
          />
        </div>
        <h3 className="pt-3 pl-2 text-xl tracking-wide font-medium ">
          Manish Upadhaya
        </h3>
        <p className="pl-2 text-gray-400 tracking-wide pt-1">UI/UX Specialist</p>
        <div className="flex space-x-3 pt-3 ">
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaLinkedin className="text-blue-600" />
          </span>
          <span>
            <FaDribbble className="text-[#EA4C89]" />
          </span>
        </div>
      </div>
    </section>
  );
}
