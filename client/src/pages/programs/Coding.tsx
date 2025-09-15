import { Code, Monitor, Smartphone, Globe } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function Coding() {
  return (
    <div className="min-h-screen" data-testid="coding-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="coding-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-coding-hero-title">
              Coding Bootcamp
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-coding-hero-subtitle">
              Learn programming languages and software development from the ground up. Build real applications and prepare for a career in technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-secondary py-20" data-testid="coding-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                From Beginner to Developer
              </h2>
              <div className="space-y-6">
                <div data-testid="skill-fundamentals">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Programming Fundamentals</h3>
                  <p className="text-muted-foreground">Master the core concepts of programming including variables, functions, loops, and data structures.</p>
                </div>
                <div data-testid="skill-languages">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Multiple Languages</h3>
                  <p className="text-muted-foreground">Learn popular programming languages including Python, JavaScript, Java, and more.</p>
                </div>
                <div data-testid="skill-projects">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-World Projects</h3>
                  <p className="text-muted-foreground">Build a portfolio of applications including websites, mobile apps, and software tools.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Students coding on computers"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-coding-overview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="bg-background py-20" data-testid="coding-tracks-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-tracks-title">
              Specialized Learning Tracks
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-tracks-subtitle">
              Choose your path in the world of programming
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="track-web">
                <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Web Development</h3>
                <p className="text-muted-foreground mb-4">Build modern websites and web applications using HTML, CSS, JavaScript, and popular frameworks.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">HTML/CSS</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">React</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="track-mobile">
                <Smartphone className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Mobile Development</h3>
                <p className="text-muted-foreground mb-4">Create mobile apps for iOS and Android using native and cross-platform technologies.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Swift</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Kotlin</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Flutter</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="track-desktop">
                <Monitor className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Desktop Applications</h3>
                <p className="text-muted-foreground mb-4">Develop powerful desktop software using modern programming languages and frameworks.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Java</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">C#</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center bg-secondary rounded-xl p-8 hover-lift" data-testid="track-programming">
                <Code className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">General Programming</h3>
                <p className="text-muted-foreground mb-4">Master programming fundamentals and algorithms that apply across all development areas.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Algorithms</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Data Structures</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-xs">Problem Solving</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="bg-secondary py-20" data-testid="coding-structure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-structure-title">
              Course Structure
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-structure-subtitle">
              Progressive learning from basics to advanced concepts
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="phase-beginner">
                <h3 className="text-2xl font-bold text-foreground mb-4">Beginner (Weeks 1-4)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Introduction to programming concepts</li>
                  <li>• Basic syntax and data types</li>
                  <li>• Control structures and functions</li>
                  <li>• Simple problem-solving exercises</li>
                  <li>• First programming projects</li>
                </ul>
                <div className="text-accent font-semibold">Foundation Building</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-up">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="phase-intermediate">
                <h3 className="text-2xl font-bold text-foreground mb-4">Intermediate (Weeks 5-8)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Object-oriented programming</li>
                  <li>• Data structures and algorithms</li>
                  <li>• File handling and databases</li>
                  <li>• API integration and networking</li>
                  <li>• Medium-complexity projects</li>
                </ul>
                <div className="text-accent font-semibold">Skill Development</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="phase-advanced">
                <h3 className="text-2xl font-bold text-foreground mb-4">Advanced (Weeks 9-12)</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Advanced frameworks and libraries</li>
                  <li>• Testing and debugging strategies</li>
                  <li>• Version control with Git</li>
                  <li>• Deployment and production</li>
                  <li>• Capstone project development</li>
                </ul>
                <div className="text-accent font-semibold">Professional Ready</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Student Projects */}
      {/*
      <section className="bg-background py-20" data-testid="coding-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Student Success Projects
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-projects-subtitle">
              Amazing applications built by our coding bootcamp graduates
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="bg-secondary rounded-xl p-6 hover-lift" data-testid="project-ecommerce">
                <h3 className="text-xl font-bold text-foreground mb-3">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">Full-stack web application with user authentication, payment processing, and inventory management.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">MongoDB</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="bg-secondary rounded-xl p-6 hover-lift" data-testid="project-task-manager">
                <h3 className="text-xl font-bold text-foreground mb-3">Task Management App</h3>
                <p className="text-muted-foreground mb-4">Mobile application for team collaboration with real-time updates, file sharing, and deadline tracking.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Flutter</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Firebase</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Dart</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="bg-secondary rounded-xl p-6 hover-lift" data-testid="project-game">
                <h3 className="text-xl font-bold text-foreground mb-3">2D Puzzle Game</h3>
                <p className="text-muted-foreground mb-4">Desktop game with advanced graphics, sound effects, level progression, and high score tracking.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Pygame</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">SQLite</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      */}

      {/* Join Section */}
      <section className="bg-accent py-20" data-testid="coding-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-join-title">
              Start Your Coding Journey
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-join-subtitle">
              Join our coding bootcamp and transform your passion for technology into practical programming skills that open doors to endless opportunities.
            </p>
            <div className="space-x-4">
              <a 
                href="/join-us#join"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-enroll-coding"
              >
                Enroll Today
              </a>
              <a 
                href="/events"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-free-workshop"
              >
                Free Workshop
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}