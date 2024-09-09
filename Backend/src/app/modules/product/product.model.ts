import { Schema, model } from "mongoose";
import { ProductModel, TProduct } from "./product.interface";

const productSchema = new Schema<TProduct, ProductModel>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    compatibility: {
        type:String,
        required:true
    },
    interfaceType: {
        type: String
    },
    condition: {
        type: String,
        enum: ['new', 'used'],
        required: true
    },
    capacity: {
        type: String
    },
    color: {
        type: String
    }

},{
    timestamps:true
});

// static method
productSchema.statics.isProductExistById = async function (id) {
    return await Product.findById(id)
}

export const Product = model<TProduct, ProductModel>('Product', productSchema)
