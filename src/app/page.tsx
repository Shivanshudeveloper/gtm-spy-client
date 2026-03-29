import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Outputs from "@/components/Outputs";
import SujataAI from "@/components/SujataAI";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="selection:bg-primary/30">
      <section id="hero" className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Hero />
      </section>
      
      <section id="testimonials-section" className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <TestimonialMarquee />
      </section>
      
      <section id="outputs-section" className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Outputs />
      </section>

      <section className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <SujataAI />
      </section>

      <section id="how-it-works-section" className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <HowItWorks />
      </section>
      
      <section id="pricing-section" className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Pricing />
      </section>
    </div>
  );
}
