import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, Star, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

interface VolunteerOpportunity {
  id: string;
  title: string;
  program: string;
  role: string;
  description: string;
  requirements: string[];
  timeCommitment: string;
  schedule: string;
  location: string;
  ageRequirement: string;
  hoursPerWeek: number;
  startDate: string;
  endDate: string;
  skills: string[];
  impact: string;
  link: string; // 👈 added
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: "1",
    title: "Chess Camp Mentor",
    program: "Chess",
    role: "Mentor",
    description:
      "Guide students through Chess camp, assist with monitoring games, and help kids along their journey.",
    requirements: ["Python programming experience", "Basic ML knowledge", "Patience with students"],
    timeCommitment: "Ongoing",
    schedule: "Bimonthly on Saturdays",
    location: "Dublin, Ohio",
    ageRequirement: "14+",
    hoursPerWeek: 2,
    startDate: "2025-09-26",
    endDate: "2026-09-01",
    skills: ["Chess", "Teaching"],
    impact: "Help 20+ students learn Chess",
    link: "https://forms.gle/D8y8rc5rmPeU2cDq8", // 👈 each opportunity now has its own link
  },
  // You can add more opportunities here with their own link fields
];

export default function Volunteer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedHours, setSelectedHours] = useState('all');
  const [selectedAgeRequirement, setSelectedAgeRequirement] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredOpportunities = useMemo(() => {
    return volunteerOpportunities.filter((opportunity) => {
      const matchesSearch =
        searchQuery === '' ||
        opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesProgram =
        selectedProgram === 'all' ||
        opportunity.program.toLowerCase() === selectedProgram.toLowerCase();

      const matchesRole =
        selectedRole === 'all' ||
        opportunity.role.toLowerCase() === selectedRole.toLowerCase();

      const matchesTime =
        selectedTime === 'all' ||
        opportunity.timeCommitment.toLowerCase() === selectedTime.toLowerCase();

      const matchesLocation =
        selectedLocation === 'all' ||
        opportunity.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesHours =
        selectedHours === 'all' ||
        (selectedHours === 'low' && opportunity.hoursPerWeek <= 5) ||
        (selectedHours === 'medium' &&
          opportunity.hoursPerWeek > 5 &&
          opportunity.hoursPerWeek <= 15) ||
        (selectedHours === 'high' && opportunity.hoursPerWeek > 15);

      const matchesAge =
        selectedAgeRequirement === 'all' ||
        opportunity.ageRequirement === selectedAgeRequirement;

      return (
        matchesSearch &&
        matchesProgram &&
        matchesRole &&
        matchesTime &&
        matchesLocation &&
        matchesHours &&
        matchesAge
      );
    });
  }, [
    searchQuery,
    selectedProgram,
    selectedRole,
    selectedTime,
    selectedLocation,
    selectedHours,
    selectedAgeRequirement,
  ]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedProgram('all');
    setSelectedRole('all');
    setSelectedTime('all');
    setSelectedLocation('all');
    setSelectedHours('all');
    setSelectedAgeRequirement('all');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Volunteer Opportunities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Make a difference in young lives by sharing your skills and passion for education.
              Find the perfect volunteer opportunity that matches your expertise and schedule.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search opportunities by title, skills, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border border-border rounded-lg focus:outline-none bg-background"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>

              {(searchQuery ||
                selectedProgram !== 'all' ||
                selectedRole !== 'all' ||
                selectedTime !== 'all' ||
                selectedLocation !== 'all' ||
                selectedHours !== 'all' ||
                selectedAgeRequirement !== 'all') && (
                <Button
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="text-accent hover:text-accent-foreground"
                >
                  Clear All Filters
                </Button>
              )}
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-6 bg-background rounded-lg border">
                {/* Program */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Program</label>
                  <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Programs</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                      <SelectItem value="robotics">Robotics</SelectItem>
                      <SelectItem value="chess">Chess</SelectItem>
                      <SelectItem value="stem">STEM</SelectItem>
                      <SelectItem value="coding">Coding</SelectItem>
                      <SelectItem value="high school">High School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="mentor">Mentor</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                      <SelectItem value="coordinator">Coordinator</SelectItem>
                      <SelectItem value="facilitator">Facilitator</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Commitment */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Time Commitment
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="event-based">Event-based</SelectItem>
                      <SelectItem value="intensive">Intensive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Dublin, Ohio">Dublin, Ohio</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="schools">Schools</SelectItem>
                      <SelectItem value="community center">Community Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Hours */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hours/Week
                  </label>
                  <Select value={selectedHours} onValueChange={setSelectedHours}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Hours</SelectItem>
                      <SelectItem value="low">1-5 hours</SelectItem>
                      <SelectItem value="medium">6-15 hours</SelectItem>
                      <SelectItem value="high">16+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age Requirement */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Age Requirement
                  </label>
                  <Select
                    value={selectedAgeRequirement}
                    onValueChange={setSelectedAgeRequirement}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Age requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Age</SelectItem>
                      <SelectItem value="14+">14+</SelectItem>
                      <SelectItem value="15+">15+</SelectItem>
                      <SelectItem value="16+">16+</SelectItem>
                      <SelectItem value="18+">18+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="text-center">
              <span className="text-muted-foreground">
                {filteredOpportunities.length} opportunities found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredOpportunities.length > 0 ? (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="hover-lift h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {opportunity.program}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {opportunity.ageRequirement}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {opportunity.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 mr-2" />
                          <span>{opportunity.role}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>
                            {opportunity.hoursPerWeek}h/week • {opportunity.timeCommitment}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{opportunity.schedule}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 flex-grow">
                        {opportunity.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Skills Required:</h4>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center text-accent mb-2">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="font-semibold">Impact:</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{opportunity.impact}</p>
                      </div>

                      {/* Apply Button with link */}
                      <a
                        href={opportunity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full mt-auto inline-block text-center rounded-lg px-4 py-2 font-semibold"
                      >
                        Apply Now
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-foreground mb-4">No Opportunities Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find more volunteer opportunities.
              </p>
              <Button onClick={clearAllFilters} className="btn-primary">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
