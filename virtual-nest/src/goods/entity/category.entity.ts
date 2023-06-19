import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { BrandEntity } from './brand.entity';
import { StandardProductUnitEntity } from './standard-product-unit.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parentId: string;

  @Column({ type: 'boolean' })
  ifParent: boolean;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @ManyToMany(() => BrandEntity, (brand) => brand.categories)
  @JoinTable()
  brands: BrandEntity[];

  @OneToMany(() => StandardProductUnitEntity, (item) => item.category)
  spu: StandardProductUnitEntity[];
}
