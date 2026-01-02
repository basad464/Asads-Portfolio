"use client";
import { useState } from "react";

const faqs = [
  { question: "What kind of AI/ML projects do you handle?", answer: "Chatbots, voicebots, OCR, NLP, RAG pipelines, LLM integrations, and automation systems." },
  { question: "What technologies do you use?", answer: "Next.js, React, Python, FastAPI, Node.js, PostgreSQL, MongoDB, AWS, GCP." },
  { question: "How do you ensure deadlines are met?", answer: "Agile methodology, clear milestones, regular updates, and transparent communication." },
  { question: "What about pricing?", answer: "Depends on scope and complexity. Contact me for a custom quote." },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-4 flex justify-between text-left">
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === i ? "-" : "+"}</span>
              </button>
              {openIndex === i && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
