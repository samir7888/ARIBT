import React from "react";
import BlogHeroSection from "../components/BlogHeroSection";
import BlogDetails from "./components/BlogDetails";
import FooterSection from "../../../components/Footer/FooterSection";
import { Metadata } from "next";
import { serverFetch } from "../../../libs/server-fetch";

type Props = {
  params: {
    id: string;
  };
};



export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  
   const filterBlog = (await serverFetch(`blog/${id}`)) as BlogPost;

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
      <BlogDetails id={id} />
      <FooterSection />
    </div>
  );
};

export default page;



export async function generateStaticParams() {
  const blogs = (await serverFetch('blog')) as BlogPost[];
  return blogs.map((d) => ({
    id: String(d.id),
  }));
}

