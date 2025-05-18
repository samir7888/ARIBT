import HeroSection from "./components/sections/hero-section";
import CaseStudySection from "./components/sections/case-section";
import DivideSection from "./components/sections/divide-section";
import MiddleSection from "./components/sections/service-section";
import FacilitySection from "./components/sections/work-section";
import TeamSection from "./components/sections/team-section";
import TestimonialSection from "./components/sections/testimonials-section";
import BlogSection from "./components/sections/blog-section";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* hero section */}
      <HeroSection />
      <CaseStudySection />
      {/* DivideSection1 */}
      <DivideSection title="Trusted by the world startups" />
      <MiddleSection />
      {/* DivideSection2 */}
      <DivideSection title="Our companies" />

      <FacilitySection />
      {/* DivideSection4 */}
      {/* <DivideSection title="Our Companies" /> */}
      <TeamSection />
      {/* DivideSection3 */}
      <DivideSection title="Our Partners" />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
}
