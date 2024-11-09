import express from 'express';
import cors from 'cors';
import { prisma, connectDB } from '../lib/db';
import routes from './routes';
import { AppError, handleError } from './utils/errors';

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yovoy.vercel.app', 'https://yovoy-app.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:4173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Routes
app.use('/api', routes);

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      error: process.env.NODE_ENV === 'production' ? 'Database error' : error
    });
  }
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  handleError(err);
  
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message
    });
  }

  res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// Start server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`📍 Local: http://localhost:${port}`);
      console.log(`🏥 Health check: http://localhost:${port}/health`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });