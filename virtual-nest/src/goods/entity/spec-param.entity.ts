import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SpecGroupEntity } from './spec-group.entity';

@Entity()
export class SpecParamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /** 是否为数字参数 */
  @Column({ type: 'boolean' })
  numeric: boolean;

  @Column()
  unit: string;

  @Column()
  segments: string;

  @Column({ type: 'boolean' })
  isDeleted: boolean;

  @ManyToOne(() => SpecGroupEntity, (item) => item.id)
  @JoinColumn()
  group: SpecGroupEntity;
}
