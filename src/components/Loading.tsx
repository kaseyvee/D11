import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Loading: React.FC = () => {
  return (
    <motion.main className="loading" exit={{ opacity: 0 }}>
      <motion.img
        src={logo}
        alt="loading"
        animate={{
          scale: [0.75, 1, 0.75],
          rotate: [0, 120, 240, 360]
        }}
        transition={{ repeat: Infinity }}
      />
    </motion.main>
  )
};

export default Loading;
