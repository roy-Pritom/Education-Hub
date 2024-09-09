import { z } from "zod";

const createProductValidationSchema=z.object({
    body:z.object({
        name: z.string(),
        price: z.number().positive(),
        stockQuantity: z.number().int().nonnegative(),
        category: z.string(),
        brand: z.string(),
        compatibility:z.string(),
        interfaceType: z.string(),
        condition: z.enum(["new", "used"]),
        capacity: z.string().optional(),
        color: z.string().optional()
    })
})
const updateProductValidationSchema=z.object({
    body:z.object({
        name: z.string().optional(),
        price: z.number().positive().optional(),
        stockQuantity: z.number().int().optional(),
        category: z.string().optional(),
        brand: z.string().optional(),
        compatibility: z.string().optional(),
        interfaceType: z.string().optional(),
        condition: z.enum(["new", "used"]).optional(),
        capacity: z.string().optional(),
        color: z.string().optional()
    })
})


export const ProductValidationSchemas={
    createProductValidationSchema,
    updateProductValidationSchema

}