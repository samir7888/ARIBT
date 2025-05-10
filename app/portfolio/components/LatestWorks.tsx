"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Recentworks from "./Recentworks";
import Link from "next/link";

// Define types for our works data
type WorkTag = "Figma" | "Photoshop" | "Web Design" | "Branding";

export type Work = {
  id: number;
  title: string;
  subtitle?: string;
  client: string;
  tags: WorkTag[];
  imageSrc: string;
  link?: string;
};

// Sample data for latest works
const works: Work[] = [
  {
    id: 1,
    title: "Cassy Hero - Landingpage",
    client: "Akshar College",
    tags: ["Branding", "Web Design", "Figma", "Photoshop"],
    imageSrc:
      "https://images.pexels.com/photos/29940748/pexels-photo-29940748/free-photo-of-scenic-mountain-landscape-in-french-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "The largest school management solution",

    client: "Akshar College",
    tags: ["Branding", "Web Design", "Figma", "Photoshop"],
    imageSrc:
      "https://images.pexels.com/photos/29940748/pexels-photo-29940748/free-photo-of-scenic-mountain-landscape-in-french-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Educational Platform",
    client: "Akshar College",
    tags: ["Figma", "Photoshop", "Branding", "Web Design"],
    imageSrc:
      "https://images.pexels.com/photos/29940748/pexels-photo-29940748/free-photo-of-scenic-mountain-landscape-in-french-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Learning Management System",
    client: "Akshar College",
    tags: ["Branding", "Web Design", "Figma", "Photoshop"],
    imageSrc:
      "https://images.pexels.com/photos/29940748/pexels-photo-29940748/free-photo-of-scenic-mountain-landscape-in-french-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const LatestWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate the number of items to show based on screen size
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < works.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-8">Latest works</h2>

      <div className="relative">
        {/* Slider container */}
        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {works.map((work,index) => (
              <div
                key={work.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="p-4 relative bg-gray-100 rounded-2xl shadow-md overflow-hidden h-full">
                  <div className=" h-48 sm:h-56 md:h-64">
                    <Image
                      src={work.imageSrc}
                      alt={work.title}
                      fill
                      className="object-cover p-1 rounded-2xl"
                    />
                  </div>
                  <div className="absolute left-2 right-2 min-h-28 bottom-2 bg-white rounded-xl p-4">
                    <div className="flex items-center mb-4">
                      <div className="mr-auto">
                        <h3 className="font-semibold text-md ">
                          {work.client}
                        </h3>
                        {work.subtitle && (
                          <p className="text-gray-500">{work.subtitle}</p>
                        )}

                      
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

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary shadow-md z-10 ${
            currentIndex === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-white hover:bg-gray-50 hover:text-black"
          }`}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= works.length - visibleItems}
          className={`absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary shadow-md z-10 ${
            currentIndex >= works.length - visibleItems
              ? "text-gray-300 cursor-not-allowed"
              : "text-white hover:bg-white hover:text-black"
          }`}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <Recentworks works={works} />
    </div>
  );
};

export default LatestWorks;
