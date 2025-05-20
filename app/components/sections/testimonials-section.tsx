import TitleCard from "../cards/titleCard";
import Testimonials from "../cards/testimonialCard";
import { serverFetch } from "../../../libs/server-fetch";
import { Testimonials as TestimonialTypes } from "../../testimonials/Types/TestimonialsTypes";

const testimonials = async () => {
  const testimonials = await serverFetch<TestimonialTypes>("/testonomial");
  return (
    <div className="relative overflow-hidden my-12 bg-white space-y-10">
      <TitleCard
        title="Facilities"
        sectionSubtitle="Focus your attention your business, and let us work for your overall school management headache"
        sectionTitle="What our Client Says?"
      />
      <Testimonials testimonials={testimonials ?? []} />
    </div>
  );
};

export default testimonials;
