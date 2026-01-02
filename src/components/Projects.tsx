"use client";

const projects = [
  {
    title: "Alaris Property Chatbot",
    description: "AI-powered property assistant chatbot designed to answer property-related queries using conversational AI. Implemented modern LLM workflows for accurate and contextual responses.",
    link: "https://property-chatbot-alpha.vercel.app",
    tags: ["LLM", "Chatbot", "Real Estate", "AI"],
  },
  {
    title: "AI-Based Meeting Minutes Analyzer",
    description: "Automated system for analyzing Google Meet recordings. Extracts audio from video, performs speech-to-text using Whisper, and uses local LLM (Qwen) to generate insights on discussion quality and action points.",
    link: null,
    tags: ["Whisper", "LLM", "Audio Processing", "Automation"],
  },
  {
    title: "Marco Emailer Automation",
    description: "Automated email processing and communication workflows with OCR for document reading, translation systems for multilingual handling, and multi-agent automation scripts.",
    link: null,
    tags: ["OCR", "Email Automation", "Multi-Agent", "NLP"],
  },
  {
    title: "Communication & Voice Systems",
    description: "Integrated Twilio and Telnyx for voice and messaging workflows. Built AI-driven voicebots and call automation systems with real-time communication handling.",
    link: null,
    tags: ["Twilio", "Voicebot", "Telnyx", "Real-time"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of AI and automation projects delivered for clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Live
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
