import express from 'express';
import { UserControllers } from './user.controller';
import { validateRequest } from '../../middleWares/validateRequest';
import { userValidationSchemas } from './user.validation';

const router=express.Router();

router.post('/register',validateRequest(userValidationSchemas.userValidationSchema),UserControllers.createUser);

router.get('/',UserControllers.getAllUser);

export const userRoutes=router;