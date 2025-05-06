"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { blogPosts } from "../../components/blogs-data/blogs-data";

const BlogDetails = () => {
  const { id } = useParams();

  const filterBlog = blogPosts.find((blog) => blog.id == Number(id));
  console.log("blog ", filterBlog);
  if (!filterBlog) {
    return <div>No Details of that blog available</div>;
  }
  return (
    <div className="min-h-screen mx-auto flex flex-col">
      <div>
        <div>
          <p>{filterBlog?.date}</p>
          <h2>{filterBlog?.title}</h2>
          <p>{filterBlog?.excerpt}</p>
          <div>
            <div>
              <Image
                src={`/${filterBlog?.image}`}
                alt="author profile picture"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col">
              <h3>{filterBlog?.author}</h3>
              <p>Frontend Engineer</p>
            </div>
          </div>
        </div>
        <div className=" h-48 w-full overflow-hidden">
          <Image
            src={filterBlog?.image}
            alt={filterBlog?.title}
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default BlogDetails;
