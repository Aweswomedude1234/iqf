import { Cog, Users, Trophy, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function Robotics() {
  return (
    <div className="min-h-screen" data-testid="robotics-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="robotics-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-robotics-hero-title">
              Robotics Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-robotics-hero-subtitle">
              Build, program, and compete with cutting-edge robotics technology. Join our competitive team and learn engineering fundamentals through hands-on robot construction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-secondary py-20" data-testid="robotics-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                What You'll Learn
              </h2>
              <div className="space-y-6">
                <div data-testid="skill-mechanical">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mechanical Engineering</h3>
                  <p className="text-muted-foreground">Design and build robust mechanical systems, understanding gears, motors, and structural engineering principles.</p>
                </div>
                <div data-testid="skill-programming">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Programming & Control</h3>
                  <p className="text-muted-foreground">Program robots using Java, C++, and Python. Learn autonomous control systems and sensor integration.</p>
                </div>
                <div data-testid="skill-teamwork">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Teamwork & Project Management</h3>
                  <p className="text-muted-foreground">Collaborate effectively in teams, manage complex projects, and present your work professionally.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Students working on robotics projects"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-robotics-overview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="bg-background py-20" data-testid="robotics-features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
              Program Features
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-features-subtitle">
              Comprehensive robotics education with real-world applications
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="feature-competitions">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Competitions</h3>
                <p className="text-muted-foreground">Participate in regional and national robotics competitions like FIRST Robotics and VEX.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="feature-mentorship">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Mentorship</h3>
                <p className="text-muted-foreground">Learn from industry professionals and experienced engineers who guide your projects.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="feature-equipment">
                <Cog className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Equipment</h3>
                <p className="text-muted-foreground">Access to 3D printers, CNC machines, and professional-grade robotics components.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="feature-schedule">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Flexible Schedule</h3>
                <p className="text-muted-foreground">Multiple meeting times throughout the week to accommodate busy student schedules.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-accent py-20" data-testid="robotics-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-join-title">
              Join Our Robotics Team
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-join-subtitle">
              Ready to build the future? Join our robotics team and start creating amazing robots while learning valuable STEM skills.
            </p>
            <div className="space-x-4">
              <a 
                href="https://forms.gle/uvsUVN7YNixGWX1K8"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-join-team"
              >
                Join the Team
              </a>
              <a 
                href="/events"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-view-events"
              >
                View Events
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}