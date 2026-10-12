import Image from "next/image";
import { Scissors, Star } from "lucide-react";

export default function AboutSection() {
    return (
        // Menggunakan trik margin negatif (100vw) agar gambar benar-benar menyentuh ujung layar kiri & kanan
        // Class rounded dan border telah dihapus
        <section id="about" className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mt-20 py-24 lg:py-32">

            {/* GAMBAR BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about.png"
                    alt="NYOB About Background"
                    fill
                    className="object-cover object-center"
                />
                {/* Efek Blur Dihapus! Hanya menggunakan lapisan hitam transparan 50% agar gambar alat cukur sangat jelas */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* KONTEN UTAMA */}
            {/* Menggunakan max-w-[1600px] dan padding agar posisi teks tetap lurus sejajar dengan Hero Banner */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto w-full">

                {/* KOLOM KIRI: Judul & Branding */}
                <div className="lg:w-5/12 flex flex-col justify-start">
                    <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-300 uppercase mb-8">
                        <span className="w-12 h-px bg-gray-400"></span>
                        THE CRAFT
                    </div>

                    <h2 className="text-6xl md:text-[5.5rem] leading-[0.9] font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                        NYOB.
                    </h2>
                    <p className="text-sm md:text-base font-extrabold tracking-[0.2em] text-gray-200 uppercase mb-10 drop-shadow-md">
                        Not Your Ordinary Barbershop
                    </p>

                    {/* Badge Tahun Berdiri */}
                    <div className="inline-flex items-center gap-3 border border-white/40 rounded-full px-6 py-2.5 w-max bg-black/30 backdrop-blur-sm">
                        <Star size={16} className="fill-white text-white" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white">EST. 2020 — PRESENT</span>
                    </div>
                </div>

                {/* KOLOM KANAN: Konten Cerita */}
                <div className="lg:w-7/12 flex flex-col gap-6 text-gray-100 font-medium leading-relaxed md:text-lg">
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
                    <div className="bg-black/30 backdrop-blur-md p-8 md:p-10 rounded-[32px] shadow-2xl border border-white/20 mt-6 relative overflow-hidden group">
                        {/* Aksen Ikon Watermark di latar belakang */}
                        <Scissors size={120} className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative z-10">
                            <p className="text-white font-bold text-lg md:text-xl leading-snug drop-shadow-md">
                                "Harga cukur bervariasi sesuai dengan tingkat skill dari Barber."
                            </p>
                            <p className="text-gray-300 text-sm mt-4 font-medium drop-shadow-md">
                                Hal ini bertujuan untuk memberikan motivasi kepada barber untuk selalu memberikan pelayanan dan kualitas cukur yang terbaik tanpa henti.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}