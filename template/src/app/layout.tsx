import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "next-platter",
  description:
    "Production-ready Next.js 15 template with React 19, modular architecture, authentication flows, and enterprise features.",
  keywords: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Modular Architecture",
    "Authentication",
    "Shadcn/ui",
    "Zustand",
    "React Query",
    "Framer Motion",
    "Cypress",
    "Docker",
    "Tailwind CSS",
  ],
  creator: "Adel2411",
  category: "Web Development",
  applicationName: "next-platter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="relative min-h-screen flex justify-center">
              <main>
                {children}
                <Toaster position="bottom-right" />
              </main>
              <div className="absolute right-4 top-4">
                <ThemeToggle />
              </div>
            </div>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
