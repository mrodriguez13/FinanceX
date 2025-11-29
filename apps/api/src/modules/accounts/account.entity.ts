import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'user_id', length: 36 })
  userId!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 50 })
  type!: string;

  @Column({ length: 10 })
  currency!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0 })
  balance!: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;
}
