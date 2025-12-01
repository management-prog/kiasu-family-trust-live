import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Join the Team</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Careers</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-3xl text-gold-100 mb-6">An Uncompromising Standard</h3>
            <p className="text-navy-200 font-sans leading-relaxed mb-6">
              The Kiasu Family Trust is not a typical employer. We are a lean, high-performance team dedicated to excellence in every facet of our operations. We hire rarely and selectively.
            </p>
            <div className="bg-navy-900 border border-gold-500/30 p-8 mb-8">
              <p className="font-serif text-xl text-gold-200 italic text-center">
                "Fewer than 5 hires per decade."
              </p>
            </div>
            <p className="text-navy-200 font-sans leading-relaxed">
              We seek individuals who combine intellectual brilliance with absolute integrity. Our team members typically hail from elite universities and have demonstrated exceptional capability in quantitative finance, law, or strategic management.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="font-serif text-2xl text-gold-100 mb-4">What We Look For</h4>
            
            <div className="flex gap-4">
              <CheckCircle className="text-gold-500 w-6 h-6 flex-shrink-0" />
              <div>
                <h5 className="text-gold-100 font-bold text-sm uppercase tracking-wider mb-2">Quantitative Excellence</h5>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Deep comfort with data, modeling, and first-principles thinking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-gold-500 w-6 h-6 flex-shrink-0" />
              <div>
                <h5 className="text-gold-100 font-bold text-sm uppercase tracking-wider mb-2">Discretion & Integrity</h5>
                <p className="text-navy-300 text-sm leading-relaxed">
                  An unwavering commitment to confidentiality and ethical conduct.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-gold-500 w-6 h-6 flex-shrink-0" />
              <div>
                <h5 className="text-gold-100 font-bold text-sm uppercase tracking-wider mb-2">Long-Term Orientation</h5>
                <p className="text-navy-300 text-sm leading-relaxed">
                  The patience to build value over decades, not quarters.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-navy-300 text-sm mb-6">
                If you believe you meet these exacting standards, we invite you to submit your credentials for our records.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-gold-600 hover:bg-gold-500 text-navy-950 font-sans tracking-widest uppercase py-6 rounded-none border border-gold-400 transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
