import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";

const faqData = [
  {
    id: "1",
    question: "What should I bring for hospital admission?",
    answer:
      "Please bring your government-issued ID, insurance card, list of current medications, advance directives (if applicable), and personal care items. Leave valuables at home. For planned admissions, follow any pre-admission instructions provided by your doctor.",
  },
  {
    id: "2",
    question: "How do I pre-register for an upcoming appointment or procedure?",
    answer:
      "You can pre-register online through our patient portal, by phone at (555) 123-4567, or in person at our admissions office. Pre-registration is recommended at least 48 hours before your scheduled appointment to reduce wait times.",
  },
  {
    id: "3",
    question: "Do I need a referral to see a specialist?",
    answer:
      "This depends on your insurance plan. Many insurance providers require a referral from your primary care physician before seeing a specialist. We recommend checking with your insurance provider regarding their referral requirements before scheduling an appointment with a specialist.",
  },
  {
    id: "4",
    question: "Do I need a referral to see a specialist?",
    answer:
      "This depends on your insurance plan. Many insurance providers require a referral from your primary care physician before seeing a specialist. We recommend checking with your insurance provider regarding their referral requirements before scheduling an appointment with a specialist.",
  },
  {
    id: "5",
    question: "Do I need a referral to see a specialist?",
    answer:
      "This depends on your insurance plan. Many insurance providers require a referral from your primary care physician before seeing a specialist. We recommend checking with your insurance provider regarding their referral requirements before scheduling an appointment with a specialist.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full pt-5 mx-auto text-white">
      <div className="space-y-4">
        <h2
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 4rem)" }}
          className=" font-semibold tracking-wider"
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{ fontSize: "clamp(0.8rem, 0.9vw, 2rem)" }}
          className="text-gray-300 tracking-wide"
        >
          Things i often get asked, or you can know more about me.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger style={{ fontSize: "clamp(1rem, 1.2vw, 2rem)" }}>{faq.question}</AccordionTrigger>
            <AccordionContent style={{ fontSize: "clamp(0.8rem, 1vw, 1.8rem)" }}  className=" text-gray-300">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
