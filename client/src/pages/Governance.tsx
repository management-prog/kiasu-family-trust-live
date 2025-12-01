import { ArrowRight, Scale, Users, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Governance() {
  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Structure & Oversight</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Governance</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar / Intro */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <h3 className="font-serif text-3xl text-gold-100 mb-6">Principles of Order</h3>
              <p className="text-navy-300 font-sans leading-relaxed mb-8">
                Governance is the bedrock upon which the Trust stands. It separates the family's emotional dynamics from the professional management of assets, ensuring clarity, accountability, and continuity.
              </p>
              <div className="w-full h-[1px] bg-white/10 mb-8"></div>
              <div className="text-gold-500 font-serif italic text-lg">
                "Order is the first law of heaven."
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            {/* Section 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-navy-900 border border-gold-500/30 flex items-center justify-center">
                  <Scale className="text-gold-500 w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-gold-100 mb-4">The Family Council</h4>
                <p className="text-navy-200 font-sans leading-relaxed">
                  The Family Council serves as the primary representative body for the beneficiaries. It is responsible for articulating the family's values, vision, and long-term goals. The Council does not manage assets directly but sets the "emotional and ethical compass" for the Investment Committee.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-navy-900 border border-gold-500/30 flex items-center justify-center">
                  <Users className="text-gold-500 w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-gold-100 mb-4">The Investment Committee</h4>
                <p className="text-navy-200 font-sans leading-relaxed">
                  Composed of family members and independent advisors, the Investment Committee is tasked with the execution of the investment mandate. It operates with strict professional discipline, adhering to the Investment Policy Statement (IPS) and conducting rigorous due diligence on all allocations.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-navy-900 border border-gold-500/30 flex items-center justify-center">
                  <FileText className="text-gold-500 w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-gold-100 mb-4">Constitutional Documents</h4>
                <p className="text-navy-200 font-sans leading-relaxed">
                  The Trust is governed by a set of constitutional documents that define the rights, responsibilities, and limitations of all parties. These documents are living instruments, reviewed periodically to ensure they remain relevant to the changing needs of the family and the external environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link href="/philosophy">
            <a className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 uppercase tracking-widest text-sm font-bold transition-colors group">
              Next: Investment Philosophy
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
