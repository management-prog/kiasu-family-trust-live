import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvgldqk");

  if (state.succeeded) {
      return (
        <Layout>
            <section className="min-h-[80vh] flex items-center justify-center container mx-auto px-6">
                <div className="text-center max-w-2xl">
                    <img src="/images/aquila-emblem.png" alt="Aquila" className="h-16 w-16 mx-auto mb-8 opacity-50" />
                    <h2 className="font-serif text-4xl text-gold-500 mb-6">Inquiry Received</h2>
                    <p className="text-cream-100/60 font-light leading-relaxed">
                        Your correspondence has been securely transmitted to our management office. <br/>
                        We review all inquiries, but due to the volume of correspondence, we only respond to those of strategic interest.
                    </p>
                    <Button variant="link" className="text-gold-400 mt-8" onClick={() => window.location.reload()}>Return</Button>
                </div>
            </section>
        </Layout>
      );
  }

  return (
    <Layout>
      <section className="py-32 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Correspondence</span>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 mb-8">
              Private <br />
              <span className="text-gold-600 italic">Inquiries</span>
            </h1>
            <p className="text-cream-100/60 text-lg leading-relaxed font-light mb-12">
              The Kiasu Family Trust maintains a low profile. We do not seek publicity. However, we are always open to dialogue with like-minded principals, potential partners, and exceptional talent.
            </p>
            
            <div className="space-y-8 border-t border-gold-500/10 pt-8">
              <div>
                <h4 className="font-serif text-xl text-gold-500 mb-2">Headquarters</h4>
                <p className="text-cream-100/60 font-light">
                  San Juan, Puerto Rico<br />
                  <span className="text-xs opacity-50 uppercase tracking-widest">By Appointment Only</span>
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-gold-500 mb-2">Email</h4>
                <a href="mailto:management@kiasufamilytrust.org" className="text-cream-100/60 font-light hover:text-gold-400 transition-colors">
                  management@kiasufamilytrust.org
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-navy-900/30 border border-gold-500/10 p-12 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500/80">Full Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  name="name"
                  required
                  className="bg-navy-950/50 border-gold-500/20 text-cream-50 focus:border-gold-500/60 rounded-none h-12"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gold-500/80">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  name="email"
                  required
                  className="bg-navy-950/50 border-gold-500/20 text-cream-50 focus:border-gold-500/60 rounded-none h-12"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gold-500/80">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  name="subject"
                  required
                  className="bg-navy-950/50 border-gold-500/20 text-cream-50 focus:border-gold-500/60 rounded-none h-12"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gold-500/80">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  required
                  className="bg-navy-950/50 border-gold-500/20 text-cream-50 focus:border-gold-500/60 rounded-none min-h-[150px]"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-gold-600 text-navy-950 hover:bg-gold-500 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-none font-semibold"
              >
                {state.submitting ? "Transmitting..." : "Send Secure Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
