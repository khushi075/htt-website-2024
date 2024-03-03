import type { Metadata } from "next";
import { Fragment } from 'react';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';
import webImage from "@/public/website.png"

import './globals.css';


export const metadata = {
  title: 'Hack The Tank 2.0',
  description: "HackTheTank 2.0 is India's only Shark Tank-themed hackathon where student developers collaborate to solve real-world challenges presented by industry leaders. Join us for an unparalleled 30-hour innovation experience!",
  openGraph: {
    title: 'Hack The Tank 2.0',
    description: "HackTheTank 2.0 is India's only Shark Tank-themed hackathon where student developers collaborate to solve real-world challenges presented by industry leaders. Join us for an unparalleled 30-hour innovation experience!",
    url:"https://www.hackthetank.tech",
    siteName: "Hack The Tank 2.0",
    images: [
      {
        url: webImage.src,
        width: 1200,
        height: 630,
        alt: "HackTheTank 2.0 Logo",
      }
    ],
    keywords: ['hack the tank 2.0', 'hack the tank 2', 'hack the tank'],
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}