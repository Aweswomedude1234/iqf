import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import EventCard from '@/components/EventCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Event } from '@shared/schema';

// 🔹 Helper: convert 24h time to 12h format
function formatTime(time: string) {
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // 0 → 12
  return `${hour}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

// 🔹 Static events (add category + Google Form links here)
const staticEvents: Event[] = [
  {
    id: '1',
    title: 'Chess Workshop',
    description: 'Fun chess event at Delaware Library.',
    category: 'chess',
    ageGroup: 'kids',
    location: 'Delaware County District Library: Delaware Branch',
    date: '2025-09-27',
    time: '15:30',
    signupLink: 'https://forms.gle/your-signup-form',
    volunteerLink: 'https://forms.gle/your-volunteer-form',
  },
  {
    id: '2',
    title: 'Chess workshop',
    description: 'Fun chess event at Delaware County liberty Branch Library.',
    category: 'chess',
    ageGroup: 'kids',
    location: 'Liberty Branch',
    date: '2025-10-04',
    time: '09:00',
    signupLink: 'https://forms.gle/your-signup-form',
    volunteerLink: 'https://forms.gle/your-volunteer-form',
  },
];

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const events = staticEvents;

  // Filtering logic
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
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
        selectedLocation === 'all' || event.location === selectedLocation;

      // 🔹 Time ranges
      const eventTime = new Date(`1970-01-01T${event.time}`).getHours();
      const matchesTime =
        selectedTime === 'all' ||
        (selectedTime === 'morning' && eventTime >= 7 && eventTime < 12) ||
        (selectedTime === 'afternoon' && eventTime >= 12 && eventTime < 17) ||
        (selectedTime === 'evening' && eventTime >= 17 && eventTime < 20);

      // 🔹 Date range filter
      const eventDate = new Date(event.date);
      const matchesDate =
        (!dateStart || eventDate >= new Date(dateStart)) &&
        (!dateEnd || eventDate <= new Date(dateEnd));

      return (
        matchesSearch &&
        matchesCategory &&
        matchesAgeGroup &&
        matchesLocation &&
        matchesTime &&
        matchesDate
      );
    });
  }, [
    events,
    searchQuery,
    selectedCategory,
    selectedAgeGroup,
    selectedLocation,
    selectedTime,
    dateStart,
    dateEnd,
  ]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedAgeGroup('all');
    setSelectedLocation('all');
    setSelectedTime('all');
    setDateStart('');
    setDateEnd('');
  };

  return (
    <div className="min-h-screen">
      {/* Search + Filters */}
      <section className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Category */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="chess">Chess</SelectItem>
                  <SelectItem value="robotics">Robotics</SelectItem>
                  <SelectItem value="ai">AI</SelectItem>
                  <SelectItem value="stem">STEM</SelectItem>
                  <SelectItem value="competition">Competition</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* Age Group */}
              <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="kids">Kids</SelectItem>
                  <SelectItem value="teens">Teens</SelectItem>
                  <SelectItem value="adults">Adults</SelectItem>
                </SelectContent>
              </Select>

              {/* Location */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Delaware County District Library: Delaware Branch">
                    Delaware Branch
                  </SelectItem>
                  <SelectItem value="Delaware County District Library: Liberty Branch">
                    Liberty Branch
                  </SelectItem>
                  <SelectItem value="Dublin Metropolitan Library">
                    Dublin Metropolitan Library
                  </SelectItem>
                  <SelectItem value="Hilliard Library">Hilliard Library</SelectItem>
                </SelectContent>
              </Select>

              {/* Time */}
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="morning">Morning (7AM–12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM–5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM–8PM)</SelectItem>
                </SelectContent>
              </Select>

              {/* Date Range */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Start Date</label>
                <Input
                  type="date"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">End Date</label>
                <Input
                  type="date"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={{
                      ...event,
                      time: formatTime(event.time), // show in 12h format
                    }}
                    onSignUp={() => (window.location.href = event.signupLink)}
                    onVolunteer={() => (window.location.href = event.volunteerLink)}
                  />
                ))}
              </div>
            </AnimatedSection>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No Events Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find more events.
              </p>
              <Button onClick={clearAllFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
