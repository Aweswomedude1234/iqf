import { useQuery } from '@tanstack/react-query';
import { UserPlus } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import type { TeamMember as TeamMemberType } from '@shared/schema';

export default function Team() {
  const { data: team, isLoading, error } = useQuery<TeamMemberType[]>({
    queryKey: ['/api/team'],
  });

  if (error) {
    return (
      <div className="min-h-screen bg-background py-20" data-testid="team-error">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Error Loading Team</h1>
          <p className="text-xl text-muted-foreground">
            We're sorry, but we couldn't load the team information at this time. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" data-testid="team-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="team-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-team-hero-title">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-hero-subtitle">
              Meet the passionate individuals driving our mission to empower young minds through innovative education
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-secondary py-20" data-testid="team-members-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center animate-pulse" data-testid={`skeleton-team-${i}`}>
                  <div className="w-48 h-48 bg-muted rounded-full mx-auto mb-6"></div>
                  <div className="h-6 bg-muted rounded mb-2 max-w-32 mx-auto"></div>
                  <div className="h-4 bg-muted rounded mb-3 max-w-24 mx-auto"></div>
                  <div className="h-16 bg-muted rounded max-w-64 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : team && team.length > 0 ? (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map(member => (
                  <TeamMember key={member.id} member={member} />
                ))}
                
                {/* Future Team Member Placeholders */}
                <div className="text-center" data-testid="join-team-placeholder-1">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 bg-muted rounded-full mx-auto shadow-lg flex items-center justify-center">
                      <UserPlus className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Join Our Team</h3>
                  <p className="text-muted-foreground font-semibold mb-3">Future Team Member</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We're always looking for passionate educators and volunteers to join our mission.
                  </p>
                </div>

                <div className="text-center" data-testid="join-team-placeholder-2">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 bg-muted rounded-full mx-auto shadow-lg flex items-center justify-center">
                      <UserPlus className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Join Our Team</h3>
                  <p className="text-muted-foreground font-semibold mb-3">Future Team Member</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Be part of something bigger and help shape the future of education.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection className="text-center">
              <div className="bg-card rounded-xl p-12" data-testid="no-team-message">
                <div className="text-6xl text-muted-foreground mb-6">👥</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Building Our Team</h3>
                <p className="text-muted-foreground mb-6">
                  We're in the process of building an amazing team of educators, mentors, and change-makers. 
                  If you're passionate about education and want to make a difference, we'd love to hear from you.
                </p>
                <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-join-team">
                  Join Our Team
                </Button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-accent py-20" data-testid="team-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-team-cta-title">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-team-cta-subtitle">
              We're always looking for passionate individuals who share our vision of transforming education. 
              Whether you're an educator, mentor, or someone who wants to make a difference, there's a place for you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/join-us" 
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-apply-team"
              >
                Apply to Join
              </a>
              <a 
                href="mailto:careers@iqfoundation.org" 
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors"
                data-testid="button-contact-careers"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
