"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { siteData } from "@/data/site-data";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Locations", href: "#locations" },
    { name: "Our Barbers", href: "#team" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Deteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mencegah scroll di background saat menu mobile terbuka & tutup otomatis jika layar diperbesar
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    const isDarkHeader = isScrolled || isOpen;

    return (
        <>
            <nav
                className={`w-full fixed top-0 left-0 z-[70] transition-all duration-300 overflow-hidden ${isDarkHeader
                        ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-2">

                    {/* LOGO & BADGE MEDAN */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 md:gap-4 z-[70] group min-w-0 shrink-0"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/images/LOGO NYOB FONT ATAS.png"
                            alt="NYO Barbershop Logo"
                            width={340}
                            height={160}
                            className={`object-contain h-24 sm:h-28 md:h-36 lg:h-44 w-auto max-w-[140px] sm:max-w-[190px] md:max-w-none -my-6 sm:-my-8 lg:-my-10 transition-all duration-300 group-hover:scale-105 ${isDarkHeader ? "brightness-0 invert" : ""
                                }`}
                            priority
                        />
                        <span
                            className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-sm shrink-0 transition-colors duration-300 ${isDarkHeader
                                    ? "bg-white text-black"
                                    : "bg-black text-white"
                                }`}
                        >
                            Medan
                        </span>
                    </Link>

                    {/* DESKTOP MENU (Aktif di layar lg / 1024px ke atas agar tidak bertabrakan dengan logo besar di Tablet) */}
                    <div
                        className={`hidden lg:flex items-center gap-7 xl:gap-10 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? "text-gray-300" : "text-black"
                            }`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors whitespace-nowrap ${isScrolled ? "hover:text-white" : "hover:text-gray-500"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* TOMBOL BOOK NOW & HAMBURGER MENU */}
                    <div className="flex items-center gap-2.5 sm:gap-4 z-[70] shrink-0">
                        <Link
                            href={siteData.hero.bookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hidden sm:inline-flex items-center gap-1.5 px-5 lg:px-6 py-2.5 rounded-full text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-all shadow-sm whitespace-nowrap ${isDarkHeader
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-black text-white hover:bg-gray-800"
                                }`}
                        >
                            Book Now <ArrowUpRight size={14} />
                        </Link>

                        {/* Mobile & Tablet Menu Toggle Button */}
                        <button
                            type="button"
                            aria-label="Toggle Menu"
                            className={`lg:hidden p-2 rounded-full transition-colors ${isDarkHeader
                                    ? "text-white hover:bg-white/10"
                                    : "text-black hover:bg-black/5"
                                }`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* FULLSCREEN MOBILE & TABLET MENU OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center px-6 pt-20 pb-10 overflow-y-auto transition-all duration-300 lg:hidden ${isOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center space-y-6 sm:space-y-8 my-auto w-full max-w-xs text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full py-1 text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-12 h-px bg-white/20 my-2"></div>

                    <Link
                        href={siteData.hero.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg"
                    >
                        Book Your Cut <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </>
    );
}