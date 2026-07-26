import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  quantityKg: number;

  @Prop({ required: true })
  clientName: string;

  @Prop({ enum: ['en_attente', 'en_sechage', 'terminee', 'annulee'], default: 'en_attente' })
  status: string;

  @Prop({ default: 0, min: 0, max: 100 })
  progress: number;

  @Prop()
  dryerId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
