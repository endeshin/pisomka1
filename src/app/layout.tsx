// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AccountMenu from "../components/AccountMenu";

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
      < AccountMenu/> {/* Use the new Navbar component */}
        {children}
      </body>
    </html>
  );
}