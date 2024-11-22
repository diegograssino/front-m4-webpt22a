import type { Metadata } from "next";
import { Hind, Montserrat } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import Contexts from "./contexts";

const primaryFont = Hind({
  subsets: ["latin"],
  variable: "--primary-font",
  weight: ["400", "700"],
});
const secondaryFont = Montserrat({
  subsets: ["latin"],
  variable: "--secondary-font",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Contexts>
      <html lang="en">
        <body
          className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
        >
          <div className="container">
            <Navbar />
            <main className="bleed">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Contexts>
  );
}