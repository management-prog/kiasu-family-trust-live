import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Shield, Clock, Anchor } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/puerto-rico-coast.png" 
            alt="Puerto Rico Coastline" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950"></div>
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/texture-navy-gold.png')] bg-repeat mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 pt-20 pb-32 text-center">
          {/* Eagle Seal */}
          <div className="mx-auto w-32 h-32 md:w-48 md:h-48 mb-12 opacity-0 animate-in fade-in zoom-in duration-1000 delay-300 fill-mode-forwards">
            <img 
              src="/hero-eagle-seal.png" 
              alt="Kiasu Family Trust Seal" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-gold-100 tracking-wide leading-tight mb-8 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards">
            Stewardship Across <br />
            <span className="text-gold-500 italic">Generations</span>
          </h1>

          <p className="font-sans text-navy-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards">
            A private single-family office dedicated to the preservation of capital, 
            intellectual rigor, and the continuity of legacy from our base in Puerto Rico.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-forwards">
            <Link href="/purpose">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-500 text-navy-950 font-sans tracking-widest uppercase px-8 py-6 rounded-none border border-gold-400 transition-all duration-300"
              >
                Our Purpose
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent hover:bg-navy-900/50 text-gold-100 border-gold-500/30 hover:border-gold-500 font-sans tracking-widest uppercase px-8 py-6 rounded-none transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce duration-2000 text-gold-500/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
        </div>
      </section>

      {/* Values / Pillars Section */}
      <section className="py-32 bg-navy-900 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Pillar 1 */}
            <div className="group p-8 border border-white/5 bg-navy-950/50 hover:bg-navy-950 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Shield className="w-10 h-10 text-gold-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-2xl text-gold-100 mb-4">Capital Preservation</h3>
              <p className="text-navy-300 leading-relaxed text-sm">
                Our primary mandate is the protection of assets against inflation, volatility, and systemic risk, ensuring stability for decades to come.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group p-8 border border-white/5 bg-navy-950/50 hover:bg-navy-950 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Clock className="w-10 h-10 text-gold-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-2xl text-gold-100 mb-4">Multigenerational View</h3>
              <p className="text-navy-300 leading-relaxed text-sm">
                We operate on a timeline measured not in quarters, but in generations. Our decisions are guided by long-term continuity and resilience.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group p-8 border border-white/5 bg-navy-950/50 hover:bg-navy-950 hover:border-gold-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Anchor className="w-10 h-10 text-gold-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-2xl text-gold-100 mb-4">Puerto Rico Base</h3>
              <p className="text-navy-300 leading-relaxed text-sm">
                Firmly rooted in Puerto Rico, we leverage the island's unique strategic advantages while contributing to its economic ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Narrative Section */}
      <section className="py-32 bg-navy-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('/texture-navy-gold.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 border-4 border-navy-900 shadow-2xl">
                <img 
                  src="/legacy-symbol.png" 
                  alt="Legacy Symbol" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/30 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/30 z-0"></div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-gold-100 mb-8 leading-tight">
                A Discipline of <br />
                <span className="text-gold-500 italic">Excellence</span>
              </h2>
              <div className="space-y-6 text-navy-200 font-sans leading-relaxed">
                <p>
                  The Kiasu Family Trust was established to formalize the governance and investment activities of a single family. 
                  Our name, derived from the Hokkien vernacular for "fear of losing out," is reinterpreted here not as anxiety, 
                  but as an uncompromising vigilance—a refusal to accept mediocrity or complacency in the management of our affairs.
                </p>
                <p>
                  We employ a rigorous, quantitative approach to capital allocation, balanced by a qualitative appreciation for 
                  history, art, and human psychology.
                </p>
              </div>
              
              <div className="mt-10">
                <Link href="/philosophy">
                  <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 uppercase tracking-widest text-sm font-bold transition-colors group">
                    Explore Our Philosophy
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
