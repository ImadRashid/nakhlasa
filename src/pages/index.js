import localFont from "next/font/local";
import { Header } from "@/components/header";
import Hero from "@/components/home/hero";
import Khidmatna from "@/components/home/khidmatna";
import Footer from "@/components/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Khidmatna />
      <Footer />
    </>
  );
}
