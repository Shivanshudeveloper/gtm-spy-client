import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-low border-t border-white/5 pt-16 md:pt-32 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <div className="text-3xl font-black font-headline tracking-tighter text-white">
                    GTM<span className="text-primary">SNIPE</span>
                </div>
            </Link>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
                The high-precision GTM engine for modern growth teams. Snipe the competition with AI-powered strategic playbooks.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20"></div>
                 </a>
               ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Platform</h4>
            <ul className="space-y-4">
               <li><Link href="#how-it-works-section" className="text-slate-400 hover:text-white transition-colors font-medium">How it works</Link></li>
               <li><Link href="#outputs-section" className="text-slate-400 hover:text-white transition-colors font-medium">Oracle Deck</Link></li>
               <li><Link href="#pricing-section" className="text-slate-400 hover:text-white transition-colors font-medium">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Trust</h4>
            <ul className="space-y-4">
               <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
               <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors font-medium">Terms of Service</Link></li>
               <li><Link href="/refund" className="text-slate-400 hover:text-white transition-colors font-medium">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Newsletter</h4>
            <div className="flex gap-2">
               <input type="email" placeholder="Email" className="bg-surface-container-highest border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary/50 transition-colors" />
               <button className="p-2 bg-primary rounded-lg text-black hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-sm">send</span>
               </button>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">Get the latest GTM strategies in your inbox weekly.</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-medium">© 2026 GTM SNIPE. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Oracle Engine: Online</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
