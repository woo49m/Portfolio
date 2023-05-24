import "@/styles/globals.css";
import { Manrope, Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main
        className={`${montserrat.variable} font-sans  bg-light w-full min-h-screen`}
      >
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
