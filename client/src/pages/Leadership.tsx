import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Principal</span>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-50 mb-12">
            Founder & <br />
            <span className="text-gold-600 italic">Trustee</span>
          </h1>
          
          <div className="space-y-8 text-cream-100/70 leading-relaxed font-light text-lg">
            <p>
              The Trust was established by a principal with experience spanning institutional capital management, government, and cross-border business operations.
            </p>
            <p>
              Academic credentials include graduate degrees from Oxford University and IE Business School. The principal maintains certifications in intelligence analysis and operational tradecraft.
            </p>
            <p>
              The Trust operates from San Juan under a perpetual structure domiciled in the Cayman Islands—engineered for multigenerational continuity across an international family.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-gold-500/10">
            <p className="text-cream-100/40 text-xs uppercase tracking-widest">
              The principal does not participate in media interviews or industry rankings.
            </p>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
