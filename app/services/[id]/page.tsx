import React from "react";
import BlogHeroSection from "../../blogs/components/BlogHeroSection";
import Image from "next/image";
import { serverFetch } from "../../../libs/server-fetch";
import { Service } from "../Types/service-types";
import ServiceBody, { ServiceBodyDetails } from "../components/ServicesBody";
import { Metadata } from "next";





export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const service = (await serverFetch<Service>(`category/${id}`)) ;

  if (!service)
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };

  return {
    title: `${service.title}`,
    description: `Read what ${service.title} is`,
  };
}

type Props = {
  params: {
    id: string
  };
}


const page = async(props: { params: Promise<Props["params"]> }) => {
  const {id} =await props.params;
  const services = await serverFetch<Service>(`category/${id}`);
  console.log(services)
  return (
    <div className="min-h-screen mx-auto font-aeonik">
      <BlogHeroSection title="Our Services" />
      <div className="py-12 w-full md:w-4/5 mx-auto">
        <div className="rounded-2xl container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {/* Left Card */}
          <div className="flex flex-col justify-between px-6 py-8">
            <div className="space-y-6 p-4">
              <h2
                className="text-3xl w-4/5 font-bold text-gray-800"
                style={{ fontSize: "clamp(2rem, 2.5vw, 2.9rem)" }}
              >
                {services?.title}
              </h2>

              {/* todo: need subtitle */}
              {/* <p
                className="w-4/5 text-gray-600"
                style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.5rem)" }}
              >
                {services.subtitle}
              </p> */}

              {/* todo: need features of the services*/}
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
           <div className="p-8 bg-gray-200 rounded-xl">
                  <div className="relative aspect-square ">
                    <Image
                      src={services?.file || ''}
                      fill
                      alt={services?.title || ''}
                      className="object-cover aspect-auto  rounded-2xl "
                    />
                  </div>
                </div>
        </div>
      </div>
        <div className="mb-8 ">
            <ServiceBodyDetails description={services?.description || ''} />
          </div>
    </div>
  );
};

export default page;
