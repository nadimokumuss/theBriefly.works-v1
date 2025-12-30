import type { Metadata } from "next";
import { Montserrat, Baumans, Righteous, Bebas_Neue, Russo_One } from "next/font/google";
import "./globals.css";

// Ana font - Montserrat (body ve çoğu başlık)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Display Fonts - Test için farklı fontlar
const baumans = Baumans({
  subsets: ["latin"],
  variable: "--font-baumans",
  display: "swap",
  weight: "400",
});

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Briefly - Digital Assembly Line for Creative Services",
  description: "Managed B2B Creative Services Marketplace. Standardized video, design, and social media services with the speed of a platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${baumans.variable} ${righteous.variable} ${bebasNeue.variable} ${russoOne.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
