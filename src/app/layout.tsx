import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sweat Suite | Premium Gym Management",
  description: "Manage your fitness journey with style.",
};

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#ffffff" },
        elements: {
          formButtonPrimary: "bg-white text-black hover:bg-gray-200",
          footerActionLink: "text-white hover:text-gray-300",
          card: "bg-zinc-900 border border-zinc-800",
        }
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
