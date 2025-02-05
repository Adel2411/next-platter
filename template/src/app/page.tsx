import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Library, ChevronRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Rocket className="h-4 w-4" />,
      title: "Lightning Fast",
      description: "Optimized performance with Next.js and React 18",
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      title: "Enterprise Ready",
      description: "Built-in authentication and security features",
    },
    {
      icon: <Library className="h-4 w-4" />,
      title: "Rich Ecosystem",
      description: "Pre-configured with best-in-class libraries and tools",
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
            Build Faster with Next.js
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-lg text-base text-muted-foreground leading-relaxed"
          >
            Launch your next project with our production-ready template,
            engineered for scalability and developer happiness.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/login" passHref>
              <Button
                size="default"
                className="rounded-full px-4 py-2 text-sm font-medium"
              >
                Start Building
                <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </motion.div>
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
      </main>
    </div>
  );
}
