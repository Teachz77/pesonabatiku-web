import type { Metadata } from "next";
import { Noto_Serif_HK, Noto_Serif_Kannada, Lily_Script_One } from "next/font/google";
import "./globals.css";

const notoSerifHk = Noto_Serif_HK({
  variable: "--font-noto-serif-hk",
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
});

const notoSerifKannada = Noto_Serif_Kannada({
  variable: "--font-noto-serif-kannada",
  subsets: ["latin"],
  weight: ['400', '500', '700', '900'],
});

const lilyScriptOne = Lily_Script_One({
  variable: "--font-lily-script-one",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Pesonabatiku",
  description: "Pesonabatiku Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifHk.variable} ${notoSerifKannada.variable} ${lilyScriptOne.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
