"use client";

import { useState, type ReactNode } from "react";

type Card = {
  icon: string;
  title: string;
  desc: string;
  preview: string | ReactNode;
  accent: string;
  glowColor: string;
  badge?: string;
};

function RedditPreview() {
  const threads = [
    { title: "Is there actually a CRM built for solo founders?", upvotes: "2.3k", match: true },
    { title: "Every GTM tool is for enterprises, not us", upvotes: "1.8k", match: true },
    { title: "Spent 3 months on a tool nobody asked for", upvotes: "941", match: false },
  ];
  return (
    <div className="space-y-3 w-full">
      {threads.map((t, i) => (
        <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg px-3 py-2.5">
          <div className="flex flex-col items-center gap-0.5 shrink-0 pt-0.5">
            <span className="material-symbols-outlined text-sm text-error" style={{ fontSize: "14px" }}>arrow_drop_up</span>
            <span className="text-[10px] font-black text-slate-300">{t.upvotes}</span>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-slate-200 leading-snug font-medium line-clamp-2">{t.title}</p>
            <span className={`inline-block mt-1 text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${t.match ? "bg-secondary/20 text-secondary" : "bg-white/10 text-slate-400"}`}>
              {t.match ? "Pain Match" : "Off-target"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function GoogleTrendsPreview() {
  const bars = [
    { day: "Mon", val: 42 },
    { day: "Tue", val: 58 },
    { day: "Wed", val: 51 },
    { day: "Thu", val: 74 },
    { day: "Fri", val: 88 },
    { day: "Sat", val: 65 },
    { day: "Sun", val: 91 },
  ];
  return (
    <div className="space-y-3 w-full">
      <div className="flex items-end gap-1.5 h-16 w-full">
        {bars.map((b, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-sm bg-linear-to-t from-tertiary/40 to-tertiary"
              style={{ height: `${(b.val / 100) * 56}px`, transition: `height 0.4s ease ${i * 60}ms` }}
            />
            <span className="text-[8px] text-slate-500 font-medium">{b.day}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white/5 rounded-lg px-2.5 py-2">
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">7-Day Surge</p>
          <p className="text-sm font-extrabold text-tertiary">+42%</p>
        </div>
        <div className="bg-white/5 rounded-lg px-2.5 py-2">
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Top Region</p>
          <p className="text-sm font-extrabold text-white">US, IN</p>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 font-medium">Breakout keyword: <span className="text-tertiary font-bold">&quot;AI GTM tools&quot;</span></p>
    </div>
  );
}

export default function Outputs() {
  const [activePreview, setActivePreview] = useState<number | null>(null);

  const cards: Card[] = [
    {
      icon: "account_circle",
      title: "Client Profile",
      desc: "Detailed brand personality analysis and positioning audit for your unique market voice.",
      preview: "Brand Voice: Authority • Tone: Innovative • Gap: Emotional Connection",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "groups",
      title: "ICP",
      desc: "Granular Ideal Customer Profiles with behavioral triggers and decision-making drivers.",
      preview: "Target: CTOs (SaaS) • Pain: Technical Debt • Channel: Twitter/X",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "psychology",
      title: "Pain Research",
      desc: "Identify the precise friction points your audience faces before they even vocalize them.",
      preview: "Primary Friction: Integration Complexity • Secondary: Data Security",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "troubleshoot",
      title: "AEO & Ranking",
      desc: "Answer Engine Optimization strategies to dominate AI search and traditional SERPs.",
      preview: "Perplexity Score: 92/100 • Citations needed: 4 • Top Keywords: AI Ethics",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "trending_up",
      title: "Trend Forecasting",
      desc: "Predictive trend mapping to align your messaging with upcoming market shifts.",
      preview: "Rising: Edge Computing • Peak: LLM Fine-tuning • Drop: Generic AI",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "rocket_launch",
      title: "Campaign Output",
      desc: "Plug-and-play ad copy, email sequences, and social playbooks ready for launch.",
      preview: "Phase 1: Awareness • Ad Spend: $2.5k • Expected ROAS: 4.2x",
      accent: "text-primary",
      glowColor: "bg-primary/5",
    },
    {
      icon: "forum",
      title: "Reddit Demand",
      desc: "Scan live Reddit threads and comments to validate whether your SaaS solves a problem the market is actively voicing.",
      preview: <RedditPreview />,
      accent: "text-secondary",
      glowColor: "bg-secondary/5",
      badge: "New",
    },
    {
      icon: "area_chart",
      title: "Google Trends",
      desc: "Real-time niche momentum check — see if your category is surging, plateauing, or fading across Google Search this week.",
      preview: <GoogleTrendsPreview />,
      accent: "text-tertiary",
      glowColor: "bg-tertiary/5",
      badge: "New",
    },
  ];

  return (
    <section id="outputs-section" className="pt-12 pb-40 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold font-headline mb-6 tracking-tight-display">The Oracle Intelligence Deck</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl">High-fidelity strategic outputs delivered with tactical precision.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActivePreview(idx)}
              onMouseLeave={() => setActivePreview(null)}
              className="glass-panel relative p-8 rounded-2xl group transition-all duration-500 shadow-neon overflow-hidden border border-white/5 cursor-pointer h-95 flex flex-col justify-start"
            >
              {/* Animated Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-marquee ${
                card.badge
                  ? card.accent === "text-secondary"
                    ? "bg-linear-to-r from-secondary via-primary to-secondary"
                    : "bg-linear-to-r from-tertiary via-primary to-tertiary"
                  : "bg-linear-to-r from-primary via-tertiary to-primary"
              }`}></div>

              {/* Background Glow */}
              <div className={`absolute inset-0 ${card.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              {/* New Badge */}
              {card.badge && (
                <div className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full border ${
                  card.accent === "text-secondary"
                    ? "border-secondary/30 text-secondary bg-secondary/10"
                    : "border-tertiary/30 text-tertiary bg-tertiary/10"
                }`}>
                  {card.badge}
                </div>
              )}

              {/* Original Content Wrapper (Fades out on hover) */}
              <div className="relative z-10 space-y-6 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10 group-hover:pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center relative border border-white/10">
                  <div className={`absolute inset-0 blur-xl opacity-20 filter rounded-full ${
                    card.accent === "text-secondary" ? "bg-secondary" : card.accent === "text-tertiary" ? "bg-tertiary" : "bg-tertiary-container"
                  }`}></div>
                  <span className={`material-symbols-outlined text-2xl relative z-10 ${card.accent}`}>{card.icon}</span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-headline font-extrabold text-white">{card.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{card.desc}</p>
                </div>
              </div>

              {/* Interactive Preview Content (Fades in on hover) */}
              <div
                className={`absolute inset-0 p-8 flex flex-col justify-center bg-surface-container-highest transition-all duration-500 transform ${
                  activePreview === idx ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-10 h-1 rounded-full shadow-neon ${
                    card.accent === "text-secondary"
                      ? "bg-linear-to-r from-secondary to-primary"
                      : card.accent === "text-tertiary"
                      ? "bg-linear-to-r from-tertiary to-primary"
                      : "bg-linear-to-r from-primary to-tertiary"
                  }`}></div>
                  <p className={`text-[9px] font-mono uppercase tracking-[0.4em] font-black underline underline-offset-8 ${card.accent}`}>
                    Live Intelligence
                  </p>
                  <h5 className="text-base font-headline font-bold text-white leading-tight">{card.title} Findings:</h5>

                  {typeof card.preview === "string" ? (
                    <p className="text-sm text-slate-300 font-medium leading-relaxed italic border-l-2 border-primary/40 pl-4 py-1">
                      {card.preview}
                    </p>
                  ) : (
                    card.preview
                  )}

                  <button className={`text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-1.5 group/btn hover:text-white transition-colors ${card.accent}`}>
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
