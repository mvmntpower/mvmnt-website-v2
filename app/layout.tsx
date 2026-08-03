import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MVMNT LLC | Kitchen, Bathroom & Home Remodeling",
    template: "%s | MVMNT LLC",
  },

  description:
    "Premium kitchen, bathroom, basement, flooring, deck, and whole-home remodeling serving Maryland, Virginia, Pennsylvania, and Delaware.",

  keywords: [
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Basement Finishing",
    "Flooring Installation",
    "Deck Builder",
    "Home Remodeling",
    "Maryland Remodeling",
    "Virginia Remodeling",
    "Pennsylvania Remodeling",
    "Delaware Remodeling",
    "MVMNT LLC",
  ],

  authors: [
    {
      name: "MVMNT LLC",
    },
  ],

  creator: "MVMNT LLC",

  metadataBase: new URL("https://www.mvmnt.llc"),

  alternates: {
    canonical: "https://www.mvmnt.llc",
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "MVMNT LLC",

    description:
      "Premium home remodeling across Maryland, Virginia, Pennsylvania, and Delaware.",

    url: "https://www.mvmnt.llc",

    siteName: "MVMNT LLC",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MVMNT LLC Premium Home Remodeling",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "MVMNT LLC",

    description:
      "Premium kitchen, bathroom, basement, flooring, deck, and complete home remodeling.",

    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}