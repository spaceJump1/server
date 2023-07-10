import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import { InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Product} from "../../schemas/product";

@Controller('store')
export class StoreController {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {
    }

    @Get()
    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
}
