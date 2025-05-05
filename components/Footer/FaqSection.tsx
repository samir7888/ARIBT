'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
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
  const [openQuestion, setOpenQuestion] = useState<string | null>("");
  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  return (
    <div className="w-full pt-5 mx-auto text-white">
      <div className="space-y-4">
        <h2  style={{ fontSize: "clamp(2rem, 2.5vw, 4rem)" }} className=" font-semibold tracking-wider">Frequently Asked Questions</h2>
        <p  style={{ fontSize: "clamp(0.8rem, 0.9vw, 2rem)" }} className="text-gray-300 tracking-wide">Things i often get asked, or you can know more about me.</p>
      </div>
      {faqData.length > 0 ? (
        faqData.map((faq) => (
          <div
            key={faq.id}
            className="pt-3"
          >
            <button
              className="w-full text-left flex py-4 justify-between items-center focus:outline-none border-b border-gray-100"
              onClick={() => toggleQuestion(faq.id)}
            >
              <h3  style={{ fontSize: "clamp(0.9rem, 1vw, 1.8rem)" }}  className="text-lg tracking-wide  ">
                {faq.question}
              </h3>
              {openQuestion === faq.id ? (
                <ChevronUp className="flex-shrink-0 " size={20} />
              ) : (
                <ChevronDown
                  className="flex-shrink-0 "
                  size={20}
                />
              )}
            </button>

            {openQuestion === faq.id && (
              <div className="p-3  ">
                <p   style={{ fontSize: "clamp(0.8rem, 0.9vw, 1.8rem)" }} className="">{faq.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No questions found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
