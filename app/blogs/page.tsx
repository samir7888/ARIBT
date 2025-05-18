import { Suspense } from "react";
import BlogHeroSection from "./components/BlogHeroSection";
import Blogs from "./components/Blogs";
import FilterBlog from "./components/FilterBlog";
import { Skeleton } from "@/components/components/ui/skeleton";

type Props = {
  searchParams: {
    search: string;
    category: string;
  };
};

const page = async (props: {
  searchParams: Promise<Props["searchParams"]>;
}) => {
  const { search, category } = await props.searchParams;

  return (
    <div className="min-h-screen mx-auto">
      <BlogHeroSection title="BLOGS" />
      <div className="container w-full md:w-3/5 mx-auto space-y-8 p-4 mt-14 font-aeonik">
        <FilterBlog />
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>}>
          <Blogs search={search} category={category} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;



export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[125px] max-w-[250px] rounded-xl bg-gray-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-200" />
        <Skeleton className="h-4 w-[200px] bg-gray-200" />
      </div>
    </div>
  )
}

