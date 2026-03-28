import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Understand GTM SNIPE's refund and cancellation policy for AI-generated go-to-market strategy reports.",
  alternates: { canonical: "https://gtmsnipe.com/refund" },
  robots: { index: true, follow: false },
};

export default function RefundPolicy() {
  const lastUpdated = "March 27, 2026";

  return (
    <main className="min-h-screen bg-surface pt-40 pb-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-12 rounded-3xl space-y-12 border border-white/5 shadow-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black font-headline text-white">Refund Policy</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-slate-300 font-medium leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                1. Refund Eligibility
              </h2>
              <p>
                At GTM SNIPE, we strive to provide excellent service to all our customers. Refunds may be available under certain circumstances, subject to review and validation of your refund request.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                2. Refund Request Process
              </h2>
              <p>
                To request a refund, you must contact our support team at <strong>support@gtmsnipe.ai</strong> with your account details, transaction information, and the reason for your refund request.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                3. Refund Validation
              </h2>
              <p>
                All refund requests are subject to review and validation. We will carefully evaluate each request on a case-by-case basis. A refund will only be processed if we determine that your request is valid and meets our refund criteria. This evaluation process may take up to 5-7 business days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                4. Meeting Requirement
              </h2>
              <p>
                In certain cases, we may require a meeting or discussion to better understand your situation before processing a refund. This helps us understand the specific issues you encountered and provide appropriate solutions if possible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                5. Non-Refundable Items
              </h2>
              <div className="space-y-4">
                <p>The following are generally not eligible for refunds:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Snipe credits that have been fully utilized for strategy generation.</li>
                  <li>Transactions older than 14 days from the date of purchase.</li>
                  <li>Promotional or discounted credit bundles that explicitly state "no refunds."</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4 border-t border-white/5 pt-12">
              <h2 className="text-2xl font-bold text-white">Cancellation vs. Refund</h2>
              <p>
                Please note that canceling your account is different from requesting a refund. Cancellation does not automatically entitle you to a refund for unused Snipe credits. Refunds are evaluated separately based on our refund policy criteria.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-sm italic text-slate-500">
               For any billing inquiries, please contact payments@gtmsnipe.ai
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
