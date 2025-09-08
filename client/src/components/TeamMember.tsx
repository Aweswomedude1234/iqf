import { Crown } from 'lucide-react';
import type { TeamMember } from '@shared/schema';

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMember({ member }: TeamMemberProps) {
  const isFounder = member.isFounder === 'true';

  return (
    <div className="text-center" data-testid={`team-member-${member.id}`}>
      <div className="relative mb-6">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={`${member.name} - ${member.title}`}
            className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
            data-testid={`img-avatar-${member.id}`}
          />
        ) : (
          <div className="w-48 h-48 bg-muted rounded-full mx-auto shadow-lg flex items-center justify-center">
            <span className="text-4xl text-muted-foreground">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        {isFounder && (
          <div 
            className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full"
            data-testid={`icon-founder-${member.id}`}
          >
            <Crown className="h-4 w-4" />
          </div>
        )}
      </div>
      
      <h3 
        className="text-xl font-bold text-foreground mb-2"
        data-testid={`text-name-${member.id}`}
      >
        {member.name}
      </h3>
      
      <p 
        className="text-accent font-semibold mb-3"
        data-testid={`text-title-${member.id}`}
      >
        {member.title}
      </p>
      
      <p 
        className="text-muted-foreground text-sm leading-relaxed"
        data-testid={`text-bio-${member.id}`}
      >
        {member.bio}
      </p>
    </div>
  );
}
