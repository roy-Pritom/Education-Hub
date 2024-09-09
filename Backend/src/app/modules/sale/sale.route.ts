import express from 'express';
import { validateRequest } from '../../middleWares/validateRequest';
import { SaleValidationSchemas } from './sale.validation';
import { SaleControllers } from './sale.controller';


const router=express.Router();

router.post('/',validateRequest(SaleValidationSchemas.saleValidationSchema),SaleControllers.createSale);

router.get('/',SaleControllers.getAllSale)

export const SaleRoutes=router;