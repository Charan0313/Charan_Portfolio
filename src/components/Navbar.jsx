import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-heistBlack"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-heistRed text-6xl font-heading tracking-widest"
      >
        🎭
      </motion.div>
    </motion.div>
  );
}
