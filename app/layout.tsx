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
  metadataBase: new URL("https://kalibrecosec.org"),
  title: {
    default:
      "Kalibre CoSec | Strategic Corporate Services for Scaling Businesses",
    template: "%s | Kalibre CoSec",
  },
  description:
    "Kalibre CoSec provides entity management, ESG solutions, and fundraising support to help founders raise capital and scale confidently across Africa and global markets.",
  keywords: [
    "Kalibre CoSec",
    "corporate governance",
    "entity management",
    "fundraising support",
    "ESG solutions",
    "compliance services",
    "business scaling Africa",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/browser-logo.png",
    apple: "/browser-logo.png",
  },
  openGraph: {
    title:
      "Kalibre CoSec | Strategic Corporate Services for Scaling Businesses",
    description:
      "Entity management, ESG solutions, and fundraising support to help founders raise capital & scale confidently across Africa and global markets.",
    url: "https://kalibrecosec.org",
    siteName: "Kalibre CoSec",
    images: [
      {
        url: "https://kalibrecosec.org/browser-logo.png",
        width: 1200,
        height: 630,
        alt: "Kalibre CoSec Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
