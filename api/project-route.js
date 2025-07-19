import express from 'express';
import ObjectFactory from '../factories/ObjectFactory.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Projeler');
});

router.get('/all', async (req, res) => {

  let project = ObjectFactory.createObject("project");
  const c = await project.getAll();
  res.send(c);
});

router.post('/', (req, res) => {
  res.send('Projeler');
});

export default router;