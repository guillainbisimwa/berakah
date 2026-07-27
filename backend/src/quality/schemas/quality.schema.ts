import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QualityDocument = Quality & Document;

@Schema({ timestamps: true })
export class Quality {
  @Prop({ required: true })
  lotId: string;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  harvestDate: Date;

  @Prop({ required: true })
  dryingDate: Date;

  @Prop({ required: true })
  inspectionDate: Date;

  @Prop({ required: true })
  moistureLevel: number;

  @Prop({ required: true })
  inspector: string;

  @Prop({ default: 'pending' })
  status: string;

  @Prop()
  notes: string;
}

export const QualitySchema = SchemaFactory.createForClass(Quality);
