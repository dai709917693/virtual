import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SpecParamEntity } from './spec-param.entity';
import { StandardProductUnitEntity } from './standard-product-unit.entity';

@Entity()
export class SpecGroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @OneToMany(() => SpecParamEntity, (item) => item.id)
  specParams: SpecParamEntity[];

  @OneToMany(() => StandardProductUnitEntity, (item) => item.spg)
  spu: StandardProductUnitEntity[];
}
