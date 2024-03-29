import { motion } from "framer-motion";

import Logo from "../assets/logo.svg";

const Loading: React.FC = () => {
  return (
    <motion.main className="loading" exit={{ opacity: 0 }} role="alert" aria-busy="true">
      <motion.img
        src={Logo}
        alt="loading"
        animate={{
          scale: [0.75, 1, 0.75],
          rotate: [0, 120, 240, 360],
        }}
        transition={{ repeat: Infinity }}
      />
    </motion.main>
  );
};

export default Loading;
