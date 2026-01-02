import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Legacy() {
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-6 block">Continuity</span>
          <h1 className="font-serif text-5xl md:text-7xl text-cream-50 mb-12">
            Beyond the <br />
            <span className="text-gold-600 italic">Individual</span>
          </h1>
          <p className="text-cream-100/80 text-xl leading-relaxed font-light mb-20 max-w-2xl mx-auto">
            The Kiasu Family Trust is not a financial vehicle; it is a fortress of continuity. We are building an institution designed to outlast its founders, ensuring that power and purpose are transmitted unbroken across centuries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gold-500/10">
          <div className="p-16 border-r border-b md:border-b-0 border-gold-500/10 bg-navy-900/30">
            <h3 className="font-serif text-3xl text-gold-500 mb-6">The 100-Year Plan</h3>
            <p className="text-cream-100/60 leading-relaxed">
              We structure our governance and investments with a century-long horizon. This requires us to think about estate planning, tax efficiency, and leadership succession not as periodic tasks, but as continuous, integral processes.
            </p>
          </div>
          <div className="p-16 bg-navy-950">
            <h3 className="font-serif text-3xl text-gold-500 mb-6">Next Generation</h3>
            <p className="text-cream-100/60 leading-relaxed">
              Preparing the next generation is as important as preserving the capital. We invest heavily in the education and mentorship of family members, ensuring they have the skills, values, and wisdom to be responsible stewards of the trust.
            </p>
          </div>
          <div className="p-16 border-r border-gold-500/10 bg-navy-950">
            <h3 className="font-serif text-3xl text-gold-500 mb-6">Philanthropy</h3>
            <p className="text-cream-100/60 leading-relaxed">
              Capital is power. Power requires direction. Our philanthropy is not charity; it is strategic impact. We target high-leverage interventions where our resources can force systemic change.
            </p>
          </div>
          <div className="p-16 bg-navy-900/30">
            <h3 className="font-serif text-3xl text-gold-500 mb-6">Puerto Rico</h3>
            <p className="text-cream-100/60 leading-relaxed">
              Our commitment to Puerto Rico goes beyond tax efficiency. We are deeply invested in the local community, supporting economic development, arts, and education on the island.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
