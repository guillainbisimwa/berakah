import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { QualityService } from './quality.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/quality')
@UseGuards(JwtAuthGuard)
export class QualityController {
  constructor(private readonly qualityService: QualityService) {}

  @Get()
  findAll() {
    return this.qualityService.findAll();
  }

  @Post()
  create(@Body() createDto: any) {
    return this.qualityService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.qualityService.update(id, updateDto);
  }
}
