import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Calendar, Clock, MapPin, Users } from 'lucide-react';
import EventCard from '@/components/EventCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Event } from '@shared/schema';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Filter events based on search and filters
  const filteredEvents = useMemo(() => {
    if (!events) return [];

    return events.filter(event => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'all' || 
        event.category.toLowerCase() === selectedCategory.toLowerCase();

      // Age group filter
      const matchesAgeGroup = selectedAgeGroup === 'all' || 
        event.ageGroup.toLowerCase() === selectedAgeGroup.toLowerCase();

      // Location filter
      const matchesLocation = selectedLocation === 'all' || 
        event.location.toLowerCase().includes(selectedLocation.toLowerCase());

      // Time filter (basic implementation)
      const eventTime = new Date(`1970-01-01T${event.time}`).getHours();
      const matchesTime = selectedTime === 'all' || 
        (selectedTime === 'morning' && eventTime < 12) ||
        (selectedTime === 'afternoon' && eventTime >= 12 && eventTime < 18) ||
        (selectedTime === 'evening' && eventTime >= 18);

      // Date range filter
      const eventDate = new Date(event.date);
      const today = new Date();
      const matchesDateRange = selectedDateRange === 'all' ||
        (selectedDateRange === 'this-week' && 
          eventDate >= today && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) ||
        (selectedDateRange === 'this-month' && 
          eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear()) ||
        (selectedDateRange === 'upcoming' && eventDate >= today);

      return matchesSearch && matchesCategory && matchesAgeGroup && 
             matchesLocation && matchesTime && matchesDateRange;
    });
  }, [events, searchQuery, selectedCategory, selectedAgeGroup, selectedLocation, selectedTime, selectedDateRange]);

  const handleSignUp = (eventId: string) => {
    alert(`Sign up for event ${eventId} - Registration form would open here`);
  };

  const handleVolunteer = (eventId: string) => {
    alert(`Volunteer for event ${eventId} - Volunteer form would open here`);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedAgeGroup('all');
    setSelectedLocation('all');
    setSelectedTime('all');
    setSelectedDateRange('all');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background py-20" data-testid="events-error">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Error Loading Events</h1>
          <p className="text-xl text-muted-foreground">
            We're sorry, but we couldn't load the events at this time. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" data-testid="events-page">
      {/* Hero Section */}
      <section className="bg-background py-20" data-testid="events-hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-events-hero-title">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-events-hero-subtitle">
              Join us for exciting learning opportunities that will inspire, educate, and empower young minds
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-secondary py-8" data-testid="events-search-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border border-border rounded-lg focus:outline-none bg-background"
                data-testid="input-events-search"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
                data-testid="button-toggle-filters"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              
              {(searchQuery || selectedCategory !== 'all' || selectedAgeGroup !== 'all' || 
                selectedLocation !== 'all' || selectedTime !== 'all' || selectedDateRange !== 'all') && (
                <Button
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="text-accent hover:text-accent-foreground"
                  data-testid="button-clear-filters"
                >
                  Clear All Filters
                </Button>
              )}
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-6 bg-background rounded-lg border" data-testid="filters-container">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date Range
                  </label>
                  <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                    <SelectTrigger data-testid="select-date-range">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Dates</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Time
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger data-testid="select-time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Time</SelectItem>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger data-testid="select-location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="san francisco">San Francisco</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="community center">Community Center</SelectItem>
                      <SelectItem value="library">Library</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Age Group
                  </label>
                  <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                    <SelectTrigger data-testid="select-age-group">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ages</SelectItem>
                      <SelectItem value="elementary">Elementary</SelectItem>
                      <SelectItem value="middle school">Middle School</SelectItem>
                      <SelectItem value="high school">High School</SelectItem>
                      <SelectItem value="adults">Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger data-testid="select-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="stem">STEM</SelectItem>
                      <SelectItem value="robotics">Robotics</SelectItem>
                      <SelectItem value="ai">AI</SelectItem>
                      <SelectItem value="chess">Chess</SelectItem>
                      <SelectItem value="coding">Coding</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="text-center">
              <span className="text-muted-foreground" data-testid="text-results-count">
                {isLoading ? 'Loading...' : `${filteredEvents.length} events found`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-background py-20" data-testid="events-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
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
          ) : filteredEvents && filteredEvents.length > 0 ? (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onSignUp={handleSignUp}
                    onVolunteer={handleVolunteer}
                  />
                ))}
              </div>
            </AnimatedSection>
          ) : (
            <div className="text-center py-16" data-testid="no-events-found">
              <h3 className="text-2xl font-bold text-foreground mb-4">No Events Found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || selectedCategory !== 'all' || selectedAgeGroup !== 'all' || 
                 selectedLocation !== 'all' || selectedTime !== 'all' || selectedDateRange !== 'all'
                  ? "Try adjusting your search or filters to find more events."
                  : "There are currently no events scheduled. Check back later for updates!"}
              </p>
              {(searchQuery || selectedCategory !== 'all' || selectedAgeGroup !== 'all' || 
                selectedLocation !== 'all' || selectedTime !== 'all' || selectedDateRange !== 'all') && (
                <Button
                  onClick={clearAllFilters}
                  className="btn-primary"
                  data-testid="button-clear-all-filters"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}