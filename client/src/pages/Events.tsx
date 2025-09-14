import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, Users } from 'lucide-react';
import EventCard from '@/components/EventCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Event } from '@shared/schema';

// Static events (replace API)
const staticEvents: Event[] = [
  {
    id: '1',
    title: 'Chess Workshop',
    description: 'Join us for a fun chess event at the Delaware Library.',
    category: 'chess',
    ageGroup: 'all',
    location: 'Delaware County District Library: Delaware Branch',
    date: '2024-09-27',
    time: '15:30', // 3:30 PM
  },
  {
    id: '2',
    title: 'Chess Workshop',
    description: 'Another chess session at Liberty Branch.',
    category: 'chess',
    ageGroup: 'all',
    location: 'Delaware County District Library: Liberty Branch',
    date: '2024-10-04',
    time: '15:00', // 3 PM
  },
  {
    id: '3',
    title: 'Chess Workshop',
    description: 'Chess event at the Delaware Branch again!',
    category: 'chess',
    ageGroup: 'all',
    location: 'Delaware County District Library: Delaware Branch',
    date: '2024-10-11',
    time: '14:00', // 2 PM
  },
];

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Instead of fetching from API, use static events
  const events = staticEvents;

  // Filtering logic (same as before)
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch =
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        event.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesAgeGroup =
        selectedAgeGroup === 'all' ||
        event.ageGroup.toLowerCase() === selectedAgeGroup.toLowerCase();

      const matchesLocation =
        selectedLocation === 'all' ||
        event.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const eventTime = new Date(`1970-01-01T${event.time}`).getHours();
      const matchesTime =
        selectedTime === 'all' ||
        (selectedTime === 'morning' && eventTime < 12) ||
        (selectedTime === 'afternoon' && eventTime >= 12 && eventTime < 18) ||
        (selectedTime === 'evening' && eventTime >= 18);

      const eventDate = new Date(event.date);
      const today = new Date();
      const matchesDateRange =
        selectedDateRange === 'all' ||
        (selectedDateRange === 'this-week' &&
          eventDate >= today &&
          eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) ||
        (selectedDateRange === 'this-month' &&
          eventDate.getMonth() === today.getMonth() &&
          eventDate.getFullYear() === today.getFullYear()) ||
        (selectedDateRange === 'upcoming' && eventDate >= today);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesAgeGroup &&
        matchesLocation &&
        matchesTime &&
        matchesDateRange
      );
    });
  }, [
    events,
    searchQuery,
    selectedCategory,
    selectedAgeGroup,
    selectedLocation,
    selectedTime,
    selectedDateRange,
  ]);

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

  return (
    <div className="min-h-screen" data-testid="events-page">
      {/* ... keep your Hero, Filters, and Grid the same ... */}
      {/* Replace only the part that previously relied on error/loading */}
      <section className="bg-background py-20" data-testid="events-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
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
                {searchQuery ||
                selectedCategory !== 'all' ||
                selectedAgeGroup !== 'all' ||
                selectedLocation !== 'all' ||
                selectedTime !== 'all' ||
                selectedDateRange !== 'all'
                  ? 'Try adjusting your search or filters to find more events.'
                  : 'There are currently no events scheduled. Check back later for updates!'}
              </p>
              {(searchQuery ||
                selectedCategory !== 'all' ||
                selectedAgeGroup !== 'all' ||
                selectedLocation !== 'all' ||
                selectedTime !== 'all' ||
                selectedDateRange !== 'all') && (
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
