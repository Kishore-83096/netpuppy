import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netpuppy-eta.vercel.app"),
  title: "Tulas International School",
  description:
    "Tulas International School — inspiring young minds and shaping future leaders.",
  openGraph: {
    title: "Tulas International School",
    description:
      "Tulas International School — inspiring young minds and shaping future leaders.",
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
    title: "Tulas International School",
    description:
      "Tulas International School — inspiring young minds and shaping future leaders.",
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