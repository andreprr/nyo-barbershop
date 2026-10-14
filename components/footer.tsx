import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, ArrowUpRight, Clock } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function Footer() {
    const currentYear = 2026; // Tahun statis yang aman untuk prerendering Next.js

    return (
        <footer
            id="contact"
            className="bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 mt-auto rounded-t-[28px] sm:rounded-t-[40px] lg:rounded-t-[60px]"
        >
            <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-12">

                {/* BAGIAN ATAS: GRID KONTEN (Menggunakan 12 kolom di desktop agar proporsi ruang tiap bagian pas) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">

                    {/* Kolom 1: Logo & Tagline (3 Kolom di Desktop) */}
                    <div className="lg:col-span-3 flex flex-col items-start">
                        <Link href="/" className="mb-4 sm:mb-6 inline-block">
                            <Image
                                src="/images/logonyob.png"
                                alt="NYO Barbershop Logo"
                                width={120}
                                height={120}
                                className="object-contain h-14 sm:h-16 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-xs">
                            Not Your Ordinary Barbershop. Precision cuts, premium service, and a style that&apos;s uniquely yours.
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Instagram */}
                            <a
                                href={siteData.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={siteData.socials.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"
                            >
                                <MessageCircle size={18} />
                            </a>

                            {/* TikTok (Menggunakan ikon SVG asli pengganti teks TT) */}
                            <a
                                href={siteData.socials.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Quick Links (2 Kolom di Desktop) */}
                    <div className="lg:col-span-2 flex flex-col">
                        <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 sm:mb-6">
                            Explore
                        </h4>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-y-3 gap-x-4 sm:gap-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-300">
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                                    About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#locations" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                                    Locations <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                                    Our Barbers <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#reviews" className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                                    Testimonials <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Locations (4 Kolom di Desktop agar teks alamat panjang tidak terhimpit) */}
                    <div className="lg:col-span-4 flex flex-col">
                        <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 sm:mb-6">
                            Locations
                        </h4>
                        <ul className="flex flex-col gap-5 sm:gap-6 text-sm font-medium text-gray-400">
                            <li>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-white shrink-0 mt-0.5" />
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <p className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">
                                                Wahid Hasyim
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded-full">
                                                <Clock size={10} /> 10.00 - 22.00
                                            </span>
                                        </div>
                                        <p className="text-xs leading-relaxed text-gray-400">
                                            Jl. K.H. Wahid Hasyim (No. 53/28), Babura, Kec. Medan Baru, Kota Medan.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-white shrink-0 mt-0.5" />
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <p className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">
                                                Pattimura
                                            </p>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-300 bg-white/10 px-2 py-0.5 rounded-full">
                                                <Clock size={10} /> 10.00 - 21.00
                                            </span>
                                        </div>
                                        <p className="text-xs leading-relaxed text-gray-400">
                                            Jl. Kapten Patimura No.342, Darat, Kec. Medan Baru, Kota Medan.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Booking CTA (3 Kolom di Desktop) */}
                    <div className="lg:col-span-3 flex flex-col items-start lg:items-end lg:text-right pt-2 sm:pt-0 border-t border-gray-800/80 sm:border-none">
                        <h4 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-3 sm:mb-6">
                            Ready for a cut?
                        </h4>
                        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-5 sm:mb-6 leading-tight">
                            SECURE YOUR <br className="hidden sm:block" /> SEAT TODAY.
                        </h2>
                        <Link
                            href={siteData.hero.bookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-sm"
                        >
                            BOOK NOW <ArrowUpRight size={18} />
                        </Link>
                    </div>

                </div>

                {/* BAGIAN BAWAH: COPYRIGHT */}
                <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-semibold tracking-widest text-gray-500 uppercase text-center md:text-left">
                    <p>&copy; {currentYear} NYOB. ALL RIGHTS RESERVED.</p>
                    <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}