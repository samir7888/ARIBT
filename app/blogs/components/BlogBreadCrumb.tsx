"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "../../../libs/CapitalizeWord";

const BreadCrumb = () => {
  const pathname = usePathname();
  return (
    <Breadcrumb
      className="bg-gray-500 font-noir font-light  opacity-70 text-white
     p-1 pr-4  rounded-4xl cursor-pointer"
    >
      <BreadcrumbList>
        <BreadcrumbItem className="bg-brand-primary px-3 py-2  rounded-4xl ">
          <Link
            className="pt-2 tracking-wider"
            href={`/${pathname.split("/")[1]}`}
          >
            {capitalizeFirstLetter(pathname.split("/")[1])}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link className="pt-2 tracking-wider" href="/">
            Home
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
