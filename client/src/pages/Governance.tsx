import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Governance() {
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Structure</span>
              <h1 className="font-serif text-5xl text-cream-50 mb-8 leading-tight">
                Institutional <br />
                <span className="text-gold-600 italic">Governance</span>
              </h1>
              <p className="text-cream-100/60 text-sm leading-relaxed mb-8">
                We operate with the precision of a military command and the discretion of a state secret.
              </p>
              <div className="h-[1px] w-full bg-gold-500/20" />
            </div>

            <div className="md:w-2/3 space-y-20">
              {[
                {
                  title: "Investment Committee",
                  content: "Capital allocation is not a democracy. Our Investment Committee operates by unanimous consent, filtering opportunities through a gauntlet of skepticism. Only the highest-conviction theses survive."
                },
                {
                  title: "Risk Management Framework",
                  content: "Risk is not a number; it is an existential threat. We map the multidimensional landscape of ruin—market, liquidity, counterparty, and operational—and engineer defenses against them. We stress-test for the unthinkable."
                },
                {
                  title: "Operational Excellence",
                  content: "Our back-office operations are built on enterprise-grade infrastructure. We utilize top-tier custodians, auditors, and legal counsel to ensure the integrity of our financial reporting and compliance with all applicable regulations in Puerto Rico and other relevant jurisdictions."
                },
                {
                  title: "Family Council",
                  content: "Distinct from the Investment Committee, the Family Council focuses on the human capital of the trust. It oversees educational programs for next-generation members, philanthropic initiatives, and the preservation of family values and history."
                }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h3 className="font-serif text-3xl text-gold-500 mb-6 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                  <p className="text-cream-100/80 text-lg leading-relaxed font-light border-l-2 border-gold-500/10 pl-6 group-hover:border-gold-500/50 transition-colors">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
