import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DryersController } from './dryers.controller';
import { DryersService } from './dryers.service';
import { Dryer, DryerSchema } from './schemas/dryer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dryer.name, schema: DryerSchema }])],
  controllers: [DryersController],
  providers: [DryersService],
})
export class DryersModule {}
