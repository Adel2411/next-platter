import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Layout,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function ProtectedPage() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "TypeScript Ready",
      description: "Fully typed for better development experience",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "State Management",
      description: "Zustand and React Query pre-configured",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI Components",
      description: "Shadcn/ui components for rapid UI development",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Testing",
      description: "Cypress set up for E2E testing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <main className="mx-auto px-4 py-12 md:px-6 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Welcome to the Protected Area
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            You've successfully authenticated! Explore the powerful features of
            our starter template.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-xl bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary ring-2 ring-primary/5 group-hover:bg-primary/15 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Button
            asChild
            variant="destructive"
            size="lg"
            className="rounded-full px-6 py-4 text-base font-medium"
          >
            <Link href="/">
              Logout
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
