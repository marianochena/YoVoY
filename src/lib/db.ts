import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error', 'warn'],
    errorFormat: 'minimal',
  });
};

export const prisma = globalThis.prisma ?? prismaClientSingleton();

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully to Railway');
    
    // Verify connection with a simple query
    const result = await prisma.$queryRaw`SELECT 1+1 AS result`;
    console.log('✅ Database query test successful');
    
    return prisma;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}