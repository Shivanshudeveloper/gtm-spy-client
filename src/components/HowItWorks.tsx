export default function HowItWorks() {
  return (
    <section id="how-it-works-section" className="py-20 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Step 1 */}
          <div className="relative flex gap-6 md:flex-col md:gap-0 md:space-y-8">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-2xl md:text-3xl font-black shadow-neon">1</div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-headline font-extrabold">Paste a website</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg">Simply input your domain or a competitor's URL to begin the deep-scan process.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative flex gap-6 md:flex-col md:gap-0 md:space-y-8">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-2xl md:text-3xl font-black shadow-neon">2</div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-headline font-extrabold">AI Analysis</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg">Our Kinetic Oracle engine dissects content, positioning, and market gaps in real-time.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative flex gap-6 md:flex-col md:gap-0 md:space-y-8">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-linear-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary-fixed font-headline text-2xl md:text-3xl font-black shadow-neon">3</div>
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-headline font-extrabold">Export Strategy</h3>
              <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg">Receive a comprehensive, board-ready GTM deck with actionable insights and campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
