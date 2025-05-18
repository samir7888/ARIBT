import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import ContactUsPage from "./components/FormPage";

const page = () => {
  return (
    <div className="mx-auto min-h-screen">
      <BlogHeroSection title="Contact Us" />
    
      <ContactUsPage />

      <div className=" px-1 md:w-3/4 flex flex-col md:flex-row space-y-8 justify-between py-12 mx-auto font-aeonik tracking-wide">
        <div className=" flex items-center  flex-col space-y-2">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-gray-500 text-sm">
            Our friendly team is here to help
          </p>
          <p className="text-brand-primary font-semibold py-2">
            support@aribt.com
          </p>
        </div>
        <div className=" flex items-center  flex-col space-y-2">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-gray-500 text-sm">
            Our friendly team is here to help
          </p>
          <p className="text-brand-primary font-semibold py-2">
            support@aribt.com
          </p>
        </div>
        <div className=" flex items-center  flex-col space-y-2">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-gray-500 text-sm">
            Our friendly team is here to help
          </p>
          <p className="text-brand-primary font-semibold py-2">
            support@aribt.com
          </p>
        </div>
      </div>

    </div>
  );
};

export default page;
