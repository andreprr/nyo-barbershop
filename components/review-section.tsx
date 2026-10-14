"use client";

import { useRef, useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function ReviewSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [expandedId, setExpandedId] = useState<number | string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Batas karakter sebelum teks dipotong dengan tombol "Read More"
    const MAX_CHAR_LENGTH = 150;

    // Fungsi geser mengikuti lebar kartu aktual di layar masing-masing device
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.firstElementChild as HTMLElement;
            const gap = window.innerWidth < 640 ? 16 : 24;
            const scrollAmount = firstCard ? firstCard.offsetWidth + gap : 340;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // FITUR AUTO-SCROLL (Otomatis berhenti sementara saat disentuh/hover atau saat membaca ulasan panjang)
    useEffect(() => {
        if (isPaused || expandedId !== null) return;

        const autoScroll = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const firstCard = scrollRef.current.firstElementChild as HTMLElement;
                const gap = window.innerWidth < 640 ? 16 : 24;
                const scrollAmount = firstCard ? firstCard.offsetWidth + gap : 340;

                if (scrollLeft + clientWidth >= scrollWidth - 15) {
                    scrollRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    scrollRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
            }
        }, 3500);

        return () => clearInterval(autoScroll);
    }, [isPaused, expandedId]);

    const toggleExpand = (id: number | string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-[#EBEBEB] border-t border-gray-300">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* HEADER & NAV BUTTONS */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 lg:mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase mb-3 sm:mb-4">
                            <span className="w-8 sm:w-12 h-px bg-gray-400"></span>
                            TESTIMONIALS
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-black">
                            WHAT THEY SAY
                        </h2>
                    </div>

                    {/* Tombol Geser Manual */}
                    <div className="hidden sm:flex items-center gap-3 shrink-0">
                        <button
                            type="button"
                            aria-label="Previous Review"
                            onClick={() => scroll("left")}
                            className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next Review"
                            onClick={() => scroll("right")}
                            className="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                {/* SLIDER CONTAINER */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8 custom-scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {siteData.reviews.map((review) => {
                        const isLong = review.text.length > MAX_CHAR_LENGTH;
                        const isExpanded = expandedId === review.id;

                        return (
                            <div
                                key={review.id}
                                className="w-[85vw] max-w-[320px] sm:w-[350px] sm:max-w-none md:w-[400px] shrink-0 snap-center bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm border border-gray-200 relative flex flex-col justify-between group hover:shadow-md transition-all duration-300"
                            >
                                <Quote className="w-14 h-14 sm:w-20 sm:h-20 absolute top-5 right-5 sm:top-6 sm:right-6 text-gray-100 opacity-60 z-0 pointer-events-none" />

                                <div className="relative z-10 mb-6 flex-1 flex flex-col">
                                    {/* Stars Dynamic */}
                                    <div className="flex items-center gap-1 mb-4 sm:mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={`sm:w-[18px] sm:h-[18px] ${i < review.rating
                                                        ? "fill-black text-black"
                                                        : "fill-gray-200 text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Teks Review dengan Auto Line-Clamp untuk ulasan panjang */}
                                    <div className="flex-1">
                                        <p
                                            className={`text-sm sm:text-base text-gray-600 font-medium leading-relaxed italic transition-all ${!isExpanded && isLong ? "line-clamp-4" : ""
                                                }`}
                                        >
                                            &ldquo;{review.text}&rdquo;
                                        </p>

                                        {isLong && (
                                            <button
                                                type="button"
                                                onClick={() => toggleExpand(review.id)}
                                                className="mt-2.5 text-[11px] font-extrabold uppercase tracking-widest text-black hover:text-gray-500 underline underline-offset-4 transition-colors"
                                            >
                                                {isExpanded ? "Show Less" : "Read More"}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Footer Profil Reviewer */}
                                <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 border-t border-gray-100 pt-5 sm:pt-6 mt-auto">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black shrink-0 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-black uppercase tracking-wider text-xs sm:text-sm truncate">
                                            {review.name}
                                        </h4>
                                        <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                                            Verified Client
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Swipe Note & Nav */}
                <div className="flex sm:hidden items-center justify-between mt-1 px-1">
                    <p className="text-[11px] text-gray-500 font-bold tracking-widest uppercase flex items-center gap-1.5">
                        <span>Swipe to read</span> <ChevronRight size={14} />
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous Review"
                            onClick={() => scroll("left")}
                            className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-black active:bg-black active:text-white transition-colors"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next Review"
                            onClick={() => scroll("right")}
                            className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-black active:bg-black active:text-white transition-colors"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}