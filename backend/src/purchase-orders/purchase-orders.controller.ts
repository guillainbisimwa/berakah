import { Controller, Get, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('purchase-orders')
@UseGuards(JwtAuthGuard)
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Get()
  findAll(@Req() req) {
    const userId = req.user.sub || req.user.id || req.user._id;
    const userRole = req.user.role;
    return this.purchaseOrdersService.findAll(userId, userRole);
  }

  @Post()
  create(@Req() req, @Body() createDto: any) {
    const userId = req.user.sub || req.user.id || req.user._id;
    return this.purchaseOrdersService.create(createDto, userId);
  }

  @Post(':id/pay')
  pay(@Param('id') id: string) {
    return this.purchaseOrdersService.pay(id);
  }
}
