import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StandardProductUnitEntity } from './standard-product-unit.entity';

/** 库存量单位 */
@Entity()
export class StockKeepingUnitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'json' })
  images: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: string;

  @Column({ type: 'json' })
  param: string;

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

  @ManyToOne(() => StandardProductUnitEntity, (cate) => cate.skuList)
  @JoinColumn()
  spu: StandardProductUnitEntity;
}
