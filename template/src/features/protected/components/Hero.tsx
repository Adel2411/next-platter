import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

function Hero() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
        Protected Route
      </h1>
      <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
        You've successfully accessed a secure route. Start building your
        protected features here.
      </p>
      <div>
        <Button variant="destructive">
          Logout
          <LogOut className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
