"use client";

import { motion } from "motion/react";

export function BlurIn({ text }: { text: string }) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="mx-auto mb-6 max-w-lg text-muted-foreground"
    >
      {text}
    </motion.p>
  );
}
