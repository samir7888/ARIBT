import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title,
  description,
  imageSrc,
  imageAlt = 'Service illustration',
  className = ''
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Card Image Container */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4 overflow-hidden">
        <div className="relative w-full aspect-video">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
              <span className="text-gray-400">Image placeholder</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Service Information */}
      <div className="flex flex-col space-y-2">
        {/* {subtitle ?? (
          <p className="text-sm font-medium text-gray-500">{subtitle}</p>
        )} */}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;