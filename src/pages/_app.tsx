import { Navbar } from "@/components/UI/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { useState } from "react";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={` ${leagueSpartan.className}`}>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}
