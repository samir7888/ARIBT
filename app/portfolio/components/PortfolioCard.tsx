import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "../Types/portfolio-types";
import { cn } from "@/components/lib/utils";

export default function PortfolioCard({
  work,
  orientation = "landscape",
}: {
  work: Portfolio;
  orientation ?: "portrait" | "landscape";
}) {
  return (
    <section
      className="p-[1px] rounded-2xl"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-gray-200), transparent)",
      }}
    >
      <div
        className="p-2 relative bg-gray-100  shadow-md h-full"
        style={{ borderRadius: "calc(var(--radius-2xl) - 1px)" }}
      >
        <Link
          href={`/portfolio/${work?.id}`}
          className={cn(orientation === "portrait" && "md:absolute md:inset-0")}
        >
          <Image
            src={work.coverImage}
            alt={work.title}
            height={500}
            width={800}
            className={cn(
              "w-full h-auto rounded-2xl",
              orientation === "portrait" && "h-full object-cover"
            )}
          />
        </Link>
        <div className="absolute hidden sm:block left-4 right-4 h-auto bottom-4 bg-white shadow-sm rounded-xl p-4">
          <div className="flex items-center mb-4">
            <div className="mr-auto">
              <Link href={`/portfolio/${work?.id}`}>
              <h3 className="font-semibold text-sm md:text-xl ">{work.title}</h3>
              </Link>
              {work.createdAt && (
                        <p className="text-brand-primary">{work.year}</p>
                      )}

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
    </section>
  );
}
