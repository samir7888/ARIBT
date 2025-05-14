import FooterSection from "../../components/Footer/FooterSection";
import BlogHeroSection from "./components/BlogHeroSection";
import Blogs from "./components/Blogs";
import FilterBlog from "./components/FilterBlog";

type Props = {
  searchParams: {
    search: string;
    category:string;
  };
};

const page = async (props: {
  searchParams: Promise<Props["searchParams"]>;
}) => {
  const { search,category } = await props.searchParams;

  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="BLOGS" />
      <div className="container w-full md:w-3/5 mx-auto space-y-8 p-4 mt-14 font-aeonik">
        <FilterBlog />
        <Blogs search={search} category={category} />
      </div>
      <FooterSection />
    </div>
  );
};

export default page;
