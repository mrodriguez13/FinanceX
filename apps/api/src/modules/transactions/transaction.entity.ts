import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'account_id', length: 36 })
  accountId!: string;

  @Column({ name: 'category_id', length: 36, nullable: true })
  categoryId?: string;

  @Column({ length: 255 })
  description!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  amount!: string;

  @Column({ length: 10 })
  currency!: string;

  @Column({ type: 'date' })
  date!: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
