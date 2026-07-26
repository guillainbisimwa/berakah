import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dryer, DryerDocument } from './schemas/dryer.schema';

@Injectable()
export class DryersService {
  constructor(@InjectModel(Dryer.name) private dryerModel: Model<DryerDocument>) {}

  async findAll(): Promise<Dryer[]> {
    return this.dryerModel.find().exec();
  }

  async findOne(id: string): Promise<Dryer> {
    const dryer = await this.dryerModel.findById(id).exec();
    if (!dryer) {
      throw new NotFoundException(`Dryer #${id} not found`);
    }
    return dryer;
  }

  async create(createDryerDto: any): Promise<Dryer> {
    const createdDryer = new this.dryerModel(createDryerDto);
    return createdDryer.save();
  }

  async update(id: string, updateDryerDto: any): Promise<Dryer> {
    const existingDryer = await this.dryerModel.findByIdAndUpdate(id, updateDryerDto, { new: true }).exec();
    if (!existingDryer) {
      throw new NotFoundException(`Dryer #${id} not found`);
    }
    return existingDryer;
  }

  async remove(id: string): Promise<Dryer> {
    const deletedDryer = await this.dryerModel.findByIdAndDelete(id).exec();
    if (!deletedDryer) {
      throw new NotFoundException(`Dryer #${id} not found`);
    }
    return deletedDryer;
  }

  async addSession(id: string, sessionDto: any): Promise<Dryer> {
    const dryer = await this.findOne(id);
    dryer.sessions.push(sessionDto);
    return dryer.save();
  }

  async getSessions(id: string): Promise<any[]> {
    const dryer = await this.findOne(id);
    return dryer.sessions;
  }
}
