import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Event } from '@shared/schema';

interface EventCardProps {
  event: Event;
  onSignUp?: (eventId: string) => void;
  onVolunteer?: (eventId: string) => void;
}

export default function EventCard({ event, onSignUp, onVolunteer }: EventCardProps) {
  return (
    <Card className="hover-lift" data-testid={`card-event-${event.id}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span 
            className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold"
            data-testid={`text-category-${event.id}`}
          >
            {event.category}
          </span>
          <span 
            className="text-muted-foreground text-sm"
            data-testid={`text-age-group-${event.id}`}
          >
            {event.ageGroup}
          </span>
        </div>
        
        <h3 
          className="text-xl font-bold text-foreground mb-2"
          data-testid={`text-title-${event.id}`}
        >
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span data-testid={`text-date-${event.id}`}>{event.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span data-testid={`text-time-${event.id}`}>{event.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span data-testid={`text-location-${event.id}`}>{event.location}</span>
          </div>
        </div>
        
        <p 
          className="text-muted-foreground mb-6"
          data-testid={`text-description-${event.id}`}
        >
          {event.description}
        </p>
        
        <div className="flex gap-3">
          <Button 
            className="btn-primary flex-1"
            onClick={() => onSignUp?.(event.id)}
            data-testid={`button-signup-${event.id}`}
          >
            Sign Up
          </Button>
          <Button 
            className="btn-accent flex-1"
            onClick={() => onVolunteer?.(event.id)}
            data-testid={`button-volunteer-${event.id}`}
          >
            Volunteer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
