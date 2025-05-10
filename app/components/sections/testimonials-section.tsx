import React from "react";
import TestimonialCard from "../cards/testimonialCard";
import TitleCard from "../cards/titleCard";

const testimonials = () => {
  return (
    <div className="relative overflow-hidden my-12 bg-white space-y-10 ">
      <TitleCard
        title="Facilities"
        sectionSubtitle="Focus your attention your business, and let us work for your overall school management headache"
        sectionTitle="What our Client Says?"
      />

     <Testimonials />
    </div>
  );
};

export default testimonials;



export function Testimonials(){
  return <>
   {/* Gradient shadows */}
   <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-20" />

      {/* Row 1 - Left to Right */}
      <div className="flex gap-6">
        <div className="card-slide-left  card-slide inline-flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className=" " style={{ minWidth: "300px" }}>
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex gap-6 ">
        <div className="card-slide-right  card-slide inline-flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={i + 5}
              className=" "
              style={{ minWidth: "300px" }}
            >
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
  </>
}
