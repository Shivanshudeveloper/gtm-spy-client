"use client";

import { useState } from "react";
import OrbitalOrb from "./OrbitalOrb";
import ScannerOverlay from "./ScannerOverlay";
import LogoMarquee from "./LogoMarquee";
import StrategyPreview from "./StrategyPreview";

export default function Hero() {
  const [isScanning, setIsScanning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [url, setUrl] = useState("");

  const handleGenerate = () => {
    if (!url) return;
    setIsScanning(true);
    setIsComplete(false);
  };

  const onScanComplete = () => {
    setIsScanning(false);
    setIsComplete(true);
    // Smooth scroll to the preview
    setTimeout(() => {
        const preview = document.getElementById("strategy-preview");
        if (preview) preview.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <ScannerOverlay 
        isVisible={isScanning} 
        onComplete={onScanComplete} 
      />
      
      <main className="relative pt-40 pb-20 md:pt-56 md:pb-40 px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary glow-sphere -z-10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tertiary glow-sphere -z-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-7 space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-outline-variant/20 glass-panel">
                        <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary">AI-Powered GTM SNIPE Engine</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black font-headline leading-[1.05] tracking-tight-display bg-gradient-to-br from-white to-primary bg-clip-text text-transparent">
                        AI-Powered GTM SNIPE Generator
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed">
                        Enter a URL to snipe your competition. Our Oracle engine decodes data, maps ICPs, and crafts your multi-channel playbook in seconds.
                    </p>
                    
                    <div className="space-y-10">
                        <div className="flex flex-col sm:flex-row gap-3 p-2 bg-surface-container-highest rounded-xl group focus-within:ring-1 ring-inset ring-tertiary transition-all shadow-neon focus-within:shadow-[0_0_1rem_rgba(161,250,255,0.1)]">
                            <input 
                                className="flex-grow bg-transparent border-none focus:ring-0 px-8 py-4 text-white font-medium placeholder:text-slate-400 outline-none" 
                                placeholder="https://competitor.com" 
                                type="text" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <button 
                                onClick={handleGenerate}
                                className="bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-neon transition-all"
                            >
                                Snipe Strategy
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="md:col-span-5 relative animate-in fade-in slide-in-from-right-10 duration-1000">
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-tertiary-container/30 rounded-full blur-[140px] animate-pulse"></div>
                        <OrbitalOrb />
                    </div>
                </div>
            </div>

            {/* Infinite Marquee Section */}
            <LogoMarquee />

            {/* Post-Scan Reveal */}
            {isComplete && (
                <div id="strategy-preview">
                    <StrategyPreview />
                </div>
            )}
        </div>
      </main>
    </>
  );
}
