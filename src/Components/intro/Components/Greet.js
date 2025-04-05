import React from "react";
import styles from "./styles";
import { motion } from "framer-motion";

export default function Hero() {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const variants = {
    show: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -300,
    },
    transition: {
      delay: 2,
    },
  };

  return (
    <>
      <motion.div
        style={{ ...styles.hero, paddingTop: "5%", paddingLeft: "5%" }}
        variants={heroContainerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={variants}>Embracing</motion.p>
        <motion.p variants={variants} style={{ ...styles.l2, margin: -30 }}>
          Diversity
        </motion.p>
        <motion.p variants={variants}>Celebrating</motion.p>
        <motion.p variants={variants} style={{ ...styles.l4, marginTop: -20 }}>
          Unity
        </motion.p>
        <motion.p variants={variants} style={styles.l5}>
          Since "93
        </motion.p>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={styles.neon_blue}
      />
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={styles.neon_green}
      />
    </>
  );
}
