"use client";

import { useState } from "react";
import Link from "next/link";

const PRICE_PER_CREDIT = 19.99;
const MAX_CREDITS = 40;
const MIN_CREDITS = 1;

export default function Pricing() {
  const [credits, setCredits] = useState(1);

  const total = (Math.round(credits * PRICE_PER_CREDIT * 100) / 100).toFixed(2);
  const pct = ((credits - MIN_CREDITS) / (MAX_CREDITS - MIN_CREDITS)) * 100;

  return (
    <section id="pricing-section" className="py-40 bg-surface relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[120px] -z-10" />

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
          <div className="glass-panel p-12 rounded-3xl space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-3">
              <h3 className="text-2xl font-black font-headline text-white">Credit Calculator</h3>
              <p className="text-slate-400 font-medium">1 credit = 1 full GTM strategy. Buy only what you need.</p>
            </div>

            {/* Credit display */}
            <div className="bg-surface-container-highest rounded-2xl border border-white/5 p-6 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Credits Selected</span>
                <div className="flex items-center gap-2">
                  <span className="text-5xl font-black text-white tabular-nums">{credits}</span>
                  <span className="text-slate-500 font-bold text-sm">× $19.99</span>
                </div>
              </div>

              {/* Slider */}
              <div className="relative pt-1">
                <input
                  type="range"
                  min={MIN_CREDITS}
                  max={MAX_CREDITS}
                  step={1}
                  value={credits}
                  onChange={(e) => setCredits(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
                  }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-slate-600 font-bold">1 credit</span>
                  <span className="text-[10px] text-slate-600 font-bold">40 credits</span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-white/5 pt-8 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-primary">$</span>
                  <span className="text-6xl font-black text-white tabular-nums">{total}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium italic text-right">Credits never expire · Use anytime</p>
            </div>

            <Link
              href="https://app.gtmsnipe.com/signin"
              className="w-full bg-white text-black font-black py-5 rounded-2xl text-lg shadow-neon hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              Purchase {credits} {credits === 1 ? "Credit" : "Credits"}
              <span className="material-symbols-outlined">ads_click</span>
            </Link>
          </div>

          {/* Value props */}
          <div className="space-y-12">
            {[
              { icon: "bolt", title: "Instant Activation", text: "Credits hit your account the moment your payment clears. No waiting, no queues." },
              { icon: "security", title: "Enterprise Precision", text: "Every credit unlocks a full deep-dive competitive audit and ICP behavioral map." },
              { icon: "analytics", title: "Lifetime Access", text: "Generated strategies are stored in your vault forever. No recurring fees." },
            ].map((prop, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-6 transform">
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
