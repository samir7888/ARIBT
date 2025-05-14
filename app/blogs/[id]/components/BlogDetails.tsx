import Image from "next/image";
import * as DOMPurify from "dompurify";
import BlogPage from "./Blog";
import { serverFetch } from "../../../../libs/server-fetch";
import { Copy, Link } from "lucide-react";
import BlogBody from "./BlogBody";

const BlogDetails = async ({ id }: { id: string }) => {
  // const filterBlog = blogPosts.find((blog) => blog.id == Number(id)) || "";
  console.log("id", id);
  const filterBlog = (await serverFetch(`blog/${id}`)) as BlogPost;
  console.log("blog ", filterBlog);
  if (!filterBlog) {
    return <div>No Details of that blog available</div>;
  }
  return (
    <div className="container !max-w-[800px] min-h-screen mx-auto flex flex-col font-aeonik">
      <div className="flex gap-6">
        <div className="flex  flex-col w-full md:w-1/2">
          <p className="text-brand-primary">{filterBlog?.date}</p>
          <h2 className="text-2xl pt-4">{filterBlog?.title}</h2>
          {/* <p className="text-gray-400 pt-6 w-full md:w-4/5">
            {filterBlog?.excerpt}
          </p> */}
          <div className="flex gap-3 pt-6">
            <div className="rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={`data:image/jpeg;base64,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`}
                alt="author profile picture"
                width={200}
                height={200}
                className="bg-center bg-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="flex font-semibold">{filterBlog?.author}</h3>
              <p className="text-gray-300">Frontend Engineer</p>
            </div>
          </div>
        </div>
        {/* <div className=" min-h-48 mt-10 md:mt-0 w-full md:w-1/2 px-9 overflow-hidden bg-gray-100">
          <Image
            src={filterBlog?.image}
            alt={filterBlog?.title}
            width={400}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>

      {/* Body part */}

      <div className="mt-10">
        <article>
          {/* Lorem ipsum header section */}
          <div className="mb-8">
            <p className="text-gray-700  mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquot risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>

            <h1 className="text-2xl font-bold mb-6">{filterBlog.title}</h1>

            {/* <p className="text-gray-700 mb-8">{filterBlog.Technology}</p> */}
          </div>

          {/* First image */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.pexels.com/photos/31649016/pexels-photo-31649016/free-photo-of-vibrant-cherry-blossom-trees-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Minimalist workspace with desk and chair"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Image courtesy of Lorem Pixelsum via{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Unsplash
              </Link>
            </p>
          </div>

          {/* Quote section */}
          {/* <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-8 bg-gray-50">
        <p className="italic text-gray-700">"{quote.text}"</p>
        <footer className="mt-2 text-sm">
          — {quote.author}, {quote.title}
        </footer>
      </blockquote> */}

          {/* Main content */}
          <div className="mb-8">
            <BlogBody description={filterBlog.description} />
          </div>

          {/* Software and tools section */}
          {/* <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Software and tools</h2>
        <p className="text-gray-700">{softwareTools}</p>
      </section> */}

          {/* Resources section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Other resources</h2>
            <p className="text-gray-700 mb-4">
              Sagittis sit eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc. nunc sit. Eget diam curabitur mi
              ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam. Sit ut fringilla tristique. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis.
            </p>

            {/* Numbered list */}
            {/* <ol className="list-decimal pl-8 mb-6">
          {resources.map((resource, index) => (
            <li key={index} className="mb-2">
              {resource.link ? (
                <Link href={resource.link} className="text-blue-500 underline">
                  {resource.title}
                </Link>
              ) : (
                resource.title
              )}
            </li>
          ))}
        </ol> */}
          </section>

          {/* Second image */}
          <div className="mb-8">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.pexels.com/photos/31649016/pexels-photo-31649016/free-photo-of-vibrant-cherry-blossom-trees-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Team collaboration session with sticky notes"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Image courtesy of Lorem via{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Unsplash
              </Link>
            </p>
          </div>

          {/* Conclusion */}
          {/* <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Conclusion</h2>

            <div
              className="mb-4 text-gray-700 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: filterBlog.description }}
            />
          </section> */}

          {/* Share buttons */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div>Share this post</div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Copy link</span>
                <Copy className="w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on X</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Share on LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9ZM11 10h3v1.38a4 4 0 0 1 3.11-1.5c3.19 0 3.89 2.11 3.89 4.85V19h-3v-4c0-1.12-.02-2.56-1.6-2.56-1.6 0-1.84 1.22-1.84 2.48V19h-3v-9Z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
