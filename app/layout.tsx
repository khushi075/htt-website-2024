import type { Metadata } from "next";
import { Fragment } from 'react';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';

import './globals.css';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <Fragment>
//       <Head>
//         {/* Title Tag */}
//         <title>HackTheTank 2.0 - India&apos;s Premier Shark Tank-themed Hackathon</title>
        
//         {/* Meta Description */}
//         <meta
//           name="description"
//           content="HackTheTank 2.0 is India's only Shark Tank-themed hackathon where student developers collaborate to solve real-world challenges presented by industry leaders. Join us for an unparalleled 30-hour innovation experience!"
//         />
        
//         {/* Open Graph Tags */}
//         <meta property="og:title" content="HackTheTank 2.0 - India's Premier Shark Tank-themed Hackathon" />
//         <meta
//           property="og:description"
//           content="HackTheTank 2.0 is India's only Shark Tank-themed hackathon where student developers collaborate to solve real-world challenges presented by industry leaders. Join us for an unparalleled 30-hour innovation experience!"
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.hackthetank.tech" />
//         <meta property="og:image" content="https://www.hackthetank.tech/website.png" />
//         <meta property="og:image:alt" content="HackTheTank 2.0 Logo" />
//         <meta property="og:locale" content="en_IN" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href="https://www.hackthetank.tech" />
//       </Head>
//       <body className={GeistSans.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </Fragment>
//   );
// }

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
        url: "../assets/images/website.png",
        width: 1200,
        height: 630,
        alt: "HackTheTank 2.0 Logo",
      }
    ],
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