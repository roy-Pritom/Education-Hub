import express from 'express';
import { validateRequest } from '../../middleWares/validateRequest';
import { ProductValidationSchemas } from './product.validation';
import { ProductControllers } from './product.controller';
const router=express.Router();

router.post('/',validateRequest(ProductValidationSchemas.createProductValidationSchema),ProductControllers.createProduct)

router.get('/',ProductControllers.getAllProduct)

router.get('/:productId',ProductControllers.getSingleProduct)

router.put('/:productId',validateRequest(ProductValidationSchemas.updateProductValidationSchema),ProductControllers.updateProduct)

router.delete('/:productId',ProductControllers.removeProduct)
router.post('/delete-products',ProductControllers.removeProducts)


export const ProductRoutes=router;