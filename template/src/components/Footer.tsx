import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Adel2411. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Created with passion by{" "}
            <span className="text-foreground">Adel</span> using Next.js and
            shadcn/ui.
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-6 md:mt-0">
          <Link
            href="https://github.com/Adel2411"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/adel-hadj-arab-68139925a"
            className="text-muted-foreground hover:text-blue-500"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
