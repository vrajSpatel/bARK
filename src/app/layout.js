import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        {children}

        <Footer/>

      </body>
    </html>
  );
}
