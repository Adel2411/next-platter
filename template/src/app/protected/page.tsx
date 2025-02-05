import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Code, Database, Layout, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProtectedPage() {
  const features = [
    {
      icon: <Code className="h-4 w-4" />,
      title: "TypeScript Ready",
      description: "Fully typed development experience",
    },
    {
      icon: <Database className="h-4 w-4" />,
      title: "State Management",
      description: "Zustand and React Query included",
    },
    {
      icon: <Layout className="h-4 w-4" />,
      title: "UI Components",
      description: "Rapid development with Shadcn/ui",
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
      <main className="mx-auto px-3 py-8 md:px-4 lg:py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Welcome to Protected Area
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-lg text-base text-muted-foreground leading-relaxed"
          >
            You've successfully authenticated! Explore our features below.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-lg bg-card p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-3 inline-block rounded-md bg-primary/10 p-2 text-primary ring-1 ring-primary/5 group-hover:bg-primary/15 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link href="/" passHref>
            <Button
              variant="destructive"
              size="default"
              className="rounded-full px-4 py-2 text-sm font-medium"
            >
              Logout
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
