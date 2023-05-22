import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'carts' })
export class CartEntity {
  @PrimaryGeneratedColumn()
  shoppingCartId: string;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Column({ name: 'total_price', nullable: false })
  totalPrice: number;

  @Column({ name: 'total_quantity', nullable: false })
  totalQuantity: number;

  @Column('jsonb')
  products: [];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
