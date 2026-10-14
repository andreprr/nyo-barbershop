"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, X, ArrowRight, Phone, Clock } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function LocationsSection() {
    const [selectedLocation, setSelectedLocation] = useState<typeof siteData.locations[0] | null>(null);

    return (
        <section id="locations" className="py-20 border-t border-gray-200 mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-black">
                        FIND YOUR CHAIR
                    </h2>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    <span className="w-12 h-px bg-gray-300"></span>
                    TWO LOCATIONS
                </div>
            </div>

            {/* Grid Lokasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {siteData.locations.map((location) => (
                    <div
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className="group bg-white border border-gray-200 rounded-3xl p-4 lg:p-6 flex flex-col sm:flex-row gap-6 cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                    >
                        <div className="relative w-full sm:w-48 h-56 sm:h-auto rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                                src={location.image}
                                alt={`Cabang ${location.name}`}
                                fill
                                sizes="(max-width: 640px) 100vw, 192px"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div className="flex flex-col justify-center flex-1 py-2">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-black">
                                    <MapPin size={20} />
                                    <h3 className="text-2xl font-bold uppercase tracking-tight">{location.name}</h3>
                                </div>
                            </div>

                            {/* Kategori & Jam Operasional */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                    {location.category}
                                </p>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <p className="text-[10px] font-extrabold tracking-widest text-black flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full uppercase">
                                    <Clock size={12} /> {location.openHours}
                                </p>
                            </div>

                            <p className="text-sm text-gray-500 mb-8 font-medium">
                                {location.description}
                            </p>

                            <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black group-hover:text-gray-600 transition-colors mt-auto">
                                VIEW PRICELIST <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL PRICELIST & MAPS */}
            {selectedLocation && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Overlay Background */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedLocation(null)}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative bg-[#F7F7F7] w-full max-w-2xl rounded-[32px] p-6 lg:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[95vh] flex flex-col">

                        <button
                            onClick={() => setSelectedLocation(null)}
                            className="absolute top-4 right-4 z-30 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm hover:bg-black hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Area Scroll untuk Konten Modal */}
                        <div className="overflow-y-auto pr-2 custom-scrollbar relative z-10">

                            <div className="mb-6 pt-2 text-center md:text-left">
                                <p className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-2">
                                    Service Menu
                                </p>
                                <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black mb-3">
                                    {selectedLocation.name}
                                </h3>
                                {/* Jam Operasional di dalam Modal */}
                                <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                                    <Clock size={14} /> OPEN DAILY: {selectedLocation.openHours}
                                </div>
                            </div>

                            {/* CUSTOM MODERN PRICELIST DESIGN */}
                            <div className="bg-white rounded-[24px] p-6 md:p-8 mb-8 border border-gray-200 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none rotate-12">
                                    <span className="text-[120px] font-extrabold uppercase tracking-tighter">NYOB</span>
                                </div>

                                {/* Iterasi Kategori Harga */}
                                {selectedLocation.priceListData?.map((category, idx) => (
                                    <div key={idx} className="mb-10 last:mb-0 relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <h4 className="text-base md:text-lg font-extrabold tracking-widest uppercase text-black whitespace-nowrap">
                                                {category.title}
                                            </h4>
                                            <div className="h-px flex-1 bg-gray-200"></div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                            {category.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="flex items-center justify-between group py-1">
                                                    <span className="text-sm font-bold tracking-wider uppercase text-gray-600 group-hover:text-black transition-colors">
                                                        {item.name}
                                                    </span>

                                                    <div className="flex items-center gap-3 pl-4">
                                                        {item.originalPrice && (
                                                            <span className="text-[11px] font-bold text-red-500/70 line-through decoration-red-500 decoration-2">
                                                                {item.originalPrice}
                                                            </span>
                                                        )}
                                                        <span className="bg-gray-100 border border-gray-200 text-black px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest group-hover:bg-black group-hover:text-white transition-colors">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">

                                    {/* PERUBAHAN: Teks Instagram + Logo SVG sejajar rapi */}
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[10px] sm:text-xs text-gray-500 font-bold tracking-widest uppercase">
                                        <span>Booking Via</span>
                                        <a
                                            href={siteData.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-black hover:text-blue-600 transition-colors group"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-600">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                            </svg>
                                            <span className="underline decoration-gray-300 underline-offset-2 group-hover:decoration-blue-600">Instagram</span>
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200">
                                        <Phone size={14} className="text-black" />
                                        <span className="text-xs font-extrabold tracking-widest text-black">{selectedLocation.contactPhone}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Peta Lokasi */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <MapPin size={14} /> Location Map
                                </h4>
                                <div className="w-full h-56 rounded-[24px] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
                                    <iframe
                                        src={selectedLocation.mapEmbedSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Tombol Book Now */}
                            <a
                                href={selectedLocation.bookUrl}
                                target="_blank"
                                className="w-full block text-center bg-black text-white py-4 md:py-5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg mt-4"
                            >
                                SECURE YOUR SEAT
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}