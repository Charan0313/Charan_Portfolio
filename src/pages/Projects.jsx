import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
     {
    name: "TIDA Sports App",
    codename: "Nairobi",
    description:
      "Deployed app with 1K+ downloads connecting users with sports academies. Built front-end using Flutter and REST APIs for communication.",
    tech: "Flutter, Dart, GetX, REST APIs",
    github: "https://github.com/",
    demo: "https://play.google.com/store/apps/details?id=org.netgains.tidasports",
  },
  {
    name: "Mediishare",
    codename: "Berlin",
    description:
      "AI-powered web platform to redistribute unused, sealed medicines. Integrated OCR for 95%+ data accuracy and AI-based matching for optimal distribution.",
    tech: "React.js, Node.js, Django, Supabase, FastAPI, GCP",
    github: "https://github.com/",
    demo: "#",
  },
  {
    name: "Balance Beats",
    codename: "Denver",
    description:
      "Mobile health and wellness app with chatbot assistance and emergency alerts based on stress levels. Built with real-time Firebase integration.",
    tech: "Flutter, Dart, Firebase, Java",
    github: "https://github.com/",
    demo: "#",
  },
 
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-heistBlack text-heistGray flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.h2
        className="text-6xl font-heading text-heistRed/90 mb-12 tracking-wide text-center drop-shadow-[0_0_5px_#8B0000]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Crew 
      </motion.h2>

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
            <h3 className="text-2xl font-heading text-heistRed mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-heistGray/70 italic mb-3">
              Codename: {project.codename}
            </p>
            <p className="text-heistGray/90 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-heistGray/70 text-xs mb-4">{project.tech}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 border border-heistRed text-heistRed hover:bg-heistRed hover:text-heistBlack px-3 py-1 rounded-lg text-sm transition-all"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 border border-heistRed text-heistRed hover:bg-heistRed hover:text-heistBlack px-3 py-1 rounded-lg text-sm transition-all"
              >
                <ExternalLink size={16} /> View
              </a>
            </div>

            {/* Glow Reflection */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
