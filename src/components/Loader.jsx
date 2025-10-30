import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    "INITIALIZING HEIST PROTOCOL...",
    "LOADING MASTER PLAN...",
    "ASSEMBLING THE CREW...",
    "SECURING THE VAULT...",
    "ENCRYPTION: ENABLED",
    "STATUS: READY",
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-heistBlack overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="loader-grid"></div>
      </div>

      {/* Animated Binary/Code Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-heistRed font-mono text-xs whitespace-nowrap"
            initial={{ x: "-100%", y: i * 60 }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Math.random().toString(2).substring(2, 50).repeat(10)}
          </motion.div>
        ))}
      </div>

      {/* Glowing Circles */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 border-2 border-heistRed/30 rounded-full absolute animate-ping-slow"></div>
        <div className="w-48 h-48 border-2 border-heistRed/50 rounded-full absolute"></div>
        <div className="w-32 h-32 border-2 border-heistRed/70 rounded-full absolute animate-spin-slow"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Mask Icon with Glow */}
        <motion.div
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-heistRed text-8xl font-heading tracking-widest drop-shadow-[0_0_30px_rgba(217,4,41,0.8)]"
        >
          🎭
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading text-heistRed tracking-widest text-glow"
        >
          THE PROFESSOR
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 h-2 bg-heistBlack border border-heistRed/50 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-heistRed via-red-600 to-heistRed relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
          </motion.div>
        </div>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-heistGray font-mono text-sm"
        >
          {progress}%
        </motion.div>

        {/* Code Lines */}
        <div className="flex flex-col items-center gap-2 mt-4 min-h-[120px]">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: progress > index * 16 ? 1 : 0, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-heistRed/70 font-mono text-xs md:text-sm tracking-wider"
            >
              {progress > index * 16 && (
                <>
                  <span className="text-heistRed mr-2">{">"}</span>
                  {line}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-heistRed/50"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-heistRed/50"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-heistRed/50"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-heistRed/50"></div>
    </motion.div>
  );
}
