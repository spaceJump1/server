import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../../orders/schemas/order';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<Order>
    ) {}

    createOrder(items: any[], feedback: any): Promise<Order> {
        const createdOrder = new this.orderModel({ items, feedback });
        return createdOrder.save();
    }
}
