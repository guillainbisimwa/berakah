import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { StatsModule } from './stats/stats.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, StatsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
