import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Purpose() {
  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Mandate</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Purpose</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl">
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="font-serif text-2xl text-gold-200 leading-relaxed mb-12 text-center italic">
            "To steward capital with the prudence of a guardian and the foresight of a founder."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="font-serif text-3xl text-gold-100 mb-6">Capital Preservation</h3>
              <p className="text-navy-200 font-sans leading-relaxed">
                Our first and most sacred duty is the preservation of the family's capital base. We view capital not merely as purchasing power, but as a resource for future generations. This requires a defensive posture against inflation, currency debasement, and market euphoria. We prioritize return <em>of</em> capital over return <em>on</em> capital.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-gold-100 mb-6">Prudent Growth</h3>
              <p className="text-navy-200 font-sans leading-relaxed">
                While preservation is paramount, stagnation is a risk in itself. We seek prudent growth through high-conviction investments in assets that offer asymmetric risk-reward profiles. We are patient allocators, willing to hold cash for extended periods while waiting for the right opportunities to deploy capital.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 border border-white/5 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="font-serif text-3xl text-gold-100 mb-8 relative z-10">The Kiasu Ethos</h3>
            <div className="space-y-6 text-navy-200 font-sans relative z-10">
              <p>
                The term "Kiasu" often carries a colloquial meaning of "fear of missing out." We reclaim this term to signify a <strong>fear of failure</strong> in our duty. It is a relentless drive to ensure that no stone is left unturned, no risk unassessed, and no opportunity for improvement overlooked.
              </p>
              <p>
                It is an anti-fragile mindset that assumes the world is volatile and prepares accordingly, rather than hoping for stability.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <Link href="/governance">
            <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 uppercase tracking-widest text-sm font-bold transition-colors group">
              Next: Governance Structure
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
