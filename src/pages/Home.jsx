import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-heistRed min-h-[1.2em]">
        <Typewriter
          options={{
            strings: ["Hola, I'm Charan Polisetty"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      </h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl mt-4 font-body text-heistGray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The Professor of Code
      </motion.p>
    </section>
  );
}
