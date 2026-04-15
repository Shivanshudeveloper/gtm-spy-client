"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "https://res.cloudinary.com/daboha8rt/image/upload/v1776248733/gtmsnipe/img1_iax6nx.png", alt: "GTM SNIPE – Strategy Overview" },
  { src: "https://res.cloudinary.com/daboha8rt/image/upload/v1776248734/gtmsnipe/img3_rzivbw.png", alt: "GTM SNIPE – Competitor Audit" },
  { src: "https://res.cloudinary.com/daboha8rt/image/upload/v1776248733/gtmsnipe/img2_u1tzs6.png", alt: "GTM SNIPE – ICP Analysis" },
  { src: "https://res.cloudinary.com/daboha8rt/image/upload/v1776248733/gtmsnipe/img4_yyg10d.png", alt: "GTM SNIPE – Campaign Output" },
];

export default function DashboardSlideshow() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === active) return;
    setTransitioning(true);
    setPrev(active);
    setActive(idx);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 500);
  }, [transitioning, active]);

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [active, goTo]);

  return (
    <div className="relative w-full flex flex-col gap-5">
      {/* Slideshow frame */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(161,166,255,0.06)]">
        <div className="relative w-full aspect-video">
          {/* Previous slide — fades out */}
          {prev !== null && (
            <div className="absolute inset-0 animate-out fade-out duration-500 fill-mode-forwards">
              <Image
                src={slides[prev].src}
                alt={slides[prev].alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          )}

          {/* Active slide — fades in */}
          <div
            key={active}
            className="absolute inset-0 animate-in fade-in duration-500"
          >
            <Image
              src={slides[active].src}
              alt={slides[active].alt}
              fill
              className="object-cover object-top"
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Bottom fade so dots sit over a clean gradient */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-surface/90 to-transparent pointer-events-none" />
        </div>

        {/* Dot indicators overlaid inside the frame at bottom */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-400 ${
                i === active
                  ? "w-8 h-2.5 bg-primary shadow-[0_0_8px_rgba(161,166,255,0.8)]"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption row */}
      <div className="flex items-center justify-between px-1">
        <p className="text-[11px] font-medium text-slate-500 italic">{slides[active].alt}</p>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          {active + 1}&thinsp;/&thinsp;{slides.length}
        </span>
      </div>

      {/* Ambient glow under the frame */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}
