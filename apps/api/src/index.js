import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from 'database';

dotenv.config({ path: '../../../.env' });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', database: 'connected' });
});

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
