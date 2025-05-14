import React from "react";
import BlogHeroSection from "../components/BlogHeroSection";
import BlogDetails from "./components/BlogDetails";
import FooterSection from "../../../components/Footer/FooterSection";

type Props = {
  params: {
    id: string;
  };
};

const page = async (props: { params: Promise<Props["params"]> }) => {
  const { id } = await props.params;

  console.log(id);

  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="Blog Details" />
      <BlogDetails id={id} />
      <FooterSection />
    </div>
  );
};

export default page;
