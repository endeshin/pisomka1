// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Menu';

export const metadata: Metadata = {
  title: "Pisomka1",
  description: "Prosim 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <Navbar /> {/* Use the new Navbar component */}
      </body>
    </html>
  );
}