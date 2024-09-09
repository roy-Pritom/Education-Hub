import { Types } from "mongoose";

 export type TSale={
    productId:Types.ObjectId;
    quantity:number; 
    buyerName: string;
    date:Date;
 }