import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config(); // Load .env file variables

export default defineConfig({
  schema: './src/lib/db/schema.ts', // Path to your schema file
  dialect: 'postgresql', // Set the dialect to 'postgresql'
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use the DATABASE_URL from the .env file
  },
});
