import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "../Types/portfolio-types";

export default function PortfolioCard({ work }: { work: Portfolio }) {
  return (
    <div className="p-2 relative bg-gray-100 rounded-2xl shadow-md h-full">
      <Link href={`/portfolio/${work?.id}`}>
        <div className="">
          <Image
            src={work.coverImage}
            alt={work.title}
            height={500}
            width={800}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </Link>
      <div className="absolute left-4 right-4 min-h-28 bottom-4 bg-white/97 shadow-sm rounded-xl p-4">
        <div className="flex items-center mb-4">
          <div className="mr-auto">
            <h3 className="font-semibold text-xl ">{work.title}</h3>
            {/* {work.subtitle && (
                        <p className="text-gray-500">{work.subtitle}</p>
                      )} */}

            {/* <div className="flex items-center flex-wrap gap-2 text-gray-400">
                        {work.tags.slice(0, 2).map((tag, index) => (
                          <span key={index}>
                            <span className="mb-2 font-bold ">.</span>
                            <span
                              key={index}
                              className={`text-xs font-semibold `}
                            >
                              {tag}
                            </span>
                          </span>
                        ))}
                      </div> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-2">
                    {work.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-2 rounded-full bg-brand-primary text-white `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
      </div>
    </div>
  );
}
