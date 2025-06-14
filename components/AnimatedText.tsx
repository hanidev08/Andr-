"use client";
import { motion } from "framer-motion";
import React from "react";

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.05 * i },
  }),
  closed: {
    y: "700%",
    transition: { duration: 0.5 },
  },
};

type AnimatedTextProps = {
  phrase: string;
  isInView: boolean;
};

const AnimatedText = ({ phrase, isInView }: AnimatedTextProps) => {
  return (
    <>
      {phrase.split(" ").map((word, index) => (
        <span
          key={index}
          className="overflow-hidden relative mr-1.5 inline-flex"
        >
          <motion.span
            variants={slideUp}
            initial="initial"
            custom={index}
            animate={isInView ? "open" : "closed"}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
};

export default AnimatedText;
