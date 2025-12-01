import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Legacy() {
  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Continuity</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Legacy</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl">
        <div className="relative mb-24">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
             <img src="/hero-eagle-seal.png" className="w-96 h-96 object-contain" alt="Seal" />
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <p className="font-serif text-2xl md:text-3xl text-gold-100 leading-relaxed">
              "We do not inherit the earth from our ancestors; we borrow it from our children."
            </p>
            <p className="text-navy-300 font-sans text-sm uppercase tracking-widest">
              — Native American Proverb
            </p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-navy-200 font-sans leading-relaxed mb-8">
            The Kiasu Family Trust is built on the premise that wealth is a tool for impact, not an end in itself. Our definition of legacy extends beyond the balance sheet to include the intellectual, social, and ethical capital of the family.
          </p>

          <h3 className="font-serif text-3xl text-gold-100 mt-12 mb-6">Multigenerational Education</h3>
          <p className="text-navy-200 font-sans leading-relaxed mb-8">
            Preparing the next generation is as important as managing the portfolio. We invest heavily in the education and development of family members, fostering a culture of stewardship, entrepreneurship, and philanthropy. We believe that each generation must earn its place and contribute to the family's narrative.
          </p>

          <h3 className="font-serif text-3xl text-gold-100 mt-12 mb-6">Philanthropic Impact</h3>
          <p className="text-navy-200 font-sans leading-relaxed mb-8">
            We are committed to giving back to the communities that have supported us. Our philanthropic initiatives are strategic and targeted, focusing on areas where we can make a meaningful, measurable difference.
          </p>
        </div>

        <div className="mt-24 text-center">
          <Link href="/careers">
            <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 uppercase tracking-widest text-sm font-bold transition-colors group">
              Next: Careers
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
