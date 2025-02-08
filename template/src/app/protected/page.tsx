"use client";

import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { deleteToken } from "@/features/auth/api";
import { showSuccessToast } from "@/lib/toastHandler";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const router = useRouter();

  const handleLogOut = async () => {
    await deleteToken();

    // On success
    showSuccessToast("Logout successful");
    router.push("/");
  };

  return (
    <div className="flex justify-center pt-20 max-w-screen-lg">
      <div>
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
