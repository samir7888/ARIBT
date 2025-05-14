import Image from "next/image";
import { serverFetch } from "../../../../libs/server-fetch";
import { Copy, Link } from "lucide-react";
import BlogBody from "./BlogBody";
import { Metadata } from "next";







const BlogDetails = async ({ id }: { id: string }) => {
   const filterBlog = (await serverFetch(`blog/${id}`)) as BlogPost;
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

            {/* profile image */}
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
        <div className=" min-h-48 mt-10 md:mt-0 w-full md:w-1/2 px-9 overflow-hidden bg-gray-100">
          <Image
            src={filterBlog.image ? `${filterBlog.image}` : 'https://placehold.co/600x400/png'}
            alt={filterBlog?.title}
            width={400}
            height={1500}
            className="w-full h-full object-cover"
          />
        </div>
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

            {/* <h1 className="text-2xl font-bold mb-6">{filterBlog.title}</h1> */}

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



