# Vercel Deployment Guide

This project has been refactored to support deployment on Vercel with a static React frontend and serverless API functions.

## Project Structure

```
├── client/                 # React frontend source code
├── api/                   # Vercel serverless functions
│   ├── events.ts         # Events API endpoint
│   ├── events/[id].ts    # Individual event API endpoint
│   ├── team.ts           # Team API endpoint
│   └── team/[id].ts      # Individual team member API endpoint
├── server/               # Original Express server (for local development)
├── shared/               # Shared TypeScript schemas
├── dist/public/          # Built static frontend (generated)
├── vercel.json          # Vercel configuration
└── package.json
```

## Deployment Instructions

### 1. Build Configuration

The project uses a custom build script for Vercel:
- `npm run build:vercel` - Builds only the frontend for static hosting
- The frontend is built to `dist/public/` directory

### 2. Vercel Configuration

Set the following in your Vercel project settings:

**Build & Output Settings:**
- Build Command: `npm run build:vercel`
- Output Directory: `dist/public`
- Install Command: `npm install`

**Environment Variables:**
Add these environment variables in your Vercel dashboard:
- `DATABASE_URL` - Your PostgreSQL database connection string
- Any other environment variables your app needs

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

#### Option B: GitHub Integration
1. Connect your GitHub repository to Vercel
2. Set the root directory to your project folder
3. Configure the build settings as described above
4. Deploy automatically on push to main branch

### 4. API Endpoints

After deployment, your API will be available at:
- `https://your-app.vercel.app/api/events` - GET all events, POST new event
- `https://your-app.vercel.app/api/events/[id]` - GET specific event
- `https://your-app.vercel.app/api/team` - GET all team members, POST new member
- `https://your-app.vercel.app/api/team/[id]` - GET specific team member

### 5. Frontend Routes

The frontend supports client-side routing with the following pages:
- `/` - Home page
- `/about` - About page
- `/events` - Events listing with filtering
- `/volunteer` - Volunteer opportunities with filtering
- `/team` - Team page
- `/programs/*` - Various program pages
- And more...

## Local Development vs Production

- **Local Development**: Uses Express server (`npm run dev`)
- **Vercel Production**: Uses serverless functions + static hosting

## Database

The serverless functions connect to your PostgreSQL database using the `DATABASE_URL` environment variable. Make sure to set this in your Vercel environment variables.

## Troubleshooting

1. **Build Failures**: Check that all dependencies are in `package.json`
2. **API Errors**: Verify environment variables are set correctly in Vercel
3. **Database Issues**: Ensure `DATABASE_URL` is properly configured
4. **Routing Issues**: The `vercel.json` config handles client-side routing