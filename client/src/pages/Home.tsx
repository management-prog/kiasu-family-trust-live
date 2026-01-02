import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy-950/80 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 z-10" />
          <img 
            src="/images/hero-vault.png" 
            alt="Vault" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img src="/images/aquila-emblem.png" alt="Aquila" className="h-24 w-24 mb-12 opacity-90 drop-shadow-2xl" />
            
            <h1 className="font-serif text-6xl md:text-8xl text-cream-50 tracking-tight leading-none mb-8">
              Stewardship Across <br />
              <span className="text-gold-500 italic">Generations</span>
            </h1>
            
            <div className="h-[1px] w-24 bg-gold-500/50 my-8" />
            
            <p className="font-sans text-cream-100/80 max-w-2xl text-lg md:text-xl leading-relaxed font-light tracking-wide">
              A private single-family office dedicated to the preservation of capital, intellectual rigor, and the continuity of legacy from our base in Puerto Rico.
            </p>

            <div className="mt-16 flex gap-8">
              <Link href="/purpose">
                <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 hover:border-gold-500/60 px-8 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-none">
                  Our Purpose
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-gold-600 text-navy-950 hover:bg-gold-500 px-8 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-none font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals / Values */}
      <section className="py-32 bg-navy-900 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gold-500/10 pt-16">
            {[
              {
                title: "Capital Preservation",
                desc: "Our primary mandate is the protection of assets against inflation, volatility, and systemic risk, ensuring stability for decades to come."
              },
              {
                title: "Multigenerational View",
                desc: "We operate on a timeline measured not in quarters, but in generations. Our decisions are guided by long-term continuity and resilience."
              },
              {
                title: "Puerto Rico Base",
                desc: "Firmly rooted in Puerto Rico, we leverage the island's unique strategic advantages while contributing to its economic ecosystem."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group"
              >
                <h3 className="font-serif text-3xl text-gold-500 mb-6 italic group-hover:text-gold-400 transition-colors">{item.title}</h3>
                <p className="text-cream-100/60 leading-relaxed font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/investment-abstract.png" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy-950/90 z-10" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="font-serif text-5xl md:text-6xl text-cream-50 mb-8">
              A Discipline of <br />
              <span className="text-gold-600 italic">Excellence</span>
            </h2>
            <div className="h-[1px] w-16 bg-gold-500/30 mb-8" />
          </div>
          <div className="md:w-1/2">
            <p className="text-cream-100/70 text-lg leading-relaxed font-light mb-8">
              The Kiasu Family Trust was established to formalize the governance and investment activities of a single family. Our name, derived from the Hokkien vernacular for "fear of losing out," is reinterpreted here not as anxiety, but as an uncompromising vigilance—a refusal to accept mediocrity or complacency in the management of our affairs.
            </p>
            <p className="text-cream-100/70 text-lg leading-relaxed font-light mb-12">
              We employ a rigorous, quantitative approach to capital allocation, balanced by a qualitative appreciation for history, art, and human psychology.
            </p>
            <Link href="/philosophy">
              <a className="inline-flex items-center gap-4 text-gold-500 uppercase tracking-[0.2em] text-xs hover:text-gold-400 transition-colors group">
                Explore Our Philosophy
                <span className="block w-8 h-[1px] bg-gold-500 group-hover:w-12 transition-all" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
