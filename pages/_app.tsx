import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import Head from "next/head";
const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>krabbe.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
