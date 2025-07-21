import express from 'express';
import UserUseCase from '../usercases/user.usecase.js';

const router = express.Router();

router.get('/:id', UserUseCase.GetUser);

export default router;