import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stock, StockDocument } from './schemas/stock.schema';

@Injectable()
export class StockService {
  constructor(@InjectModel(Stock.name) private stockModel: Model<StockDocument>) {}

  async findAll(category?: string, qualityStatus?: string): Promise<Stock[]> {
    const query: any = {};
    if (category) query.category = category;
    if (qualityStatus) query.qualityStatus = qualityStatus;
    
    return this.stockModel.find(query).exec();
  }

  async create(createDto: any): Promise<Stock> {
    const createdItem = new this.stockModel(createDto);
    return createdItem.save();
  }

  async update(id: string, updateDto: any): Promise<Stock> {
    const existingItem = await this.stockModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!existingItem) {
      throw new NotFoundException(`Stock item #${id} not found`);
    }
    return existingItem;
  }
}
