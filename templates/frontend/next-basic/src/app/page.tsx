import * as motion from "motion/react-client";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { LetterPullUp } from "@/components/StaggeredLetterPullUp";
import { BlurIn } from "@/components/BlurIn";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center pt-20 max-w-(--breakpoint-lg)">
      <div>
        <div className="text-center">
          <LetterPullUp words="Welcome to next-platter" />
          <BlurIn
            text="
            A production-ready template for scalable, modular apps. Packed with
            features like authentication, state management, and a rich ecosystem
            of tools for modern development.
"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/login" passHref>
              <Button>
                Start Building
                <LogIn className="h-3 w-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="px-4 py-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
