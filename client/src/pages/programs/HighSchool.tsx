import { GraduationCap, BookOpen, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function HighSchool() {
  return (
    <div className="min-h-screen" data-testid="high-school-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="high-school-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-high-school-hero-title">
              High School Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-high-school-hero-subtitle">
              Advanced programs designed to prepare high school students for college success and future careers in STEM fields.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-secondary py-20" data-testid="high-school-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                Volunteering and Leadership
              </h2>
              <div className="space-y-6">
                <div data-testid="focus-academic">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Get Volunteer Hours</h3>
                  <p className="text-muted-foreground">Volunteer at our camps and programs to get certified volunteer hours.</p>
                </div>
                <div data-testid="focus-research">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Give mentorship for students</h3>
                  <p className="text-muted-foreground">Help mentor the next generation of minds, in many different programs across many fields, from AI to STEM and more.</p>
                </div>
                <div data-testid="focus-leadership">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Leadership Development</h3>
                  <p className="text-muted-foreground">Build leadership skills through project management and peer mentoring opportunities.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="High school students in advanced study session"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-high-school-overview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      {/*
      <section className="bg-background py-20" data-testid="high-school-programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-programs-title">
              Core Programs
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-programs-subtitle">
              Specialized tracks designed for college-bound students
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="program-ap-prep">
                <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">AP Test Prep</h3>
                <p className="text-muted-foreground">Comprehensive preparation for Advanced Placement exams in STEM subjects.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="program-college-prep">
                <GraduationCap className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">College Prep</h3>
                <p className="text-muted-foreground">SAT/ACT preparation and college application guidance from experienced counselors.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="program-research">
                <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Research Projects</h3>
                <p className="text-muted-foreground">Independent research opportunities in partnership with local universities.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="program-internships">
                <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Internships</h3>
                <p className="text-muted-foreground">Real-world experience through internships with technology companies and research labs.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      */}

      {/* Subject Areas */}
      {/*
      <section className="bg-secondary py-20" data-testid="high-school-subjects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-subjects-title">
              Advanced Subject Areas
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-subjects-subtitle">
              Rigorous coursework in high-demand STEM fields
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="bg-background rounded-xl p-8" data-testid="subjects-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">Mathematics & Sciences</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Advanced Calculus (AP Calculus BC)</li>
                  <li>• Statistics & Probability (AP Statistics)</li>
                  <li>• Physics C: Mechanics & E&M</li>
                  <li>• Chemistry (AP Chemistry)</li>
                  <li>• Biology (AP Biology)</li>
                  <li>• Environmental Science</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <div className="bg-background rounded-xl p-8" data-testid="subjects-right">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technology & Engineering</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Computer Science ()</li>
                  <li>• Computer Science Principles (AP CSP)</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Web Development & Design</li>
                  <li>• Engineering Design Process</li>
                  <li>• Digital Electronics</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
        */}
      {/* College Outcomes */}
      
      <section className="bg-background py-20" data-testid="high-school-outcomes-section">
        {/*
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-outcomes-title">
              College Success Stories
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-outcomes-subtitle">
              Our graduates thrive at top universities nationwide
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="stat-acceptance">
                <div className="text-5xl font-bold text-accent mb-4">98%</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">College Acceptance Rate</h3>
                <p className="text-muted-foreground text-sm">Of our students are accepted to 4-year universities</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="stat-ap">
                <div className="text-5xl font-bold text-accent mb-4">4.2</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Average AP Score</h3>
                <p className="text-muted-foreground text-sm">Well above national average of 2.9</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="stat-scholarships">
                <div className="text-5xl font-bold text-accent mb-4">$2.1M</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Scholarships Earned</h3>
                <p className="text-muted-foreground text-sm">Total scholarship money earned by our graduates</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="stat-stem">
                <div className="text-5xl font-bold text-accent mb-4">75%</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">STEM Majors</h3>
                <p className="text-muted-foreground text-sm">Choose to study STEM fields in college</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        */}
      </section>
      

      {/* University Partners */}
      <section className="bg-accent py-20" data-testid="high-school-partners-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-partners-title">
              Want to join us?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-partners-subtitle">
              Make a real impact with an educational nonprofit to transform many lives.
            </p>
            
            <div className="bg-background rounded-xl p-8 max-w-4xl mx-auto" data-testid="partners-info">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div data-testid="partner-benefit-1">
                  <h3 className="font-semibold text-foreground mb-2">Certified hours</h3>
                  <p className="text-muted-foreground text-sm">Get certified volunteer hours</p>
                </div>
                <div data-testid="partner-benefit-2">
                  <h3 className="font-semibold text-foreground mb-2">Gain experience</h3>
                  <p className="text-muted-foreground text-sm">Gain experience mentoring others and teaching others</p>
                </div>
                <div data-testid="partner-benefit-3">
                  <h3 className="font-semibold text-foreground mb-2">Make an impact</h3>
                  <p className="text-muted-foreground text-sm">Make a real life impact in Dublin, Ohio</p>
                </div>
              </div>
            </div>

            <div className="space-x-4 mt-8">
              <a 
                href="https://forms.gle/dqVfByytTYocKpoG7"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-apply-program"
              >
                Register Now
              </a>
              <a 
                href="/events"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-info-session"
              >
                Upcoming events
              </a>
              <a 
                href="/volunteer"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-info-session"
              >
                Volunteer roles
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}