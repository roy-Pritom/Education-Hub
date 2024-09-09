import { TUser } from "./user.interface";
import { User } from "./user.model"

const createUserInToDb=async(payload:TUser)=>{
  const result=await User.create(payload);
  return result;
}
const getAllUserFromDb=async()=>{
  const result=await User.find().select('-password');
  return result;
}


export const UserServices={
    createUserInToDb,
    getAllUserFromDb,

}