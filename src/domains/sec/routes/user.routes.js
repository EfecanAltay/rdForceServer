import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Tüm kullanıcılar');
});

router.get('/:id', (req, res) => {
  res.send(`Kullanıcı ID: ${req.params.id}`);
});

export default router;