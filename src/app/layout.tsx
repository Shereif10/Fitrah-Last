import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fitrah Academy",
  description: "Learn Quran Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
