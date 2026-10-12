"use client";

import { useRef, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function ReviewSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Fungsi untuk tombol panah carousel manual
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 320 : 420;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    // FITUR AUTO-SCROLL (Berjalan otomatis ke kanan)
    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                // Jika sudah mentok di paling kanan, otomatis kembali mulus ke awal (kiri)
                // Angka -10 digunakan sebagai toleransi desimal pixel pada beberapa browser
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth"
                    });
                } else {
                    // Jika belum mentok, geser 1 kartu ke kanan
                    const scrollAmount = window.innerWidth < 768 ? 320 : 420;
                    scrollRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth"
                    });
                }
            }
        }, 1500); // Angka 3500 = 3.5 detik (Silakan ubah jika ingin lebih lambat/cepat)

        // Bersihkan interval ketika pengguna berpindah halaman
        return () => clearInterval(autoScroll);
    }, []);

    return (
        <section id="reviews" className="py-24 bg-[#EBEBEB] border-t border-gray-300">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12">

                {/* HEADER & NAV BUTTONS */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                            <span className="w-12 h-px bg-gray-400"></span>
                            TESTIMONIALS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-black">
                            WHAT THEY SAY
                        </h2>
                    </div>

                    {/* Tombol Geser (Desktop/Tablet) - Pengguna tetap bisa klik manual */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* SLIDER CONTAINER */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 custom-scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* ITERASI DATA REVIEW DARI siteData.reviews */}
                    {siteData.reviews.map((review) => (
                        <div
                            key={review.id}
                            className="min-w-[300px] md:min-w-[400px] snap-center bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-200 relative flex flex-col justify-between group hover:shadow-md transition-shadow"
                        >
                            <Quote size={80} className="absolute top-6 right-6 text-gray-100 opacity-50 z-0" />

                            <div className="relative z-10 mb-8">
                                {/* Stars Dynamic */}
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={i < review.rating ? "fill-black text-black" : "fill-gray-200 text-gray-200"}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed italic">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-black uppercase tracking-wider text-sm">{review.name}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Verified Client</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Note */}
                <div className="flex md:hidden justify-center mt-2">
                    <p className="text-xs text-gray-400 font-medium tracking-widest uppercase flex items-center gap-2">
                        <span>Swipe to read more</span> <ChevronRight size={14} />
                    </p>
                </div>

            </div>
        </section>
    );
}