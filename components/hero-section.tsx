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
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-black min-h-[500px] sm:min-h-[540px] md:min-h-[650px] lg:min-h-[760px] shadow-sm flex flex-col md:block">

            {/* CAROUSEL BACKGROUND IMAGES */}
            {/* Pada mobile: aspect-[16/9] agar banner proporsional dan tidak terpotong (pas), pada desktop: absolute inset-0 */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden bg-black">
                {heroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={src}
                            alt={`Hero Barbershop ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            className="object-contain md:object-cover object-center md:object-right opacity-95"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Gradient Mask Desktop (Hanya aktif di md ke atas agar di mobile gambar banner bersih dan jelas) */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:w-2/3 z-10 pointer-events-none"></div>

                {/* Indikator Slide Dot Carousel (Khusus Mobile) */}
                <div className="md:hidden absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-auto">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all ${currentSlide === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* KONTEN UTAMA */}
            <div className="relative z-20 flex-1 flex flex-col justify-end px-5 md:px-6 lg:px-20 pt-4 sm:pt-6 pb-[110px] sm:pb-[118px] md:pb-12 lg:pb-16 pointer-events-none md:absolute md:inset-0">

                {/* INDIKATOR VERTIKAL (Hanya Desktop) */}
                <div className="absolute left-6 lg:left-12 top-[60%] -translate-y-1/2 flex-col items-center gap-3 hidden lg:flex pointer-events-auto">
                    {heroImages.map((_, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            <button
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold transition-all shadow-md ${currentSlide === idx ? 'bg-white text-black' : 'border border-white/50 text-white backdrop-blur-sm hover:bg-white/20'}`}
                            >
                                0{idx + 1}
                            </button>
                            {idx < heroImages.length - 1 && <span className="w-px h-10 bg-white/50"></span>}
                        </div>
                    ))}
                </div>

                {/* WRAPPER TOMBOL & STATS */}
                <div className="lg:pl-16 pointer-events-auto max-w-2xl mt-auto md:mt-0 mb-1 md:mb-10 lg:mb-14">

                    {/* Buttons (Diposisikan agak lebih ke bawah dengan jarak proporsional) */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3.5 md:mb-8">
                        <Link
                            href={siteData.hero.bookUrl} target="_blank"
                            className="inline-flex items-center gap-2 md:gap-3 bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-sm"
                        >
                            BOOK YOUR CUT <ArrowRight size={18} />
                        </Link>
                        <button className="bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all shadow-sm group">
                            <Play size={18} className="fill-black transition-colors ml-1" />
                        </button>
                    </div>

                    {/* Stats (Khusus mobile: Happy Clients disembunyikan agar lebih ringkas) */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        {siteData.stats.map((stat, i) => {
                            const isHappyClients = stat.label.toLowerCase().includes("happy client");
                            return (
                                <div
                                    key={i}
                                    className={`items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 ${
                                        isHappyClients ? "hidden md:flex" : "flex"
                                    } ${
                                        i === 0
                                            ? ""
                                            : i === 1
                                            ? "md:border-l md:border-gray-400/50 md:pl-8 lg:pl-12"
                                            : "border-l border-white/20 pl-4 sm:pl-6 md:border-gray-400/50 md:pl-8 lg:pl-12"
                                    }`}
                                >
                                    <div>
                                        <p className="text-xl md:text-xl lg:text-2xl font-extrabold text-white">{stat.value}</p>
                                        <p className="text-[10px] md:text-xs text-gray-300 font-medium whitespace-nowrap">{stat.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* FLOATING CARD: "Our Locations" (Hadir di mobile & desktop dengan lekukan notch presisi) */}
            <Link
                href="#locations"
                className="absolute bottom-0 right-0 z-40 bg-[#EBEBEB] rounded-tl-[24px] sm:rounded-tl-[28px] md:rounded-tl-[36px] p-4 sm:p-6 lg:p-8 pl-5 sm:pl-8 md:pl-10 pt-4 sm:pt-6 md:pt-10 w-[310px] max-w-[86%] sm:max-w-none sm:w-[380px] lg:w-[420px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.15)] group pointer-events-auto cursor-pointer block"
            >
                <svg className="absolute -top-[24px] sm:-top-[28px] md:-top-[40px] right-0 w-[24px] sm:w-[28px] md:w-[40px] h-[24px] sm:h-[28px] md:h-[40px] text-[#EBEBEB] fill-current pointer-events-none" viewBox="0 0 60 60">
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                <svg className="absolute bottom-0 -left-[24px] sm:-left-[28px] md:-left-[40px] w-[24px] sm:w-[28px] md:w-[40px] h-[24px] sm:h-[28px] md:h-[40px] text-[#EBEBEB] fill-current pointer-events-none" viewBox="0 0 60 60">
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-6">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-black">Our Locations</h3>
                    <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                    <div className="flex gap-2 shrink-0">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[14px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image src="/images/hasyim.jpg" fill alt="Cabang Wahid Hasyim" sizes="56px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[14px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image src="/images/patimura.jpeg" fill alt="Cabang Pattimura" sizes="56px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm min-w-0">
                        <p className="font-bold text-black mb-0.5 sm:mb-1 truncate">Wahid Hasyim & Pattimura</p>
                        <p className="text-gray-500 text-[10px] sm:text-[11px] leading-tight pr-2 sm:pr-4">Find your nearest chair.</p>
                    </div>
                </div>
            </Link>
        </section>
    );
}