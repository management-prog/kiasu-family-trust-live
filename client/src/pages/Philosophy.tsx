import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <Layout>
      <section className="min-h-screen py-32 container mx-auto px-6 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Investment Approach</span>
              <h1 className="font-serif text-6xl md:text-8xl text-cream-50 mb-12 leading-none">
                The Long <br />
                <span className="text-gold-600 italic">Horizon</span>
              </h1>
              <p className="text-cream-100/80 text-xl leading-relaxed font-light mb-12">
                Time is our greatest asset. Unlike traditional funds constrained by quarterly reporting or fund lifecycles, we have the luxury of patience. We can wait for the perfect pitch, hold through volatility, and compound capital over decades.
              </p>
            </div>
            <div className="relative aspect-square border border-gold-500/20 p-8 rotate-3">
               <div className="absolute inset-0 border border-gold-500/20 -rotate-6" />
               <div className="h-full w-full bg-navy-900/50 backdrop-blur-sm flex items-center justify-center p-12 text-center">
                 <p className="font-serif text-2xl text-gold-400 italic">
                   "The stock market is a device for transferring money from the impatient to the patient."
                 </p>
               </div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Asymmetric Returns",
                desc: "We seek opportunities where the potential upside significantly outweighs the downside risk. We are willing to accept high volatility for high expected returns, provided the risk of permanent capital loss is low."
              },
              {
                num: "02",
                title: "Concentration",
                desc: "Diversification is often a hedge against ignorance. We prefer to concentrate our capital in our highest-conviction ideas. We would rather own a significant stake in a few outstanding businesses than a tiny sliver of many mediocre ones."
              },
              {
                num: "03",
                title: "Global Perspective",
                desc: "We are not constrained by geography. We search for value across developed and emerging markets, understanding that the best opportunities often lie where others are afraid to look."
              }
            ].map((item, i) => (
              <div key={i} className="border-t border-gold-500/20 pt-8">
                <span className="text-gold-600 font-serif text-4xl opacity-50 mb-4 block">{item.num}</span>
                <h3 className="font-serif text-2xl text-cream-50 mb-4">{item.title}</h3>
                <p className="text-cream-100/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
