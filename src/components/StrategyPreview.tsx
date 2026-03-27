"use client";

import { useState, useEffect } from "react";

export default function StrategyPreview() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Reveal after a slight delay
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { label: "Market Opportunity", value: "$1.4B", grow: "+12%" },
    { label: "Competitor Entropy", value: "High", grow: "Critical" },
    { label: "AEO Optimization", value: "84/100", grow: "+22" },
    { label: "Channel Fit", value: "X/LinkedIn", grow: "Optimal" }
  ];

  if (!show) return null;

  return (
    <div className="w-full max-w-5xl mx-auto mt-24 animate-in fade-in zoom-in-95 duration-1000 slide-in-from-top-10">
      <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group">
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-tertiary to-primary animate-marquee"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Strategy Sidebar */}
            <div className="md:col-span-4 space-y-8">
                <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Strategic Directive</p>
                    <h3 className="text-3xl font-headline font-extrabold text-white">Project Kinetic</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase">
                        <span>Confidence Score</span>
                        <span className="text-tertiary">98.2%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary w-[98%] shadow-[0_0_10px_rgba(0,244,254,0.5)]"></div>
                    </div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-8">
                    <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">Domain Scanning Complete</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">Competitor DNA Extracted</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-primary" data-icon="check_circle">check_circle</span>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">ICP Behavioral Mapping Done</p>
                    </div>
                </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-surface-container-highest/50 p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">{m.label}</p>
                             <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-headline font-black text-white">{m.value}</span>
                                <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">{m.grow}</span>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Growth Chart (Pseudo) */}
                <div className="mt-10 bg-surface-container-highest/30 h-48 rounded-xl border border-white/5 relative flex items-end p-6 gap-2 overflow-hidden overflow-x-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                    {[40, 60, 45, 80, 70, 95, 85, 100].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-sm shadow-[0_0_15px_rgba(161,166,255,0.3)] hover:opacity-100 transition-all duration-500 h-full"></div>
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-black font-black px-8 py-3 rounded-xl text-sm shadow-xl hover:scale-105 transition-transform">Unlock Full GTM Deck</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
