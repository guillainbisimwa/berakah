import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DryersService } from './dryers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('dryers')
@UseGuards(JwtAuthGuard)
export class DryersController {
  constructor(private readonly dryersService: DryersService) {}

  @Post()
  create(@Body() createDryerDto: any) {
    return this.dryersService.create(createDryerDto);
  }

  @Get()
  findAll() {
    return this.dryersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dryersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDryerDto: any) {
    return this.dryersService.update(id, updateDryerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dryersService.remove(id);
  }

  @Get(':id/sessions')
  getSessions(@Param('id') id: string) {
    return this.dryersService.getSessions(id);
  }

  @Post(':id/sessions')
  addSession(@Param('id') id: string, @Body() sessionDto: any) {
    return this.dryersService.addSession(id, sessionDto);
  }
}
