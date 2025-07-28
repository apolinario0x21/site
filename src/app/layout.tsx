// app/layout.tsx
import "./globals.css";
import type { Metadata } from 'next';
import { ReactNode } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'apolinario0x21',
  description: 'Desenvolvimento de aplicação web/mobile construido com Next.js',
  keywords: 'Desenvolvedor backend, desenvolvedor fullstack, desenvolvedor fullstack',
  authors: [{ name: 'Marcelo Apolinário' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}