import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import ButtonEffect1 from "../../../components/Buttons/ButtonEffect1";
import { serverFetch } from "../../../libs/server-fetch";
import { Service, ServiceList } from "../../services/Types/service-types";
import Link from "next/link";

import ServiceBody from "../../services/components/ServicesBody";

const ServicesSection = async ({
  sectionTitle = "What we Offer?",
  sectionSubtitle = "Focus your attention on developing your business, and let us work for your overall school management headache",
}) => {
  const services = await serverFetch<ServiceList>("category");
  if (!services) {
    return <>No services available</>;
  }
  return (
    <section className="my-12 z-0 container mx-auto  ">
      {/* Section Header */}
      <TitleCard
        title="Facilities"
        sectionSubtitle={sectionSubtitle}
        sectionTitle={sectionTitle}
      />

      {/* Services Grid */}
      <div className="grid grid-rows-1 md:grid-rows-2 gap-10 bg-gradient-to-b from-gray-50 to-transparent">
        <div className=" h-fit grid grid-cols-1 md:grid-cols-2 gap-6  ">
          {/* card */}
          <BorderImage serviceData={services[0]} />
          <BorderImage serviceData={services[1]} />
        </div>

        {/* Second row */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BorderImage serviceData={services[2]} />

          <BorderImage serviceData={services[4]} />
          <BorderImage serviceData={services[5]} />
        </div>
      </div>

      {/* View All Button */}
      <Link href={"/services"}>
        <ButtonEffect1 word="View All" />
      </Link>
    </section>
  );
};

export default ServicesSection;

function BorderImage({ serviceData }: { serviceData: Service }) {
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
        <Link href={`/services/${serviceData.id}`}>
          <div
            className="h-56 overflow-hidden shadow-2xl mask-b-from-30%"
            style={{
              position: "relative",
              zIndex: "1",
            }}
          >
            <Image
              src={serviceData.file}
              alt=""
              width={1000}
              height={500}
              className="rounded-xl"
            />
          </div>
        </Link>
        <div
          style={{ fontFamily: "Aeonik" }}
          className="space-y-4 px-3 py-2 mt-6"
        >
          <Link href={`/services/${serviceData.id}`}>
            <h2
              style={{ fontSize: "clamp(1rem, 1.2vw, 2rem)" }}
              className=" font-semibold tracking-wide"
            >
              {serviceData.title}
            </h2>
          </Link>
          <div
            className="text-gray-500 tracking-wide pb-4"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.4rem)" }}
          >
            <ServiceBody description={serviceData.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
