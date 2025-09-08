import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterText from '@/components/TypewriterText';
import type { Event } from '@shared/schema';

export default function Home() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const handleSignUp = (eventId: string) => {
    // TODO: Implement event signup functionality
    alert(`Sign up for event ${eventId} - Registration form would open here`);
  };

  const handleVolunteer = (eventId: string) => {
    // TODO: Implement volunteer registration functionality
    alert(`Volunteer for event ${eventId} - Volunteer form would open here`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-20 min-h-screen flex items-center" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-4xl md:text-6xl font-bold text-foreground">
                <TypewriterText
                  text="Where curiosity meets innovation. "
                  className="inline"
                  speed={100}
                />
                <span className="text-gray-500">Unlocking knowledge and creativity for learners everywhere.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/join-us">
                <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-join-programs">
                  Join Our Programs
                </Button>
              </Link>
              <Link href="/about">
                <Button className="btn-accent px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-learn-more">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-secondary py-20" data-testid="events-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-events-title">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-events-subtitle">
              Join us for exciting learning opportunities
            </p>
          </AnimatedSection>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl shadow-lg p-6 animate-pulse" data-testid={`skeleton-event-${i}`}>
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-8 bg-muted rounded mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded"></div>
                  </div>
                  <div className="h-20 bg-muted rounded mb-6"></div>
                  <div className="flex gap-3">
                    <div className="h-10 bg-muted rounded flex-1"></div>
                    <div className="h-10 bg-muted rounded flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events?.slice(0, 3).map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onSignUp={handleSignUp}
                    onVolunteer={handleVolunteer}
                  />
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection className="text-center mt-12">
            <Link href="/events">
              <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-view-all-events">
                View All Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="bg-background py-20" data-testid="photo-highlights-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-highlights-title">
              Event Highlights
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-highlights-subtitle">
              Moments from our inspiring educational programs
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Students working on computers"
                },
                {
                  src: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Chess competition"
                },
                {
                  src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Science experiment"
                },
                {
                  src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                  alt: "Students collaborating"
                }
              ].map((image, index) => (
                <div key={index} className="hover-lift">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    data-testid={`img-highlight-${index}`}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="bg-secondary py-20" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animationType="slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
                About IQ Foundation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description-1">
                IQ Foundation is an organization educating youth and students on topics such as STEM, AI, computer-aided design, chess, finance, and more, through free programs, camps, workshops, and resources, giving them a hands-on and more engaging experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description-2">
                We believe that every young mind deserves access to quality education and innovative learning opportunities that prepare them for the future.
              </p>
              <Link href="/about">
                <Button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg" data-testid="button-learn-more-about">
                  Learn More About Us
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection animationType="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                alt="Students in modern learning environment"
                className="rounded-xl shadow-2xl w-full h-auto"
                data-testid="img-about-preview"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-accent py-20" data-testid="join-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-join-title">
                Join Our Community
              </h2>
              <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-join-subtitle">
                Be part of a movement that's transforming education and empowering young minds to reach their full potential.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
                {[
                  {
                    icon: "fas fa-user-graduate",
                    title: "Join Us",
                    description: "Participate in our programs and unlock your potential",
                    action: "Get Started"
                  },
                  {
                    icon: "fas fa-hands-helping",
                    title: "Volunteer",
                    description: "Share your skills and help others learn",
                    action: "Volunteer"
                  },
                  {
                    icon: "fas fa-users",
                    title: "Join Our Team",
                    description: "Build the future of education with us",
                    action: "Apply Now"
                  },
                  {
                    icon: "fas fa-heart",
                    title: "Sponsor",
                    description: "Support our mission through financial contribution",
                    action: "Sponsor Us"
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Partner With Us",
                    description: "Collaborate to expand our reach and impact",
                    action: "Partner"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 hover-lift" data-testid={`card-join-option-${index}`}>
                    <div className="text-accent text-3xl mb-4">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="font-bold text-foreground mb-2" data-testid={`text-join-option-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`text-join-option-description-${index}`}>
                      {item.description}
                    </p>
                    <Link href="/join-us">
                      <Button className="btn-primary w-full py-2 rounded-lg font-medium" data-testid={`button-join-option-${index}`}>
                        {item.action}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
