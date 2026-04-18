export default function Testimonials() {
  const testimonials = [
    {
      text: "The Kinetic Oracle Engine cut our research phase from weeks to minutes. The ICP mapping is spookily accurate.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGkf-9-W1fTIUCg7JRobV1CzIxVHhQ4g36XIpTge9R2hmY9YXRRLB3748e0x3yWFxO9EAryFxdyMuNH3r7VQxuCNvYKFabyD2x6bVZrJ6uoIoBuF_twKIVACAZCaZAC4QEtDC9QZeeOtR2iudzJZpf9vaVCvdshTzgc9INUWbuc6P505QZOaG9OwyJu__U-19HFj59jsZlKN-3xCrsLz7BQk4mhDcC5Sw9ik33vkkVjWu-A1Is6kYyQUbAN9zDyL81CbDuH424kqE",
      name: "Sarah Chen",
      role: "Head of Growth at TechFlow"
    },
    {
      text: "Finally, a GTM tool that delivers actual strategy instead of just raw data. The board-ready decks are a game-changer.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACJJut5vlm8EbKv9agBbBXFpBRGNxfTpqVCqNLcB8tqYZR3NqWoUxxzrOwd3ygRZ093ecaJtD51855UsdSIXWND_5EsRz5q0ZWU37Q-alv7l2VqQhC_dkt6wCPnFVnZtArVa-nKpq_iLNWLsZ27cw5c0f02_RN2H8H7BcsMZRoH7X9lgw3lXAo5IQsriyxnqonlG0zSSxitg2waMusfdPtXpqmadynILCq9-qIRXQDWcbRwGlRZvlEqZlT6w4bhbKRBQ1ihwUSFFo",
      name: "Marcus Rodriguez",
      role: "VP Strategy at Nexus Labs"
    },
    {
      text: "Dominating AEO results seemed impossible until we used Oracle. Our presence in AI search engines tripled in 3 months.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMRcpATDgPdDE2T-loboA0x-wNB4X7sHxKIzEuink7os3xpIODcQkxBuUhtX-O0myI6wTj3WW6AeMhraUEDssRkcVqmj2sBXvq1tDBh9aJadblTO7F9lr-kbE5XYEaflNGe6_ZPxcm01V2Q0BATszFq_lgLEWMBEuJRiTnBpM_jkSU0yCjscWUOFu-gX_fS7OcZAhAFjD2NnKIrTGIjujLcw_10p_6t3A_MJLbpZtcjJsQaMxdUWdQpzxzdsITjihyY7iQTXDWzRA",
      name: "Elena Sorokina",
      role: "Founder of Quantico"
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-surface-container-low relative overflow-hidden">
      {/* 3D Accents */}
      <div className="absolute top-20 right-10 w-12 h-12 bg-primary/20 rounded-2xl rotate-45 animate-float blur-[2px] -z-10 border border-primary/30"></div>
      <div className="absolute bottom-20 left-10 w-10 h-10 bg-tertiary/20 rounded-full animate-float-delayed blur-[1px] -z-10 border border-tertiary/30"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-headline mb-4 md:mb-6 tracking-tight-display">Trusted by Growth Leaders</h2>
          <p className="text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto">See how global teams are scaling their GTM operations with AI-powered precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-surface-container-high p-6 md:p-10 rounded-xl flex flex-col justify-between group hover:shadow-neon transition-all duration-300">
              <div className="space-y-8">
                <div className="flex gap-1.5">
                  <span className="material-symbols-outlined text-primary text-lg">star</span>
                  <span className="material-symbols-outlined text-primary text-lg">star</span>
                  <span className="material-symbols-outlined text-primary text-lg">star</span>
                  <span className="material-symbols-outlined text-primary text-lg">star</span>
                  <span className="material-symbols-outlined text-primary text-lg">star</span>
                </div>
                <p className="text-white text-lg italic leading-relaxed font-medium">"{t.text}"</p>
              </div>
              <div className="mt-10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest ring-1 ring-outline-variant/20 overflow-hidden">
                  <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                </div>
                <div>
                  <div className="font-extrabold text-white">{t.name}</div>
                  <div className="text-sm font-bold text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
