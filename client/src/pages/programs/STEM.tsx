import { Atom, Calculator, Microscope, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function STEM() {
  return (
    <div className="min-h-screen" data-testid="stem-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="stem-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-stem-hero-title">
              STEM Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-stem-hero-subtitle">
              Explore Science, Technology, Engineering, and Mathematics through hands-on experiments and real-world problem solving.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STEM Areas */}
      <section className="bg-secondary py-20" data-testid="stem-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-areas-title">
              Four Pillars of STEM
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-areas-subtitle">
              Comprehensive education across all STEM disciplines
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-background rounded-xl p-8 hover-lift" data-testid="pillar-science">
                <Atom className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Science</h3>
                <p className="text-muted-foreground">Discover the wonders of physics, chemistry, biology, and earth sciences through exciting experiments.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-background rounded-xl p-8 hover-lift" data-testid="pillar-technology">
                <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Technology</h3>
                <p className="text-muted-foreground">Learn about cutting-edge technologies and how they shape our modern world and future.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-background rounded-xl p-8 hover-lift" data-testid="pillar-engineering">
                <Microscope className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Engineering</h3>
                <p className="text-muted-foreground">Design and build solutions to real-world problems using engineering design principles.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-background rounded-xl p-8 hover-lift" data-testid="pillar-mathematics">
                <Calculator className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Mathematics</h3>
                <p className="text-muted-foreground">Master mathematical concepts and their practical applications in science and engineering.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="bg-background py-20" data-testid="stem-features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-features-title">
                Hands-On Learning
              </h2>
              <div className="space-y-6">
                <div data-testid="feature-experiments">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lab Experiments</h3>
                  <p className="text-muted-foreground">Conduct real scientific experiments in our fully equipped laboratory facilities.</p>
                </div>
                <div data-testid="feature-projects">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Engineering Projects</h3>
                  <p className="text-muted-foreground">Build bridges, rockets, and other engineering marvels while learning design principles.</p>
                </div>
                <div data-testid="feature-collaboration">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Team Collaboration</h3>
                  <p className="text-muted-foreground">Work in teams to solve complex problems and present your findings to peers.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Students conducting STEM experiments"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-stem-features"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="bg-secondary py-20" data-testid="stem-age-groups-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-age-groups-title">
              Programs by Age Group
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-age-groups-subtitle">
              Age-appropriate STEM education for every learner
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="age-group-elementary">
                <h3 className="text-2xl font-bold text-foreground mb-4">Elementary (Ages 6-10)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Fun science experiments</li>
                  <li>• Basic engineering challenges</li>
                  <li>• Math games and puzzles</li>
                  <li>• Nature exploration</li>
                  <li>• Simple coding activities</li>
                </ul>
                <div className="text-accent font-semibold">Saturday mornings</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-up">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="age-group-middle">
                <h3 className="text-2xl font-bold text-foreground mb-4">Middle School (Ages 11-14)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Advanced lab experiments</li>
                  <li>• Engineering design projects</li>
                  <li>• Programming fundamentals</li>
                  <li>• Mathematical modeling</li>
                  <li>• Science fair preparation</li>
                </ul>
                <div className="text-accent font-semibold">Weekday afternoons</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="age-group-high">
                <h3 className="text-2xl font-bold text-foreground mb-4">High School (Ages 15-18)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Advanced placement prep</li>
                  <li>• Research projects</li>
                  <li>• Competition preparation</li>
                  <li>• College readiness</li>
                  <li>• Industry connections</li>
                </ul>
                <div className="text-accent font-semibold">Evening programs</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/*
      <section className="bg-background py-20" data-testid="stem-success-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="text-center mb-16">
           
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-success-title">
              Student Achievements
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-success-subtitle">
              Our students excel in competitions and advance to top universities
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="achievement-science-fair">
                <div className="text-5xl font-bold text-accent mb-4">1st</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Place Regional Science Fair</h3>
                <p className="text-muted-foreground">Students won first place with their environmental science project</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="achievement-olympiad">
                <div className="text-5xl font-bold text-accent mb-4">85%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Math Olympiad Qualifiers</h3>
                <p className="text-muted-foreground">Of our students qualify for state-level mathematics competitions</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="achievement-colleges">
                <div className="text-5xl font-bold text-accent mb-4">95%</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">College Acceptance Rate</h3>
                <p className="text-muted-foreground">Of our high school graduates are accepted to their first-choice colleges</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      */}

      {/* Join Section */}
      <section className="bg-accent py-20" data-testid="stem-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-join-title">
              Discover Your STEM Passion
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-join-subtitle">
              Join our STEM programs and explore the exciting world of science, technology, engineering, and mathematics.
            </p>
            <div className="space-x-4">
              <a 
                href="/join-us#join"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-enroll-stem"
              >
                Enroll Now
              </a>
              <a 
                href="/events"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-view-workshops"
              >
                View Workshops
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}