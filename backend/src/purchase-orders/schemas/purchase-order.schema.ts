import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseOrderDocument = PurchaseOrder & Document;

@Schema({ timestamps: true })
export class PurchaseOrder {
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  buyerId: string;

  @Prop({ enum: ['pending', 'paid', 'shipped', 'completed', 'cancelled'], default: 'pending' })
  status: string;
}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);
