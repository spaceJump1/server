import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProduct } from "../../interfaces/product";

@Schema()
export class Product extends Document implements IProduct {
    @Prop({ required: true })
    imagePath: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    currency: string;

    @Prop()
    size: string;

    @Prop({ required: true })
    id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
