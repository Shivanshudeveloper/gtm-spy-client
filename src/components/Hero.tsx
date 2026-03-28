import Link from "next/link";
import DashboardSlideshow from "./DashboardSlideshow";
import LogoMarquee from "./LogoMarquee";

export default function Hero() {
  return (
    <main className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-8 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-primary glow-sphere -z-10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-tertiary glow-sphere -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 md:gap-20">

        {/* ── Text block ── */}
        <div className="flex flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-outline-variant/20 glass-panel">
            <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary">AI-Powered GTM SNIPE Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-headline leading-[1.05] tracking-tight-display bg-linear-to-br from-white to-primary bg-clip-text text-transparent max-w-4xl">
            AI-Powered GTM Generator
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed">
            Paste your website URL. Our Oracle engine decodes their strategy, maps ICPs, and hands you a complete GTM playbook in seconds.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://app.gtmsnipe.com/signup"
              className="group relative inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary-dim text-on-primary-fixed px-7 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-base hover:shadow-neon transition-all active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined text-lg">rocket_launch</span>
              Create Free Account
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <p className="text-xs text-slate-500 font-medium">No credit card required &nbsp;·&nbsp; First strategy free</p>
        </div>

        {/* ── Dashboard slideshow ── */}
        <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <DashboardSlideshow />
        </div>

        {/* ── Logo marquee ── */}
        <LogoMarquee />
      </div>
    </main>
  );
}
