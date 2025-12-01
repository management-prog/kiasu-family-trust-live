import { ArrowRight, TrendingUp, PieChart, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Philosophy() {
  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Investment Approach</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Philosophy</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl text-gold-100 mb-6">Quantitative Rigor, Qualitative Insight</h3>
            <p className="text-navy-200 font-sans leading-relaxed mb-6">
              We believe that successful investing requires a synthesis of hard data and human judgment. We utilize quantitative models to screen for quality, valuation, and momentum, but we rely on qualitative analysis to understand the "soft" factors—management integrity, brand strength, and competitive moats—that numbers alone cannot capture.
            </p>
            <p className="text-navy-200 font-sans leading-relaxed">
              Our portfolio is constructed to withstand shocks. We are not chasers of yield or temporary fads. We are owners of enduring businesses and high-quality assets.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
             {/* Abstract Chart/Graph Representation */}
             <div className="aspect-square bg-navy-900 border border-white/5 relative overflow-hidden p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/texture-navy-gold.png')] opacity-10 mix-blend-overlay"></div>
                <div className="w-full h-full border border-gold-500/20 relative">
                   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-500/50"></div>
                   <div className="absolute top-0 left-0 h-full w-[1px] bg-gold-500/50"></div>
                   {/* Stylized Line */}
                   <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,80 C20,75 40,85 50,60 C60,35 80,40 100,10" fill="none" stroke="#b8860b" strokeWidth="0.5" />
                      <path d="M0,80 L100,80 L100,10 L0,10 Z" fill="url(#grad)" opacity="0.1" />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#b8860b" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                   </svg>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-navy-900/50 border border-white/5 p-8 hover:border-gold-500/30 transition-colors duration-300">
            <TrendingUp className="text-gold-500 w-8 h-8 mb-6" />
            <h4 className="font-serif text-xl text-gold-100 mb-4">Long-Term Horizon</h4>
            <p className="text-navy-300 text-sm leading-relaxed">
              We capitalize on the one advantage that family capital has over institutional capital: time. We can endure short-term volatility for long-term compounding.
            </p>
          </div>
          <div className="bg-navy-900/50 border border-white/5 p-8 hover:border-gold-500/30 transition-colors duration-300">
            <PieChart className="text-gold-500 w-8 h-8 mb-6" />
            <h4 className="font-serif text-xl text-gold-100 mb-4">Asset Allocation</h4>
            <p className="text-navy-300 text-sm leading-relaxed">
              We maintain a diversified portfolio across public equities, private equity, real estate, and fixed income, with a strategic tilt towards productive assets.
            </p>
          </div>
          <div className="bg-navy-900/50 border border-white/5 p-8 hover:border-gold-500/30 transition-colors duration-300">
            <Globe className="text-gold-500 w-8 h-8 mb-6" />
            <h4 className="font-serif text-xl text-gold-100 mb-4">Global Perspective</h4>
            <p className="text-navy-300 text-sm leading-relaxed">
              Opportunities are not confined by borders. We scan the globe for value, agnostic to geography but sensitive to geopolitical risk.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link href="/legacy">
            <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 uppercase tracking-widest text-sm font-bold transition-colors group">
              Next: Legacy & Continuity
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
