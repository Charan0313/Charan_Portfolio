import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    name: "TIDA Sports App",
    codename: "Nairobi",
    description:
      "Deployed app with 1K+ downloads connecting users with sports academies. Built front-end using Flutter and REST APIs for communication.",
    tech: "Flutter, Dart, GetX, REST APIs",
    github: "https://github.com/",
  },
  {
    name: "Mediishare",
    codename: "Berlin",
    description:
      "AI-powered web platform to redistribute unused, sealed medicines. Integrated OCR for 95%+ data accuracy and AI-based matching for optimal distribution.",
    tech: "React.js, Node.js, Django, Supabase, FastAPI, GCP",
    github: "https://github.com/Charan0313/MediiShare",
  },
  {
    name: "Balance Beats",
    codename: "Denver",
    description:
      "Mobile health and wellness app with chatbot assistance and emergency alerts based on stress levels. Built with real-time Firebase integration.",
    tech: "Flutter, Dart, Firebase, Java",
    github: "https://github.com/Charan0313/balencebeats",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen text-heistGray flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:35px_35px] pointer-events-none"></div>
      {/* Title */}
      <motion.h2
        className="text-6xl font-heading text-heistRed/90 mb-12 tracking-wide text-center drop-shadow-[0_0_5px_#8B0000]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Crew
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group p-8 rounded-2xl border border-heistRed/50 bg-[#101010]/50 backdrop-blur-md shadow-[0_0_25px_#D9042960] hover:shadow-[0_0_35px_#ff0000a0] transition-all duration-300"
          >
            {/* Project Info */}
            <h3 className="text-2xl font-heading text-heistRed mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-heistGray/70 italic mb-3">
              Codename: {project.codename}
            </p>
            <p className="text-heistGray/90 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-heistGray/70 text-xs mb-6">{project.tech}</p>

            {/* GitHub Button Only */}
            <div className="flex justify-start mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-heistRed text-heistRed hover:bg-heistRed hover:text-heistBlack px-4 py-2 rounded-lg text-sm transition-all shadow-[0_0_10px_#D9042940] hover:shadow-[0_0_15px_#D90429a0]"
              >
                <Github size={18} /> Code
              </a>
            </div>

            {/* Glow Reflection on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
