import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import { serverFetch } from "../../libs/server-fetch";
import { Testimonials } from "./Types/TestimonialsTypes";
import TestimonialCard from "./components/TestimonialsCards";

const page = async () => {
  const testimonials = await serverFetch<Testimonials>("/testonomial");
  if (!testimonials) {
    return <div>No testimonials available</div>;
  }
  return (
    <div className="min-h-screen">
      <BlogHeroSection title="Testimonials" />
      <div className="relative overflow-hidden py-10 bg-gray-50 space-y-10">
        <h2 className="text-center font-aeonik text-2xl">
          Hear what our client says ?
        </h2>
        {/* <Testimonials /> */}
        <div className="container mx-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
