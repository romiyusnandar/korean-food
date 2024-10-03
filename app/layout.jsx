import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Urbanist({subsets: ['latin']})

export const metadata = {
  title: "KoreanFood",
  description: "Makanan Korea di Garut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
