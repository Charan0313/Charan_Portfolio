import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import charanImg from "../assets/charan.jpg"; 

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-heistBlack text-heistGray flex flex-col justify-between px-8 py-12 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#D90429_1px,_transparent_1px)] bg-[length:28px_28px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow gap-12 py-10">
        {/* Left Side — Charan’s Photo */}
        <motion.div
          className="flex justify-center items-center lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            <img
              src={charanImg}
              alt="Charan"
              className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover border-2 border-heistRed/60 shadow-[0_0_25px_#D9042970] group-hover:shadow-[0_0_35px_#D90429a0] transition-all duration-500"
            />
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-heistRed/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Right Side — Charan’s Info */}
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2 z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <h2 className="text-5xl font-heading text-heistRed/90 mb-6 tracking-widest drop-shadow-[0_0_5px_#8B0000] text-center lg:text-left">
            The Escape Route 
          </h2>

          {/* Subtitle */}
          <p className="text-heistGray/80 font-body text-lg leading-relaxed mb-10 text-center lg:text-left max-w-lg">
            You can reach me
            through any of the channels below.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            {[
              {
                icon: <Linkedin size={30} />,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/charan-polisetty",
              },
              {
                icon: <Github size={30} />,
                label: "GitHub",
                url: "https://github.com/Charan0313",
              },
              {
                icon: <Instagram size={30} />,
                label: "Instagram",
                url: "https://instagram.com/charan._.ssc",
              },
              {
                icon: <Mail size={30} />,
                label: "Email",
                url: "mailto:charan.ssc006@gmail.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#121212] to-[#1f1f1f] border border-heistRed/40 shadow-[0_0_20px_#D9042920] hover:shadow-[0_0_25px_#D90429a0] backdrop-blur-md transition-all duration-500 group hover:scale-105"
                whileHover={{ y: -4 }}
              >
                <div className="text-heistGray/80 group-hover:text-heistRed transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="mt-3 text-base font-body group-hover:text-heistRed transition-colors duration-300">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer — Always at Bottom */}
      <motion.footer
        className="text-center text-sm text-heistGray/70 border-t border-heistRed/50 pt-4 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <p>“End of transmission — mission accomplished.”</p>
        <p className="mt-2 text-heistRed/90 font-heading tracking-wide">
          © 2025 Charan Polisetty
        </p>
      </motion.footer>
    </section>
  );
}
