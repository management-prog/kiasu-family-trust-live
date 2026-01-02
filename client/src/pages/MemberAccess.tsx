import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MemberAccess() {
  const [status, setStatus] = useState<"idle" | "loading" | "denied">("idle");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate verification delay
    setTimeout(() => {
      setStatus("denied");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-navy-900/50 border border-gold-500/20 p-8 backdrop-blur-md relative overflow-hidden">
          {/* Decorative corner markers */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-500/50"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500/50"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-500/50"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-500/50"></div>

          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-navy-950 border border-gold-500/30 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 text-gold-400" />
            </div>
            <h1 className="font-serif text-2xl text-gold-100 tracking-wide">Restricted Access</h1>
            <p className="text-xs text-gold-500/50 uppercase tracking-widest mt-2">Authorized Personnel Only</p>
          </div>

          {status === "denied" ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-950/30 border border-red-900/50 p-4 mb-6 flex items-start gap-3"
            >
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <h3 className="text-red-400 text-sm font-medium uppercase tracking-wider mb-1">Access Denied</h3>
                <p className="text-red-500/70 text-xs font-mono">
                  Security event logged. IP address recorded. Multiple failed attempts will trigger an automated lockout protocol.
                </p>
              </div>
            </motion.div>
          ) : null}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-gold-500/70 uppercase tracking-widest font-mono">Secure Passkey</label>
              <Input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-navy-950/50 border-gold-500/20 text-gold-100 font-mono focus:border-gold-500/50 h-12 tracking-widest"
                placeholder="••••••••••••"
              />
            </div>

            <Button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full bg-gold-600 hover:bg-gold-500 text-navy-950 font-medium tracking-widest uppercase h-12 rounded-none transition-all duration-300"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 animate-pulse" /> Verifying...
                </span>
              ) : (
                "Authenticate"
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gold-500/10 text-center">
            <p className="text-[10px] text-gold-500/30 font-mono uppercase leading-relaxed">
              This system is monitored. Unauthorized access attempts are a violation of the Computer Fraud and Abuse Act and international cybercrime treaties.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
