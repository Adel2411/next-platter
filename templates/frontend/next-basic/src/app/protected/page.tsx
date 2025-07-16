"use client";

import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { deleteToken } from "@/features/auth/api";
import { showPromiseToast } from "@/lib/toastHandler";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LetterPullUp } from "@/components/StaggeredLetterPullUp";
import { BlurIn } from "@/components/BlurIn";

export default function ProtectedPage() {
  const router = useRouter();

  const handleLogOut = async () => {
    showPromiseToast(
      (async () => {
        await deleteToken();

        // On success
        router.push("/");
      })(),
      "Logging out",
    );
  };

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
          <LetterPullUp words="next-platter Protected Route" />
          <BlurIn
            text="
            You've successfully accessed a secure route. Start building your
            protected features here.
"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="destructive" onClick={handleLogOut}>
              Logout
              <LogOut className="h-3 w-3" />
            </Button>
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
