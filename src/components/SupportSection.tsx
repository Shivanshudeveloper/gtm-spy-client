export default function SupportSection() {
  return (
    <section id="support-section" className="py-24 bg-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto px-8 text-center">
        {/* Card */}
        <div className="glass-panel rounded-3xl border border-white/10 px-6 py-10 md:px-16 md:py-14 space-y-8 shadow-[0_0_60px_rgba(161,250,255,0.04)]">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 mx-auto">
            <span className="material-symbols-outlined text-tertiary text-3xl">support_agent</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black font-headline text-white">
              We&apos;re here to help
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-md mx-auto">
              Have a question, bug report, or just need help with your GTM strategy? Drop us an email and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Email CTA */}
          <a
            href="mailto:support@gtmsnipe.com"
            className="group inline-flex items-center gap-3 bg-surface-container-highest hover:bg-surface-bright border border-white/10 hover:border-tertiary/40 px-8 py-4 rounded-2xl transition-all duration-300"
          >
            <span className="material-symbols-outlined text-tertiary text-xl">mail</span>
            <span className="text-white font-bold text-lg tracking-tight">support@gtmsnipe.com</span>
            <span className="material-symbols-outlined text-slate-500 text-base group-hover:text-tertiary group-hover:translate-x-1 transition-all duration-200">arrow_forward</span>
          </a>

          {/* Response time badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Responds in &lt; 24 hrs</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Human support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
