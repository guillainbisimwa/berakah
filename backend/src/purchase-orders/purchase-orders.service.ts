import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrder, PurchaseOrderDocument } from './schemas/purchase-order.schema';

@Injectable()
export class PurchaseOrdersService {
  constructor(@InjectModel(PurchaseOrder.name) private purchaseOrderModel: Model<PurchaseOrderDocument>) {}

  async findAll(userId: string, userRole: string): Promise<PurchaseOrder[]> {
    if (userRole === 'admin' || userRole === 'staff') {
      return this.purchaseOrderModel.find().exec();
    }
    return this.purchaseOrderModel.find({ buyerId: userId }).exec();
  }

  async create(createDto: any, userId: string): Promise<PurchaseOrder> {
    const createdOrder = new this.purchaseOrderModel({ ...createDto, buyerId: userId });
    return createdOrder.save();
  }

  async pay(id: string): Promise<PurchaseOrder> {
    const order = await this.purchaseOrderModel.findById(id).exec();
    if (!order) {
      throw new NotFoundException(`PurchaseOrder #${id} not found`);
    }
    order.status = 'paid';
    return order.save();
  }
}
