import { Brain, Code, Database, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function AI() {
  return (
    <div className="min-h-screen" data-testid="ai-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="ai-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-ai-hero-title">
              Artificial Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-ai-hero-subtitle">
              Explore the world of AI and machine learning. Build intelligent systems, understand neural networks, and create the technologies that will shape tomorrow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-secondary py-20" data-testid="ai-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                Master AI Fundamentals
              </h2>
              <div className="space-y-6">
                <div data-testid="skill-ml">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Machine Learning</h3>
                  <p className="text-muted-foreground">Learn supervised and unsupervised learning algorithms, from linear regression to deep neural networks.</p>
                </div>
                <div data-testid="skill-programming">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Python Programming</h3>
                  <p className="text-muted-foreground">Master Python for AI development using libraries like TensorFlow, PyTorch, and Scikit-learn.</p>
                </div>
                <div data-testid="skill-projects">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-World Projects</h3>
                  <p className="text-muted-foreground">Build chatbots, image classifiers, and recommendation systems that solve actual problems.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="AI and machine learning visualization"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-ai-overview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-background py-20" data-testid="ai-curriculum-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-curriculum-title">
              Learning Path
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-curriculum-subtitle">
              Structured progression from AI basics to advanced applications
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="module-foundations">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">AI Foundations</h3>
                <p className="text-muted-foreground">Understanding AI history, concepts, and ethical considerations in artificial intelligence.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="module-programming">
                <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Programming Skills</h3>
                <p className="text-muted-foreground">Python programming, data structures, and libraries essential for AI development.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="module-data">
                <Database className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Data Science</h3>
                <p className="text-muted-foreground">Data analysis, visualization, and preprocessing techniques for machine learning.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="module-applications">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">AI Applications</h3>
                <p className="text-muted-foreground">Build real applications: computer vision, NLP, and intelligent systems.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      
      <section className="bg-secondary py-20" data-testid="ai-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Student Projects
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-projects-subtitle">
              Amazing AI applications built by our students
            </p>
          </AnimatedSection>
          

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="project-chatbot">
                <h3 className="text-xl font-bold text-foreground mb-3">Intelligent Chatbot</h3>
                <p className="text-muted-foreground mb-4">Built a conversational AI using natural language processing to help students with homework questions.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">NLP</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">TensorFlow</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-up">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="project-vision">
                <h3 className="text-xl font-bold text-foreground mb-3">Image Classifier</h3>
                <p className="text-muted-foreground mb-4">Developed a computer vision system to identify and classify different species of plants and animals.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">PyTorch</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">CNN</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">OpenCV</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="project-recommender">
                <h3 className="text-xl font-bold text-foreground mb-3">Recommendation Engine</h3>
                <p className="text-muted-foreground mb-4">Created a machine learning system that recommends books and movies based on user preferences and behavior.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Scikit-learn</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Pandas</span>
                  <span className="bg-accent bg-opacity-10 text-accent px-2 py-1 rounded text-sm">Flask</span>
                </div>
              </div>
            </AnimatedSection>
            
          </div>
          */}
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-accent py-20" data-testid="ai-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-join-title">
              Start Your AI Journey
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-join-subtitle">
              Join our AI program and learn to build intelligent systems that can change the world. No prior experience required.
            </p>
            <div className="space-x-4">
              <a 
                href="/join-us#join"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-enroll-ai"
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