import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Talent</span>
            <h1 className="font-serif text-5xl md:text-7xl text-cream-50 mb-8">
              Exceptional <br />
              <span className="text-gold-600 italic">Standards</span>
            </h1>
            <p className="text-cream-100/60 text-sm uppercase tracking-widest">
              We hire fewer than 5 people per decade.
            </p>
          </div>

          <div className="bg-navy-900/50 border border-gold-500/10 p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="font-serif text-3xl text-cream-50 mb-6">The Standard</h3>
                <p className="text-cream-100/70 leading-relaxed font-light">
                  The Kiasu Family Trust is an elite, high-performance environment. We do not offer "jobs." We offer a calling for the intellectually obsessive. We seek individuals with outlier capabilities in quantitative analysis, legal structuring, or macroeconomic research.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-4">Prerequisites</h4>
                  <ul className="space-y-4 text-cream-100/60 text-sm font-light list-disc pl-4 marker:text-gold-600">
                    <li>Advanced degrees from top-tier global institutions (Ivy League, Oxbridge, MIT, etc.)</li>
                    <li>Demonstrable track record of excellence in high-pressure environments (Top-tier Investment Banking, Big Law, Quant Funds).</li>
                    <li>Uncompromising ethical standards and discretion.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-4">The Process</h4>
                  <p className="text-cream-100/60 text-sm font-light leading-relaxed">
                    Our selection process is rigorous and invasive. It involves multiple rounds of technical assessments, psychological profiling, and background checks. If you are unsure if you qualify, you do not.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-gold-500/10 text-center">
                <p className="text-cream-100/40 text-xs italic mb-8">
                  We are currently reviewing a significant backlog of applications. Unsolicited applications without a warm introduction are rarely considered.
                </p>
                <a href="mailto:management@kiasufamilytrust.org">
                  <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 hover:border-gold-500/60 px-8 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-none">
                    Submit Credentials
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
