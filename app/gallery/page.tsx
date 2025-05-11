import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import Frame from "@/components/cards/filterCard";
import ImageGallery from "./components/GalleryImages";
import FooterSection from "../../components/Footer/FooterSection";

const page = () => {
  return (
    <div className="min-h-screen">
      <BlogHeroSection title="Gallery" />
      <div className="hidden md:flex w-fit py-16 mx-auto">
        <Frame
          isProduct={true}
          tabs={[
            "Projects Images",
            "Teamworks",
            "Tours and Picnics",
            "Sports and Meetings",
          ]}
        />
      </div>

      <ImageGallery />

      <FooterSection />
    </div>
  );
};

export default page;
