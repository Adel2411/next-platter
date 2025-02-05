import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Library, ChevronRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with Next.js and React 18",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Enterprise Ready",
      description: "Built-in authentication and security features",
    },
    {
      icon: <Library className="h-6 w-6" />,
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
            Build Faster with Next.js
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Launch your next project with our production-ready template,
            engineered for scalability and developer happiness.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/login" passHref>
              <Button
                size="lg"
                className="rounded-full px-6 py-4 text-base font-medium"
              >
                Start Building
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
      </main>
    </div>
  );
}
