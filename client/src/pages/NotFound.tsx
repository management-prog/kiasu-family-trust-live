import { Link } from "wouter";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full border border-gold-500/20 bg-navy-900/30 p-12 backdrop-blur-sm text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

        <div className="flex justify-center mb-6">
          <ShieldAlert className="w-16 h-16 text-gold-500/50" />
        </div>

        <h1 className="font-serif text-3xl text-gold-100 mb-2">Path Restricted</h1>
        <p className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-8">Error Code: 404_UNAUTHORIZED_VECTOR</p>

        <p className="text-cream-100/60 font-light mb-8 leading-relaxed">
          The requested node does not exist or requires higher security clearance. This event has been logged.
        </p>

        <Link href="/">
          <Button 
            variant="outline" 
            className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 font-serif tracking-wider uppercase text-xs"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Return to Perimeter
          </Button>
        </Link>
      </div>
    </div>
  );
}
