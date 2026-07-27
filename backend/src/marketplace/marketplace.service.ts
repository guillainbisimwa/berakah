import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MarketplaceItem, MarketplaceItemDocument } from './schemas/marketplace-item.schema';

@Injectable()
export class MarketplaceService {
  constructor(@InjectModel(MarketplaceItem.name) private marketplaceModel: Model<MarketplaceItemDocument>) {}

  async findAll(userRole: string): Promise<MarketplaceItem[]> {
    if (userRole === 'admin' || userRole === 'staff') {
      return this.marketplaceModel.find().exec();
    }
    return this.marketplaceModel.find({ isPublished: true, inStock: true }).exec();
  }

  async create(createDto: any): Promise<MarketplaceItem> {
    const createdItem = new this.marketplaceModel(createDto);
    return createdItem.save();
  }
}
