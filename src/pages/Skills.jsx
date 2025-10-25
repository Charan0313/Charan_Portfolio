import { motion } from "framer-motion";

const skills = {
  Languages: [
    "C , C++",
    "Java",
    "Python",
    "JavaScript",
    "Dart",
    "HTML , CSS",
  ],
  Frameworks: ["ReactJS", "NextJS", "ExpressJS", "Flutter", "Spring Boot"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  Tools: ["Git & GitHub", "Linux", "Tailwind CSS", "Material UI"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-heistBlack text-heistGray flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:25px_25px] pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-heading text-heistRed/90 mb-16 tracking-widest text-center drop-shadow-[0_0_5px_#8B0000]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Arsenal 
      </motion.h2>

      {/* Cards Row */}
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
            className="flex flex-col justify-start items-center p-10 rounded-3xl bg-gradient-to-br from-[#161616] to-[#1f1f1f] border border-heistRed/40 shadow-[0_0_15px_#D9042930] hover:shadow-[0_0_25px_#D90429a0] backdrop-blur-md transition-all duration-500"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-heading text-heistRed mb-5 tracking-wide border-b border-heistRed/40 pb-2 w-full text-center uppercase">
              {category}
            </h3>

            {/* Skill List */}
            <ul className="flex flex-col gap-3 mt-3 text-[15px] font-body text-heistGray/90 text-left w-full pl-6">
              {items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 hover:text-heistRed transition-all duration-300 leading-relaxed"
                >
                  <span className="text-heistRed/80 text-lg mt-[2px]">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
