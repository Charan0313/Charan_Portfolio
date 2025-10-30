import { motion } from "framer-motion";

const skills = {
  Languages: ["C, C++", "Java", "Python", "JavaScript", "Dart", "HTML, CSS"],
  Frameworks: ["ReactJS", "NextJS", "ExpressJS", "Flutter", "Spring Boot"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  Tools: ["Git & GitHub", "Linux", "Tailwind CSS", "Material UI"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen text-heistGray flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden"
    >
      {/* Background Grid - Enhanced */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:25px_25px] pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-heading text-heistRed/90 mb-16 tracking-widest text-center drop-shadow-[0_0_10px_#D90429]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Arsenal 
      </motion.h2>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl z-10"
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
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group p-8 rounded-2xl border border-heistRed/50 bg-[#101010]/50 backdrop-blur-md shadow-[0_0_25px_#D9042960] hover:shadow-[0_0_35px_#ff0000a0] transition-all duration-300"
          >
            <h3 className="text-2xl font-heading text-heistRed mb-4 tracking-wide text-center border-b border-heistRed/50 pb-2">
              {category}
            </h3>

            <ul className="list-disc ml-6 marker:text-heistRed text-heistGray/90 space-y-2 mt-4">
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>

            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
