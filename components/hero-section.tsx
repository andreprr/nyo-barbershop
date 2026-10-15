"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { siteData } from "@/data/site-data";

const heroImages = [
    "/images/NYOB BANNER.webp",
    "/images/BANNER NYOB.webp",
    "/images/BANNER NYOB 3.webp",
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full rounded-[20px] sm:rounded-[24px] lg:rounded-[36px] overflow-hidden bg-black h-auto lg:aspect-[16/8] lg:min-h-[520px] xl:min-h-[600px] shadow-sm flex flex-col lg:block isolate">

            {/* CAROUSEL BACKGROUND IMAGES */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-auto lg:absolute lg:inset-0 z-0 overflow-hidden bg-black shrink-0">
                {heroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
                    >
                        <Image
                            src={src}
                            alt={`Hero Barbershop ${index + 1}`}
                            fill
                            sizes="100vw"
                            className="object-cover object-center lg:object-right opacity-95"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Gradasi bawah tipis di Mobile/Tablet agar menyatu mulus dengan area hitam di bawahnya */}
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

                {/* Gradient Mask Desktop */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent w-2/3 z-10 pointer-events-none"></div>
                <div className="hidden lg:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>

                {/* Indikator Slide Dot Carousel (Mobile & Tablet) */}
                <div className="lg:hidden absolute bottom-2.5 left-5 flex items-center gap-1.5 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-auto">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all ${currentSlide === idx ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* KONTEN UTAMA */}
            <div className="relative z-20 flex flex-col justify-end px-5 sm:px-6 lg:px-16 pt-3 sm:pt-4 pb-[96px] sm:pb-[105px] md:pb-6 lg:pb-10 xl:pb-12 pointer-events-none lg:absolute lg:inset-0">

                {/* INDIKATOR VERTIKAL (Hanya Desktop) */}
                <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-2.5 hidden lg:flex pointer-events-auto">
                    {heroImages.map((_, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2.5">
                            <button
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold transition-all shadow-md ${currentSlide === idx ? "bg-white text-black" : "border border-white/50 text-white backdrop-blur-sm hover:bg-white/20"}`}
                            >
                                0{idx + 1}
                            </button>
                            {idx < heroImages.length - 1 && <span className="w-px h-8 bg-white/40"></span>}
                        </div>
                    ))}
                </div>

                {/* WRAPPER TOMBOL & STATS (Diberi padding kanan pada md & lg agar tidak menabrak kartu Our Locations) */}
                <div className="lg:pl-14 md:pr-[330px] lg:pr-[390px] xl:pr-[430px] pointer-events-auto w-full">

                    {/* Buttons */}
                    <div className="flex items-center gap-2.5 sm:gap-3.5 mb-3.5 sm:mb-5">
                        <Link
                            href={siteData.hero.bookUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-sm"
                        >
                            BOOK YOUR CUT <ArrowRight size={16} />
                        </Link>
                        <button
                            aria-label="Play video"
                            className="bg-white text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all shadow-sm group shrink-0"
                        >
                            <Play size={16} className="fill-black transition-colors ml-0.5" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
                        {siteData.stats.map((stat, i) => {
                            const isHappyClients = stat.label.toLowerCase().includes("happy client");
                            return (
                                <div
                                    key={i}
                                    className={`items-center ${isHappyClients ? "hidden xl:flex" : "flex"
                                        } ${i === 0
                                            ? ""
                                            : i === 1
                                                ? "xl:border-l xl:border-white/25 xl:pl-8"
                                                : "border-l border-white/25 pl-4 sm:pl-6 lg:pl-8"
                                        }`}
                                >
                                    <div>
                                        <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* FLOATING CARD: "Our Locations" */}
            <Link
                href="#locations"
                className="absolute bottom-0 right-0 z-40 bg-[#EBEBEB] rounded-tl-[20px] sm:rounded-tl-[24px] lg:rounded-tl-[32px] p-3.5 sm:p-5 lg:p-6 pl-4 sm:pl-6 lg:pl-8 pt-3.5 sm:pt-5 lg:pt-6 w-[270px] sm:w-[310px] md:w-[320px] lg:w-[370px] xl:w-[400px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.15)] group pointer-events-auto cursor-pointer block"
            >
                {/* SVG Lekukan Atas */}
                <svg
                    className="absolute -top-[20px] sm:-top-[24px] lg:-top-[32px] right-0 w-[20px] sm:w-[24px] lg:w-[32px] h-[20px] sm:h-[24px] lg:h-[32px] text-[#EBEBEB] fill-current pointer-events-none"
                    viewBox="0 0 60 60"
                >
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                {/* SVG Lekukan Kiri */}
                <svg
                    className="absolute bottom-0 -left-[20px] sm:-left-[24px] lg:-left-[32px] w-[20px] sm:w-[24px] lg:w-[32px] h-[20px] sm:h-[24px] lg:h-[32px] text-[#EBEBEB] fill-current pointer-events-none"
                    viewBox="0 0 60 60"
                >
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                <div className="flex justify-between items-center mb-2 sm:mb-3 lg:mb-4">
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-black">Our Locations</h3>
                    <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <div className="flex gap-1.5 sm:gap-2 shrink-0">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-[10px] sm:rounded-[12px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image
                                src="/images/hasyim.jpg"
                                fill
                                alt="Cabang Wahid Hasyim"
                                sizes="48px"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-[10px] sm:rounded-[12px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image
                                src="/images/patimura.jpeg"
                                fill
                                alt="Cabang Pattimura"
                                sizes="48px"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="text-xs min-w-0">
                        <p className="font-bold text-black mb-0.5 truncate">Wahid Hasyim & Pattimura</p>
                        <p className="text-gray-500 text-[10px] sm:text-[11px] leading-tight">Find your nearest chair.</p>
                    </div>
                </div>
            </Link>
        </section>
    );
}