import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dxter - from Ullife.ai",
  description: "Enjoy your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
