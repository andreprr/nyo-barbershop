"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Tambahkan ikon X untuk tombol tutup
import { useState, useEffect } from "react";
import { siteData } from "@/data/site-data";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Deteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mencegah scroll di background saat menu mobile terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled || isOpen
                    ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10 shadow-sm" // Gelap saat discroll ATAU saat menu terbuka
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">

                    <Link
                        href="/"
                        className="flex items-center gap-3 md:gap-4 z-50 group"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/images/LOGO NYOB FONT ATAS.png"
                            alt="NYO Barbershop Logo"
                            width={340}
                            height={160}
                            className="object-contain h-28 md:h-36 lg:h-44 w-auto -my-6 md:-my-8 lg:-my-10 transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <span className="bg-black text-white text-xs md:text-sm font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                            Medan
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? "text-gray-300" : "text-black"
                        }`}>
                        <Link href="#about" className={`transition-colors ${isScrolled ? "hover:text-white" : "hover:text-gray-500"}`}>About</Link>
                        <Link href="#pricelist" className={`transition-colors ${isScrolled ? "hover:text-white" : "hover:text-gray-500"}`}>Pricelist</Link>
                        <Link href="#locations" className={`transition-colors ${isScrolled ? "hover:text-white" : "hover:text-gray-500"}`}>Locations</Link>
                        <Link href="#contact" className={`transition-colors ${isScrolled ? "hover:text-white" : "hover:text-gray-500"}`}>Contact</Link>
                    </div>

                    <div className="flex items-center gap-4 z-50">
                        <Link
                            href={siteData.hero.bookUrl} target="_blank"
                            className={`hidden md:inline-flex px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${isScrolled
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            Book Now
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            className={`md:hidden transition-colors ${isScrolled || isOpen ? "text-white" : "text-black"
                                }`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* FULLSCREEN MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <Link href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-white uppercase hover:text-gray-400 transition-colors">About Us</Link>
                <Link href="#pricelist" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-white uppercase hover:text-gray-400 transition-colors">Pricelist</Link>
                <Link href="#locations" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-white uppercase hover:text-gray-400 transition-colors">Locations</Link>
                <Link href="#team" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-white uppercase hover:text-gray-400 transition-colors">Our Barbers</Link>
                <Link href="#reviews" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-widest text-white uppercase hover:text-gray-400 transition-colors">Reviews</Link>

                <Link href={siteData.hero.bookUrl} target="_blank" onClick={() => setIsOpen(false)} className="mt-8 bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider">
                    Book Your Cut
                </Link>
            </div>
        </>
    );
}