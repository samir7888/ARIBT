"use client";
import { useState } from "react";
import { ChevronRight, Box, PieChart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../services/Types/service-types";
import ServiceBody from "./ServicesBody";

export function ServiceCards({ serviceData }: { serviceData: Service }) {
  return (
    <div className="border border-gray-200 rounded-2xl container grid grid-cols-1 !p-0 md:grid-cols-2 gap-6 mx-auto h-fit">
      <div className=" order-2 md:order-first p-8">
        <div className="space-y-6 ">
          <h2 style={{ fontSize: "clamp(2rem, 2vw, 2.5rem)" }}>
            {serviceData.title}
          </h2>
          <div
            className="text-gray-400"
            style={{ fontSize: "clamp(0.9rem, 1vw, 1.5rem)" }}
          >
            {/* todo summary needed */}
            <ServiceBody description={serviceData.description} />
          </div>
        </div>
        <Link href={`/products/1`} className="!w-fit inline">
          <button className="group text-xl text-black tracking-widest md:pt-10 font-medium flex items-center hover:text-teal-700 transition-all duration-300">
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-700 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Read more
            </span>
            <ChevronRight className="pt-1 w-8 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>

      {/* Right Card */}
      <div className="p-8 bg-gray-200 rounded-xl">
        <div className="relative aspect-square ">
          <Image
            src={serviceData.file}
            fill
            alt={serviceData.title}
            className="object-cover aspect-auto  rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}
