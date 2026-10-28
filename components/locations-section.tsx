"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, X, ArrowRight, Phone, Clock } from "lucide-react";
import { siteData } from "@/data/site-data";

export default function LocationsSection() {
    const [selectedLocation, setSelectedLocation] = useState<(typeof siteData.locations)[number] | null>(null);

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {siteData.locations.map((location) => (
                    <div
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}
                        className="group bg-white border border-gray-200 rounded-3xl p-5 lg:p-6 flex flex-col sm:flex-row gap-6 cursor-pointer hover:shadow-xl hover:border-black/20 transition-all duration-300"
                    >
                        {/* Gambar Cabang */}
                        <div className="relative w-full sm:w-48 md:w-52 h-60 sm:h-auto min-h-[220px] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                                src={location.image}
                                alt={`Cabang ${location.name}`}
                                fill
                                sizes="(max-width: 640px) 100vw, 208px"
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>

                        {/* Konten Kartu */}
                        <div className="flex flex-col justify-between flex-1 py-1">
                            <div>
                                {/* Kategori */}
                                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-1.5">
                                    {location.category}
                                </p>

                                {/* Nama Cabang */}
                                <div className="flex items-center gap-2 text-black mb-2">
                                    <MapPin size={20} className="flex-shrink-0" />
                                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
                                        {location.name}
                                    </h3>
                                </div>

                                {/* Deskripsi */}
                                <p className="text-sm text-gray-500 mb-4 font-medium leading-relaxed">
                                    {location.description}
                                </p>

                                {/* Panel Jam Operasional */}
                                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-3 mb-5">
                                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase mb-2">
                                        <Clock size={12} className="text-black" />
                                        <span>Jam Operasional</span>
                                    </div>
                                    <div className="space-y-1.5">
                                        {Array.isArray(location.openHours) ? (
                                            location.openHours.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between text-xs gap-2"
                                                >
                                                    <span className="font-semibold text-gray-600">
                                                        {item.shortDays || item.days}
                                                    </span>
                                                    <span className="font-extrabold text-black bg-white px-2.5 py-0.5 rounded-md border border-gray-200 tracking-wider whitespace-nowrap">
                                                        {item.hours}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-xs font-extrabold text-black">
                                                {location.openHours}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Tombol Lihat Pricelist */}
                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs font-extrabold uppercase tracking-wider text-black group-hover:text-gray-600 transition-colors">
                                    VIEW PRICELIST & MAP
                                </span>
                                <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-300">
                                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL PRICELIST & MAPS */}
            {selectedLocation && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
                    {/* Overlay Background */}
                    <div
                        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedLocation(null)}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative bg-[#F7F7F7] w-full max-w-2xl rounded-[32px] p-5 sm:p-6 lg:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col overflow-hidden">
                        {/* Tombol Tutup */}
                        <button
                            onClick={() => setSelectedLocation(null)}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm hover:bg-black hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Area Scroll untuk Konten Modal */}
                        <div className="overflow-y-auto pr-1 sm:pr-2 custom-scrollbar relative z-10 flex-1">
                            {/* Header Modal */}
                            <div className="mb-6 pr-12 text-left">
                                <p className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">
                                    Service Menu &bull; {selectedLocation.category}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-black mb-4">
                                    {selectedLocation.name}
                                </h3>

                                {/* Jam Operasional di dalam Modal */}
                                <div className="bg-white border border-gray-200 rounded-2xl p-3.5 shadow-sm">
                                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest text-gray-400 uppercase mb-2.5">
                                        <Clock size={13} className="text-black" />
                                        <span>Jadwal Operasional</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {Array.isArray(selectedLocation.openHours) ? (
                                            selectedLocation.openHours.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between bg-gray-50 border border-gray-200/70 rounded-xl px-3 py-2"
                                                >
                                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                                                        {item.shortDays || item.days}
                                                    </span>
                                                    <span className="text-xs font-extrabold text-white bg-black px-2.5 py-0.5 rounded-full tracking-wider">
                                                        {item.hours}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-xs font-bold text-black">
                                                OPEN DAILY: {selectedLocation.openHours}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* CUSTOM MODERN PRICELIST DESIGN */}
                            <div className="bg-white rounded-[24px] p-5 sm:p-6 md:p-8 mb-6 border border-gray-200 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none rotate-12">
                                    <span className="text-[120px] font-extrabold uppercase tracking-tighter">
                                        NYOB
                                    </span>
                                </div>

                                {/* Iterasi Kategori Harga */}
                                {selectedLocation.priceListData?.map((category, idx) => (
                                    <div key={idx} className="mb-8 last:mb-0 relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <h4 className="text-sm md:text-base font-extrabold tracking-widest uppercase text-black whitespace-nowrap">
                                                {category.title}
                                            </h4>
                                            <div className="h-px flex-1 bg-gray-200"></div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {category.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
                                                    className="flex items-center justify-between group py-1.5 border-b border-dashed border-gray-100 last:border-none"
                                                >
                                                    <span className="text-sm font-bold tracking-wider uppercase text-gray-700 group-hover:text-black transition-colors">
                                                        {item.name}
                                                    </span>

                                                    <div className="flex items-center gap-2.5 pl-3">
                                                        {"originalPrice" in item && item.originalPrice && (
                                                            <span className="text-[11px] font-bold text-red-500/80 line-through decoration-red-500 decoration-2">
                                                                {item.originalPrice}
                                                            </span>
                                                        )}
                                                        <span className="bg-gray-100 border border-gray-200 text-black px-3.5 py-1 rounded-full text-xs font-extrabold tracking-widest group-hover:bg-black group-hover:text-white transition-colors whitespace-nowrap">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Info Kontak & Sosial Media */}
                                <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[11px] text-gray-500 font-bold tracking-widest uppercase">
                                        <span>Booking Via</span>
                                        <a
                                            href={siteData.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-black hover:text-blue-600 transition-colors group"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="group-hover:stroke-blue-600"
                                            >
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                            </svg>
                                            <span className="underline decoration-gray-300 underline-offset-2 group-hover:decoration-blue-600">
                                                Instagram
                                            </span>
                                        </a>
                                    </div>

                                    <a
                                        href={`tel:${selectedLocation.contactPhone.replace(/\s+/g, "")}`}
                                        className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full border border-gray-200 transition-colors"
                                    >
                                        <Phone size={14} className="text-black" />
                                        <span className="text-xs font-extrabold tracking-widest text-black">
                                            {selectedLocation.contactPhone}
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Peta Lokasi */}
                            <div className="mb-2">
                                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <MapPin size={14} /> Location Map
                                </h4>
                                <div className="w-full h-52 sm:h-56 rounded-[24px] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
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
                        </div>

                        {/* Sticky Footer Tombol Book Now */}
                        <div className="pt-4 mt-2 border-t border-gray-200/80 bg-[#F7F7F7] z-20">
                            <a
                                href={selectedLocation.bookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-black text-white py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg"
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