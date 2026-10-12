"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, X, ArrowRight } from "lucide-react";
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
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div className="flex flex-col justify-center flex-1 py-2">
                            <div className="flex items-center gap-2 text-black mb-3">
                                <MapPin size={20} />
                                <h3 className="text-2xl font-bold uppercase tracking-tight">{location.name}</h3>
                            </div>
                            <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 mb-3">
                                {location.category}
                            </p>
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
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedLocation(null)}
                    ></div>

                    {/* Modal Container */}
                    <div className="relative bg-[#F7F7F7] w-full max-w-lg rounded-[32px] p-6 lg:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">

                        <button
                            onClick={() => setSelectedLocation(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Area Scroll untuk Konten Modal */}
                        <div className="overflow-y-auto pr-2 custom-scrollbar">

                            <div className="mb-6 pt-2">
                                <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                                    Pricelist Cabang
                                </p>
                                <h3 className="text-3xl font-extrabold uppercase tracking-tight text-black">
                                    {selectedLocation.name}
                                </h3>
                            </div>

                            {/* Gambar Pricelist (Dibuat full-width sesuai proporsi aslinya) */}
                            <Image
                                src={selectedLocation.priceListImage}
                                width={800}
                                height={1200}
                                alt={`Pricelist ${selectedLocation.name}`}
                                className="w-full h-auto rounded-xl shadow-sm mb-6"
                            />

                            {/* Peta Lokasi (Google Maps Embed) */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <MapPin size={14} /> Location Map
                                </h4>
                                <div className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
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
                                className="w-full block text-center bg-black text-white py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg"
                            >
                                BOOK NOW
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}