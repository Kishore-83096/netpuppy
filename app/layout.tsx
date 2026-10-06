import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netpuppy-eta.vercel.app"),
  title: "Best Boarding School in Dehradun | CBSE Co Ed School India",
  description:
    "TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
  openGraph: {
    title: "Best Boarding School in Dehradun | CBSE Co Ed School India",
    description:
      "TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
    url: "https://netpuppy-eta.vercel.app",
    siteName: "Tulas International School",
    images: [
      {
        url: "/live-demo-preview.png",
        width: 1405,
        height: 1500,
        alt: "Tulas International School homepage preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Boarding School in Dehradun | CBSE Co Ed School India",
    description:
      "TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
    images: ["/live-demo-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}