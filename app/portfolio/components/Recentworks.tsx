"use client";
import React from "react";
import { Work } from "./LatestWorks";
import Image from "next/image";
import Link from "next/link";

const Recentworks = ({ works }: { works: Work[] }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-8">Recent works</h2>
      <div className="">
        <div className="  grid grid-cols-2 gap-5">
          {works.map((work) => (
            <div key={work.id} className="flex-shrink-0 px-2">
              <div className="p-4 relative bg-gray-100 rounded-2xl shadow-md overflow-hidden h-full">
                <Link href={`/portfolio/${work.id}`}>
                  <div className=" h-48 sm:h-56 md:h-64">
                    <Image
                      src={work.imageSrc}
                      alt={work.title}
                      fill
                      className="object-cover p-1 rounded-2xl"
                    />
                  </div>
                </Link>
                <div className="absolute left-2 right-2 min-h-28 bottom-2 bg-white rounded-xl p-4">
                  <div className="flex items-center mb-4">
                    <div className="mr-auto">
                      <h3 className="font-semibold text-md ">{work.client}</h3>
                      {work.subtitle && (
                        <p className="text-gray-500">{work.subtitle}</p>
                      )}

                      <div className="flex items-center flex-wrap gap-2 text-gray-400">
                        {work.tags.slice(0, 2).map((tag, index) => (
                          <>
                            <span className="mb-2 font-bold ">.</span>
                            <span
                              key={index}
                              className={`text-xs font-semibold `}
                            >
                              {tag}
                            </span>
                          </>
                        ))}
                      </div>
                    </div>
                    <Link href={`/portfolio/${work.id}`}>
                      <button className="bg-white text-gray-400 px-4 py-1 rounded  hover:bg-gray-50 transition-colors">
                        View
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-2 rounded-full bg-brand-primary text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recentworks;
