import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ContactFAB from "@/components/ContactFAB";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "DR Green Energies | Premium Solar EPC Solutions | Telangana",
  description:
    "DR Green Energies – end-to-end residential, commercial, and industrial solar EPC in Telangana. Save on electricity bills with high-performance solar installations. Medchal-Malkajgiri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-[#fffbeb] text-black`}
      >
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-14 pt-4 sm:pb-10 md:px-6 md:pb-12 md:pt-6">
            {children}
          </main>
          <SiteFooter />
          <ContactFAB />
        </div>
      </body>
    </html>
  );
}

