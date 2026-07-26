import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quality, QualityDocument } from './schemas/quality.schema';

@Injectable()
export class QualityService {
  constructor(@InjectModel(Quality.name) private qualityModel: Model<QualityDocument>) {}

  async findAll(): Promise<Quality[]> {
    return this.qualityModel.find().exec();
  }

  async create(createDto: any): Promise<Quality> {
    const createdItem = new this.qualityModel(createDto);
    return createdItem.save();
  }

  async update(id: string, updateDto: any): Promise<Quality> {
    const existingItem = await this.qualityModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!existingItem) {
      throw new NotFoundException(`Quality record #${id} not found`);
    }
    return existingItem;
  }
}
