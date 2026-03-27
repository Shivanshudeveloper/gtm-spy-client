"use client";

import { useState } from "react";

export default function Outputs() {
  const [activePreview, setActivePreview] = useState<number | null>(null);

  const cards = [
    { icon: "account_circle", title: "Client Profile", desc: "Detailed brand personality analysis and positioning audit for your unique market voice.", preview: "Brand Voice: Authority • Tone: Innovative • Gap: Emotional Connection" },
    { icon: "groups", title: "ICP", desc: "Granular Ideal Customer Profiles with behavioral triggers and decision-making drivers.", preview: "Target: CTOs (SaaS) • Pain: Technical Debt • Channel: Twitter/X" },
    { icon: "psychology", title: "Pain Research", desc: "Identify the precise friction points your audience faces before they even vocalize them.", preview: "Primary Friction: Integration Complexity • Secondary: Data Security" },
    { icon: "troubleshoot", title: "AEO & Ranking", desc: "Answer Engine Optimization strategies to dominate AI search and traditional SERPs.", preview: "Perplexity Score: 92/100 • Citations needed: 4 • Top Keywords: AI Ethics" },
    { icon: "trending_up", title: "Google Trends", desc: "Predictive trend mapping to align your messaging with upcoming market shifts.", preview: "Rising: Edge Computing • Peak: LLM Fine-tuning • Drop: Generic AI" },
    { icon: "rocket_launch", title: "Campaign Output", desc: "Plug-and-play ad copy, email sequences, and social playbooks ready for launch.", preview: "Phase 1: Awareness • Ad Spend: $2.5k • Expected ROAS: 4.2x" },
  ];

  return (
    <section id="outputs" className="py-40 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight-display">The Oracle Intelligence Deck</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl">High-fidelity strategic outputs delivered with tactical precision.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setActivePreview(idx)}
              onMouseLeave={() => setActivePreview(null)}
              className="glass-panel relative p-12 rounded-2xl group transition-all duration-500 shadow-neon overflow-hidden border border-white/5 cursor-pointer h-[400px] flex flex-col justify-start"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-tertiary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-marquee"></div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Original Content Wrapper (Fades out on hover) */}
              <div className="relative z-10 space-y-8 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10 group-hover:pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center relative border border-white/10">
                  <div className="absolute inset-0 bg-tertiary-container blur-xl opacity-20 filter rounded-full"></div>
                  <span className="material-symbols-outlined text-3xl text-primary relative z-10">{card.icon}</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-headline font-extrabold text-white">{card.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Interactive Preview Content (Fades in on hover) */}
              <div 
                className={`absolute inset-0 p-12 flex flex-col justify-center bg-surface-container-highest transition-all duration-500 transform ${activePreview === idx ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
              >
                <div className="space-y-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full shadow-neon"></div>
                    <p className="text-[10px] font-mono text-tertiary uppercase tracking-[0.4em] font-black underline underline-offset-8">Live Intelligence</p>
                    <h5 className="text-xl font-headline font-bold text-white leading-tight">{card.title} Findings:</h5>
                    <p className="text-base text-slate-300 font-medium leading-relaxed italic border-l-2 border-primary/40 pl-6 py-1">
                        {card.preview}
                    </p>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 group/btn hover:text-white transition-colors pt-4">
                        Full strategic analysis 
                        <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
