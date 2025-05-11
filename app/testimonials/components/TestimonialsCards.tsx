
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { testimonials } from "./testimonialsData";

interface Testimonial {
  id: Number;
  name: string;
  position: string;
  image: string;
  social: string;
  message: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <section
    className="p-[1px] rounded-2xl h-auto"
    style={{
      background: "linear-gradient(to bottom, var(--color-gray-100), transparent)",
    }}
  >
    <div
      className="flex flex-col p-4 bg-white rounded-[calc(var(--radius-2xl)-3px)] w-full h-full"
    >
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
        <a
          href={testimonial.social}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          <FaFacebook size={28} />
        </a>
      </div>

      {/* Message */}
      <p
        style={{ fontSize: "clamp(0.7rem, 0.9vw, 1rem)" }}
        className="mt-5 text-sm text-brand-primary leading-relaxed"
      >
        “{testimonial.message}”
      </p>
    </div>
  </section>
);

// Grid rendering
const TestimonialGrid = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  </div>
);

export default TestimonialGrid;
