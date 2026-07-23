import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

class LocalizedContent {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop([String])
  specs: string[];
}

class Content {
  @Prop({ type: LocalizedContent, required: true })
  fr: LocalizedContent;

  @Prop({ type: LocalizedContent, required: true })
  en: LocalizedContent;
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  weight: string;

  @Prop({ type: Content, required: true })
  content: Content;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    (returnedObject as any).id = (returnedObject as any)._id.toString();
    delete (returnedObject as any)._id;
    delete (returnedObject as any).__v;
  }
});
