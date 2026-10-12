import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barber. | Not Your Ordinary Barber",
  description: "Precision cuts, premium service, and a style that's uniquely yours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} bg-[#F7F7F7] min-h-screen flex flex-col overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}