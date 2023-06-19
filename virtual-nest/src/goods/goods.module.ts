import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandEntity } from './entity/brand.entity';
import { CategoryEntity } from './entity/category.entity';
import { SpecGroupEntity } from './entity/spec-group.entity';
import { SpecParamEntity } from './entity/spec-param.entity';
import { StandardProductUnitEntity } from './entity/standard-product-unit.entity';
import { StockKeepingUnitEntity } from './entity/stock-keeping-unit.entity';
import { BrandService } from './service/brand.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BrandEntity,
      CategoryEntity,
      SpecGroupEntity,
      SpecParamEntity,
      StandardProductUnitEntity,
      StockKeepingUnitEntity,
    ]),
  ],
  providers: [BrandService],
})
export class GoodsModule {}