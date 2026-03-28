import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-surface-bright/50 backdrop-blur-[30px] shadow-neon flex justify-between items-center px-8 py-4 rounded-xl ring-1 ring-inset ring-outline-variant/10">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <div className="text-2xl font-black font-headline tracking-tighter text-white">
            GTM<span className="text-primary">SNIPE</span>
        </div>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#how-it-works-section" className="text-primary font-bold transition-colors">How it works</Link>
        <Link href="#outputs-section" className="text-slate-400 hover:text-white transition-colors font-medium">Outputs</Link>
        <Link href="#pricing-section" className="text-slate-400 hover:text-white transition-colors font-medium">Pricing</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href="https://app.gtmsnipe.com/signin" className="text-slate-400 hover:text-white transition-colors px-4 py-2 text-sm font-bold">Login</Link>
        <Link href="https://app.gtmsnipe.com/signup" className="bg-linear-to-r from-primary to-primary-dim text-on-primary-fixed px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-neon transition-all active:scale-95 duration-200 whitespace-nowrap">Create Free Account</Link>
      </div>
    </nav>
  );
}
