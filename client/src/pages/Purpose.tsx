import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Purpose() {
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Our Mandate</span>
          <h1 className="font-serif text-6xl md:text-7xl text-cream-50 mb-16 leading-tight">
            To Preserve, To Grow, <br />
            <span className="text-gold-600 italic">To Endure.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-cream-100/80 text-lg leading-relaxed font-light">
                The Kiasu Family Trust exists to serve a singular purpose: the prudent stewardship of family capital across generations. We are not an investment fund seeking external capital, nor are we a wealth manager serving multiple clients. We are a private, closed ecosystem dedicated to the long-term interests of a single family.
              </p>
              <p className="text-cream-100/80 text-lg leading-relaxed font-light">
                Our philosophy is rooted in the belief that true wealth is not merely the accumulation of assets, but the capacity to maintain independence, foster intellectual growth, and contribute meaningfully to society over centuries.
              </p>
            </div>
            <div className="space-y-12 border-l border-gold-500/10 pl-12">
              {[
                {
                  head: "Capital Preservation",
                  body: "Our first rule is not to lose money. We prioritize the safety of principal above yield, employing conservative leverage and robust hedging strategies."
                },
                {
                  head: "Intellectual Rigor",
                  body: "We believe that superior returns are the result of superior thinking. We foster a culture of deep research, contrarian debate, and continuous learning."
                },
                {
                  head: "Sovereign Independence",
                  body: "We structure our affairs to ensure resilience against geopolitical uncertainty, regulatory shifts, and economic cycles."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-2xl text-gold-500 mb-4">{item.head}</h3>
                  <p className="text-cream-100/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
