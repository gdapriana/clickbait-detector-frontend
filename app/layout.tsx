import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {ThemeProvider} from "@/lib/provider/dark-provider";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP,
  description: "Homepage",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon/radar-dark.png',
        href: '/icon/radar-dark.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon/radar-light.png',
        href: '/icon/radar-light.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider
          enableSystem
          attribute="class"
          disableTransitionOnChange
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
