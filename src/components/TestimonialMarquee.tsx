"use client";

import { testimonials } from "@/lib/testimonial-data";

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[450px] glass-panel p-8 rounded-2xl space-y-6 hover:border-primary/30 transition-all duration-300 group select-none whitespace-normal h-full flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(t.rating) ? 'text-[#FFD700]' : 'text-slate-600'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.location}</span>
        </div>
        
        <div className="relative">
            <span className="absolute -top-4 -left-2 text-4xl text-primary/10 font-serif">"</span>
            <p className="text-white font-medium leading-relaxed italic text-sm md:text-base relative z-10">
                {t.text}
            </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
        <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden bg-surface-container-highest flex-shrink-0">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-black text-white">{t.name}</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Verified Client</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  // Triple the data to ensure zero gaps during the marquee loop
  const row1 = [...testimonials.slice(0, 10), ...testimonials.slice(0, 10), ...testimonials.slice(0, 10)];
  const row2 = [...testimonials.slice(10, 20), ...testimonials.slice(10, 20), ...testimonials.slice(10, 20)];
  const row3 = [...testimonials.slice(20, 30), ...testimonials.slice(20, 30), ...testimonials.slice(20, 30)];

  return (
    <section id="testimonials-section" className="py-40 bg-surface overflow-hidden space-y-24 relative">
      <div className="max-w-7xl mx-auto px-8 text-center mb-24 space-y-6">
        <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tight-display">The Oracle's Track Record</h2>
        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Real results from 50+ global strategy deployments and market audits.</p>
      </div>

      <div className="space-y-12">
        {/* Row 1: Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-forward-1 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]">
            {row1.map((t, i) => <TestimonialCard key={`r1-${t.id}-${i}`} t={t} />)}
          </div>
          <div className="absolute top-0 marquee-forward-2 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]" aria-hidden="true">
            {row1.map((t, i) => <TestimonialCard key={`r1-loop-${t.id}-${i}`} t={t} />)}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-reverse-1 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]">
             {row2.map((t, i) => <TestimonialCard key={`r2-${t.id}-${i}`} t={t} />)}
          </div>
          <div className="absolute top-0 marquee-reverse-2 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]" aria-hidden="true">
             {row2.map((t, i) => <TestimonialCard key={`r2-loop-${t.id}-${i}`} t={t} />)}
          </div>
        </div>

        {/* Row 3: Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="marquee-forward-1 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]">
            {row3.map((t, i) => <TestimonialCard key={`r3-${t.id}-${i}`} t={t} />)}
          </div>
          <div className="absolute top-0 marquee-forward-2 flex gap-8 whitespace-nowrap py-4 px-4 hover:[animation-play-state:paused]" aria-hidden="true">
            {row3.map((t, i) => <TestimonialCard key={`r3-loop-${t.id}-${i}`} t={t} />)}
          </div>
        </div>
      </div>

      {/* Decorative Glows / Trust Signal */}
      <div className="max-w-7xl mx-auto px-8 pt-20 flex justify-center">
         <div className="px-10 py-5 glass-panel rounded-full flex items-center gap-6 border border-white/10">
            <div className="flex -space-x-3">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/150?u=${i+60}`} alt="user" />
                 </div>
               ))}
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Join 500+ High-Growth Teams</p>
         </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
