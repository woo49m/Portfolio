import "@/styles/globals.css";
import { Manrope, Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <main
        className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar></Navbar>
        <AnimatePresence mode="sync">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
