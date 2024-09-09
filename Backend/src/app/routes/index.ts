import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/product/product.route';
import { SaleRoutes } from '../modules/sale/sale.route';

const router = express.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/product',
        route: ProductRoutes
    },
    {
        path: '/sale',
        route: SaleRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;