import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './orm.config';
import { GoodsModule } from './goods/goods.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './common/guard/jwt.guard';
import { JwtStrategy } from './auth/jwt.strategy';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(ormconfig), GoodsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    JwtStrategy,
  ],
})
export class AppModule {}
