import { connectDB, prisma } from './config/database';

async function testConnection() {
  try {
    await connectDB();
    
    // Test creating a user
    const testUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'hashedpassword123',
        firstName: 'Test',
        lastName: 'User',
        phoneNumber: '+5491122334455',
        dni: '12345678'
      }
    });
    
    console.log('✅ Test user created:', testUser.id);
    
    // Clean up
    await prisma.user.delete({
      where: { id: testUser.id }
    });
    
    console.log('✅ Test user deleted');
    console.log('✅ Database connection and operations successful');
    
    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Database test failed:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

testConnection();