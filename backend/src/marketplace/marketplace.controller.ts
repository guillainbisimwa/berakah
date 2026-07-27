import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('marketplace')
@UseGuards(JwtAuthGuard)
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get()
  findAll(@Req() req) {
    const userRole = req.user.role;
    return this.marketplaceService.findAll(userRole);
  }

  @Post()
  create(@Body() createDto: any) {
    return this.marketplaceService.create(createDto);
  }
}
