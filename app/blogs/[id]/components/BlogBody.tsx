"use client";

import DOMPurify from "isomorphic-dompurify";


const BlogBody = ({ description }: { description: string }) => {
  return (
    <div
      className="prose lg:prose-xl "
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};

export default BlogBody;
