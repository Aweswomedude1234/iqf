import { Brain, Globe, Rocket, Users, Lightbulb, Target } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Missions() {
  const missions = [
    {
      icon: Brain,
      title: "Foster Innovation",
      description: "Encourage creative thinking and problem-solving through hands-on STEM programs that inspire the next generation of innovators.",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Bridge Gaps",
      description: "Make quality education accessible to all youth regardless of their background or economic circumstances.",
      color: "text-green-600"
    },
    {
      icon: Rocket,
      title: "Future-Ready Skills",
      description: "Equip students with cutting-edge skills in AI, programming, design, and critical thinking for tomorrow's challenges.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Create a supportive network of learners, educators, and mentors who inspire and support each other's growth.",
      color: "text-orange-600"
    },
    {
      icon: Lightbulb,
      title: "Inspire Curiosity",
      description: "Cultivate a love for learning that extends beyond the classroom and lasts a lifetime.",
      color: "text-yellow-600"
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Create tangible, positive changes in the lives of students and their communities through our programs.",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen" data-testid="missions-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="missions-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-missions-hero-title">
              Our Missions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-missions-hero-subtitle">
              Transforming education through innovation and accessibility. These are the core missions that drive everything we do at IQ Foundation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="bg-secondary py-20" data-testid="missions-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <AnimatedSection key={index} animationType="fade-in">
                  <div className="text-center bg-background rounded-xl p-8 hover-lift" data-testid={`mission-card-${index}`}>
                    <div className="bg-accent bg-opacity-10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className={`h-8 w-8 text-accent`} />
                    </div>
                    <h3 
                      className="text-xl font-bold text-foreground mb-4"
                      data-testid={`text-mission-title-${index}`}
                    >
                      {mission.title}
                    </h3>
                    <p 
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`text-mission-description-${index}`}
                    >
                      {mission.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Achieve Our Missions */}
      <section className="bg-background py-20" data-testid="missions-how-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-how-title">
              How We Achieve Our Missions
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-how-subtitle">
              Through comprehensive programs and initiatives designed to maximize impact
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <div className="space-y-8">
                <div data-testid="approach-programs">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Free Educational Programs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer completely free workshops, camps, and ongoing programs in STEM, AI, computer-aided design, chess, finance, and more. Our programs are designed to be accessible to all students, regardless of their economic background.
                  </p>
                </div>

                <div data-testid="approach-hands-on">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Hands-On Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in learning by doing. Our programs emphasize practical, project-based learning that allows students to apply theoretical knowledge in real-world contexts, making education more engaging and effective.
                  </p>
                </div>

                <div data-testid="approach-mentorship">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Mentorship & Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every student in our programs receives personalized mentorship and support from experienced educators and industry professionals who are passionate about nurturing young talent.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Students engaged in hands-on learning activities"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-how-we-achieve"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="bg-accent py-20" data-testid="missions-goals-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-goals-title">
              Our Impact Goals
            </h2>
            <p className="text-xl text-foreground mb-12 max-w-3xl mx-auto" data-testid="text-goals-subtitle">
              These are the measurable outcomes we're working toward in our mission to transform education
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-6" data-testid="goal-students">
                <div className="text-4xl font-bold text-accent mb-2">1,000+</div>
                <div className="text-foreground font-semibold mb-2">Students Reached</div>
                <div className="text-muted-foreground text-sm">by end of 2025</div>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="goal-programs">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-foreground font-semibold mb-2">Program Offerings</div>
                <div className="text-muted-foreground text-sm">across all subjects</div>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="goal-volunteers">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-foreground font-semibold mb-2">Active Volunteers</div>
                <div className="text-muted-foreground text-sm">supporting our mission</div>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="goal-partnerships">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-foreground font-semibold mb-2">Partner Organizations</div>
                <div className="text-muted-foreground text-sm">amplifying our reach</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-background py-20" data-testid="missions-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-cta-title">
              Help Us Achieve Our Missions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-subtitle">
              Whether you're a student looking to learn, an educator wanting to teach, or someone who believes in our mission, there are many ways to get involved and help us create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/join-us" 
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-get-involved"
              >
                Get Involved
              </a>
              <a 
                href="/events" 
                className="btn-accent px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-view-programs"
              >
                View Our Programs
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
