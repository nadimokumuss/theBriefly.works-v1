import type { Metadata } from "next";
import { Montserrat, Baumans } from "next/font/google";
import "./globals.css";

// Ana font - Montserrat (body ve çoğu başlık)
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

// Display Font - Baumans (vurgulu başlıklar için)
const baumans = Baumans({
  subsets: ["latin"],
  variable: "--font-baumans",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Briefly - Ajans Kalitesi, Platform Hızı",
  description: "Kreatif işlerinizi dijital montaj hattına taşıyın. Video, tasarım ve sosyal medya hizmetleri sabit fiyatla, hızlı teslimatla ve ajans kalitesiyle.",
  keywords: ["kreatif ajans", "video prodüksiyon", "sosyal medya", "tasarım hizmetleri", "içerik üretimi", "dijital pazarlama"],
  authors: [{ name: "The Briefly" }],
  openGraph: {
    title: "The Briefly - Ajans Kalitesi, Platform Hızı",
    description: "Kreatif işlerinizi dijital montaj hattına taşıyın. Sabit fiyat, hızlı teslimat, ajans kalitesi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${baumans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
