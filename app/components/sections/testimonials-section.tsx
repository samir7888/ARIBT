'use client';

import React, { useEffect, useRef } from 'react';
import TestimonialCard from '../cards/testimonialCard';
import TitleCard from '../cards/titleCard';
import gsap, { Power0 } from 'gsap';

const testimonials = () => {
  return (
    <div className="relative overflow-hidden my-12 bg-white space-y-10">
      <TitleCard
        title="Facilities"
        sectionSubtitle="Focus your attention your business, and let us work for your overall school management headache"
        sectionTitle="What our Client Says?"
      />
      <Testimonials />
    </div>
  );
};

export default testimonials;

export function Testimonials() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const anim1Ref = useRef<gsap.core.Tween | null>(null);
  const anim2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const animateRow = (
      container: HTMLDivElement | null,
      direction: 'left' | 'right',
      animRef: React.MutableRefObject<gsap.core.Tween | null>
    ) => {
      if (!container || container.children.length === 0) return;

      const content = container.children[0] as HTMLElement;
      const clone = content.cloneNode(true);
      container.appendChild(clone);

      const contentWidth = content.offsetWidth;

      const tween = gsap.fromTo(
        container,
        { x: direction === 'left' ? 0 : -contentWidth },
        {
          x: direction === 'left' ? -contentWidth : 0,
          duration: 20,
          repeat: -1,
          ease: Power0.easeNone,
        }
      );

      animRef.current = tween;
    };

    animateRow(row1Ref.current, 'left', anim1Ref);
    animateRow(row2Ref.current, 'right', anim2Ref);
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
            <TestimonialCard key={`r1-${idx}`} />
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
            <TestimonialCard key={`r2-${idx}`} />
          ))}
        </div>
      </div>
    </>
  );
}
