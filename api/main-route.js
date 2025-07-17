import express from 'express';
import userRoute from './user-route.js';
import projectRoute from './project-route.js';

const router = express.Router();

router.use('/user',userRoute);
router.use('/project',projectRoute);


// Dinamik GET
router.get('/api/test/:id', async (req, res) => {
  res.json({
    method: 'GET',
    resource,
    data
  });
});

// Dinamik POST
router.post('/api/test/:id', (req, res) => {
  const { resource } = req.params;
  const data = req.body;

  res.json({
    method: 'POST',
    resource,
    data
  });
});

// 404 için fallback
router.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

router.use((err, req, res, next) => {
  console.error('🚨 Express Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default router;