import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {StoreModule} from "./product/store.module";
import {OrderModule} from "./orders/order/order.module";

@Module({
    imports: [
        StoreModule,
        OrderModule,
        MongooseModule.forRoot('mongodb://localhost:27017/product')],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
