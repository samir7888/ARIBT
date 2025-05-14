'use client'

import  DOMPurify from 'dompurify';
import React from 'react'

const BlogBody = ({description}:{description:string}) => {
  return (
    <div
              className="mb-4 text-gray-700 prose lg:prose-xl "
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
            />
  )
}

export default BlogBody