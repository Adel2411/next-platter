"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className="relative"
      onClick={toggleTheme}
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        animate={{
          rotate: theme === "dark" ? 90 : 0,
          scale: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <motion.div
        initial={{ rotate: 90, scale: 0 }}
        animate={{
          rotate: theme === "dark" ? 0 : 90,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
