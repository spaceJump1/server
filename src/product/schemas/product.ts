import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
    @Prop({required: true})
    imagePath: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    currency: string;

    @Prop()
    size: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
