import {
  Entity,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
// import { CartEntity } from 'src/cart/cart.entity';
// import { OrderEntity } from 'src/order/order.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  role: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  //   @OneToMany((type) => CartEntity, (cart) => cart.id)
  //   @JoinColumn()
  //   cart: CartEntity[];

  //   @OneToOne((type) => OrderEntity, (order) => order.id)
  //   @JoinColumn()
  //   order: OrderEntity;
}
