import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const key = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (!key) return console.error("Missing VITE_RECAPTCHA_SITE_KEY");

    if (document.getElementById("recaptcha-script")) return;

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

 
const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(""); 

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
     
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA service is unavailable. Please refresh.");
      }
      
      // 2. Execute reCAPTCHA
      const token = await new Promise<string>((resolve) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "contact_form" })
            .then(resolve);
        });
      });

      if (!token) throw new Error("Failed to generate security token.");


      const response = await fetch("/api/property/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });


      const result = await response.json();

      if (!response.ok) {
       
        throw new Error(result.error || "Submission rejected by server.");
      }

      setStatus("success");
      
    } catch (err: any) {
      console.error("Submission Error:", err);
      setStatus("error");
     
      setErrorMessage(err.message || "Transmission refused. Security protocol failed.");
    }
  };


  if (status === "success") {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center container mx-auto px-6">
          <div className="text-center max-w-2xl">
            <img src="/images/aquila-emblem.png" alt="Aquila" className="h-16 w-16 mx-auto mb-8 opacity-50" />
            <h2 className="font-serif text-4xl text-gold-500 mb-6">Inquiry Received</h2>
            <p className="text-cream-100/60 font-light leading-relaxed">
              Your correspondence has been securely transmitted. <br />
              Strategic relevance will determine our response.
            </p>
            <Button variant="link" className="text-gold-400 mt-8" onClick={() => window.location.reload()}>Return</Button>
          </div>
        </section>
      </Layout>
    );
  }

  // 4. Form View
  return (
    <Layout>
      <section className="py-32 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-6xl mx-auto">
          {/* Left Side Text */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] mb-4 block">Correspondence</span>
            <h1 className="font-serif text-5xl md:text-6xl text-cream-50 mb-8">
              Private <br /> <span className="text-gold-600 italic">Inquiries</span>
            </h1>
            <p className="text-cream-100/60 text-lg leading-relaxed font-light mb-12">
               The Kiasu Family Trust accepts dialogue only with principals of equal standing.
            </p>
          </motion.div>

          {/* Right Side Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-navy-900/30 border border-gold-500/10 p-12 backdrop-blur-sm"
          >
            <form onSubmit={formSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500/80">Full Name</label>
                <Input id="name" name="name" required className="bg-navy-950/50 border-gold-500/20 text-cream-50 rounded-none h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gold-500/80">Email Address</label>
                <Input id="email" type="email" name="email" required className="bg-navy-950/50 border-gold-500/20 text-cream-50 rounded-none h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gold-500/80">Subject</label>
                <Input id="subject" name="subject" required className="bg-navy-950/50 border-gold-500/20 text-cream-50 rounded-none h-12" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gold-500/80">Message</label>
                <Textarea id="message" name="message" required className="bg-navy-950/50 border-gold-500/20 text-cream-50 rounded-none min-h-[150px]" />
              </div>
              
              {status === "error" && (
                <div className="text-red-400 text-sm">{errorMessage}</div>
              )}

              <Button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-gold-600 text-navy-950 hover:bg-gold-500 py-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 rounded-none font-semibold"
              >
                {status === "submitting" ? "Transmitting..." : "Send Secure Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}