"use client";

import { SalesforceIcon, SlackIcon, PerplexityIcon } from "./Logos";

export default function LogoMarquee() {
  const logos = [
    <SalesforceIcon key="sf" />,
    <SlackIcon key="sl" />,
    <PerplexityIcon key="pl" />,
    <div key="gpt" className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"><span className="text-sm font-black text-white">GPT-4o</span></div>,
    <div key="cl" className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"><span className="text-sm font-black text-white">Claude 3.5</span></div>,
    <div key="ms" className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"><span className="text-sm font-black text-white">Azure AI</span></div>,
    <div key="hc" className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"><span className="text-sm font-black text-white">Google Gemini</span></div>
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-5 delay-300">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 text-center">Powering Kinetic Intelligence Across</p>
      <div className="relative flex overflow-x-hidden">
        <div className="marquee-fast-1 flex gap-12 items-center whitespace-nowrap px-8 py-2">
            {logos}
            {logos}
            {logos}
        </div>
        <div className="absolute top-0 marquee-fast-2 flex gap-12 items-center whitespace-nowrap px-8 py-2" aria-hidden="true">
            {logos}
            {logos}
            {logos}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </div>
  );
}
