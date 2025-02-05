import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Hero() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl">
        Build Faster with Next.js
      </h1>
      <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
        Launch your next project with my production-ready template, engineered
        for scalability and developer happiness.
      </p>
      <div>
        <Link href="/login" passHref>
          <Button>
            Start Building
            <ChevronRight className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
