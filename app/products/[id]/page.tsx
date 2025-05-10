import React from "react";
import BlogHeroSection from "../../blogs/components/BlogHeroSection";
import { Productcard } from "@/components/sections/product-section";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import BlogPage from "../../blogs/[id]/components/Blog";
import FooterSection from "../../../components/Footer/FooterSection";

const page = () => {
  return (
    <div className="min-h-screen mx-auto font-aeonik">
      <BlogHeroSection title="Our Products" />
      <div className="py-12 w-full md:w-4/5 mx-auto">
        <div className="rounded-2xl container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {/* Left Card */}
          <div className="flex flex-col justify-between px-6 py-8">
            <div className="space-y-6 p-4">
              <h2
                className="text-3xl w-4/5 font-bold text-gray-800"
                style={{ fontSize: "clamp(2rem, 2.5vw, 2.9rem)" }}
              >
                Abhyam School Management System
              </h2>
              <p
                className="w-4/5 text-gray-600"
                style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.5rem)" }}
              >
                JavaScript frameworks make development easy with extensive
                features and functionalities.
              </p>

              {/* Feature cards replacing the read more button */}
              <div className="bg-brand-primary rounded-lg p-6 mt-6 text-white">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <span>Industry Focused Programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <span>Global Recognition</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <span>Curated Internships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    </div>
                    <span>Advanced Learning Facility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-xl bg-gray-200 p-6">
            <div className="overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/31775324/pexels-photo-31775324/free-photo-of-close-up-of-car-dashboard-with-digital-display.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={1200}
                height={500}
                alt=""
                className="bg-cover w-full rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-2/5 py-6 mx-auto">
        <BlogPage />
      </div>
      <FooterSection />
    </div>
  );
};

export default page;
