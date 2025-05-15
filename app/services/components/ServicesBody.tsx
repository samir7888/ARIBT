"use client";

import DOMPurify from "dompurify";


const ServiceBody = ({ description }: { description: string }) => {
  return (
    <div
      className="prose lg:prose-xl line-clamp-4 "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description.slice(0,1000)) }}
    />
  );
};

export default ServiceBody;
