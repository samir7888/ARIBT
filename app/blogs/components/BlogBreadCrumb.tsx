import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/components/ui/breadcrumb";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <Breadcrumb
      className="bg-gray-500 font-noir font-light  opacity-70 text-white
     px-1 pr-4 py-1 rounded-4xl cursor-pointer"
    >
      <BreadcrumbList>
        <BreadcrumbItem className="bg-brand-primary px-3 py-2  rounded-4xl ">
          <Link className="pt-1 tracking-wider" href="/blogs">Blogs</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link className="pt-1 tracking-wider" href="/">Home</Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
