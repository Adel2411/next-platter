"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function QueryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
