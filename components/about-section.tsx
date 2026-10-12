"use client";

import Image from "next/image";
import { Scissors, Star } from "lucide-react";

export default function AboutSection() {
    return (
        // Menggunakan teknik w-screen dan translate-x untuk full-bleed yang jauh lebih stabil di mobile
        <section id="about" className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-12 md:mt-20 py-16 md:py-24 lg:py-32">

            {/* GAMBAR BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about.png"
                    alt="NYOB About Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Overlay sedikit lebih gelap di mobile (70%) agar teks putih sangat mudah dibaca, 50% di desktop */}
                <div className="absolute inset-0 bg-black/70 md:bg-black/50 transition-colors duration-300"></div>
            </div>

            {/* KONTEN UTAMA */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-24 px-5 md:px-6 lg:px-12 max-w-[1600px] mx-auto w-full">

                {/* KOLOM KIRI: Judul & Branding */}
                <div className="lg:w-5/12 flex flex-col justify-start">
                    <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-widest text-gray-300 uppercase mb-6 md:mb-8">
                        <span className="w-8 md:w-12 h-px bg-gray-400"></span>
                        THE CRAFT
                    </div>

                    {/* Ukuran teks disesuaikan untuk mobile (text-5xl) agar tidak tumpah */}
                    <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] font-extrabold tracking-tight text-white mb-3 md:mb-4 drop-shadow-lg">
                        NYOB.
                    </h2>

                    {/* Tagline responsif */}
                    <p className="text-xs md:text-sm lg:text-base font-extrabold tracking-[0.15em] md:tracking-[0.2em] text-gray-200 uppercase mb-8 md:mb-10 drop-shadow-md">
                        Not Your Ordinary Barbershop
                    </p>

                    {/* Badge Tahun Berdiri */}
                    <div className="inline-flex items-center gap-2 md:gap-3 border border-white/40 rounded-full px-4 md:px-6 py-2 md:py-2.5 w-max bg-black/30 backdrop-blur-sm shadow-sm">
                        <Star size={14} className="fill-white text-white md:w-4 md:h-4" />
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white">EST. 2020 — PRESENT</span>
                    </div>
                </div>

                {/* KOLOM KANAN: Konten Cerita */}
                <div className="lg:w-7/12 flex flex-col gap-4 md:gap-6 text-gray-200 md:text-gray-100 font-medium leading-relaxed text-sm md:text-lg">
                    <p className="drop-shadow-md">
                        <strong className="text-white">NYOB</strong> adalah sebuah konsep barbershop kolaborasi antara 2 negara yaitu Singapore dan Indonesia yang telah berdiri sejak tahun 2020 hingga saat ini.
                    </p>

                    <p className="drop-shadow-md">
                        Konsep barbershop ini menanamkan kemandirian dan tanggung jawab dari seorang barber. Kami percaya bahwa setiap barber harus memiliki keahlian mendalam dan selalu paham tentang tren potongan rambut yang terus berevolusi sepanjang waktu.
                    </p>

                    <p className="drop-shadow-md">
                        Konsep dari NYOB sendiri mengedepankan kualitas pelayanan yang profesional, ruang kerja yang selalu bersih, higienis, serta suasana yang nyaman untuk didatangi oleh setiap klien kami.
                    </p>

                    {/* Highlight Box untuk Filosofi Harga */}
                    {/* Padding dan rounded corner diperkecil untuk mobile */}
                    <div className="bg-black/40 md:bg-black/30 backdrop-blur-md p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl border border-white/20 mt-4 md:mt-6 relative overflow-hidden group">

                        {/* Aksen Ikon Watermark - ukurannya menyesuaikan layar */}
                        <Scissors className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-white/10 group-hover:scale-110 transition-transform duration-700 w-[80px] h-[80px] md:w-[120px] md:h-[120px]" />

                        <div className="relative z-10">
                            <p className="text-white font-bold text-base md:text-xl leading-snug drop-shadow-md">
                                "Harga cukur bervariasi sesuai dengan tingkat skill dari Barber."
                            </p>
                            <p className="text-gray-300 text-xs md:text-sm mt-3 md:mt-4 font-medium drop-shadow-md">
                                Hal ini bertujuan untuk memberikan motivasi kepada barber untuk selalu memberikan pelayanan dan kualitas cukur yang terbaik tanpa henti.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}