import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
import Governance from "./pages/Governance";
import Philosophy from "./pages/Philosophy";
import Legacy from "./pages/Legacy";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import MemberAccess from "./pages/MemberAccess";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/purpose"} component={Purpose} />
      <Route path={"/governance"} component={Governance} />
      <Route path={"/philosophy"} component={Philosophy} />
      <Route path={"/legacy"} component={Legacy} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/access"} component={MemberAccess} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
