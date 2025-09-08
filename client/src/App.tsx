import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import JoinUs from "@/pages/JoinUs";
import OurCause from "@/pages/OurCause";
import OurChapters from "@/pages/OurChapters";
import Robotics from "@/pages/programs/Robotics";
import AI from "@/pages/programs/AI";
import Chess from "@/pages/programs/Chess";
import STEM from "@/pages/programs/STEM";
import HighSchool from "@/pages/programs/HighSchool";
import Coding from "@/pages/programs/Coding";
import Volunteer from "@/pages/Volunteer";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our-cause" component={OurCause} />
      <Route path="/team" component={Team} />
      <Route path="/our-chapters" component={OurChapters} />
      <Route path="/programs/robotics" component={Robotics} />
      <Route path="/programs/ai" component={AI} />
      <Route path="/programs/chess" component={Chess} />
      <Route path="/programs/stem" component={STEM} />
      <Route path="/programs/high-school" component={HighSchool} />
      <Route path="/programs/coding" component={Coding} />
      <Route path="/events" component={Events} />
      <Route path="/join-us" component={JoinUs} />
      <Route path="/volunteer" component={Volunteer} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-sans">
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
