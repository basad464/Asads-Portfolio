"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Asad delivered a highly reliable AI automation system that significantly reduced our manual workload. His understanding of LLMs and real-world constraints is exceptional.",
    author: "Client",
    role: "AI Automation Project",
  },
  {
    quote: "Very strong technical skills in machine learning and automation. He takes ownership of complex problems and delivers practical solutions, not just prototypes.",
    author: "Client",
    role: "ML Solutions Project",
  },
  {
    quote: "Professional, responsive, and technically sound. The chatbot system he built for us performed beyond expectations.",
    author: "Client",
    role: "Chatbot Development",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feedback from clients on delivered projects
          </p>
        </div>

        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <svg
              className="w-12 h-12 text-blue-200 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {testimonials[currentIndex].quote}
            </p>
            <div>
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={"w-2 h-2 rounded-full transition-colors " + (index === currentIndex ? "bg-blue-600" : "bg-gray-300")}
                  aria-label={"Go to testimonial " + (index + 1)}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
