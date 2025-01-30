import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>
        <h1 className="text-2xl font-semibold">
          Welcome to Adel&apos;s Next.js Starter Template!
        </h1>
      </div>
    </>
  );
}
