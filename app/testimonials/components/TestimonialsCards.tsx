import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { Testimonial } from "../Types/TestimonialsTypes";
import BlogBody from "../../blogs/[id]/components/BlogBody";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <section
    className="p-[1px] rounded-2xl h-auto"
    style={{
      background:
        "linear-gradient(to bottom, var(--color-gray-100), transparent)",
    }}
  >
    <div className="flex flex-col p-4 bg-white rounded-[calc(var(--radius-2xl)-3px)] w-full h-full">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-2xl object-cover aspect-square"
          />
          <div>
            <h4 className="text-md text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div
        style={{ fontSize: "clamp(0.7rem, 0.9vw, 1rem)" }}
        className="mt-5 text-sm text-brand-primary leading-relaxed"
      >
        <BlogBody description={testimonial.description} />
      </div>
    </div>
  </section>
);

export default TestimonialCard;
