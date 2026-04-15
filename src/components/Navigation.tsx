"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "How it works", href: "#how-it-works-section" },
  { label: "Outputs", href: "#outputs-section" },
  { label: "Pricing", href: "#pricing-section" },
  { label: "Contact Support", href: "#support-section" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-surface-bright/50 backdrop-blur-[30px] shadow-neon flex justify-between items-center px-6 py-4 rounded-xl ring-1 ring-inset ring-outline-variant/10">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
          <div className="text-2xl font-black font-headline tracking-tighter text-white">
            GTM<span className="text-primary">SNIPE</span>
          </div>
        </Link>

        {/* Desktop nav links — truly centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link href="https://app.gtmsnipe.com/signin" className="text-slate-400 hover:text-white transition-colors px-4 py-2 text-sm font-bold">
            Login
          </Link>
          <Link href="https://app.gtmsnipe.com/signup" className="bg-linear-to-r from-primary to-primary-dim text-on-primary-fixed px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-neon transition-all active:scale-95 duration-200 whitespace-nowrap">
            Create Free Account
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.25 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-1.75" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-1.75" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div className={`fixed top-19 left-4 right-4 z-40 md:hidden glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}`}>
        <div className="flex flex-col p-5 gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all"
            >
              {l.label}
            </Link>
          ))}

          <div className="border-t border-white/5 mt-3 pt-4 flex flex-col gap-2.5">
            <Link
              href="https://app.gtmsnipe.com/signin"
              onClick={() => setOpen(false)}
              className="text-center py-3 rounded-xl border border-white/10 hover:border-primary/30 text-slate-300 hover:text-white font-bold text-sm transition-all"
            >
              Login
            </Link>
            <Link
              href="https://app.gtmsnipe.com/signup"
              onClick={() => setOpen(false)}
              className="text-center py-3.5 rounded-xl bg-linear-to-r from-primary to-primary-dim text-on-primary-fixed font-bold text-sm hover:shadow-neon transition-all"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
