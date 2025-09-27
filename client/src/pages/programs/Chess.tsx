import { Crown, Users, Trophy, Brain } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function Chess() {
  return (
    <div className="min-h-screen" data-testid="chess-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="chess-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-chess-hero-title">
              Kings Academy of Chess 
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-chess-hero-subtitle">
              Develop strategic thinking and critical analysis skills through the royal game of chess. From beginners to advanced players, everyone is welcome.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-secondary py-20" data-testid="chess-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                Master the Game of Kings
              </h2>
              <div className="space-y-6">
                <div data-testid="skill-strategy">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Thinking</h3>
                  <p className="text-muted-foreground">Learn to think several moves ahead, analyze complex positions, and develop winning strategies.</p>
                </div>
                <div data-testid="skill-tactics">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tactical Patterns</h3>
                  <p className="text-muted-foreground">Master essential tactical motifs like pins, forks, skewers, and discovered attacks.</p>
                </div>
                <div data-testid="skill-endgames">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Endgame Mastery</h3>
                  <p className="text-muted-foreground">Study crucial endgame positions and techniques to convert advantages into victories.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Chess players in tournament"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-chess-overview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-background py-20" data-testid="chess-benefits-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
              Why Learn Chess?
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-benefits-subtitle">
              Chess develops skills that extend far beyond the board
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="benefit-critical-thinking">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Critical Thinking</h3>
                <p className="text-muted-foreground">Develop analytical skills and learn to evaluate complex situations systematically.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="benefit-patience">
                <Crown className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Patience & Focus</h3>
                <p className="text-muted-foreground">Build concentration and learn the value of careful planning and deliberation.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="benefit-competition">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Competitive Spirit</h3>
                <p className="text-muted-foreground">Participate in tournaments and learn sportsmanship through friendly competition.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in">
              <div className="text-center" data-testid="benefit-community">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground">Join a diverse community of chess players from different backgrounds and skill levels.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skill Levels */}
      <section className="bg-secondary py-20" data-testid="chess-levels-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-levels-title">
              Programs for Every Level
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-levels-subtitle">
              Whether you're just learning the moves or aiming for master level
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="level-beginner">
                <h3 className="text-2xl font-bold text-foreground mb-4">Beginner</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Learn piece movements and rules</li>
                  <li>• Basic opening principles</li>
                  <li>• Simple tactical patterns</li>
                  <li>• Fundamental endgames</li>
                  <li>• Chess etiquette and notation</li>
                </ul>
                <div className="text-accent font-semibold">Pawn</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-up">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="level-intermediate">
                <h3 className="text-2xl font-bold text-foreground mb-4">Intermediate</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Advanced tactical combinations</li>
                  <li>• Opening theory and preparation</li>
                  <li>• Middle game planning</li>
                  <li>• Complex endgame studies</li>
                  <li>• Tournament preparation</li>
                </ul>
                <div className="text-accent font-semibold">Rook</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-right">
              <div className="bg-background rounded-xl p-6 hover-lift" data-testid="level-advanced">
                <h3 className="text-2xl font-bold text-foreground mb-4">Advanced</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Deep positional understanding</li>
                  <li>• Master-level opening repertoire</li>
                  <li>• Advanced strategic concepts</li>
                  <li>• Competition psychology</li>
                  <li>• Analysis techniques</li>
                </ul>
                <div className="text-accent font-semibold">King</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="bg-accent py-20" data-testid="chess-tournaments-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-tournaments-title">
              Compete & Grow
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-tournaments-subtitle">
              Test your skills in our regular tournaments and qualifying events for regional competitions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-xl p-6" data-testid="tournament-weekly">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Weekly Club Tournaments</h3>
                <p className="text-muted-foreground text-sm mb-2">Every Saturday afternoon</p>
                <p className="text-muted-foreground text-sm">Friendly competition for all skill levels</p>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="tournament-championship">
                <Crown className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Annual Championship</h3>
                <p className="text-muted-foreground text-sm mb-2">End of year tournament</p>
                <p className="text-muted-foreground text-sm">Crown our club champions</p>
              </div>
            </div>

            <div className="space-x-4">
              <a 
                href="https://forms.gle/5cN4sPqx5Xbm2wkQA"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-join-chess"
              >
                Join Kings Academy
              </a>
              <a 
                href="/events"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-view-tournaments"
              >
                View Tournaments
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}