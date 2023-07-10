import { Injectable } from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import { Model} from "mongoose";
import {Product} from "../../product/schemas/product";

@Injectable()
export class StoreService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    }

    async getAllProducts(): Promise<{ id: string }[]> {
        const products = await this.productModel.find().exec();
        return products.map(product => ({
            ...product.toJSON(),
            id: product.id.toString()
        }));
    }

    createProduct(productData: Product, imagePath: string): Promise<Product> {
        const createdProduct = new this.productModel({
            ...productData,
            imagePath: imagePath,
        });
        return createdProduct.save();
    }

    getProductById(id: string): Promise<Product> {
        return this.productModel.findById(id).exec();
    }
}
