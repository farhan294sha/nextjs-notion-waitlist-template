import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({
  subsets: ["latin"],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://connect.conceptmates.com"),
  title: "ConceptMate — Automate Your Instagram Growth",
  description:
    "Join the waitlist to get early access to powerful Instagram automation tools and grow your audience effortlessly!",
  openGraph: {
    type: "website",
    title: "ConceptMate — Automate Your Instagram Growth",
    description: "Join the waitlist to get early access to powerful Instagram automation tools and grow your audience effortlessly!",
    url: "https://connect.conceptmates.com",
    siteName: "ConceptMate",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1080,
        height: 1080,
        alt: "ConceptMate - Instagram Automation Tools",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
