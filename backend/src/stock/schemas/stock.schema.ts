import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  quantityKg: number;

  @Prop({ required: true })
  qualityStatus: string;

  @Prop({ required: true })
  location: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
