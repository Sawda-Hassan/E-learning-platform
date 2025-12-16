// src/app/providers.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: 2, staleTime: 60_000, refetchOnWindowFocus: false },
  },
});

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={client}>
      <HelmetProvider>
        {children}
        <Toaster position="top-right" />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default AppProviders; // supports: import AppProviders from "./app/providers"
