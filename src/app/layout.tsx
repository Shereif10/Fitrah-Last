import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/sections/WhatsappFloat/WhatsappFloat";

export const metadata: Metadata = {
  title: "Fitrah Academy",
  description: "Learn Quran Online",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WhatsAppFloat/>
        {children}</body>
    </html>
  );
}
