import express from 'express';
import ProjectController from '../controller/project.controller.js';

const router = express.Router();

router.get('/all', ProjectController.GetAllProjectHandler);

// router.post('/', (req, res) => {
//   res.send('Projeler');
// });

export default router;