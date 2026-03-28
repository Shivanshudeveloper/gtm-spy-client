import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the terms and conditions governing your use of GTM SNIPE's AI-powered go-to-market strategy generator.",
  alternates: { canonical: "https://gtmsnipe.com/terms" },
  robots: { index: true, follow: false },
};

export default function TermsOfService() {
  const lastUpdated = "March 27, 2026";

  return (
    <main className="min-h-screen bg-surface pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-12 rounded-3xl space-y-12 border border-white/5 shadow-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black font-headline text-white">Terms of Service</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300 font-medium leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using GTM SNIPE ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                2. Description of Service
              </h2>
              <p>
                GTM SNIPE is an AI-powered GTM Strategy Sniper that allows users to perform competitive audits, map ICP behaviors, and generate strategic playbooks based on input URLs. The Service is provided on a <strong>Pay-As-You-Go</strong> basis using Snipe Credits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                3. User Accounts
              </h2>
              <p>
                To use the Service, you must create an account by providing a valid email address, a secure password, and accurate information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                4. Snipe Credits & Payment
              </h2>
              <p>
                GTM SNIPE operates on a credit-based system. Credits are purchased in advance at the current rate (₹999 per Strategy) and are deducted upon each successful generation. Credits are non-transferable and do not expire.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                5. Intellectual Property
              </h2>
              <p>
                The Service and its original content, features, and functionality are owned by GTM SNIPE and are protected by international copyright laws. You retain ownership of any data you upload, but grant us a license to process this data to provide the Service. Generated strategic playbooks are for your exclusive use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                6. Service Availability & Liability
              </h2>
              <p>
                While we strive to provide reliable service, GTM SNIPE does not guarantee that the Service will be available at all times. We are not liable for any indirect, incidental, or special damages resulting from the use or inability to use the Service.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-sm italic text-slate-500">
               For any legal inquiries, please contact legal@gtmsnipe.ai
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
