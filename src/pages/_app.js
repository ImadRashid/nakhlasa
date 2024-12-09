import "@/styles/globals.css";
// import { Plus_Jakarta_Sans } from "next/font/google";
// // import { Plus_Jakarta_Sans } from 'next/font/google';

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"], // Specify subsets
//   weight: ["400", "500", "600", "700"], // Choose font weights you need
// });
export default function App({ Component, pageProps }) {
  return (
    // <div className={plusJakartaSans.className}>
    <Component {...pageProps} />
    // </div>
  );
}
