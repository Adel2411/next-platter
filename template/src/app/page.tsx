import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center pt-20 max-w-screen-lg">
      <div>
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Front Starter Template
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
            A production-ready template for scalable, modular apps. Packed with
            features like authentication, state management, and a rich ecosystem
            of tools for modern development.
          </p>
          <div>
            <Link href="/login" passHref>
              <Button>
                Start Building
                <LogIn className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-4 py-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
