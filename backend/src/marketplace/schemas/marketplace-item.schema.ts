import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarketplaceItemDocument = MarketplaceItem & Document;

@Schema({ timestamps: true })
export class MarketplaceItem {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: true })
  isPublished: boolean;

  @Prop({ default: true })
  inStock: boolean;
}

export const MarketplaceItemSchema = SchemaFactory.createForClass(MarketplaceItem);
