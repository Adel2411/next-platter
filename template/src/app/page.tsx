"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { handleError } from "@/lib/errorHandler";
import { showSuccessToast } from "@/lib/toastHandler";

export default function Home() {
  const throwError = () => {
    try {
      // Simulate an error
      throw new Error("This is a test error");
    } catch (error) {
      handleError(error);
    }
  };

  const showSuccess = () => {
    showSuccessToast("This is a success message");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-8">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        <h1 className="text-2xl font-semibold">
          Welcome to Adel&apos;s Next.js Starter Template!
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Button variant="destructive" onClick={throwError}>
            Error Handler test
          </Button>
          <Button onClick={showSuccess}>Suceess Toast test</Button>
        </div>
      </div>
    </>
  );
}
