import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Purpose", path: "/purpose" },
    { name: "Governance", path: "/governance" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Legacy", path: "/legacy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-gold-50 font-sans selection:bg-gold-500 selection:text-navy-950 flex flex-col">
      {/* Top Navigation Bar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5",
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-md py-4 shadow-2xl"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/">
            <a className="group flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold-500/30 group-hover:border-gold-500 transition-colors duration-500">
                 {/* Placeholder for Eagle Seal - using CSS for now if image fails, but image is preferred */}
                 <img 
                   src="/hero-eagle-seal.png" 
                   alt="Seal" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-125"
                 />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-widest text-gold-100 uppercase leading-none">
                  Kiasu
                </span>
                <span className="text-[0.65rem] tracking-[0.3em] text-gold-400/80 uppercase mt-1">
                  Family Trust
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold-400 relative group py-2",
                    location === item.path ? "text-gold-400" : "text-navy-200"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-gold-500 transform scale-x-0 transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100",
                    location === item.path && "scale-x-100"
                  )} />
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gold-100 hover:text-gold-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a className="font-serif text-3xl text-gold-100 hover:text-gold-400 transition-colors tracking-wide">
              {item.name}
            </a>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-white/5 py-16 relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/texture-navy-gold.png')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-gold-500/30 overflow-hidden">
                  <img src="/hero-eagle-seal.png" alt="Seal" className="w-full h-full object-cover scale-125" />
                </div>
                <span className="font-serif text-lg tracking-widest text-gold-100 uppercase">
                  Kiasu Family Trust
                </span>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
                A private single-family office dedicated to the preservation of capital and the stewardship of multigenerational legacy.
              </p>
              <div className="text-navy-400 text-xs tracking-wider uppercase">
                Based in Puerto Rico
              </div>
            </div>

            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">Governance</h4>
              <ul className="space-y-4 text-sm text-navy-300">
                <li><Link href="/purpose"><a className="hover:text-gold-300 transition-colors">Purpose</a></Link></li>
                <li><Link href="/governance"><a className="hover:text-gold-300 transition-colors">Structure</a></Link></li>
                <li><Link href="/legacy"><a className="hover:text-gold-300 transition-colors">Continuity</a></Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">Investment</h4>
              <ul className="space-y-4 text-sm text-navy-300">
                <li><Link href="/philosophy"><a className="hover:text-gold-300 transition-colors">Philosophy</a></Link></li>
                <li><Link href="/careers"><a className="hover:text-gold-300 transition-colors">Careers</a></Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-navy-300">
                <li><Link href="/contact"><a className="hover:text-gold-300 transition-colors">Inquiries</a></Link></li>
                <li><a href="mailto:management@kiasufamilytrust.org" className="hover:text-gold-300 transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
            <p>&copy; {new Date().getFullYear()} Kiasu Family Trust. All rights reserved.</p>
            <p className="tracking-wider">PUERTO RICO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
