"use client";

const workHistory = [
  {
    title: "AI Software Engineer",
    company: "QRMD",
    duration: "2 Years",
    type: "Corporate",
    description: [
      "Built and integrated AI-driven automation solutions for business workflows",
      "Worked on machine learning pipelines, OCR systems, and backend services",
      "Collaborated with cross-functional teams to deploy production-ready AI features",
    ],
  },
  {
    title: "AI Engineer",
    company: "AI DevGen",
    duration: "1 Year",
    type: "Corporate",
    description: [
      "Developed LLM-based tools and internal automation systems",
      "Worked with chatbots, data processing pipelines, and API integrations",
      "Focused on scalable AI architectures and applied NLP solutions",
    ],
  },
  {
    title: "Freelance AI & Software Engineer",
    company: "Self-Employed",
    duration: "2 Years",
    type: "Freelance",
    description: [
      "Delivered end-to-end AI and software solutions for multiple clients",
      "Built custom automations, AI agents, chatbots, voice systems, and OCR pipelines",
      "Handled everything from requirement gathering to deployment",
    ],
  },
];

export default function WorkHistory() {
  return (
    <section id="work-history" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work History
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            5+ years of experience building AI solutions and software systems
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>

          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div
                key={index}
                className={"relative flex flex-col md:flex-row items-center " + (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
              >
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                <div className={"w-full md:w-1/2 " + (index % 2 === 0 ? "md:pr-12" : "md:pl-12")}>
                  <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {job.type}
                      </span>
                      <span className="text-gray-500 text-sm">{job.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{job.company}</p>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 text-sm">
                          <svg
                            className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
