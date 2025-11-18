import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const Status = ['DRAFT', 'PUBLISHED'] as const;

export const Post = sqliteTable('Post', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  Status: text('Status', { enum: Status }).notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const PrayerRequest = sqliteTable('PrayerRequest', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
});

export const EmailContact = sqliteTable('EmailContact', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  is_subscriber: integer('is_subscriber', { mode: 'boolean' }).notNull(),
});

export const NewletterPost = sqliteTable('NewletterPost', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  status: text('status', { enum: Status }).notNull(),
  content: text('content').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const Questions = sqliteTable('Questions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  question: text('question').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export const Aboutme = sqliteTable('Aboutme', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  message: text('message').notNull(),
});

export const User = sqliteTable('User', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});
