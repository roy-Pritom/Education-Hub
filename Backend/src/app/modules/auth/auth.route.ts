import express from 'express';
import { validateRequest } from '../../middleWares/validateRequest';
import { AuthValidationSchemas } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router=express.Router();

router.post('/login',validateRequest(AuthValidationSchemas.loginValidationSchema),AuthControllers.loginUser)


export const AuthRoutes=router;