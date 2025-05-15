import React from "react";
import BlogHeroSection from "../blogs/components/BlogHeroSection";
import ProductBody from "./components/ProductBody";
import FooterSection from "../../components/Footer/FooterSection";

import { serverFetch } from "../../libs/server-fetch";
import {  ServiceList } from "./Types/service-types";
import { ServiceCards } from "./components/ProductsCards";


const page = async () => {
  const services = await serverFetch<ServiceList>("category");
  return (
    <div className="min-h-screen">
      <BlogHeroSection title="Our Services" />
      <ProductBody />
      <div className="space-y-12 py-12">
        {services &&
          services.map((service) => (
            <ServiceCards key={service.id} serviceData={service} />
          ))}
      </div>
      <FooterSection />
    </div>
  );
};

export default page;
