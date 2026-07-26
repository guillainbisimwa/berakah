import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QualityController } from './quality.controller';
import { QualityService } from './quality.service';
import { Quality, QualitySchema } from './schemas/quality.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Quality.name, schema: QualitySchema }])],
  controllers: [QualityController],
  providers: [QualityService],
})
export class QualityModule {}
