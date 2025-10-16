import "./globals.scss";
import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { Faculty_Glyphic, National_Park } from "next/font/google";
import Hero from "@/components/Hero/hero";
import Navigation from "@/components/Navigation/navigation";

const facultyGlyphic = Faculty_Glyphic({
  variable: "--display",
  subsets: ["latin"],
  weight: "400"
});

const nationalPark = National_Park({
  variable: "--body",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Cabinet de sages-femmes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${facultyGlyphic.variable} ${nationalPark.variable}`}>
      <body className={styles.body}>
        <Navigation />
        <Hero />
        {children}
      </body>
    </html>
  );
}
