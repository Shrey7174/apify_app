// index.js
import express from 'express';
import cors from 'cors';

import actorsRoute from './routes/actors.js';
import schemaRoute from './routes/schema.js';
import runRoute from './routes/run.js';

const app = express();
const PORT = process.env.PORT || 5002;


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());


app.use('/api/actors', actorsRoute);
app.use('/api/schema', schemaRoute);
app.use('/api/run', runRoute);


app.get('/', (req, res) => {
  res.json({ message: '🚀 Apify Backend is running!' });
});


app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
