import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ message: 'Invalid team member ID' });
    return;
  }

  try {
    if (req.method === 'GET') {
      const member = await storage.getTeamMember(id);
      if (!member) {
        res.status(404).json({ message: 'Team member not found' });
        return;
      }
      res.status(200).json(member);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Team member API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}