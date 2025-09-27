import { UserPlus } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import AnimatedSection from '@/components/AnimatedSection';
import type { TeamMember as TeamMemberType } from '@shared/schema';

export default function Team() {
  const team: TeamMemberType[] = [
    {
      id: '1',
      name: 'Nithilan Murugesan',
      title: 'High School Junior',
      imageUrl: '/IMG_5271.jpg', // ✅ served from client/public
      bio: 'Passionate about STEM, AI, and empowering youth through education.',
      isFounder: 'true',
    },
    {
      id: '2',
      name: 'Open position',
      title: 'Future Team Member',
      imageUrl: '/officialiqf.png', // ✅ replace with your own image in /public
      bio: 'Be part of something bigger and help shape the future of education.',
      isFounder: 'false',
    },
    {
      id: '3',
      name: 'Open position',
      title: 'Future Team Member',
      imageUrl: '/officialiqf.png', // ✅ replace with your own image in /public
      bio: 'We are always looking for passionate educators and volunteers to join our mission.',
      isFounder: 'false',
    }, 
  ];

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
          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
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
              We're always looking for passionate individuals who share our vision of transforming education. Whether you're an educator, mentor, or someone who wants to make a difference, there's a place for you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join-us" className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-apply-team">
                Apply to Join
              </a>
              <a href="mailto:careers@iqfoundation.org" className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors" data-testid="button-contact-careers">
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
