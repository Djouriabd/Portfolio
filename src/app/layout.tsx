import type { Metadata } from "next";
import { Anton, Comfortaa } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Djouairia Abdellaoui — Portfolio",
  description:
    "UI/UX & Graphic Designer · Frontend Developer · Video Editor. Explore my work in an interactive notebook-style portfolio.",
  keywords: ["portfolio", "UI/UX", "graphic design", "frontend", "video editing"],
  authors: [{ name: "Djouairia Abdellaoui" }],
  openGraph: {
    title: "Djouairia Abdellaoui — Portfolio",
    description: "UI/UX & Graphic Designer · Frontend Developer · Video Editor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${comfortaa.variable}`}>
      <body>{children}</body>
    </html>
  );
}
