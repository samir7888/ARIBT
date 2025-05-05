import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import ButtonEffect1 from "../../../components/Buttons/ButtonEffect1";

const ServicesSection = ({
  sectionTitle = "What we Offer?",
  sectionSubtitle = "Focus your attention on developing your business, and let us work for your overall school management headache",
  services = [],
}) => {
  return (
    <section className="py-16 z-0 px-4 container mx-auto ">
      {/* Section Header */}
      <TitleCard
        title="Facilities"
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />

      {/* Services Grid */}
      <div className="grid grid-rows-1 md:grid-rows-2  w-full bg-gradient-to-b from-gray-50 to-transparent">
        <div className="h-fit grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
          {/* card */}
          <BorderImage />
          <BorderImage />
        </div>

        {/* Second row */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
          <BorderImage />

          <BorderImage />
          <BorderImage />
        </div>
      </div>

      {/* View All Button */}
      <ButtonEffect1 word="View All" />
    </section>
  );
};

export default ServicesSection;

function BorderImage() {
  return (
    <section
      className="p-[3px] rounded-2xl "
      style={{
        background:
          "linear-gradient(to bottom, var(--color-gray-200), transparent)",
      }}
    >
      <div
        className="bg-white flex flex-col  p-5"
        style={{ borderRadius: "calc(var(--radius-2xl) - 3px)" }}
      >
        <div
          className="h-56 overflow-hidden shadow-2xl mask-b-from-30%"
          style={{
            position: "relative",
            zIndex: "1",
          }}
        >
          <Image
            src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={1000}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div
          style={{ fontFamily: "Aeonik" }}
          className="space-y-4 px-3 py-2 mt-6"
        >
          <h2
            style={{ fontSize: "clamp(1rem, 1.2vw, 2rem)" }}
            className=" font-semibold tracking-wide"
          >
            Mobile app Development
          </h2>
          <p
            className="text-gray-500 tracking-wide pb-4"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.4rem)" }}
          >
            We design and developed first class website for any it business
            include crms
          </p>
        </div>
      </div>
    </section>
  );
}
