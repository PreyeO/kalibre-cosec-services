import type { Metadata } from "next";
import { Manrope, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

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
  title: "Kalibre CoSec | Strategic Corporate Governance & Global Compliance",
  description:
    "Kalibre CoSec empowers businesses with strategic governance, ESG, and compliance solutions to scale confidently across Africa and global markets.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Kalibre CoSec | Corporate Services for Growth-Stage Companies",
    description:
      "Expert-led governance, ESG, and compliance frameworks that strengthen accountability and support multi-jurisdictional growth.",
    url: "https://kalibre-cosec-services.vercel.app/",
    siteName: "Kalibre CoSec",
    images: [
      {
        url: "/display-logo.png",
        width: 1200,
        height: 630,
        alt: "Kalibre CoSec Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalibre CoSec | Strategic Corporate Services",
    description:
      "Helping businesses and investors operate with transparency, resilience, and regulatory foresight.",
    images: ["/logo.svg"],
    creator: "@kalibresec",
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
      </body>
    </html>
  );
}
