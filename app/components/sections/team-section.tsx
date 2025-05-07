import React from "react";
import TitleCard from "../cards/titleCard";

import TeamsCard from "../../../components/TeamsCard";



const TeamSection = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <TitleCard
        title="Facilities"
        sectionTitle="Our Teams"
        sectionSubtitle="Focus your attention on developing your business, and let us work for your overall school management headache"
      />

      <TeamsCard />

    </section>
  );
};

export default TeamSection;

