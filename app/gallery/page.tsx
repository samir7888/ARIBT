import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import Frame from "@/components/cards/filterCard";
import ImageGallery from "./components/GalleryImages";

const page = () => {
  return (
    <div className="min-h-screen">
      <BlogHeroSection title="Gallery" />
      <div className="container mx-auto flex w-fit lg:justify-center mb-2 overflow-x-auto ">
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

    </div>
  );
};

export default page;
