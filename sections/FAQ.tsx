"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Every remodeling project begins with a free, no-obligation consultation and estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. MVMNT is fully licensed and insured to give homeowners peace of mind throughout every project.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve homeowners throughout Maryland, Virginia, Pennsylvania, and Delaware.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Financing options are available for qualified homeowners. Ask us during your consultation for more information.",
  },
  {
    question: "How long does a remodeling project take?",
    answer:
      "Every project is different. Smaller projects may take a few days, while larger renovations can take several weeks. We'll provide a detailed timeline before work begins.",
  },
  {
    question: "What types of remodeling projects do you specialize in?",
    answer:
      "We specialize in kitchens, bathrooms, basements, flooring, decks, exterior renovations, and complete home remodeling.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-zinc-950 py-28 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Have Questions?
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Here are answers to some of the questions homeowners ask us most often.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <span className="text-white text-xl font-semibold">
                  {faq.question}
                </span>

                <span className="text-yellow-500 text-3xl">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-zinc-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}