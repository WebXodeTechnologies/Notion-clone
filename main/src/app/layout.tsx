import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "This Ai based Notion Clone using ClerkAuth,Open Ai, Dall-E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
