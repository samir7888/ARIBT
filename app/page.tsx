import HeroSection from "./components/sections/hero-section";
import CaseStudySection from "./components/sections/case-section";
import DivideSection from "./components/sections/divide-section";
import MiddleSection from "./components/sections/service-section";

import ProductShowcaseSection from "./components/sections/product-section";
import FacilitySection from "./components/sections/work-section";
import TeamSection from "./components/sections/team-section";
import TestimonialSection from "./components/sections/testimonials";
import BlogSection from "./components/sections/blog-section";
import Navbar from "../components/Header/Navbar";
import FooterSection from "../components/Footer/FooterSection";
export default function Home() {
  return (
    <div className="relative   min-h-screen mx-auto">
      {/* hero section */}
      <HeroSection />
      <div className="w-full fixed top-16 left-1/2 transform -translate-x-1/2  ">
        <Navbar />
      </div>
      <CaseStudySection />
      {/* DivideSection1 */}
      <DivideSection title="Trusted by the world startups" />
      <MiddleSection />
      {/* DivideSection2 */}
      <DivideSection title="Our companies" />
      <ProductShowcaseSection />
      {/* DivideSection3 */}
      <DivideSection title="Our Partners" />
      <FacilitySection />
      {/* DivideSection4 */}
      <DivideSection title="Our Companies" />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
