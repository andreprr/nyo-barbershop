"use client";

import Image from "next/image";

// Data Tim Pattimura
const teamPattimura = [
    { name: "ABI", image: "/team/abi.jpg" },
    { name: "ARI", image: "/team/ari.jpg" },
    { name: "DENNY", image: "/team/denny.jpg" },
    { name: "RIO", image: "/team/rio.jpg" },
    { name: "TIAN", image: "/team/tian.jpg" },
    { name: "WATEK", image: "/team/watek.jpg" },
];

// Data Tim Wahid Hasyim
const teamWahidHasyim = [
    { name: "DIAN", image: "/team/dian.jpg" },
    { name: "DIMAS", image: "/team/dimas.jpg" },
    { name: "GIO", image: "/team/gio.jpeg" },
    { name: "HAFIZ", image: "/team/hafiz.jpg" },
    { name: "HENDRA", image: "/team/hendra.jpg" },
    { name: "OZIE", image: "/team/ozie.jpeg" },
    { name: "PORA", image: "/team/pora.jpeg" },
    { name: "SEPTIAN", image: "/team/septian.jpg" },
    { name: "TATANG", image: "/team/tatang.jpg" },
];

export default function OurTeamSection() {
    return (
        <section id="team" className="py-24 border-t border-gray-300 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                            <span className="w-12 h-px bg-gray-400"></span>
                            OUR TEAM
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-black">
                            MEET OUR BARBERS
                        </h2>
                    </div>
                </div>
            </div>

            {/* Inject Custom CSS Keyframes untuk animasi Auto-Scroll (Geser Kanan & Kiri) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        /* Animasi ke Kanan (Pattimura) */
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 30s linear infinite;
        }

        /* Animasi ke Kiri (Wahid Hasyim) */
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }

        /* Berhenti saat kursor diarahkan (Hover) */
        .animate-scroll-right:hover, 
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}} />

            {/* LOKASI 1: PATTIMURA (GERAK KE KANAN) */}
            <div className="mb-12">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 mb-6">
                    <h3 className="text-lg md:text-xl font-extrabold tracking-widest uppercase text-black">CABANG PATTIMURA</h3>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="animate-scroll-right gap-4 md:gap-6 px-4">
                        {[...teamPattimura, ...teamPattimura, ...teamPattimura].map((barber, index) => (
                            // Ukuran kotak diperkecil: w-[180px] md:w-[220px]
                            <div key={index} className="w-[180px] md:w-[220px] flex-shrink-0 group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                                    <Image
                                        src={barber.image}
                                        alt={barber.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-center text-black uppercase tracking-wider">{barber.name}</h4>
                                <p className="text-[10px] md:text-xs text-center text-gray-500 font-bold tracking-widest uppercase">Barber</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LOKASI 2: WAHID HASYIM (GERAK KE KIRI) */}
            <div>
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 mb-6">
                    <h3 className="text-lg md:text-xl font-extrabold tracking-widest uppercase text-black">CABANG WAHID HASYIM</h3>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Menggunakan class .animate-scroll-left */}
                    <div className="animate-scroll-left gap-4 md:gap-6 px-4">
                        {[...teamWahidHasyim, ...teamWahidHasyim, ...teamWahidHasyim].map((barber, index) => (
                            // Ukuran kotak diperkecil: w-[180px] md:w-[220px]
                            <div key={index} className="w-[180px] md:w-[220px] flex-shrink-0 group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                                    <Image
                                        src={barber.image}
                                        alt={barber.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-center text-black uppercase tracking-wider">{barber.name}</h4>
                                <p className="text-[10px] md:text-xs text-center text-gray-500 font-bold tracking-widest uppercase">Barber</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}