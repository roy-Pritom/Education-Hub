import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SaleServices } from "./sale.service";

const createSale = catchAsync(async (req, res) => {
    const result = await SaleServices.createSaleIntoDb(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Sale item created successfully",
        data: result
    })
})
const getAllSale = catchAsync(async (req, res) => {
    const result = await SaleServices.getAllSaleFromDb(req.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Sales retrieved successfully",
        data: result
    })
})

export const SaleControllers = {
    createSale,
    getAllSale,

}