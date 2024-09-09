import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Product } from "../product/product.model"
import { TSale } from "./sale.interface"
import { Sale } from "./sale.model";
import { generateTimePeriodAggregation } from "./sale.util";

const createSaleIntoDb = async (payload: TSale) => {
    const product = await Product.isProductExistById(payload.productId);
    // check product exist or not
    if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, "Product Not Exist!");
    }
    // check stock
    if (product.stockQuantity < payload.quantity) {
        throw new AppError(httpStatus.BAD_REQUEST, "Not enough stock available")
    }
    product.stockQuantity = product?.stockQuantity - payload?.quantity;
    // console.log(product.stockQuantity,payload.quantity);
     
    const result = await Sale.create(payload);

    if(product.stockQuantity===0){
        await Product.findByIdAndDelete(payload.productId)
     }
     else{
        await product.save()
     }

    return result;
}

const getAllSaleFromDb = async (param: Record<string, unknown>) => {
    let result;
    if (param.history==='daily') {
        result = await Sale.aggregate(generateTimePeriodAggregation('day'));
    } else if (param.history==='monthly') {
        result = await Sale.aggregate(generateTimePeriodAggregation('month'));
    } else if (param.history==='yearly') {
        result = await Sale.aggregate(generateTimePeriodAggregation('year'));
    } else if (param.history==='weekly') {
        result = await Sale.aggregate(generateTimePeriodAggregation('week'));
    } else {
        result = await Sale.find();
    }
    return result;
}





export const SaleServices = {
    createSaleIntoDb,
    getAllSaleFromDb,
}