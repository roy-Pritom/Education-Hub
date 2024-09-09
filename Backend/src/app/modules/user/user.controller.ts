import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser=catchAsync(async(req,res)=>{
  const result=await UserServices.createUserInToDb(req.body);
  sendResponse(res,{
    success:true,
    statusCode:201,
    message:"user register successfully",
    data:result
  })
})
const getAllUser=catchAsync(async(req,res)=>{
  const result=await UserServices.getAllUserFromDb();
  sendResponse(res,{
    success:true,
    statusCode:200,
    message:"user fetch successfully",
    data:result
  })
})


export const UserControllers={
    createUser,
    getAllUser
}