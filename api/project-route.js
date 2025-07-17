import express from 'express';
import Project from '../app/project.js';
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Projeler');
});

router.get('/all', async (req, res) => {
  let project = new Project();
  const c = await project.getAll();
  res.send(c);
});

router.post('/', (req, res) => {
  res.send('Projeler');
});

export default router;