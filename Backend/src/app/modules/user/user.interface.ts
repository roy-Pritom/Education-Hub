import { Model } from "mongoose";

export type TUser={
    firstName:string;
    lastName:string;
    gender:'male' | 'female';
    email:string;
    password:string;
    type:'myself' | 'business';
    isDeleted:boolean;
}

export interface UserModel extends Model<TUser> {
    isUserExistByEmail(email:string):Promise<TUser>;
    isPasswordMatched(plainPassword:string,hashPassword:string):Promise<boolean>
  }