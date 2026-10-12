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

// Data Tim Wahid Hasyim (Menyusul / Placeholder)
const teamWahidHasyim = [
    { name: "COMING SOON", image: "/team/placeholder.jpg" },
    { name: "COMING SOON", image: "/team/placeholder.jpg" },
    { name: "COMING SOON", image: "/team/placeholder.jpg" },
    { name: "COMING SOON", image: "/team/placeholder.jpg" },
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

            {/* Inject Custom CSS Keyframes untuk animasi Auto-Scroll (Geser Kanan) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 30s linear infinite;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />

            {/* LOKASI 1: PATTIMURA */}
            <div className="mb-16">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 mb-6">
                    <h3 className="text-xl font-extrabold tracking-widest uppercase text-black">CABANG PATTIMURA</h3>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    {/* 
            Kita menggandakan array (spread operator) agar saat gambar terakhir lewat, 
            gambar pertama langsung menyambung tanpa putus (infinite loop).
          */}
                    <div className="animate-scroll-right gap-6 px-4">
                        {[...teamPattimura, ...teamPattimura, ...teamPattimura].map((barber, index) => (
                            <div key={index} className="w-[250px] md:w-[300px] flex-shrink-0 group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                                    <Image
                                        src={barber.image}
                                        alt={barber.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-center text-black uppercase tracking-wider">{barber.name}</h4>
                                <p className="text-xs text-center text-gray-500 font-bold tracking-widest uppercase">Senior Barber</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LOKASI 2: WAHID HASYIM */}
            <div>
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12 mb-6">
                    <h3 className="text-xl font-extrabold tracking-widest uppercase text-black">CABANG WAHID HASYIM</h3>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="animate-scroll-right gap-6 px-4">
                        {[...teamWahidHasyim, ...teamWahidHasyim, ...teamWahidHasyim].map((barber, index) => (
                            <div key={index} className="w-[250px] md:w-[300px] flex-shrink-0 group cursor-pointer">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-300 mb-4 border border-dashed border-gray-400 flex items-center justify-center">
                                    {/* Jika gambar placeholder tidak ditemukan, ini akan bertindak sebagai kotak abu-abu elegan */}
                                    <Image
                                        src={barber.image}
                                        alt={barber.name}
                                        fill
                                        className="object-cover grayscale opacity-20"
                                    />
                                    <span className="relative z-10 text-gray-500 font-bold text-sm tracking-widest uppercase">Foto Menyusul</span>
                                </div>
                                <h4 className="text-lg font-bold text-center text-black uppercase tracking-wider">{barber.name}</h4>
                                <p className="text-xs text-center text-gray-500 font-bold tracking-widest uppercase">Barber</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}