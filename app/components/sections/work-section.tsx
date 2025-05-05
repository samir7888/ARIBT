import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import ButtonEffect1 from "../../../components/Buttons/ButtonEffect1";

const FacilitySection = ({
  sectionTitle = "Our Recent Works",
  sectionSubtitle = "Focus your attention on developing your business, and let us work for your overall school management headache",
  services = [],
}) => {
  // ✅ Replace with your mock project data
  const defaultServices = [
    {
      id: 1,
      title: "Abhyem Robotics Redesign",
      subtitle: "Transforming Challenges Into Opportunities With Technology",
      imageSrc: "/images/robotics.jpg",
      tags: ["Robotics", "Frontend"],
    },
    {
      id: 2,
      title: "Aikshar College",
      subtitle: "Learning is evolving",
      imageSrc: "/images/college.jpg",
      tags: ["Education", "Website"],
    },
    {
      id: 3,
      title: "Art Gallery Ecommerce",
      subtitle: "Creative showcase",
      imageSrc: "/images/ecommerce.jpg",
      tags: ["Ecommerce", "Design"],
    },
    {
      id: 4,
      title: "Cassy Hero – Landingpage",
      subtitle: "The largest school management solution in Nepal",
      imageSrc: "/images/landingpage.jpg",
      tags: ["SaaS", "Landing"],
    },
    {
      id: 5,
      title: "Aikshar College",
      subtitle: "Redesigned experience",
      imageSrc: "/images/college-2.jpg",
      tags: ["College", "UX"],
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <div className="bg-[#F7FFFF]">
      <section className="py-16 px-4 container mx-auto ">
        {/* Header */}
        <TitleCard
          title="Facilities"
          sectionTitle={sectionTitle}
          sectionSubtitle={sectionSubtitle}
        />

        {/* Grid */}
        <div className="grid grid-rows-1  md:grid-rows-3 gap-5 h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">

            
            <div className="bg-gray-200 p-3 rounded-xl h-full">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover rounded-xl w-full h-full "
              />{" "}
            </div>
            <div className="bg-gray-200 p-3 rounded-xl h-full">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover w-full h-full"
              />
            </div>
          </div>

          {/* second row */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-fit">
            <div className="bg-gray-200 p-3 rounded-xl col-span-2 ">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover  w-full h-full"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-xl h-full">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover w-full h-full "
              />
            </div>
          </div>
          {/* Third row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
            <div className="bg-gray-200 p-3 rounded-xl">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-xl">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-xl">
              <Image
                src="https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={1200}
                height={600}
                className="bg-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/*  Explorer all Button */}
        <ButtonEffect1 word="Explorer All"/>
      </section>
    </div>
  );
};

export default FacilitySection;
