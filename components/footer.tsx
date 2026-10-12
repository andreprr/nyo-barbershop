import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function Footer() {
    const currentYear = 2026; // Tahun statis yang aman untuk prerendering Next.js

    return (
        <footer id="contact" className="bg-black text-white pt-20 pb-10 mt-auto rounded-t-[40px] lg:rounded-t-[60px]">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

                {/* BAGIAN ATAS: GRID KONTEN */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Kolom 1: Logo & Tagline */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="mb-6">
                            <Image
                                src="/images/logonyob.png"
                                alt="NYO Barbershop Logo"
                                width={100}
                                height={100}
                                className="object-contain h-16 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 max-w-xs">
                            Not Your Ordinary Barbershop. Precision cuts, premium service, and a style that's uniquely yours.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={siteData.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href={siteData.socials.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                                <MessageCircle size={18} />
                            </a>
                            <a href={siteData.socials.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all font-bold text-[10px]">
                                TT
                            </a>
                        </div>
                    </div>

                    {/* Kolom 2: Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">Explore</h4>
                        <ul className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-gray-300">
                            <li><Link href="#about" className="hover:text-white transition-colors flex items-center gap-1 group">About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="#locations" className="hover:text-white transition-colors flex items-center gap-1 group">Locations <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="#team" className="hover:text-white transition-colors flex items-center gap-1 group">Our Barbers <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="#reviews" className="hover:text-white transition-colors flex items-center gap-1 group">Testimonials <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Locations */}
                    <div className="flex flex-col">
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">Locations</h4>
                        <ul className="flex flex-col gap-6 text-sm font-medium text-gray-400">
                            <li>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-white shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-white uppercase tracking-wider mb-1">Wahid Hasyim</p>
                                        <p className="text-xs">Jl. KH. Wahid Hasyim, Medan</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-white shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-white uppercase tracking-wider mb-1">Pattimura</p>
                                        <p className="text-xs">Jl. Pattimura, Medan</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Booking CTA */}
                    <div className="flex flex-col items-start lg:items-end lg:text-right">
                        <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">Ready for a cut?</h4>
                        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-6">
                            SECURE YOUR <br /> SEAT TODAY.
                        </h2>
                        <Link
                            href="#book"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-300 transition-all shadow-sm"
                        >
                            BOOK NOW <ArrowUpRight size={18} />
                        </Link>
                    </div>

                </div>

                {/* BAGIAN BAWAH: COPYRIGHT */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-widest text-gray-600 uppercase">
                    <p>&copy; {currentYear} NYOB. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}