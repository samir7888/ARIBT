"use client";

import DOMPurify from "isomorphic-dompurify";


const ServiceBody = ({ description }: { description: string }) => {
  return (
    <div
      className="prose lg:prose-xl line-clamp-3 "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description.slice(0,1000)) }}
    />
  );
};
export default ServiceBody;


export const ServiceBodyDetails = ({ description }: { description: string }) => {
  return (
    <div
      className="prose lg:prose-xl mx-auto "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};


