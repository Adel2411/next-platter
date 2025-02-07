"use client";

import { Button } from "@/components/ui/button";
import { deleteToken } from "@/features/auth/api";
import { showSuccessToast } from "@/lib/toastHandler";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const handleLogOut = async () => {
    await deleteToken();

    // On success
    showSuccessToast("Logout successful");
    router.push("/");
  };

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
        <Button variant="destructive" onClick={handleLogOut}>
          Logout
          <LogOut className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
