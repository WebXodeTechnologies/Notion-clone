import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'; // Import specific PostgreSQL support

dotenv.config({
  path: '.env',
});

const config: Config = {
  driver: 'pg', // Using PostgreSQL driver
  schema: './src/lib/db/schema.ts', // Path to your schema file
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // DATABASE_URL from .env
  },
};

export default config;
