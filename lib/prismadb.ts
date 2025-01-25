// Import PrismaClient from the Prisma package
import { PrismaClient } from '@prisma/client';

// Declare a global variable to store the PrismaClient instance
declare global {
  // Add a type declaration for 'prisma' in the global namespace
  // This ensures TypeScript knows 'prisma' exists on the global object
  var prisma: PrismaClient | undefined;
}

// Create a PrismaClient instance or reuse the existing one
// `globalThis.prisma` is used to check if an instance already exists
const prismadb = globalThis.prisma || new PrismaClient();

// In production, store the PrismaClient instance on the global object
// This ensures a single instance is reused throughout the application
if (process.env.NODE_ENV === 'production') {
  globalThis.prisma = prismadb;
}

// Export the PrismaClient instance so it can be used across the application
ex
