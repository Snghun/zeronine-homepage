import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "0.9% - 새로운 디자인",
  description: "주식회사 영점구퍼센트 공식 웹사이트 - 새로운 디자인",
  metadataBase: new URL('https://snghun.github.io/zeronine-homepage'),
};

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} min-h-screen`}>
      {children}
    </div>
  );
} 