import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { StatsModule } from './stats/stats.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { DryersModule } from './dryers/dryers.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { QualityModule } from './quality/quality.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/berakah'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads/',
    }),
    UsersModule, 
    ProductsModule, 
    OrdersModule, 
    StatsModule, 
    PostsModule, AuthModule, DryersModule, MarketplaceModule, PurchaseOrdersModule, QualityModule, StockModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
