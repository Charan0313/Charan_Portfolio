import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-heistBlack text-heistGray px-6 py-24 relative overflow-hidden"
    >
      {/* Faint grid background lines (subtle cinematic touch) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:30px_30px] pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-6xl font-heading text-heistRed mb-12 tracking-wide text-center drop-shadow-[0_0_10px_#D90429]"
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
        {/* Education */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-heistRed/60 shadow-[0_0_20px_#D90429aa] hover:shadow-[0_0_25px_#ff0000cc] transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-heading text-heistRed mb-4 tracking-wider">
            🎓 Education
          </h3>
          <p className="text-heistGray/90 text-base leading-relaxed">
            <b>Indian Institute of Information Technology, Lucknow</b> <br />
            <span className="text-heistGray/80">
              B.Tech in Information Technology (2022–Present)
            </span>
            <br />
            <span className="text-heistGray/70">CGPA: 8.47</span>
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-heistRed/60 shadow-[0_0_20px_#D90429aa] hover:shadow-[0_0_25px_#ff0000cc] transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-heading text-heistRed mb-4 tracking-wider">
            ⚙️ Technical Arsenal
          </h3>
          <ul className="space-y-2 text-heistGray/90 text-base leading-relaxed">
            <li> ReactJS, NextJS, ExpressJS, Flutter</li>
            <li> MongoDB, MySQL, PostgreSQL, Firebase</li>
            <li> Node.js, JavaScript, Python, C++, Dart</li>
            <li> Tailwind CSS, Material UI, Git, Linux</li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-heistRed/60 shadow-[0_0_20px_#D90429aa] hover:shadow-[0_0_25px_#ff0000cc] transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-heading text-heistRed mb-4 tracking-wider">
            🏆 Achievements
          </h3>
          <ul className="space-y-2 text-heistGray/90 text-base leading-relaxed">
            <li> Specialist @ Codeforces (1518)</li>
            <li> Knight @ LeetCode (1923)</li>
            <li> HackOfiesta Finalist — Top 100 Global Teams</li>
            <li> Solved 1000+ coding problems</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
