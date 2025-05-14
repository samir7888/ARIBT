"use client";

import DOMPurify from "dompurify";


const TestimonialBody = ({ description }: { description: string }) => {
  return (
    <div
      className="line-clamp-4 overflow-hidden text-ellipsis "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};

export default TestimonialBody;
