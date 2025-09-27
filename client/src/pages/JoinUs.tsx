import { GraduationCap, HandHeart, Users, Heart, Handshake, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

export default function JoinUs() {
  const joinOptions = [
    {
      icon: GraduationCap,
      title: "Join Us",
      description: "Participate in our programs and unlock your potential through hands-on learning experiences in STEM, AI, finance, and more.",
      benefits: [
        "Free access to all programs",
        "Personalized mentorship",
        "Hands-on learning experiences",
        "Certificate of completion",
        "Community of like-minded learners"
      ],
      action: "Upcoming events",
      link: "/Events",
      color: "bg-blue-50"
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your skills and help others learn while making a meaningful impact in your community.",
      benefits: [
        "Flexible time commitment",
        "Training and support provided",
        "Community service hours",
        "Professional networking",
        "Personal fulfillment"
      ],
      action: "Event volunteers",
      link: "/events",
      color: "bg-green-50"
    },
    
    /*{
      icon: Users,
      title: "Join Our Team",
      description: "Build the future of education with us as a full-time or part-time team member.",
      benefits: [
        "Competitive compensation",
        "Professional development",
        "Meaningful work environment",
        "Growth opportunities",
        "Make a lasting impact"
      ],
      action: "View Openings",
      link: "https://forms.gle/your-team-form",
      color: "bg-purple-50"
    },
    {
      icon: Heart,
      title: "Sponsor",
      description: "Support our mission through financial contribution and help us reach more students.",
      benefits: [
        "Tax-deductible donations",
        "Recognition opportunities",
        "Impact reports",
        "Exclusive events access",
        "Corporate partnership options"
      ],
      action: "Become a Sponsor",
      link: "https://forms.gle/your-sponsor-form",
      color: "bg-red-50"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate to expand our reach and impact through strategic partnerships.",
      benefits: [
        "Mutual benefit opportunities",
        "Resource sharing",
        "Joint program development",
        "Brand association",
        "Community impact"
      ],
      action: "Explore Partnership",
      link: "https://forms.gle/your-partner-form",
      color: "bg-orange-50"
    },
    {
      icon: MapPin,
      title: "Make a Chapter",
      description: "Bring IQ Foundation to your community by starting a local chapter in your area.",
      benefits: [
        "Complete setup support",
        "Training and resources",
        "Ongoing guidance",
        "Access to curriculum",
        "Community impact"
      ],
      action: "Start a Chapter",
      link: "https://forms.gle/your-chapter-form",
      color: "bg-teal-50"
    }
      */
  ];

  return (
    <div className="min-h-screen" data-testid="join-us-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="join-us-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-join-us-hero-title">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-join-us-hero-subtitle">
              Be part of a movement that's transforming education and empowering young minds to reach their full potential. 
              Discover the many ways you can get involved and make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Join Options */}
      <section className="bg-secondary py-20" data-testid="join-options-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {joinOptions.map((option, index) => {
              const IconComponent = option.icon;
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection 
                  key={index} 
                  animationType={isEven ? "slide-in-left" : "slide-in-right"}
                >
                  <div 
                    id={option.title.toLowerCase().replace(/\s+/g, '-')}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                    data-testid={`join-option-${index}`}
                  >
                    <div className={isEven ? 'order-1' : 'order-2'}>
                      <div className="bg-background rounded-xl p-8 shadow-lg hover-lift">
                        <div className="flex items-center mb-6">
                          <div className="bg-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                            <IconComponent className="h-8 w-8 text-accent" />
                          </div>
                          <h3 
                            className="text-2xl font-bold text-foreground"
                            data-testid={`text-option-title-${index}`}
                          >
                            {option.title}
                          </h3>
                        </div>
                        
                        <p 
                          className="text-muted-foreground mb-6 leading-relaxed"
                          data-testid={`text-option-description-${index}`}
                        >
                          {option.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">What You'll Get:</h4>
                          <ul className="space-y-2">
                            {option.benefits.map((benefit, benefitIndex) => (
                              <li 
                                key={benefitIndex} 
                                className="flex items-center text-muted-foreground"
                                data-testid={`text-benefit-${index}-${benefitIndex}`}
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Buttons */}
                        {option.title === "Volunteer" ? (
                          <div className="flex gap-4">
                            <Button 
                              className="btn-primary w-full py-3 rounded-lg font-semibold"
                              onClick={() => window.open(option.link, "_blank")}
                              data-testid={`button-${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {option.action}
                            </Button>
                            <Button 
                              className="btn-secondary w-full py-3 rounded-lg font-semibold"
                              onClick={() => window.open("/volunteer", "_blank")}
                            >
                              Volunteer Positions
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            className="btn-primary w-full py-3 rounded-lg font-semibold"
                            onClick={() => window.open(option.link, "_blank")}
                            data-testid={`button-${option.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {option.action}
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className={isEven ? 'order-2' : 'order-1'}>
                      <img
                        src={
                          index === 0 
                            ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&h=600"
                            : index === 2
                            ? "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=600"
                            : index === 3
                            ? "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&h=600"
                            : "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&h=600"
                        }
                        alt={`${option.title} illustration`}
                        className="rounded-xl shadow-lg w-full h-auto"
                        data-testid={`img-option-${index}`}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
