"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
const tabs = [
  "Educational system",
  "Financial",
  "Hotel Management",
  "Enterprise management",
  "Corporate management",
];

export default function Frame({isProduct}:{isProduct?:boolean}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  return (
    <Card className={`p-1 rounded-full tracking-wide font-normal  ${isProduct ? "bg-brand-primary":"bg-gray-200"}`}>
      <CardContent className="p-0">
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="absolute h-[30px]  transition-all duration-300 ease-out p-6  bg-white rounded-3xl flex items-center"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Tabs */}
          <div className="relative  flex space-x-[6px] items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={`p-6 font-medium cursor-pointer rounded-3xl tracking-wide  transition-colors duration-300 h-[30px] ${
                  index === activeIndex
                    ? "bg-white text-black "
                    : `${isProduct ? "text-white hover:text-black":"text-gray-400"} `
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
                  {tab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
