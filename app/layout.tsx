import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";
import { siteData } from "@/data/site-data";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nyobarbershop.com"),
  title: {
    default: "NYOB | Not Your Ordinary Barbershop Medan",
    template: "%s | NYOB Medan",
  },
  description:
    "NYOB (Not Your Ordinary Barbershop) adalah barbershop premium di Kota Medan. Hadir di cabang Wahid Hasyim dan Pattimura dengan barber berpengalaman, layanan potong rambut pria, perm, dan coloring terbaik.",
  keywords: [
    "NYOB",
    "NYO Barbershop",
    "NYOB Medan",
    "Not Your Ordinary Barbershop",
    "Barbershop Medan",
    "Barbershop Terbaik di Medan",
    "Barbershop Wahid Hasyim Medan",
    "Barbershop Pattimura Medan",
    "Pangkas Rambut Pria Medan",
    "Down Perm Medan",
    "Curly Perm Pria Medan",
    "Grooming Pria Medan",
  ],
  authors: [{ name: "NYOB Medan", url: "https://nyobarbershop.com" }],
  creator: "NYOB Medan",
  publisher: "NYOB Medan",
  alternates: {
    canonical: "/",
  },
  // Kode Verifikasi Google Search Console
  verification: {
    google: "Dt9nFuuCQnEtFpEXNSKIv04CFpXRsvoKxJpCVT7nz-U",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nyobarbershop.com",
    siteName: "NYOB - Not Your Ordinary Barbershop",
    title: "NYOB | Not Your Ordinary Barbershop Medan",
    description:
      "Precision cuts, premium service, and a style that's uniquely yours. Kunjungi cabang kami di Wahid Hasyim & Pattimura, Kota Medan.",
    images: [
      {
        url: "/images/NYOB BANNER.webp",
        width: 1200,
        height: 630,
        alt: "NYOB - Not Your Ordinary Barbershop Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYOB | Not Your Ordinary Barbershop Medan",
    description:
      "Barbershop kolaborasi Singapore & Indonesia di Kota Medan. Cabang Wahid Hasyim & Pattimura.",
    images: ["/images/NYOB BANNER.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logonyob.png",
    shortcut: "/images/logonyob.png",
    apple: "/images/logonyob.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) lengkap dengan Koordinat GPS, Telepon, Rating, & Link Booking Zenwel
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://nyobarbershop.com/#organization",
    name: "NYOB - Not Your Ordinary Barbershop",
    alternateName: ["NYOB Medan", "NYO Barbershop"],
    url: "https://nyobarbershop.com",
    logo: "https://nyobarbershop.com/images/logonyob.png",
    image: [
      "https://nyobarbershop.com/images/NYOB BANNER.webp",
      "https://nyobarbershop.com/images/hasyim.jpg",
      "https://nyobarbershop.com/images/patimura.jpeg",
    ],
    description:
      "Konsep barbershop kolaborasi Singapore dan Indonesia di Kota Medan dengan pelayanan profesional, ruang kerja bersih, higienis, dan nyaman.",
    telephone: "+62-853-7383-7114",
    priceRange: "Rp50.000 - Rp1.500.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, QRIS, E-Wallet, Debit Card",
    sameAs: [
      siteData.socials.instagram,
      siteData.socials.tiktok,
      siteData.socials.whatsapp,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "250",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteData.hero.bookUrl,
        inLanguage: "id-ID",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Book a Haircut at NYOB Medan",
      },
    },
    department: [
      {
        "@type": "HairSalon",
        name: "NYOB Cabang Wahid Hasyim",
        image: "https://nyobarbershop.com/images/hasyim.jpg",
        telephone: "+62-853-7383-7114",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. K.H. Wahid Hasyim No. 53/28, Babura, Kec. Medan Baru",
          addressLocality: "Medan",
          addressRegion: "Sumatera Utara",
          postalCode: "20154",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.578671,
          longitude: 98.655045,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "22:00",
        },
      },
      {
        "@type": "HairSalon",
        name: "NYOB Cabang Pattimura",
        image: "https://nyobarbershop.com/images/patimura.jpeg",
        telephone: "+62-813-7893-4161",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Kapten Patimura No. 342, Darat, Kec. Medan Baru",
          addressLocality: "Medan",
          addressRegion: "Sumatera Utara",
          postalCode: "20153",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 3.574807,
          longitude: 98.662082,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "21:00",
        },
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${manrope.className} bg-[#F7F7F7] min-h-screen flex flex-col overflow-x-hidden antialiased`}
      >
        {/* Script Schema SEO Lokal untuk Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}