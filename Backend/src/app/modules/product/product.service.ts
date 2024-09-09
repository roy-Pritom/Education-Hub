/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "./product.interface";
import { Product } from "./product.model";
import AppError from "../../error/AppError";
import httpStatus from "http-status";


const createProductInToDb = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
}
const getAllProductFromDb = async (params: Record<string, unknown>) => {
    const pipeline: any = [];
    const match: any = {};
    // search product by name
    if (params?.name) {
        match.name = {
            $regex: params.name as string,
            $options: 'i'
        }
    }
    // filter by price range
    if (params?.minPrice || params?.maxPrice) {
        match.price = {
            $gte: parseFloat(params?.minPrice as string) || 0,
            $lte: parseFloat(params?.maxPrice as string) || Infinity
        }
    }

    // filter by category
    if (params?.category) {
        match.category = {
            $eq: params?.category
        }
    }

    // filter by brand
    if (params?.brand) {
        match.brand = {
            $eq: params?.brand
        }
    }

    //filter by condition
    if (params?.condition) {
        match.condition = {
            $eq: params?.condition
        }
    }
    //filter by capacity
    if (params?.capacity) {
        match.capacity = {
            $eq: params?.capacity
        }
    }
    //filter by color
    if (params?.color) {
        match.color = {
            $eq: params?.color
        }
    }
    //filter by Compatibility
    if (params?.compatibility) {
        match.compatibility = {
            $eq: params?.compatibility
        }
    }
    //filter by Interface
    if (params?.interfaceType) {
        match.interfaceType = {
            $eq: params?.interfaceType
        }
    }

    pipeline.push({ $match: match })


    const result = await Product.aggregate(pipeline);
    return result;
}

const updateProductFromDb = async (productId: string, payload: Partial<TProduct>) => {
    
       if(!await Product.isProductExistById(productId)){
        throw new AppError(404, 'product not exist!')
       }
        const updateProduct = await Product.findByIdAndUpdate(productId, payload, {
            new: true,
            runValidators: true
        })
        if (!updateProduct) {
            throw new AppError(400, 'product updated failed')
        }
}

const removeProductFromDb = async (productId: string) => {
    const result = await Product.findByIdAndDelete(productId);
    return result;
}
const removeProductsFromDb = async (productIds: string[]) => {
    const result = await Product.deleteMany({_id:{$in:productIds}});
    return result;
}

const getSingleProductFromDb = async (productId: string) => {
    if(!await Product.isProductExistById(productId)){
        throw new AppError(httpStatus.NOT_FOUND,'Product not exist!')
    }
    const result = await Product.findById(productId);
    return result;
}


export const ProductServices = {
    createProductInToDb,
    getAllProductFromDb,
    updateProductFromDb,
    removeProductFromDb,
    getSingleProductFromDb,
    removeProductsFromDb
}