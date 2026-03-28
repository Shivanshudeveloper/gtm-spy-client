import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how GTM SNIPE collects, uses, and protects your personal data when you use our AI-powered go-to-market strategy engine.",
  alternates: { canonical: "https://gtmsnipe.com/privacy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 27, 2026";

  return (
    <main className="min-h-screen bg-surface pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-12 rounded-3xl space-y-12 border border-white/5 shadow-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black font-headline text-white">Privacy Policy</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300 font-medium leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                1. Introduction
              </h2>
              <p>
                Welcome to GTM SNIPE ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our AI-powered GTM Strategy Sniper.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                2. Information We Collect
              </h2>
              <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/5">
                <h3 className="text-lg font-bold text-white">2.1 Information You Provide</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email address and credentials for account access.</li>
                  <li>Customer URLs and competitor data provided for analysis.</li>
                  <li>Payment information processed securely via our partners.</li>
                </ul>
                <h3 className="text-lg font-bold text-white">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Usage patterns, IP addresses, and device metadata necessary for high-performance AI generation.</li>
                  <li>Telemetry data to improve the Oracle strategy engine.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                3. How We Use Your Information
              </h2>
              <p>We use the data we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Generate and maintain your AI-powered strategic playbooks.</li>
                <li>Process your Snipe Credit transactions.</li>
                <li>Enhance the accuracy of our ICP behavioral mapping algorithms.</li>
                <li>Ensure the security and integrity of our global competitive databases.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                4. Data Security & Storage
              </h2>
              <p>
                We implement state-of-the-art technical measures to protect your data. While we strive for absolute security, no transmission over the internet or cloud storage is 100% impenetrable. We utilize encrypted storage for all generated strategic assets.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                5. Your Rights & Choices
              </h2>
              <p>
                You have the right to access, export, or delete your account data. You can manage your strategy vault and Snipe Credit balance at any time within your dashboard.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-sm italic text-slate-500">
               For any privacy-related inquiries, please contact our support team at security@gtmsnipe.ai
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
