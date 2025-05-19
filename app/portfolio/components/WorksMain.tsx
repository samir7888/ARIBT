import React from "react";

import { serverFetch } from "../../../libs/server-fetch";
import { PortfolioList } from "../Types/portfolio-types";
import PortfolioCard from "./PortfolioCard";

const WorksMain = async () => {
  const portfolios = await serverFetch<PortfolioList>("portfolio");
if (!portfolios) {
  return <div className="container mx-auto py-15">No data available</div>
}
  return (
    <div className="container mx-auto py-15">
      <div className="grid grid-cols-2 gap-5">
        {(portfolios).map((work) => (
          <PortfolioCard  work={work} />
        ))}
      </div>
    </div>
  );
};

export default WorksMain;
