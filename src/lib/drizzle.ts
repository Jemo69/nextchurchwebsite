import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTHTOKEN;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

const client = createClient({
  url: connectionString,
  authToken: authToken,
});

export const db = drizzle(client, { schema });
