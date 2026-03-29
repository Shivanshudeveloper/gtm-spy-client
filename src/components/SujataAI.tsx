import Link from "next/link";

const APP_URL = "https://app.gtmsnipe.com/signup";

const features = [
  { icon: "description",    text: "Understands your full GTM report end-to-end" },
  { icon: "question_answer", text: "Answers questions about channels, ICPs, and competitors" },
  { icon: "lightbulb",       text: "Suggests actionable next steps tailored to your data" },
  { icon: "schedule",        text: "Available 24/7 — no meetings, no waiting" },
];

const bubbles = [
  { role: "ai",   text: "Hi! I have finished reading your GTM report. Your positioning has 3 strong signals and 2 critical gaps. Want me to walk you through them?" },
  { role: "user", text: "Yes — and which competitor gap should I go after first?" },
  { role: "ai",   text: "Your biggest opening: over 2,300 Reddit users search for a founder-first CRM every month and no competitor owns that narrative yet. Start with LinkedIn organic targeting CTOs on integration complexity — that is your top identified pain point." },
  { role: "user", text: "What should my first 30 days look like?" },
  { role: "ai",   text: "Week 1-2: 3 LinkedIn posts on integration pain. Week 3: free ICP quiz. Week 4: retarget with your full GTM deck. Want me to draft the copy right now?" },
];

export default function SujataAI() {
  return (
    <section className="py-40 bg-surface-container-low relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: copy ── */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-sm">smart_toy</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Your GTM Co-Pilot</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black font-headline leading-[1.05] tracking-tight-display text-white">
                Meet<br />
                <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">Sujata AI</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                Your dedicated strategy advisor who has read every line of your GTM report — so you never have to dig through data alone.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-base">{item.icon}</span>
                  </div>
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href={APP_URL}
              className="inline-flex items-center gap-2.5 bg-linear-to-r from-secondary to-primary text-on-primary-fixed px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_2rem_rgba(191,129,255,0.3)] transition-all active:scale-95 duration-200"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Chat with Sujata AI
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* ── Right: chat mockup ── */}
          <Link href={APP_URL} className="relative block group cursor-pointer">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-2xl group-hover:bg-secondary/10 transition-colors duration-500" />

            <div className="relative glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] group-hover:border-secondary/30 transition-colors duration-300">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-surface-container-highest/60">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-secondary/30 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/AI logo Sujata.gif" alt="Sujata AI" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-black text-white">Sujata AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-medium">Online · Ready to help</span>
                  </div>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                  <span className="text-[9px] font-black uppercase tracking-widest text-secondary">Open Chat</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4">
                {bubbles.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-secondary/30 shrink-0 mt-0.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/assets/AI logo Sujata.gif" alt="Sujata AI" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-medium ${
                      msg.role === "ai"
                        ? "bg-surface-container-highest text-slate-200 rounded-tl-sm"
                        : "bg-linear-to-br from-secondary/80 to-primary/80 text-white rounded-tr-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Fake input */}
              <div className="px-5 py-4 border-t border-white/5 bg-surface-container-highest/40 flex items-center gap-3">
                <div className="flex-1 bg-surface/60 rounded-xl px-4 py-2.5 text-sm text-slate-500 font-medium">
                  Ask Sujata anything about your strategy...
                </div>
                <div className="w-9 h-9 rounded-xl bg-linear-to-r from-secondary to-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-sm">send</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
