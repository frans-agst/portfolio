"use client";

import { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  label: string;
}

interface AutoCarouselProps {
  images: CarouselImage[];
}

export default function AutoCarousel({ images }: AutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[16/10] bg-card overflow-hidden border border-gray-800 rounded-none">
      {/* Images Container */}
      <div className="relative w-full h-full">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-300 ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* The image container with fallback brutalist text beneath */}
            <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
               {/* Ambient Blurred Background (fills letterboxing) */}
               <img 
                 src={image.src}
                 alt=""
                 aria-hidden="true"
                 className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-125 z-0 pointer-events-none select-none"
               />

               {/* Crisp Main Image (fits inside without cropping) */}
               <img 
                 src={image.src} 
                 alt={image.alt}
                 className="w-full h-full object-contain relative z-10 select-none"
                 onError={(e) => {
                   // Hide broken image icon to reveal brutalist fallback text
                   e.currentTarget.style.display = 'none';
                   // Hide the blur background sibling as well
                   if (e.currentTarget.previousElementSibling) {
                     (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none';
                   }
                 }}
               />
               <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none z-0">
                 <span className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                   Asset: [{idx + 1}/{images.length}]
                 </span>
                 <span className="text-sm font-black uppercase tracking-tight text-white/80">
                   {image.label}
                 </span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internal Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex border border-gray-800 bg-black">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="h-8 w-8 flex items-center justify-center text-white hover:bg-white hover:text-black border-r border-gray-800 transition-colors rounded-none font-bold text-xs"
          aria-label="Previous Image"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="h-8 w-8 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors rounded-none font-bold text-xs"
          aria-label="Next Image"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
