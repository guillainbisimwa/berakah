import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DryingSessionDocument = DryingSession & Document;

@Schema({ timestamps: true })
export class DryingSession {
  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  quantityKg: number;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;
}
export const DryingSessionSchema = SchemaFactory.createForClass(DryingSession);

export type DryerDocument = Dryer & Document;

@Schema({ timestamps: true })
export class Dryer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  targetTemperature: number;

  @Prop()
  productCategory: string;

  @Prop()
  currentProduct: string;

  @Prop({ enum: ['active', 'pause', 'done', 'offline'], default: 'offline' })
  status: string;

  @Prop({ default: 0 })
  temperature: number;

  @Prop({ default: 0 })
  humidity: number;

  @Prop({ default: 0 })
  solarEfficiency: number;

  @Prop()
  lotId: string;

  @Prop({ type: [DryingSessionSchema], default: [] })
  sessions: DryingSession[];
}

export const DryerSchema = SchemaFactory.createForClass(Dryer);
