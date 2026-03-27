"use client";

import { useEffect, useState } from "react";

export default function ScannerOverlay({ isVisible, onComplete }: { isVisible: boolean, onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const scanSteps = [
    "Initializing Kinetic Oracle Engine...",
    "Scanning target domain structure...",
    "Extracting metadata & SEO signals...",
    "Identifying primary competitors...",
    "Analyzing market positioning gaps...",
    "Mapping Ideal Customer Profiles (ICP)...",
    "Decoding Answer Engine Optimization (AEO) metrics...",
    "Synthesizing multi-channel GTM playbook...",
    "Finalizing Intelligence Deck..."
  ];

  useEffect(() => {
    if (!isVisible) return;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < scanSteps.length) {
        setLogs(prev => [...prev.slice(-4), scanSteps[currentStep]]);
        setProgress(((currentStep + 1) / scanSteps.length) * 100);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-surface/80 backdrop-blur-xl flex items-center justify-center p-8 transition-all duration-500 animate-in fade-in">
      <div className="max-w-2xl w-full space-y-12">
        {/* Progress Hexagon */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-tertiary/30 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
            <div className="text-4xl font-black font-headline text-white">{Math.round(progress)}%</div>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Deciphering Market Signals</h2>
          <div className="h-32 flex flex-col items-center gap-2 overflow-hidden">
            {logs.map((log, i) => (
              <div key={i} className="text-sm font-mono text-primary animate-in slide-in-from-bottom-2 fade-in duration-300">
                <span className="text-tertiary mr-2">›</span> {log}
              </div>
            ))}
          </div>
        </div>

        {/* Scanning Bar */}
        <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-tertiary transition-all duration-300 ease-out shadow-[0_0_15px_rgba(161,166,255,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
