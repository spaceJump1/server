import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderService } from '../../services/order/order.service';
import { OrderSchema } from "../schemas/order";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    ],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}
