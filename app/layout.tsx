import "./globals.scss";
import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { Faculty_Glyphic, National_Park } from "next/font/google";
import Hero from "@/components/Hero/hero";
import Navigation from "@/components/Navigation/navigation";
import Wave from "@/components/Wave/wave";
import Footer from "@/components/Footer/footer";

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
  title: {
    template: "%s | Cabinet de sages-femmes | Laurence Adrian-Oster & Caroline Bigorgne",
    default: "Cabinet de sages-femmes | Laurence Adrian-Oster & Caroline Bigorgne",
  },
  description: "Nous proposons des consultations de prévention et de contraception, adaptées à chaque étape de la vie. Nous réalisons les frottis de dépistage et assurons les prescriptions nécessaires (échographies, mammographies, bilans sanguins). Nous pratiquons également la pose de stérilets et d'implants contraceptifs, en toute sécurité."
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
        <Wave horizontal={false} vertical={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
