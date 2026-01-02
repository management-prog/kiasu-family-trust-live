import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Purpose", path: "/purpose" },
    { name: "Governance", path: "/governance" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Legacy", path: "/legacy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-cream-50 font-sans selection:bg-gold-500/30 selection:text-gold-400 overflow-x-hidden">
      {/* Background Texture */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('/images/texture-paper.png')`, backgroundSize: 'cover' }}
      />
      
      {/* Aquila Watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] opacity-[0.03] pointer-events-none z-0">
        <img src="/images/aquila-emblem.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b border-transparent",
          scrolled ? "bg-navy-950/90 backdrop-blur-md py-4 border-gold-600/20" : "bg-transparent py-8"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <a className="group flex items-center gap-4">
              <img 
                src="/images/aquila-emblem.png" 
                alt="Aquila" 
                className="h-12 w-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest text-gold-500 uppercase">Kiasu</span>
                <span className="text-[0.65rem] tracking-[0.3em] text-gold-400/60 uppercase group-hover:text-gold-400 transition-colors">Family Trust</span>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a 
                  className={cn(
                    "text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold-400 relative group",
                    location === item.path ? "text-gold-500" : "text-cream-100/60"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full",
                    location === item.path ? "w-full" : ""
                  )} />
                </a>
              </Link>
            ))}
            <Link href="/access">
              <a 
                className={cn(
                  "text-[10px] tracking-[0.2em] uppercase transition-all duration-300 text-gold-500/50 hover:text-gold-400 border border-gold-500/20 px-3 py-1 hover:border-gold-500/50",
                  location === "/access" ? "text-gold-500 border-gold-500" : ""
                )}
              >
                [ Member Access ]
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 min-h-screen flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-600/10 bg-navy-950 py-20 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <img src="/images/aquila-emblem.png" alt="" className="h-16 w-16 opacity-20 mb-6 grayscale" />
            <p className="text-xs text-cream-100/40 leading-relaxed font-light">
              A private single-family office dedicated to the preservation of capital, intellectual rigor, and the continuity of legacy.
            </p>
            <p className="text-xs text-cream-100/40 mt-4 font-light">
              Based in Puerto Rico.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-gold-600 text-lg italic">Structure</h4>
              <Link href="/purpose"><a className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Purpose</a></Link>
              <Link href="/governance"><a className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Governance</a></Link>
              <Link href="/legacy"><a className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Legacy</a></Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-gold-600 text-lg italic">Contact</h4>
              <Link href="/careers"><a className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Careers</a></Link>
              <Link href="/contact"><a className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Inquiries</a></Link>
              <a href="mailto:management@kiasufamilytrust.org" className="text-xs text-cream-100/60 hover:text-gold-400 transition-colors uppercase tracking-wider">Email Us</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-20 pt-8 border-t border-gold-600/5 flex justify-between items-center">
          <p className="text-[10px] text-cream-100/20 uppercase tracking-widest">© {new Date().getFullYear()} Kiasu Family Trust. All Rights Reserved.</p>
          <p className="text-[10px] text-cream-100/20 uppercase tracking-widest">Private & Confidential</p>
        </div>
      </footer>
    </div>
  );
}
