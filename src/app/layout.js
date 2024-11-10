import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ApiProvider } from "@/lib/Context/apiContext";
import Alert from "./Component/Alert";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ApiProvider>
          <Alert/>
          {children}
        </ApiProvider>
        <Footer />
      </body>
    </html>
  );
}
