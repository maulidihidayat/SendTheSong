import type { Metadata } from "next";
import { Inter, Reenie_Beanie } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Templates/Header";
import Footer from "@/Components/Templates/Footer";

// Mengimpor font Reenie Beanie
const reenieBeanie = Reenie_Beanie({
  weight: "400",
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
});

// Mengimpor font Inter dengan beberapa berat
const inter = Inter({
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata untuk halaman
export const metadata: Metadata = {
  title: "SendTheSong",
  description: "- Express yout feling through the music | Musical Message",
};

// Layout utama
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth overflow-x-hidden scrollbar-hide">
      <body
        className={`${inter.variable} ${reenieBeanie.variable} antialiased`} // Menggunakan variabel font
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
