"use client";

import DOMPurify from "dompurify";


const BlogBody = ({ description }: { description: string }) => {
  return (
    <div
      className="prose lg:prose-xl "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};

export default BlogBody;
