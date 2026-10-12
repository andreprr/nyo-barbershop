"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { siteData } from "@/data/site-data";

const heroImages = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
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
        <section className="relative w-full rounded-none md:rounded-[40px] lg:rounded-[60px] overflow-hidden bg-black min-h-[450px] h-[55vh] md:h-auto md:min-h-[650px] lg:min-h-[760px] shadow-sm">

            {/* CAROUSEL BACKGROUND IMAGES */}
            {heroImages.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={src}
                        alt={`Hero Barbershop ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        className="object-cover object-center md:object-right opacity-95"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Gradient Mask (pointer-events-none dipastikan aktif agar tidak memblokir klik) */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 md:from-black/80 via-black/50 md:via-black/40 to-transparent md:w-2/3 z-10 pointer-events-none"></div>

            {/* KONTEN UTAMA */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end px-4 md:px-6 lg:px-20 pb-8 md:pb-12 lg:pb-16 pointer-events-none">

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
                <div className="lg:pl-16 pointer-events-auto max-w-2xl mb-2 md:mb-10 lg:mb-14">

                    {/* Buttons */}
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
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

                    {/* Stats */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-8 lg:gap-12">
                        {siteData.stats.map((stat, i) => (
                            <div key={i} className={`flex items-center gap-4 md:gap-8 lg:gap-12 ${i !== 0 ? 'md:border-l border-gray-400/50 md:pl-8 lg:pl-12' : ''}`}>
                                <div>
                                    <p className="text-xl md:text-xl lg:text-2xl font-extrabold text-white">{stat.value}</p>
                                    <p className="text-[10px] md:text-xs text-gray-300 font-medium whitespace-nowrap">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* FLOATING CARD: "Our Locations" (Dipastikan z-index tinggi dan pointer-events-auto) */}
            <Link
                href="#locations"
                className="absolute bottom-0 right-0 z-40 bg-[#EBEBEB] rounded-tl-[40px] p-6 lg:p-8 pl-10 pt-10 hidden lg:block w-[420px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.15)] group pointer-events-auto cursor-pointer"
            >
                <svg className="absolute -top-[60px] right-0 w-[60px] h-[60px] text-[#EBEBEB] fill-current pointer-events-none" viewBox="0 0 60 60">
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                <svg className="absolute bottom-0 -left-[60px] w-[60px] h-[60px] text-[#EBEBEB] fill-current pointer-events-none" viewBox="0 0 60 60">
                    <path d="M0 60H60V0C60 33.137 33.137 60 0 60Z" />
                </svg>

                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl text-black">Our Locations</h3>
                    <ArrowRight size={24} className="text-black group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex gap-2">
                        <div className="w-14 h-14 rounded-[14px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image src="/images/hasyim.jpg" fill alt="Cabang Wahid Hasyim" sizes="56px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <div className="w-14 h-14 rounded-[14px] overflow-hidden relative shadow-sm border border-gray-200">
                            <Image src="/images/patimura.jpeg" fill alt="Cabang Pattimura" sizes="56px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <p className="font-bold text-black mb-1">Wahid Hasyim & Pattimura</p>
                        <p className="text-gray-500 text-[11px] leading-tight pr-4">Find your nearest chair.</p>
                    </div>
                </div>
            </Link>
        </section>
    );
}