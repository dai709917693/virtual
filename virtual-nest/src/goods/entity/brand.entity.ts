import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { StandardProductUnitEntity } from './standard-product-unit.entity';

@Entity()
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  letter: string;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @ManyToMany(() => CategoryEntity, (cate) => cate.brands)
  @JoinTable()
  categories: CategoryEntity[];

  @OneToMany(() => StandardProductUnitEntity, (item) => item.brand)
  spu: StandardProductUnitEntity[];
}
