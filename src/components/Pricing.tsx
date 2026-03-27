"use client";

import { useState } from "react";

export default function Pricing() {
  const [strategyCount, setStrategyCount] = useState(1);
  const basePrice = 999; // ₹999 per strategy snipe

  return (
    <section id="pricing" className="py-40 bg-surface relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">No Monthly Commitments</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tight-display">Simple Pay-As-You-Snipe</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Skip the subscriptions. Generate high-fidelity GTM playbooks only when you need them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Pricing Calculator */}
          <div className="glass-panel p-12 rounded-3xl space-y-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="space-y-4">
               <h3 className="text-2xl font-black font-headline text-white">Strategy Calculator</h3>
               <p className="text-slate-400 font-medium">Select how many competitive snipes you need for your current project phase.</p>
            </div>

            <div className="space-y-8">
                <div className="flex justify-between items-center bg-surface-container-highest p-6 rounded-2xl border border-white/5 group-focus-within:border-primary/30 transition-all">
                    <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Total Strategies</span>
                    <div className="flex items-center gap-6">
                        <button onClick={() => setStrategyCount(Math.max(1, strategyCount - 1))} className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">-</button>
                        <span className="text-4xl font-black text-white w-12 text-center">{strategyCount}</span>
                        <button onClick={() => setStrategyCount(strategyCount + 1)} className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">+</button>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-4">
                    <div className="flex justify-between items-baseline">
                        <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Total Estimate</span>
                        <div className="text-6xl font-black text-white relative">
                            <span className="text-2xl absolute -left-6 top-1 text-primary">₹</span>
                            {(strategyCount * basePrice).toLocaleString('en-IN')}
                        </div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium italic text-right">* Credits never expire. Use them whenever your growth stalls.</p>
                </div>
            </div>

            <button className="w-full bg-white text-black font-black py-6 rounded-2xl text-lg shadow-neon hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Purchase Snipe Credits
                <span className="material-symbols-outlined">payments</span>
            </button>
          </div>

          {/* Value Props */}
          <div className="space-y-12">
            {[
              { icon: "bolt", title: "Instant Activation", text: "Credits are added to your account immediately after the transaction." },
              { icon: "security", title: "Enterprise Precision", text: "Every credit unlocks a full deep-dive competitive audit and ICP behavioral map." },
              { icon: "analytics", title: "Lifetime Access", text: "Generated strategies are stored in your vault forever. No recurring fees." }
            ].map((prop, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 transform group-hover:rotate-6">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-black">{prop.icon}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black font-headline text-white">{prop.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-sm">{prop.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
