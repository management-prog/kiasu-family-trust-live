import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("https://formspree.io/f/xgvgldqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully. We will review your inquiry.");
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-12 pb-32">
      {/* Header */}
      <div className="container mb-24 text-center">
        <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Get in Touch</span>
        <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-8">Contact</h1>
        <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
      </div>

      {/* Content */}
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-3xl text-gold-100 mb-6">Inquiries</h3>
              <p className="text-navy-200 font-sans leading-relaxed mb-8">
                We welcome inquiries from prospective partners, investment opportunities, and qualified candidates. Please note that due to the volume of correspondence, we may not be able to respond to every message.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-gold-100 font-bold text-sm uppercase tracking-wider mb-1">Headquarters</h5>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    San Juan, Puerto Rico
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-gold-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-gold-100 font-bold text-sm uppercase tracking-wider mb-1">Email</h5>
                  <a href="mailto:management@kiasufamilytrust.org" className="text-navy-300 text-sm leading-relaxed hover:text-gold-400 transition-colors">
                    management@kiasufamilytrust.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy-900/50 border border-white/5 p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gold-500">Name</label>
                <Input
                  id="name"
                  {...register("name")}
                  className="bg-navy-950 border-navy-700 text-gold-50 focus:border-gold-500 rounded-none h-12"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gold-500">Email</label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-navy-950 border-navy-700 text-gold-50 focus:border-gold-500 rounded-none h-12"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gold-500">Subject</label>
                <Input
                  id="subject"
                  {...register("subject")}
                  className="bg-navy-950 border-navy-700 text-gold-50 focus:border-gold-500 rounded-none h-12"
                  placeholder="Inquiry Subject"
                />
                {errors.subject && <p className="text-red-400 text-xs">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gold-500">Message</label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="bg-navy-950 border-navy-700 text-gold-50 focus:border-gold-500 rounded-none min-h-[150px]"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 hover:bg-gold-500 text-navy-950 font-sans tracking-widest uppercase py-6 rounded-none border border-gold-400 transition-all duration-300 mt-4"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
