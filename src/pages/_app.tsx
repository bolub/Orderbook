import { Navbar } from "@/components/UI/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${leagueSpartan.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
