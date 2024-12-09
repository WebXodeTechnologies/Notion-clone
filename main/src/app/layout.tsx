import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Provider>
          <body>
            {children}
          </body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
