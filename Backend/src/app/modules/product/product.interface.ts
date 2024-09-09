/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from "mongoose";

export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  category: string; 
  brand: string;
  compatibility: string; 
  interfaceType: string; 
  condition: 'new' | 'used';
  capacity?: string; 
  color?: string; 
  save?: any;
}

export interface ProductModel extends Model<TProduct> {
  isProductExistById(id: any): Promise<TProduct>
} 