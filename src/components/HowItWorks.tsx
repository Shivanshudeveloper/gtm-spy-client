export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Step 1 */}
          <div className="relative space-y-8">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-3xl font-black shadow-neon">1</div>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-extrabold">Paste a website</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">Simply input your domain or a competitor's URL to begin the deep-scan process.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative space-y-8">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-3xl font-black shadow-neon">2</div>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-extrabold">AI Analysis</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">Our Kinetic Oracle engine dissects content, positioning, and market gaps in real-time.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative space-y-8">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-3xl font-black shadow-neon">3</div>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-extrabold">Export Strategy</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">Receive a comprehensive, board-ready GTM deck with actionable insights and campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
