import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCP4 - Engineering the Future of Autonomous Intelligence",
  description: "MCP4 unifies intelligent systems across AI orchestration, automation, and communication. Home of Fusion, Voxe, and NeuroSwitch.",
  keywords: "AI, artificial intelligence, orchestration, automation, MCP4, Fusion, Voxe, NeuroSwitch",
  authors: [{ name: "MCP4" }],
  openGraph: {
    title: "MCP4 - Engineering the Future of Autonomous Intelligence",
    description: "MCP4 unifies intelligent systems across AI orchestration, automation, and communication.",
    url: "https://mcp4.ai",
    siteName: "MCP4",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MCP4 - AI Infrastructure Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP4 - Engineering the Future of Autonomous Intelligence",
    description: "MCP4 unifies intelligent systems across AI orchestration, automation, and communication.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Start cookieyes banner */}
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/68a6f868514a81e6d0af9784/script.js"
          strategy="beforeInteractive"
        />
        {/* End cookieyes banner */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

