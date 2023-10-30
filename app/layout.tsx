import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Picnic App",
  description: "App for camping around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
