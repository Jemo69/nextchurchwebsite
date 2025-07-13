import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/footer";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCCG the praise house",
  icons: {
    icon: "https://18nlg60l9z.ufs.sh/f/XtuuqJbb4M5FERVSOteiVoFqWR1uLZhSajd85x2cCPeDN0QJ",
  },
  description: "RCCG the praise house is a ministry of the RCCG in Baltimore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
