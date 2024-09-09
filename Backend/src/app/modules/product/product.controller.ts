import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductInToDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Product created successfully",
        data: result
    })
})
const getAllProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductFromDb(req.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product retrieved successfully",
        data: result
    })
})
const updateProduct = catchAsync(async (req, res) => {
    const {productId}=req.params;
    const result = await ProductServices.updateProductFromDb(productId,req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product updated successfully",
        data: result
    })
})
const removeProduct = catchAsync(async (req, res) => {
    const {productId}=req.params;
    const result = await ProductServices.removeProductFromDb(productId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product deleted successfully",
        data: result
    })
})
const removeProducts = catchAsync(async (req, res) => {
    // const {productId}=req.params;
    const productIds: string[] = req.body.productIds;
    const result = await ProductServices.removeProductsFromDb(productIds);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Products deleted successfully",
        data: result
    })
})
const getSingleProduct = catchAsync(async (req, res) => {
    const {productId}=req.params;
    const result = await ProductServices.getSingleProductFromDb(productId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product retrieved successfully",
        data: result
    })
})

export const ProductControllers = {
    createProduct,
    getAllProduct,
    updateProduct,
    removeProduct,
    removeProducts,
    getSingleProduct

}