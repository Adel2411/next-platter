import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-start gap-10">
        <Button asChild variant="secondary">
          <Link href="/">
            <ChevronLeft />
            Back Home
          </Link>
        </Button>
        <div className="w-80">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
