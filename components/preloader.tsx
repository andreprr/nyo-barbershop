"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Kunci scroll saat preloader masih aktif
        document.body.style.overflow = "hidden";

        const handleComplete = () => {
            setIsFadingOut(true);
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = "unset";
            }, 600);
        };

        const timer = setTimeout(() => {
            if (document.readyState === "complete") {
                handleComplete();
            } else {
                window.addEventListener("load", handleComplete, { once: true });
            }
        }, 1200);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", handleComplete);
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#F7F7F7] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* Keyframes khusus untuk efek membolak-balikkan gambar (3D Flip Y-Axis) */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes flipHorizontal {
                        0% {
                            transform: perspective(1000px) rotateY(0deg);
                        }
                        50% {
                            transform: perspective(1000px) rotateY(180deg);
                        }
                        100% {
                            transform: perspective(1000px) rotateY(360deg);
                        }
                    }
                    .animate-flip-logo {
                        animation: flipHorizontal 2.2s ease-in-out infinite;
                        transform-style: preserve-3d;
                    }
                `,
                }}
            />

            {/* Logo NYOB dengan Efek Bolak-Balik */}
            <div className="animate-flip-logo flex items-center justify-center">
                <Image
                    src="/images/LOGO NYOB FONT ATAS.png"
                    alt="NYOB Loading Logo"
                    width={300}
                    height={150}
                    className="object-contain w-44 sm:w-56 h-auto drop-shadow-sm"
                    priority
                />
            </div>

            {/* Teks Indikator Loading di Bawah Logo */}
            <div className="mt-6 flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.35em] text-black/60 uppercase animate-pulse">
                    Loading Experience
                </span>
            </div>
        </div>
    );
}