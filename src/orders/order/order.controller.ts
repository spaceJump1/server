import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { OrderService } from '../../services/order/order.service';
import { Order } from '../../orders/schemas/order';

@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    async createOrder(@Body('items') items: any[], @Body('feedback') feedback: any): Promise<Order> {
        const createdOrder = await this.orderService.createOrder(items, feedback);
        return createdOrder;
    }
}
