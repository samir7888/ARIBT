import React, { Suspense } from "react";
import BlogHeroSection from "../components/BlogHeroSection";
import BlogDetails from "./components/BlogDetails";
import { Metadata } from "next";
import { serverFetch } from "../../../libs/server-fetch";
import { Skeleton } from "@/components/components/ui/skeleton";
import { BlogPost, BlogPostList } from "../components/types/blogsType";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const filterBlog = await serverFetch<BlogPost>(`blog/${id}`);

  if (!filterBlog)
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };

  return {
    title: `${filterBlog.title}`,
    description: `Read what ${filterBlog.author} wants to say`,
  };
}

const page = async (props: { params: Promise<Props["params"]> }) => {
  const { id } = await props.params;

  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="Blog Details" />
      <Suspense
        fallback={
          <div className="container !max-w-[800px] min-h-screen mx-auto flex flex-col gap-12 ">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        }
      >
        <BlogDetails id={id} />
      </Suspense>
    </div>
  );
};

export default page;

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[125px] w-[550px] rounded-xl bg-gray-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-200" />
        <Skeleton className="h-4 w-[200px] bg-gray-200" />
      </div>
    </div>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = (await serverFetch<BlogPostList>(`/blog`)) || [];

  return posts.map((post) => ({
    id: post.id,
  }));
}
