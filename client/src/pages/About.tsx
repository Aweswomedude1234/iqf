import AnimatedSection from '@/components/AnimatedSection';

export default function About() {
  return (
    <div className="min-h-screen" data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="about-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-about-hero-title">
              About IQ Foundation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
              Empowering the next generation through innovative education and hands-on learning experiences
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-secondary py-20" data-testid="about-content-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationType="slide-in-left">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-mission-description">
                IQ Foundation is an organization educating youth and students on topics such as STEM, AI, computer-aided design, chess, finance, and more, through free programs, camps, workshops, and resources, giving them a hands-on and more engaging experience.
              </p>
              
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-vision-title">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-vision-description">
                We envision a world where every young person has access to quality education that ignites their curiosity, develops their critical thinking skills, and prepares them to tackle the challenges of tomorrow. Through innovative programs and cutting-edge resources, we're building a community of lifelong learners who will drive positive change in their communities and beyond.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-values-title">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div data-testid="value-accessibility">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Education should be available to all, regardless of background or economic circumstances.
                  </p>
                </div>
                <div data-testid="value-innovation">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace cutting-edge technologies and creative approaches to make learning engaging and effective.
                  </p>
                </div>
                <div data-testid="value-hands-on">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Hands-On Learning</h3>
                  <p className="text-muted-foreground">
                    We believe in learning by doing, providing practical experiences that reinforce theoretical knowledge.
                  </p>
                </div>
                <div data-testid="value-community">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building a supportive network of learners, educators, and mentors who inspire each other.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Cause Section */}
      <section className="bg-background py-20" data-testid="about-cause-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-cause-title">
              Our Cause
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-cause-subtitle">
              The driving missions behind everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="cause-innovation">
                <div className="bg-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Foster Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Encourage creative thinking through hands-on STEM programs
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="cause-accessibility">
                <div className="bg-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Bridge Gaps</h3>
                <p className="text-muted-foreground text-sm">
                  Make quality education accessible to all youth
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="cause-skills">
                <div className="bg-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Future-Ready Skills</h3>
                <p className="text-muted-foreground text-sm">
                  Equip students with cutting-edge skills for tomorrow's challenges
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center">
            <a 
              href="/our-cause"
              className="btn-accent px-6 py-3 rounded-lg font-medium inline-block"
              data-testid="button-learn-cause"
            >
              Learn More About Our Cause
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-secondary py-20" data-testid="about-impact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-impact-title">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-impact-subtitle">
              Making a difference in the lives of young learners
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="impact-students">
                <div className="text-5xl font-bold text-accent mb-4">0</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Students Reached</h3>
                <p className="text-muted-foreground">
                  Young learners have participated in our programs and workshops
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="impact-programs">
                <div className="text-5xl font-bold text-accent mb-4">0</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Programs Offered</h3>
                <p className="text-muted-foreground">
                  Diverse educational programs covering STEM, finance, chess, and more
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="impact-volunteers">
                <div className="text-5xl font-bold text-accent mb-4">0</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Volunteers</h3>
                <p className="text-muted-foreground">
                  Dedicated educators and mentors supporting our mission
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-secondary py-20" data-testid="about-gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
              See Us In Action
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-gallery-subtitle">
              Glimpses from our educational programs and workshops
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Students learning coding and programming"
                },
                {
                  src: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Chess tournament and strategic thinking"
                },
                {
                  src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Hands-on science experiments"
                },
                {
                  src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Collaborative learning and teamwork"
                },
                {
                  src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Modern learning environment"
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Workshop and mentoring sessions"
                }
              ].map((image, index) => (
                <div key={index} className="hover-lift">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    data-testid={`img-gallery-${index}`}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
