import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { testimonials } from "../../testimonials/components/testimonialsData";
import Link from "next/link";

const TestimonialCard = () => (
  <section
    className=" p-[1px] w-full  rounded-2xl flex gap-12 "
    style={{
      background:
        "linear-gradient(to bottom, var(--color-white), transparent)",
    }}
  >
    {testimonials.map((testimonial) => (
      <div key={testimonial.id}
        className=" flex bg-gray-100 flex-col w-[400px] h-auto  p-2"
        style={{ borderRadius: "calc(var(--radius-2xl) - 3px)" }}
      >
        {/* Top Section: Profile and Logo */}
        <div className=" flex gap-36 md:gap-1 items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={testimonial.image}
              alt="my "
              width={60}
              height={50}
              className="rounded-2xl object-cover aspect-square"
            />
            <div className="">
              <h4 className="text-md  text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </div>

          <Link
            href={testimonial.social}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaFacebook size={40} />
          </Link>
        </div>

        {/* Testimonial Content */}
        <p
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 1rem)" }}
          className="text-sm w-fit mt-5 p-2 rounded-xl bg-white text-brand-primary leading-relaxed "
        >
          {testimonial.message}
        </p>
      </div>
    ))}
  </section>
);

export default TestimonialCard;
