import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import FooterSection from "../../components/Footer/FooterSection";
import { serverFetch } from "../../libs/server-fetch";
import { TeamMemberList } from "./Types/teams-types";
import TeamsCard from "../../components/TeamsCard";
import ButtonEffect1 from "../../components/Buttons/ButtonEffect1";

const page = () => {
  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="Our Teams" />
      <div className="flex flex-col p-8 w-3/4 justify-start container mx-auto  ">
        <h2 className="text-center text-2xl  font-aeonik">
          Meet the strongest team
        </h2>
        <TeamsCard />
        <ButtonEffect1 word="Explore All" />
      </div>
      <FooterSection />
    </div>
  );
};

export default page;
