import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {teamDetails.length > 0 ? (
          teamDetails.map((t, i) => (
            <div
              key={i}
              className="bg-white flex flex-col items-start rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.png"
                  alt={`${t.name}'s profile`}
                  width={100}
                  height={100}
                  className=" object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-teal-700">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>

              <div className="mt-4 flex justify-center gap-4 text-teal-600">
                {t.twitter && (
                  <a href={t.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-5 h-5 hover:text-teal-800 transition" />
                  </a>
                )}
                {t.linkedin && (
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-5 h-5 hover:text-teal-800 transition" />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No team members available</div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
