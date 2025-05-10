"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Mountain landscape with lake reflection",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Team collaborating in open office",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Cyclist riding on a mountain road",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Woman posing against textured wall",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "People working in modern office",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Cyclist training on road",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Woman in flowing dress",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Collaborative office workspace",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Mountain landscape with lake reflection",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Forest during golden hour",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Coffee cup on wooden table",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Beach with crystal clear water",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Person hiking on rocky terrain",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Modern architecture building",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Sunset over the city skyline",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Bookshelf in cozy library",
  },
  {
    id: 17,
    src: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Snow-covered mountain peak",
  },
  {
    id: 18,
    src: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Woman standing in field at sunset",
  }
];


const ImageGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const displayImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="masonry-grid w-fit">
        {displayImages.map((image) => (
          <div key={image.id} className="masonry-item">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300"
        >
          <span>{showAll ? "Show Less" : "Show All"}</span>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
