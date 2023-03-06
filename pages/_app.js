import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

import { ThemeProvider } from "@/modules/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          defer
        />
        <script
          src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js"
          defer
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
