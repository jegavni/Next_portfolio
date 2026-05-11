// components/HoverButton.tsx
"use client";

import { motion } from "framer-motion";

export default function HoverButton() {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        y: -5,
        boxShadow: "0px 10px 30px rgba(139,92,246,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        fixed
        bottom-8
        right-8
        z-50
        px-6
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-600
        text-white
        font-semibold
        shadow-lg
      "
    >
      Hire Me
    </motion.button>
  );
}