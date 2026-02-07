import { defineConfig } from 'prisma/config';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '../../.env' });

export default defineConfig({
  schema: './schema.prisma',
  migrations: {
    path: './migrations',
  },
  earlyAccess: true,
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
