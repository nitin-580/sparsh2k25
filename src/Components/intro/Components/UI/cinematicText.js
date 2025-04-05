import React from "react";
import { motion } from "framer-motion";

export default function CinematicText({ text, style }) {
  const n = text.length;
  const letters = text.split("");
  const cinematic_text = letters.map((letter, i) => {
    return (
      <motion.span
        animate={{ x: [100 * (i - n / 2), 0] }}
        transition={{ duration: 2 }}
        style={style}
      >
        {letter}
      </motion.span>
    );
  });
  return { cinematic_text };
}
