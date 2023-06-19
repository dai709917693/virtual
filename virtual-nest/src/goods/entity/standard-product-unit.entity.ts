import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { BrandEntity } from './brand.entity';
import { SpecGroupEntity } from './spec-group.entity';
import { StockKeepingUnitEntity } from './stock-keeping-unit.entity';

/** 标准产品单元 */
@Entity()
export class StandardProductUnitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subTitle: string;

  /** 是否上架 */
  @Column({ type: 'boolean' })
  saleable: string;

  /** 是否有效 */
  @Column({ type: 'boolean' })
  valid: string;

  @CreateDateColumn()
  createTime: string;

  @UpdateDateColumn()
  lastUpdateTime: string;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @ManyToOne(() => CategoryEntity, (item) => item.spu)
  @JoinColumn()
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (item) => item.spu)
  @JoinColumn()
  brand: BrandEntity;

  @ManyToOne(() => SpecGroupEntity, (item) => item.spu)
  @JoinColumn()
  spg: SpecGroupEntity;

  @OneToMany(() => StockKeepingUnitEntity, (cate) => cate.spu)
  skuList: StockKeepingUnitEntity[];
}
