import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogPagination from "./BlogPagination";
import { serverFetch } from "../../../libs/server-fetch";

export default async function Blogs({
  search,
  category,
}: {
  search: string;
  category: string;
}) {
  console.log(search, category);
  const queryParams = new URLSearchParams();

  const queryString = queryParams.toString();
  const url = `/blog${queryString ? `?${queryString}` : ""}`;

  const filteredPosts = await serverFetch(url);
  console.log("first", filteredPosts);
  return (
    <div className="space-y-8">
      {/* Blog Posts Title */}
      <div className="pt-4">
        <h2 className="text-2xl font-bold">All blog posts</h2>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts &&
          filteredPosts.map((post: BlogPost) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <Link href={`/blogs/${post.id}`}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={(post?.image) ? `${post?.image}`:'https://placehold.co/600x400/png' }
                  alt={post.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-brand-primary mb-2">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`/blogs/${post.id}`}>
                  <h3 className="text-xl  font-medium mb-2 flex items-center justify-between ">
                    {post.title}
                    <ArrowUpRight className="h-6 min-w-6 text-black" />
                  </h3>
                </Link>

                {/* <p className="text-gray-600 w-4/5 flex-grow mb-4">
                  {post.description}
                </p> */}

                {/* <div className="flex flex-wrap gap-2 mt-auto">
                {post.categories.map((cat, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cat === "Frameworks"
                        ? "bg-orange-50 text-orange-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div> */}
              </div>
            </div>
          ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No posts found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}

      <BlogPagination />
    </div>
  );
}
