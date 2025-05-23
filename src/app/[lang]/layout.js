// app/[lang]/layout.js
import { LanguageProvider } from "@/context/LanguageContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Society from "@/components/Society";
import { notFound } from "next/navigation";

import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HRForum",
  // description: "Multilingual site",
    icons: {
      icon: "/fav.svg", // положи favicon.ico в public/
    },
};

const supportedLocales = ["en", "ru", "kz"];

export default async function LangLayout({ children, params }) {
  const { lang } = params;

  if (!supportedLocales.includes(lang)) {
    notFound();
  }

  return (
    <html lang={lang}> {/* Устанавливаем язык для страницы */}
    <LanguageProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header lang={lang} />
              <Society />
        {children}
        <Footer />
      </body>
    </LanguageProvider>
    </html>
  );
}
