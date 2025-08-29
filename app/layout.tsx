import type { Metadata } from "next";
import { Manrope, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/buttons/floating-call-button";

// Font setup
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Kalibre CoSec | Strategic Corporate Services for Scaling Businesses",
  description:
    "Kalibre CoSec provides entity management, ESG solutions and fundraising support to help founders raise capital & scale confidently across Africa and global markets.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title:
      "Kalibre CoSec | Strategic Corporate Services for Scaling Businesses",
    description:
      "Kalibre CoSec provides entity management, ESG solutions and fundraising support to help founders raise capital & scale confidently across Africa and global markets.",
    url: "https://www.kalibrecosec.org/",
    siteName: "Kalibre CoSec",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Kalibre CoSec Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kalibre CoSec | Strategic Corporate Services for Scaling Businesses",
    description:
      "Kalibre CoSec provides entity management, ESG solutions and fundraising support to help founders raise capital & scale confidently across Africa and global markets.",
    images: ["/logo.svg"],
    creator: "@kalibre Cosec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${manrope.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        <Header />
        <NavBar />
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
