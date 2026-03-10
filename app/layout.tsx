import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { BackToTopButton } from "./components/back-to-top-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Decor by JD & TJ",
  description: "Curated home decor — bed, bath, kitchen, and beautification. Categories, about us, contact, and store location.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global header and back-to-top button shared across all pages */}
        <Header />
        <BackToTopButton />
        <main className="pt-20 sm:pt-24">{children}</main>
      </body>
    </html>
  );
}
