import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [particles, setParticles] = useState([]);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Create particles only once when app loads
  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${5 + Math.random() * 6}s`,
      scale: `${0.5 + Math.random() * 1.2}`,
      opacity: `${0.3 + Math.random() * 0.7}`,
      blur: `${Math.random() * 1.5}px`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <>
      {/* === FIXED GLOBAL BACKGROUND === */}
      <div
        className="fixed inset-0 w-full h-full z-[-10] pointer-events-none overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #000 60%, #0a0a0a 100%)",
        }}
      >
        {/* Red Particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              "--left": p.left,
              "--duration": p.duration,
              "--scale": p.scale,
              "--opacity": p.opacity,
              "--blur": p.blur,
            }}
          ></span>
        ))}

        {/* Soft glow pulse */}
        <div className="absolute inset-0 z-[-9] bg-[radial-gradient(circle_at_center,rgba(217,4,41,0.1),transparent_70%)] animate-[redPulse_6s_ease-in-out_infinite_alternate]" />
      </div>

      {/* Faint optional image overlay */}
      <div className="heist-overlay"></div>

      {/* === MAIN CONTENT === */}
      {loading ? (
        <Loader />
      ) : (
        <motion.div 
          className="relative z-10 text-heistGray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </motion.div>
      )}
    </>
  );
}
