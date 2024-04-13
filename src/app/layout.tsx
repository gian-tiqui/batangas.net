import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarTop from "./components/navbar-top/NavbarTop";
import NavbarMid from "./components/navbar-mid/NavbarMid";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import Footer from "./components/footer/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Batangas.net",
  description: "News website of Batangas",
  icons: {
    icon: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black relative pt-60`}>
        <div className="navigation-container absolute top-0 left-0 right-0 z-10">
          <NavbarTop />
          <NavbarMid />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
