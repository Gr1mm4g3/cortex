import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  boolean,
  pgEnum,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const userRoleEnum = pgEnum("user_role", ["admin", "member", "viewer"]);
export const projectStatusEnum = pgEnum("project_status", [
  "active",
  "on_hold",
  "completed",
  "archived",
]);

// Users table - synced from Clerk via webhook
export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(), // Internal UUID
    clerkId: varchar("clerk_id", { length: 255 }).notNull().unique(), // Clerk user ID
    email: varchar("email", { length: 255 }).notNull(),
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    imageUrl: varchar("image_url", { length: 500 }),
    role: userRoleEnum("role").default("member").notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("users_clerk_id_idx").on(table.clerkId),
    uniqueIndex("users_email_idx").on(table.email),
  ]
);

// Clients table
export const clients = pgTable(
  "clients",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }),
    phone: varchar("phone", { length: 50 }),
    company: varchar("company", { length: 255 }),
    address: text("address"),
    city: varchar("city", { length: 100 }),
    state: varchar("state", { length: 100 }),
    country: varchar("country", { length: 100 }),
    postalCode: varchar("postal_code", { length: 20 }),
    website: varchar("website", { length: 255 }),
    notes: text("notes"),
    createdBy: uuid("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("clients_email_idx").on(table.email),
    uniqueIndex("clients_name_idx").on(table.name),
  ]
);

// Projects table
export const projects = pgTable(
  "projects",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    status: projectStatusEnum("status").default("active").notNull(),
    clientId: uuid("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "cascade" }),
    ownerId: uuid("owner_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    startDate: timestamp("start_date", { withTimezone: true }),
    endDate: timestamp("end_date", { withTimezone: true }),
    budget: varchar("budget", { length: 50 }), // Store as string to handle currency
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex("projects_name_client_idx").on(table.name, table.clientId),
  ]
);

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  clients: many(clients, { relationName: "createdClients" }),
  ownedProjects: many(projects, { relationName: "ownedProjects" }),
}));

export const clientsRelations = relations(clients, ({ one, many }) => ({
  createdBy: one(users, {
    fields: [clients.createdBy],
    references: [users.id],
    relationName: "createdClients",
  }),
  projects: many(projects),
}));

export const projectsRelations = relations(projects, ({ one }) => ({
  client: one(clients, {
    fields: [projects.clientId],
    references: [clients.id],
  }),
  owner: one(users, {
    fields: [projects.ownerId],
    references: [users.id],
    relationName: "ownedProjects",
  }),
}));

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Client = typeof clients.$inferSelect;
export type NewClient = typeof clients.$inferInsert;

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;