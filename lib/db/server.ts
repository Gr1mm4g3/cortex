import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Singleton pattern for the database connection pool
let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }
  return pool;
}

// Create the Drizzle instance
export const db = drizzle(getPool(), { schema });

// Export schema for use in other files
export * from "./schema";

// Helper function to test the connection
export async function testConnection(): Promise<boolean> {
  try {
    const client = await getPool().connect();
    client.release();
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}