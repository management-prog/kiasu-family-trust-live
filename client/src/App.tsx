import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
import Governance from "./pages/Governance";
import Philosophy from "./pages/Philosophy";
import Legacy from "./pages/Legacy";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/purpose" component={Purpose} />
        <Route path="/governance" component={Governance} />
        <Route path="/philosophy" component={Philosophy} />
        <Route path="/legacy" component={Legacy} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster position="top-center" toastOptions={{
            className: "bg-navy-900 border border-gold-500/30 text-gold-50 font-sans",
          }} />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
