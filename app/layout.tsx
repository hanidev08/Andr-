import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { ViewTransitions } from "next-view-transitions";

const helveticaNeueMedium = localFont({
  src: [
    {
      path: "./font/HelveticaNeueLight.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helveticaNeueMedium",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${helveticaNeueMedium.variable} antialiased font-helveticaNeueMedium`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
