import { Controller, Get, Post, Body, Patch, Param, Query, UseGuards } from '@nestjs/common';
import { StockService } from './stock.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('stock')
@UseGuards(JwtAuthGuard)
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(@Query('category') category: string, @Query('qualityStatus') qualityStatus: string) {
    return this.stockService.findAll(category, qualityStatus);
  }

  @Post()
  create(@Body() createDto: any) {
    return this.stockService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.stockService.update(id, updateDto);
  }
}
