"use client";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";
import gsap, { Power0 } from "gsap";
import { useEffect, useRef } from "react";
import type {
  Testimonial,
  Testimonials,
} from "../../testimonials/components/Types/TestimonialsTypes";
import BlogBody from "../../blogs/[id]/components/BlogBody";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonials;
}) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const anim1Ref = useRef<gsap.core.Tween | null>(null);
  const anim2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const animateRow = (
      container: HTMLDivElement | null,
      direction: "left" | "right",
      animRef: React.MutableRefObject<gsap.core.Tween | null>
    ) => {
      if (!container || container.children.length === 0) return;

      const content = container.children[0] as HTMLElement;
      const clone = content.cloneNode(true);
      container.appendChild(clone);

      const contentWidth = content.offsetWidth;

      const tween = gsap.fromTo(
        container,
        { x: direction === "left" ? 0 : -contentWidth },
        {
          x: direction === "left" ? -contentWidth : 0,
          duration: 20,
          repeat: -1,
          ease: Power0.easeNone,
        }
      );

      animRef.current = tween;
    };

    animateRow(row1Ref.current, "left", anim1Ref);
    animateRow(row2Ref.current, "right", anim2Ref);
  }, []);

  const handleHover = (
    isHovering: boolean,
    animRef: React.MutableRefObject<gsap.core.Tween | null>
  ) => {
    if (animRef.current) {
      isHovering ? animRef.current.pause() : animRef.current.play();
    }
  };

  return (
    <>
      {/* Gradient shadows */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-20" />

      {/* Row 1 */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => handleHover(true, anim1Ref)}
        onMouseLeave={() => handleHover(false, anim1Ref)}
      >
        <div ref={row1Ref} className="flex w-max gap-6 ">
          {[...Array(4)].map((_, idx) => (
            <TestimonialCard key={`r1-${idx}`} testimonials={testimonials} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => handleHover(true, anim2Ref)}
        onMouseLeave={() => handleHover(false, anim2Ref)}
      >
        <div ref={row2Ref} className="flex w-max gap-6 ">
          {[...Array(3)].map((_, idx) => (
            <TestimonialCard key={`r2-${idx}`} testimonials={testimonials} />
          ))}
        </div>
      </div>
    </>
  );
}

const TestimonialCard = ({ testimonials }: { testimonials: Testimonials }) => (
  <section
    className=" p-[1px] w-full  rounded-2xl flex gap-12 "
    style={{
      background: "linear-gradient(to bottom, var(--color-white), transparent)",
    }}
  >
    {testimonials.map((testimonial: Testimonial) => (
      <div
        key={testimonial.id}
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

          {/* <Link
            href={testimonial.social}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <FaFacebook size={40} />
          </Link> */}
        </div>

        {/* Testimonial Content */}
        <div
          style={{ fontSize: "clamp(0.7rem, 0.9vw, 1rem)" }}
          className="text-sm w-fit mt-5 p-2 rounded-xl bg-white text-brand-primary leading-relaxed "
        >
          <BlogBody description={testimonial.description} />
        </div>
      </div>
    ))}
  </section>
);
