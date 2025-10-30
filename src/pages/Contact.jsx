import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import charanImg from "../assets/charan.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen text-heistGray flex flex-col justify-between px-8 py-8 relative overflow-hidden"
    >
      {/* Background Grid - Enhanced */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:28px_28px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow gap-10 py-6 w-full max-w-6xl mx-auto">
        {/* Left Side — Charan’s Photo + Info */}
        <motion.div
          className="flex flex-col justify-center items-center lg:items-center lg:w-1/2 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Photo */}
          <div className="relative group flex justify-center items-center">
            <img
              src={charanImg}
              alt="Charan"
              className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover border-2 border-heistRed/60 shadow-[0_0_25px_#D9042970] group-hover:shadow-[0_0_35px_#D90429a0] transition-all duration-500 object-center"
            />
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-heistRed/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          {/* Name & Specializations */}
          <motion.div
            className="mt-5 text-center max-w-sm"
            initial={{ opacity: 0, y: 30 }}        
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading text-heistRed drop-shadow-[0_0_8px_#D90429] tracking-wide">
              Charan Polisetty
            </h3>
            <p className="text-heistGray/90 text-base md:text-lg font-body tracking-wide mt-2 leading-relaxed">
              Software Engineer&nbsp;|&nbsp;Web & App Developer&nbsp;|&nbsp;Competitive Programmer
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side — Contact Info */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-heading text-heistRed/90 mb-4 tracking-widest drop-shadow-[0_0_5px_#8B0000] text-center lg:text-left">
            The Escape Route
          </h2>

          {/* Subtitle */}
          <p className="text-heistGray/80 font-body text-base md:text-lg leading-relaxed mb-8 text-center lg:text-left max-w-md">
            You can reach me through any of the channels below.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 gap-5 w-full max-w-md">
            {[
              {
                icon: <Linkedin size={28} />,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/charan-polisetty",
              },
              {
                icon: <Github size={28} />,
                label: "GitHub",
                url: "https://github.com/Charan0313",
              },
              {
                icon: <Instagram size={28} />,
                label: "Instagram",
                url: "https://instagram.com/charan._.ssc",
              },
              {
                icon: <Mail size={28} />,
                label: "Email",
                url: "mailto:charan.ssc006@gmail.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1f1f1f] border border-heistRed/40 shadow-[0_0_15px_#D9042920] hover:shadow-[0_0_20px_#D90429a0] backdrop-blur-md transition-all duration-500 group hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <div className="text-heistGray/80 group-hover:text-heistRed transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="mt-2 text-sm font-body group-hover:text-heistRed transition-colors duration-300">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer with Improved Transition */}
      <motion.footer
        className="text-center text-xs md:text-sm text-heistGray/70 border-t border-heistRed/50 pt-3 mt-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          “End of transmission — mission accomplished.”
        </motion.p>
        <motion.p
          className="mt-1 text-heistRed/90 font-heading tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          © 2025 Charan Polisetty
        </motion.p>
      </motion.footer>
    </section>
  );
}
