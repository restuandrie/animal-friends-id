// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Impor Header
import Footer from "@/components/Footer"; // Impor Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animal Friends ID",
  description: "Toko hewan peliharaan terpercaya di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}