# IQ Foundation Website

## Overview

This is a modern, full-stack web application for the IQ Foundation, an educational organization focused on empowering youth through innovative STEM education, AI, computer-aided design, chess, finance, and other learning programs. The application serves as the foundation's primary web presence, featuring information about their mission, upcoming events, team members, and ways for users to get involved through participation, volunteering, sponsoring, or partnering.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Events, Team, Missions, and Join Us
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a clean white background with black text and light orange accent colors
- **Animations**: Custom scroll-triggered animations and typewriter effects for enhanced user experience
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Typography**: Poppins font family for modern, professional appearance

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for events and team member management
- **Development Server**: Vite integration for hot module replacement during development
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for runtime type validation of API requests and responses

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Tables**:
  - `users`: User authentication (id, username, password)
  - `events`: Event management (id, title, description, date, time, location, age_group, category)
  - `team_members`: Team member profiles (id, name, title, bio, image_url, is_founder)
- **Schema Validation**: Drizzle-Zod integration for type-safe schema definitions

### Component Architecture
- **Reusable Components**: EventCard, TeamMember, TypewriterText, AnimatedSection for consistent UI patterns
- **Layout Components**: Header with navigation and search, Footer with contact information and social links
- **Page Components**: Dedicated components for each route with proper data fetching and error handling
- **Custom Hooks**: useScrollAnimation for intersection observer-based animations, standard React hooks for state management

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL) with `@neondatabase/serverless` driver
- **Session Storage**: PostgreSQL-based sessions using `connect-pg-simple`
- **UI Library**: Radix UI primitives for accessible, unstyled components
- **Animation**: Embla Carousel for image carousels and content sliders
- **Form Handling**: React Hook Form with Hookform Resolvers for validation
- **Date Utilities**: date-fns for date formatting and manipulation

### Development Tools
- **Build System**: Vite with React plugin and Replit-specific plugins for development environment
- **Database Management**: Drizzle Kit for schema migrations and database operations
- **Type System**: TypeScript with strict configuration and path mapping
- **Code Quality**: ESBuild for production bundling, PostCSS for CSS processing

### Styling and Design
- **CSS Framework**: Tailwind CSS with custom configuration for design system
- **Component Variants**: class-variance-authority for consistent component styling
- **Utility Libraries**: clsx for conditional class names, tailwind-merge for class deduplication
- **Icons**: Lucide React for consistent iconography throughout the application