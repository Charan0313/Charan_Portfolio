import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Education",
      icon: <GraduationCap size={32} />,
      content: [
        "Indian Institute of Information Technology, Lucknow",
        "B.Tech in Information Technology (2022–Present)",
        "CGPA: 8.47",
      ],
    },
    {
      title: "Technical Arsenal",
      icon: <Code2 size={32} />,
      content: [
        "ReactJS, NextJS, ExpressJS, Flutter",
        "MongoDB, MySQL, PostgreSQL, Firebase",
        "Node.js, JavaScript, Python, C++, Dart",
        "Tailwind CSS, Material UI, Git, Linux",
      ],
    },
    {
      title: "Achievements",
      icon: <Trophy size={32} />,
      content: [
        "Specialist @ Codeforces (1518)",
        "Knight @ LeetCode (1923)",
        "HackOfiesta Finalist — Top 100 Global Teams",
        "Solved 1000+ coding problems",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-heistGray px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:30px_30px] pointer-events-none"></div>

      {/* Title Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-heading text-heistRed tracking-widest drop-shadow-[0_0_10px_#D90429]"
        >
          The Plan
        </motion.h2>
        <motion.p
          className="text-heistGray/70 text-sm sm:text-base font-body mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Strategy, skills, and achievements
        </motion.p>
      </motion.div>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl w-full z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
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
              className="absolute -top-3 -right-3 w-16 h-16 bg-heistRed/20 rounded-full flex items-center justify-center border-2 border-heistRed/40 text-heistRed"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {card.icon}
            </motion.div>

            {/* Card Header */}
            <div className="mb-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-heading text-heistRed tracking-wide">
                {card.title}
              </h3>
              <div className="w-12 h-1 bg-heistRed/50 mt-2 rounded-full"></div>
            </div>

            {/* Content */}
            <ul className="list-disc ml-5 sm:ml-6 marker:text-heistRed text-heistGray/90 space-y-2.5 text-sm sm:text-base relative z-10">
              {card.content.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-heistRed/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"></div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-heistRed/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-heistRed/30 rounded-br-2xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
