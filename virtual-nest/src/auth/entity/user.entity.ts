import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

// import { CartEntity } from 'src/cart/cart.entity';
// import { OrderEntity } from 'src/order/order.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  username: string;

  @Exclude()
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
  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}
