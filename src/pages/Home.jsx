import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        className="text-6xl font-heading text-heistRed"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hola, I'm Charan Polisetty
      </motion.h1>
      <motion.p
        className="text-lg mt-4 font-body text-heistGray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        The Professor of Code
      </motion.p>
    </section>
  );
}
