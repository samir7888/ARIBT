import Image from "next/image";
import { serverFetch } from "../../../../libs/server-fetch";
import { Copy, Link } from "lucide-react";
import BlogBody from "./BlogBody";
import { Metadata } from "next";




export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doctorId = parseInt(id);
  
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
            {/* <div className="rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={``}
                alt="author profile picture"
                width={200}
                height={200}
                className="bg-center bg-cover"
              />
            </div> */}
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




export async function generateStaticParams() {
  const blogs = (await serverFetch('blogs')) as BlogPost[];
  return blogs.map((d) => ({
    id: String(d.id),
  }));
}
