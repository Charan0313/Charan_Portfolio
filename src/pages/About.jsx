import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-heistGray px-6 py-24 relative overflow-hidden"
    >
     
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:30px_30px] pointer-events-none"></div>

      
      <motion.h2
        className="text-6xl font-heading text-heistRed mb-16 tracking-widest text-center drop-shadow-[0_0_10px_#D90429]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Plan 
      </motion.h2>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl z-10"
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
        {[
          {
            title: "🎓 Education",
            content: [
              "Indian Institute of Information Technology, Lucknow",
              "B.Tech in Information Technology (2022–Present)",
              "CGPA: 8.47",
            ],
          },
          {
            title: "⚙️ Technical Arsenal",
            content: [
              "ReactJS, NextJS, ExpressJS, Flutter",
              "MongoDB, MySQL, PostgreSQL, Firebase",
              "Node.js, JavaScript, Python, C++, Dart",
              "Tailwind CSS, Material UI, Git, Linux",
            ],
          },
          {
            title: "🏆 Achievements",
            content: [
              "Specialist @ Codeforces (1518)",
              "Knight @ LeetCode (1923)",
              "HackOfiesta Finalist — Top 100 Global Teams",
              "Solved 1000+ coding problems",
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative group p-8 rounded-2xl border border-heistRed/50 bg-[#101010]/50 backdrop-blur-md shadow-[0_0_25px_#D9042960] hover:shadow-[0_0_35px_#ff0000a0] transition-all duration-300"
          >
            <h3 className="text-2xl font-heading text-heistRed mb-4 tracking-wide">
              {card.title}
            </h3>
            <ul className="list-disc ml-6 marker:text-heistRed text-heistGray/90 space-y-2">
              {card.content.map((item, idx) => (
                <li key={idx}>{item}</li>
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
