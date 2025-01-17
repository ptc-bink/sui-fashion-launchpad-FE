import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SuiWalletProvider from "@/provider/SuiWalletProvider";
import "@suiet/wallet-kit/style.css";
import { NextUIProvider } from "@nextui-org/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sui Fashion",
  description: "Generated by Sui Fashion",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <NextUIProvider>
          <SuiWalletProvider>{children}</SuiWalletProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
