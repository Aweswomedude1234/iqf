import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, Users, Star, Award } from 'lucide-react';
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
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  
  {
    id: "1",
    title: "AI Programming Mentor",
    program: "AI",
    role: "Mentor",
    description: "Guide students through AI and machine learning concepts, help with coding projects, and provide one-on-one support during workshops.",
    requirements: ["Python programming experience", "Basic ML knowledge", "Patience with students"],
    timeCommitment: "Ongoing",
    schedule: "Saturdays 2-5 PM",
    location: "San Francisco Community Center",
    ageRequirement: "18+",
    hoursPerWeek: 3,
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    skills: ["Python", "Machine Learning", "Teaching"],
    impact: "Help 20+ students learn AI fundamentals"
  },
  {
    id: "2",
    title: "Robotics Workshop Assistant",
    program: "Robotics",
    role: "Assistant",
    description: "Support robotics workshops by helping students build and program robots, troubleshooting technical issues, and maintaining equipment.",
    requirements: ["Basic robotics knowledge", "Problem-solving skills", "Technical aptitude"],
    timeCommitment: "Seasonal",
    schedule: "Weekends 10 AM - 4 PM",
    location: "Multiple Locations",
    ageRequirement: "16+",
    hoursPerWeek: 6,
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    skills: ["Robotics", "Electronics", "Programming"],
    impact: "Support 15+ robotics teams"
  },
  {
    id: "3",
    title: "Chess Tournament Coordinator",
    program: "Chess",
    role: "Coordinator",
    description: "Organize chess tournaments, manage registration, coordinate matches, and ensure fair play during competitive events.",
    requirements: ["Chess knowledge", "Organizational skills", "Event management experience"],
    timeCommitment: "Event-based",
    schedule: "Tournament days 9 AM - 6 PM",
    location: "Various Venues",
    ageRequirement: "21+",
    hoursPerWeek: 8,
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    skills: ["Chess", "Event Management", "Leadership"],
    impact: "Organize 10+ tournaments annually"
  },
  {
    id: "4",
    title: "STEM Lab Facilitator",
    program: "STEM",
    role: "Facilitator",
    description: "Lead hands-on STEM experiments, explain scientific concepts, and create engaging learning experiences for elementary students.",
    requirements: ["STEM background", "Experience with children", "Creative teaching approach"],
    timeCommitment: "Ongoing",
    schedule: "Weekdays 4-6 PM",
    location: "Local Schools",
    ageRequirement: "18+",
    hoursPerWeek: 10,
    startDate: "2024-02-15",
    endDate: "2024-12-20",
    skills: ["Science", "Teaching", "Lab Safety"],
    impact: "Engage 50+ elementary students weekly"
  },
  {
    id: "5",
    title: "Coding Bootcamp Instructor",
    program: "Coding",
    role: "Instructor",
    description: "Teach web development fundamentals, review student code, and guide career development for aspiring programmers.",
    requirements: ["Professional coding experience", "Full-stack knowledge", "Teaching passion"],
    timeCommitment: "Intensive",
    schedule: "Evenings 6-9 PM",
    location: "Online & In-Person",
    ageRequirement: "22+",
    hoursPerWeek: 15,
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    skills: ["JavaScript", "React", "Node.js", "Teaching"],
    impact: "Train 30+ future developers"
  },
  {
    id: "6",
    title: "High School Program Coordinator",
    program: "High School",
    role: "Coordinator",
    description: "Develop curriculum, coordinate with teachers, manage student progress, and organize college preparation activities.",
    requirements: ["Education background", "High school experience", "Strong communication"],
    timeCommitment: "Ongoing",
    schedule: "Flexible weekday hours",
    location: "High Schools",
    ageRequirement: "25+",
    hoursPerWeek: 20,
    startDate: "2024-01-08",
    endDate: "2024-12-20",
    skills: ["Curriculum Development", "Student Counseling", "Administration"],
    impact: "Support 100+ high school students"
  }
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
    return volunteerOpportunities.filter(opportunity => {
      const matchesSearch = searchQuery === '' || 
        opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesProgram = selectedProgram === 'all' || 
        opportunity.program.toLowerCase() === selectedProgram.toLowerCase();

      const matchesRole = selectedRole === 'all' || 
        opportunity.role.toLowerCase() === selectedRole.toLowerCase();

      const matchesTime = selectedTime === 'all' || 
        opportunity.timeCommitment.toLowerCase() === selectedTime.toLowerCase();

      const matchesLocation = selectedLocation === 'all' || 
        opportunity.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesHours = selectedHours === 'all' || 
        (selectedHours === 'low' && opportunity.hoursPerWeek <= 5) ||
        (selectedHours === 'medium' && opportunity.hoursPerWeek > 5 && opportunity.hoursPerWeek <= 15) ||
        (selectedHours === 'high' && opportunity.hoursPerWeek > 15);

      const matchesAge = selectedAgeRequirement === 'all' || 
        opportunity.ageRequirement === selectedAgeRequirement;

      return matchesSearch && matchesProgram && matchesRole && matchesTime && 
             matchesLocation && matchesHours && matchesAge;
    });
  }, [searchQuery, selectedProgram, selectedRole, selectedTime, selectedLocation, selectedHours, selectedAgeRequirement]);

  const handleApply = (opportunityId: string) => {
    alert(`Apply for opportunity ${opportunityId} - Application form would open here`);
  };

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
              
              {(searchQuery || selectedProgram !== 'all' || selectedRole !== 'all' || 
                selectedTime !== 'all' || selectedLocation !== 'all' || selectedHours !== 'all' || 
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
                      <SelectItem value="san francisco">San Francisco</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="schools">Schools</SelectItem>
                      <SelectItem value="community center">Community Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Hours/Week</label>
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Age Requirement</label>
                  <Select value={selectedAgeRequirement} onValueChange={setSelectedAgeRequirement}>
                    <SelectTrigger>
                      <SelectValue placeholder="Age requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Age</SelectItem>
                      <SelectItem value="16+">16+</SelectItem>
                      <SelectItem value="18+">18+</SelectItem>
                      <SelectItem value="21+">21+</SelectItem>
                      <SelectItem value="25+">25+</SelectItem>
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
                {filteredOpportunities.map(opportunity => (
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
                          <span>{opportunity.hoursPerWeek}h/week • {opportunity.timeCommitment}</span>
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
                            <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
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
                      
                      <Button 
                        className="btn-primary w-full mt-auto"
                        onClick={() => handleApply(opportunity.id)}
                      >
                        Apply Now
                      </Button>
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
              <Button
                onClick={clearAllFilters}
                className="btn-primary"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}