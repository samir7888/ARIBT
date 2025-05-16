import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import ButtonEffect1 from "../../../components/Buttons/ButtonEffect1";
import Link from "next/link";
import { serverFetch } from "../../../libs/server-fetch";
import {
  Portfolio,
  PortfolioList,
} from "../../portfolio/Types/portfolio-types";

const FacilitySection = async ({
  sectionTitle = "Our Recent Works",
  sectionSubtitle = "Focus your attention on developing your business, and let us work for your overall school management headache",
  services = [],
}) => {
  // ✅ Replace with your mock project data

  // const defaultServices = [
  //   {
  //     id: 1,
  //     title: "Abhyem Robotics Redesign",
  //     subtitle: "Transforming Challenges Into Opportunities With Technology",
  //     imageSrc: "/images/robotics.jpg",
  //     tags: ["Robotics", "Frontend"],
  //   },
  //   {
  //     id: 2,
  //     title: "Aikshar College",
  //     subtitle: "Learning is evolving",
  //     imageSrc: "/images/college.jpg",
  //     tags: ["Education", "Website"],
  //   },
  //   {
  //     id: 3,
  //     title: "Art Gallery Ecommerce",
  //     subtitle: "Creative showcase",
  //     imageSrc: "/images/ecommerce.jpg",
  //     tags: ["Ecommerce", "Design"],
  //   },
  //   {
  //     id: 4,
  //     title: "Cassy Hero – Landingpage",
  //     subtitle: "The largest school management solution in Nepal",
  //     imageSrc: "/images/landingpage.jpg",
  //     tags: ["SaaS", "Landing"],
  //   },
  //   {
  //     id: 5,
  //     title: "Aikshar College",
  //     subtitle: "Redesigned experience",
  //     imageSrc: "/images/college-2.jpg",
  //     tags: ["College", "UX"],
  //   },
  // ];

  // const displayServices = services.length > 0 ? services : defaultServices;
  const portfolios = await serverFetch<PortfolioList>("portfolio");
  if (!portfolios) {
    return <div>No portfolio available</div>;
  }
  return (
    <div className="bg-[#F7FFFF] my-12">
      <section className="container mx-auto ">
        {/* Header */}
        <TitleCard
          title="Facilities"
          sectionTitle={sectionTitle}
          sectionSubtitle={sectionSubtitle}
        />

        {/* Grid */}
        <div className="grid grid-rows-1  md:grid-rows-3 gap-5 h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
            <WorkCard portfolioData={portfolios[0]} />

            <WorkCard portfolioData={portfolios[1]} />
          </div>

          {/* second row */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
            <div className="col-span-2">
              <WorkCard portfolioData={portfolios[2]} />
            </div>

            <WorkCard portfolioData={portfolios[3]} />
          </div>
          {/* Third row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
            <WorkCard portfolioData={portfolios[4]} />
            <WorkCard portfolioData={portfolios[5]} />
            <WorkCard portfolioData={portfolios[6]} />
          </div>
        </div>

        {/*  Explorer all Button */}
        <Link href={"/portfolio"}>
          <ButtonEffect1 word="Explorer All" />
        </Link>
      </section>
    </div>
  );
};

function WorkCard({ portfolioData }: { portfolioData: Portfolio }) {
  return (
    <div className="relative bg-gray-100 p-3 rounded-xl h-full">
      <Image
        src={portfolioData.coverImage}
        alt={portfolioData.title}
        width={1200}
        height={1000}
        className="object-cover rounded-xl"
      />{" "}
      <div className="absolute left-5 right-5 bottom-6 min-h-28  bg-white rounded-xl p-4">
        <div className="flex items-center mb-4">
          <div className="mr-auto">
            <h3 className="font-semibold text-md ">{portfolioData.title}</h3>
            <div className="flex items-center flex-wrap gap-2 text-gray-400">
              <span className="flex items-center">
                <span className=" font-bold pb-2 ">.</span>
                <span className={`text-xs font-semibold mx-2`}>Branding</span>
              </span>
              <span className="flex items-center">
                <span className="pb-2 font-bold ">.</span>
                <span className={`text-xs font-semibold mx-2`}>Designing</span>
              </span>
            </div>
          </div>
          <Link href={`/portfolio/${portfolioData.id}`}>
            <button className="bg-white text-gray-400 px-4 py-1 rounded cursor-pointer  hover:bg-gray-50 transition-colors">
              View
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <span
            className={`text-xs px-3 py-2 rounded-full bg-brand-primary text-white`}
          >
            Branding
          </span>
          <span
            className={`text-xs px-3 py-2 rounded-full bg-brand-primary text-white`}
          >
            Web Design
          </span>
        </div>
      </div>
    </div>
  );
}

export default FacilitySection;
