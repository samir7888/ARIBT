import React from "react";
import BlogHeroSection from "../../blogs/components/BlogHeroSection";
import WorkDivider from "./components/WorkDivider";
import OverflowCard from "./components/OverflowCard";

import { serverFetch } from "../../../libs/server-fetch";
import {  PortfolioList } from "../Types/portfolio-types";
import PortfolioDetails from "./components/PortfolioDetails";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const portfolioDetails = (await serverFetch(`portfolio/${id}`)) as PortfolioList;

  if (!portfolioDetails)
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };

  return {
    title: `${portfolioDetails[0].title}`,
    description: `Read what we made`,
  };
}


const page = async (props: { params: Promise<Props["params"]> }) => {
  const { id } = await props.params;
  const portfolioDetails = await serverFetch<PortfolioList>(`portfolio/${id}`);
  
  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="Our Products" />
      <WorkDivider portfolio={portfolioDetails || []} />
      <OverflowCard portfolio={portfolioDetails || []} />
      <div className="w-full p-1 md:w-2/5 py-6 mx-auto">
        <PortfolioDetails portfolio={portfolioDetails || []} />
      </div>
    </div>
  );
};

export default page;





// export async function generateStaticParams() {
//   const portfolio = (await serverFetch(`portfolio`)) as PortfolioList[];
//   return portfolio.map((d) => ({
//     id: String(d[0].id),
//   }));
// }