import {Module} from '@nestjs/common';
import {StoreController} from "./controller/store/store.controller";
import {StoreService} from "../services/store/store.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schemas/product";

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
    controllers: [StoreController],
    providers: [StoreService],
})
export class StoreModule {
}
