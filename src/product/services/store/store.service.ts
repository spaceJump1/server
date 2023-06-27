import { Injectable } from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import { Model} from "mongoose";
import {Product} from "../../schemas/product";

@Injectable()
export class StoreService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    }

    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async createProduct(productData: Product, imagePath: string): Promise<Product> {
        const createdProduct = new this.productModel({
            ...productData,
            imagePath: imagePath,
        });
        return createdProduct.save();
    }
}
