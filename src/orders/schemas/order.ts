import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
    @Prop({ required: true, type: [{ type: Object }] })
    items: any[];

    @Prop({ required: true, type: Object })
    feedback: any;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
