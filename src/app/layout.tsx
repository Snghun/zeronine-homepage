import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "0.9% - 주식회사 영점구퍼센트",
  description: "주식회사 영점구퍼센트 공식 웹사이트",
  metadataBase: new URL('https://snghun.github.io/zeronine-homepage'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
