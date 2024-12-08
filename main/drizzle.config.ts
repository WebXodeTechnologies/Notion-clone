import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle', // Output directory for generated types
  schema: './src/lib/db/schema.ts', // Path to your schema file
  dialect: 'postgresql', // Set the dialect to 'postgresql'
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use the DATABASE_URL from the .env file
  },
});
