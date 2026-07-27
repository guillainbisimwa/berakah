import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  async create(createDto: any): Promise<Order> {
    const createdItem = new this.orderModel(createDto);
    return createdItem.save();
  }

  async update(id: string, updateDto: any): Promise<Order> {
    const existingItem = await this.orderModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!existingItem) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return existingItem;
  }
}
