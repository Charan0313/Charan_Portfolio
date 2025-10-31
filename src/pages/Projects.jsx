import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Smartphone } from "lucide-react";

const projects = [
  {
    name: "TIDA Sports App",
    codename: "Nairobi",
    description:
      "Deployed app with 1K+ downloads connecting users with sports academies. Built front-end using Flutter and REST APIs for communication.",
    tech: ["Flutter", "Dart", "GetX", "REST APIs"],
    link: "https://play.google.com/store/apps/details?id=org.netgains.tidasports&pcampaignid=web_share",
    linkType: "playstore",
    icon: "🏆",
  },
  {
    name: "Mediishare",
    codename: "Berlin",
    description:
      "AI-powered web platform to redistribute unused, sealed medicines. Integrated OCR for 95%+ data accuracy and AI-based matching for optimal distribution.",
    tech: ["React.js", "Node.js", "Django", "Supabase", "FastAPI", "GCP"],
    link: "https://github.com/Charan0313/MediiShare",
    linkType: "github",
    icon: "💊",
  },
  {
    name: "Balance Beats",
    codename: "Denver",
    description:
      "Mobile health and wellness app with chatbot assistance and emergency alerts based on stress levels. Built with real-time Firebase integration.",
    tech: ["Flutter", "Dart", "Firebase", "Java"],
    link: "https://github.com/Charan0313/balencebeats",
    linkType: "github",
    icon: "💚",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen text-heistGray flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:35px_35px] pointer-events-none"></div>

      {/* Title with Animation */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading text-heistRed/90 mb-4 tracking-wide drop-shadow-[0_0_5px_#8B0000]"
        >
          The Crew
        </motion.h2>
        <motion.p
          className="text-heistGray/70 text-sm sm:text-base font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Elite missions executed with precision
        </motion.p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group p-6 sm:p-8 rounded-2xl border border-heistRed/50 bg-[#101010]/50 backdrop-blur-md shadow-[0_0_25px_#D9042960] hover:shadow-[0_0_45px_#ff0000c0] transition-all duration-300 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            {/* Icon Badge */}
            <motion.div
              className="absolute -top-3 -right-3 w-16 h-16 bg-heistRed/20 rounded-full flex items-center justify-center text-3xl border-2 border-heistRed/40"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {project.icon}
            </motion.div>

            {/* Codename Badge */}
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-heistRed/20 border border-heistRed/40 backdrop-blur-sm">
              <p className="text-xs text-heistRed font-mono tracking-wider">
                CODENAME: {project.codename.toUpperCase()}
              </p>
            </div>

            {/* Project Info */}
            <h3 className="text-xl sm:text-2xl font-heading text-heistRed mb-3 tracking-wide relative z-10">
              {project.name}
            </h3>
            
            <p className="text-heistGray/90 text-sm sm:text-base leading-relaxed mb-4 relative z-10 min-h-[80px]">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-heistBlack/50 border border-heistRed/30 rounded text-heistGray/80 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto relative z-10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-heistRed text-heistRed hover:bg-heistRed hover:text-heistBlack px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_10px_#D9042940] hover:shadow-[0_0_20px_#D90429a0] group/btn"
              >
                {project.linkType === "playstore" ? (
                  <>
                    <Smartphone size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>View on Play Store</span>
                  </>
                ) : (
                  <>
                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    <span>View Code</span>
                  </>
                )}
              </a>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 border-2 border-heistRed/50 text-heistRed hover:bg-heistRed/20 rounded-lg transition-all"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"></div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-heistRed/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-heistRed/30 rounded-br-2xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
