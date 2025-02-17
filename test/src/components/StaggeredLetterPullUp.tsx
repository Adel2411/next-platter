"use client";

import { motion } from "motion/react";

export function LetterPullUp({ words }: { words: string }) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
