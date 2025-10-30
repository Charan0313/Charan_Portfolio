import { motion } from "framer-motion";
import { Code, Layers, Database, Wrench } from "lucide-react";

const skills = {
  Languages: {
    icon: <Code size={28} />,
    items: ["C, C++", "Java", "Python", "JavaScript", "Dart", "HTML, CSS"],
  },
  Frameworks: {
    icon: <Layers size={28} />,
    items: ["ReactJS", "NextJS", "ExpressJS", "Flutter", "Spring Boot"],
  },
  Databases: {
    icon: <Database size={28} />,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  Tools: {
    icon: <Wrench size={28} />,
    items: ["Git & GitHub", "Linux", "Tailwind CSS", "Material UI"],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen text-heistGray flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:25px_25px] pointer-events-none"></div>

      {/* Title Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading text-heistRed/90 tracking-widest drop-shadow-[0_0_10px_#D90429]"
        >
          The Arsenal
        </motion.h2>
        <motion.p
          className="text-heistGray/70 text-sm sm:text-base font-body mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Weapons of choice for digital domination
        </motion.p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {Object.entries(skills).map(([category, data], index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
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
              className="absolute -top-3 -right-3 w-14 h-14 bg-heistRed/20 rounded-full flex items-center justify-center border-2 border-heistRed/40 text-heistRed"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {data.icon}
            </motion.div>

            {/* Category Header */}
            <div className="mb-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-heading text-heistRed tracking-wide text-center">
                {category}
              </h3>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-heistRed/50 to-transparent mt-3"></div>
            </div>

            {/* Skills List */}
            <ul className="space-y-3 relative z-10">
              {data.items.map((skill, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 text-heistGray/90 text-sm sm:text-base"
                >
                  <span className="w-1.5 h-1.5 bg-heistRed rounded-full flex-shrink-0"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"></div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-heistRed/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-heistRed/30 rounded-br-2xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
