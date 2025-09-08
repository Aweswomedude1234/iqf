import { type User, type InsertUser, type Event, type InsertEvent, type TeamMember, type InsertTeamMember } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: string): Promise<TeamMember | undefined>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private teamMembers: Map<string, TeamMember>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.teamMembers = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed sample events
    const sampleEvents: Event[] = [
      {
        id: "1",
        title: "AI & Machine Learning Basics",
        description: "Learn the fundamentals of artificial intelligence and machine learning through hands-on activities and real-world examples.",
        date: "December 15, 2024",
        time: "2:00 PM - 4:00 PM",
        location: "Virtual Event",
        ageGroup: "Ages 12-16",
        category: "STEM Workshop",
        createdAt: new Date(),
      },
      {
        id: "2",
        title: "Strategic Thinking Tournament",
        description: "Develop critical thinking skills through chess. Open to all skill levels with coaching provided.",
        date: "December 20, 2024",
        time: "10:00 AM - 3:00 PM",
        location: "Community Center",
        ageGroup: "Ages 8-14",
        category: "Chess Club",
        createdAt: new Date(),
      },
      {
        id: "3",
        title: "Financial Literacy Workshop",
        description: "Learn essential financial skills including budgeting, investing, and entrepreneurship fundamentals.",
        date: "January 5, 2025",
        time: "1:00 PM - 5:00 PM",
        location: "IQ Foundation HQ",
        ageGroup: "Ages 16-18",
        category: "Finance",
        createdAt: new Date(),
      },
    ];

    sampleEvents.forEach(event => {
      this.events.set(event.id, event);
    });

    // Seed founder information
    const founder: TeamMember = {
      id: "founder-1",
      name: "Nithilan Murugesan",
      title: "Founder & President",
      bio: "Passionate about empowering youth through innovative educational programs and technology-driven learning experiences.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      isFounder: "true",
      createdAt: new Date(),
    };

    this.teamMembers.set(founder.id, founder);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { 
      ...insertEvent, 
      id, 
      createdAt: new Date() 
    };
    this.events.set(id, event);
    return event;
  }

  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { 
      ...insertMember, 
      id, 
      createdAt: new Date() 
    };
    this.teamMembers.set(id, member);
    return member;
  }
}

export const storage = new MemStorage();
