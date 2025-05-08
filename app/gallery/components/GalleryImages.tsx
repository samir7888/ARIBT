"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
// Sample images from Pexels (replace with your preferred image URLs)
const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg",
    alt: "Cyclist riding on a mountain road",
    aspectRatio: "landscape", // can be landscape, portrait, or square
    size: "large" // can be small, medium, large
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    alt:"modern office",
    aspectRatio: "portrait",
    size: "medium"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    alt: "Modern office space with people working",
    aspectRatio: "landscape",
    size: "medium"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/6175204/pexels-photo-6175204.jpeg",
    alt: "Cyclist on mountain road",
    aspectRatio: "landscape",
    size: "small"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/6567255/pexels-photo-6567255.jpeg",
    alt: "Woman posing against textured wall",
    aspectRatio: "portrait",
    size: "large"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
    alt: "People working in modern office",
    aspectRatio: "landscape",
    size: "small"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg",
    alt: "Cyclist training on road",
    aspectRatio: "landscape",
    size: "small"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/6169018/pexels-photo-6169018.jpeg",
    alt: "Woman in flowing dress",
    aspectRatio: "portrait",
    size: "medium"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    alt: "Collaborative office workspace",
    aspectRatio: "landscape",
    size: "large"
  }
];

const ImageGallery = () => {

  const [showAll, setShowAll] = useState(false);
  const displayImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-6 gap-2 md:gap-4">
        {/* Row 1 */}
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[0].src}
              alt={displayImages[0].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[1].src}
              alt={displayImages[1].alt}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[2].src}
              alt={displayImages[2].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-6 md:col-span-1">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[3].src}
              alt={displayImages[3].alt}
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[4].src}
              alt={displayImages[4].alt}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[5].src}
              alt={displayImages[5].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[6].src}
              alt={displayImages[6].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[7].src}
              alt={displayImages[7].alt}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="rounded-lg overflow-hidden h-full">
            <Image 
              src={displayImages[8].src}
              alt={displayImages[8].alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Show All Button */}
      <div className="flex justify-center mt-8 mb-4">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300"
        >
          <span>Show All</span>
         <ChevronRight />
        </button>
      </div>

      
    </div>
  );
};

export default ImageGallery;