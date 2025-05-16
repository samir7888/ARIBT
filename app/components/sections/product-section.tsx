"use client";
import { useState } from "react";
import { ChevronRight, Box, PieChart, Menu } from "lucide-react";
import Image from "next/image";
import Frame from "../cards/filterCard";
import Link from "next/link";
import ButtonEffect2 from "../../../components/Buttons/ButtonEffect2";

// Main product showcase component
export default function ProductShowcase({
  title = "Our Products",

  products = [
    {
      id: 1,
      icon: <Box className="text-gray-800" />,
      title: "Abhyam School Management System",
      subtitle: "",
      image: "/api/placeholder/500/400",
      category: "Educational system",
    },
  ],
  defaultCategory = "Educational system",
}) {
  // State for the active category filter
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div style={{ fontFamily: "Aeonik" }} className="my-12 mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex flex-col items-center mb-8">
        <div className="inline-flex border px-4 py-2 border-gray-200 rounded-2xl items-center gap-2 text-sm text-black  mb-2">
          <span>Products</span>
          <div className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300">
            <Menu size={12} />
          </div>
        </div>
        <h1 className="text-3xl pt-3 tracking-wider  font-bold text-center">
          {title}
        </h1>
      </div>

      {/* Filter section */}
      <div className="container mx-auto flex w-fit lg:justify-center mb-8 overflow-x-auto ">
        <Frame
          tabs={[
            "Educational system",
            "Financial",
            "Hotel Management",
            "Enterprise management",
            "Corporate management",
          ]}
        />
      </div>

      {/* Products grid */}
      <Productcard />
    </div>
  );
}

export function Productcard() {
  return (
    <div className="border border-gray-200 rounded-2xl container grid grid-cols-1 !p-0 md:grid-cols-2 gap-6 mx-auto ">
      <div className="order-2 md:order-first p-8">
        <div className="space-y-6 w-[75%]  ">
          
          <h2 style={{ fontSize: "clamp(2rem, 2vw, 2.5rem)" }}>
            Abhyam School Management System
          </h2>
          <p
            className="text-gray-400"
            style={{ fontSize: "clamp(0.9rem, 1vw, 1.5rem)" }}
          >
            Mark and track attendance digitally with a single click. Notify
            parents instantly about absences and generate attendance reports in
            seconds.
          </p>
        </div>
        <Link href={`/products/1`} className="inline-block ">
          <ButtonEffect2 />
        </Link>
      </div>

      {/* Right Card */}
      <div className="rounded-xl bg-gray-200 p-6">
        <div className="overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/31775324/pexels-photo-31775324/free-photo-of-close-up-of-car-dashboard-with-digital-display.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={1200}
            height={500}
            alt=""
            className="bg-cover w-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}
