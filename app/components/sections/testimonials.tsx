import React from "react";
import TitleCard from "../cards/titleCard";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

const testimonialsDetails = [
 
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  {
    name: "Michael Reynolds",
    photo: "/user.jpg", // replace with actual image path
    role: "CEO, ExploreMore Adventures",
    summary:
      "Working with Samihah was a game-changer. Her storytelling skills helped position our brand as a leader in the adventure travel space.",
    facebook: "https://facebook.com",
  },
  // Add more testimonials as needed...
];

const TestimonialSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <TitleCard
        title="Facilities"
        sectionTitle="What our Client Says?"
        sectionSubtitle="Focus your attention on developing your business, and let us work for your overall school management headache"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonialsDetails.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[220px] transition hover:shadow-lg"
          >
            {/* Top Section: Profile and Logo */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.photo}
                  alt={`${testimonial.name}'s photo`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              {testimonial.facebook && (
                <a
                  href={testimonial.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <FaFacebook size={20} />
                </a>
              )}
            </div>

            {/* Testimonial Content */}
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="text-teal-700 font-medium">"</span>
              {testimonial.summary}
              <span className="text-teal-700 font-medium">"</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
