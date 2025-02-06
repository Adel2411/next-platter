import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

function Hero() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        Front Starter Template
      </h1>
      <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
        A production-ready template for scalable, modular apps. Packed with
        features like authentication, state management, and a rich ecosystem of
        tools for modern development.
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
  );
}

export default Hero;
