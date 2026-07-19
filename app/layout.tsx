import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Fadlul Rahman Ramadhan | Portfolio",
  description: "Web Developer & Computer Systems Graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}