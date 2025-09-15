import { MapPin, Users, Calendar, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function OurChapters() {
  const chapters = [
   /* {
      name: "San Francisco Bay Area",
      location: "San Francisco, CA",
      members: 45,
      established: "2023",
      description: "Our flagship chapter serving the greater San Francisco Bay Area with comprehensive STEM programs.",
      programs: ["AI & Machine Learning", "Robotics", "Chess Club", "Coding Bootcamps"],
      contact: "bayarea@iqfoundation.org"
    },
    {
      name: "Austin",
      location: "Austin, TX",
      members: 32,
      established: "2024",
      description: "Expanding our reach in Texas with innovative educational programs for local students.",
      programs: ["STEM Workshops", "High School Prep", "Financial Literacy"],
      contact: "austin@iqfoundation.org"
    },
    {
      name: "Boston",
      location: "Boston, MA",
      members: 28,
      established: "2024",
      description: "Bringing quality education to New England with a focus on academic excellence.",
      programs: ["Chess Strategy", "Coding", "AI Introduction"],
      contact: "boston@iqfoundation.org"
    }
      */
  ];

  return (
    <div className="min-h-screen" data-testid="chapters-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="chapters-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-chapters-hero-title">
              Our Chapters
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-chapters-hero-subtitle">
              IQ Foundation chapters across the country, bringing quality education and innovative programs to local communities everywhere.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="bg-secondary py-20" data-testid="chapters-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <AnimatedSection key={index} animationType="fade-in">
                <div className="bg-background rounded-xl p-6 shadow-lg hover-lift" data-testid={`chapter-card-${index}`}>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-accent mr-2" />
                    <h3 className="text-xl font-bold text-foreground" data-testid={`text-chapter-name-${index}`}>
                      {chapter.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`text-chapter-location-${index}`}>
                    {chapter.location}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-chapter-description-${index}`}>
                    {chapter.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center" data-testid={`chapter-members-${index}`}>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-accent mr-1" />
                        <span className="text-2xl font-bold text-accent">{chapter.members}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Members</span>
                    </div>
                    
                    <div className="text-center" data-testid={`chapter-established-${index}`}>
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="h-4 w-4 text-accent mr-1" />
                        <span className="text-2xl font-bold text-accent">{chapter.established}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Established</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Programs Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.programs.map((program, programIndex) => (
                        <span 
                          key={programIndex}
                          className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm"
                          data-testid={`program-tag-${index}-${programIndex}`}
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="btn-primary w-full py-2 rounded-lg font-medium"
                      data-testid={`button-learn-more-${index}`}
                    >
                      Learn More
                    </Button>
                    <a 
                      href={`mailto:${chapter.contact}`}
                      className="block text-center text-accent font-medium hover:underline"
                      data-testid={`link-contact-${index}`}
                    >
                      {chapter.contact}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Chapter Section */}
      <section className="bg-accent py-20" data-testid="start-chapter-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-start-chapter-title">
              Start Your Own Chapter
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto" data-testid="text-start-chapter-subtitle">
              Bring IQ Foundation's mission to your community. We provide the resources, training, and support you need to establish a successful local chapter.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-background rounded-xl p-6" data-testid="benefit-support">
                <Award className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Full Support</h3>
                <p className="text-muted-foreground text-sm">
                  Complete training, resources, and ongoing support from our team
                </p>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="benefit-curriculum">
                <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Proven Curriculum</h3>
                <p className="text-muted-foreground text-sm">
                  Access to our tested and successful educational programs
                </p>
              </div>

              <div className="bg-background rounded-xl p-6" data-testid="benefit-network">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Global Network</h3>
                <p className="text-muted-foreground text-sm">
                  Join a growing network of educators and change-makers
                </p>
              </div>
            </div>

            <div className="space-x-4">
              <a 
                href="/join-us#chapter"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                data-testid="button-start-chapter"
              >
                Start a Chapter
              </a>
              <a 
                href="mailto:chapters@iqfoundation.org"
                className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors inline-block"
                data-testid="button-contact-chapters"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background py-20" data-testid="map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-map-title">
              Find Your Local Chapter
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-map-subtitle">
              Connect with IQ Foundation chapters near you
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-secondary rounded-xl p-12 text-center" data-testid="map-placeholder">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on an interactive map to help you easily find and connect with IQ Foundation chapters in your area.
              </p>
              <p className="text-muted-foreground">
                In the meantime, contact us directly to learn about opportunities near you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}