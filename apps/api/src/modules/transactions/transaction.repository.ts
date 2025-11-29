import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionRepository {
  constructor(@InjectRepository(Transaction) private readonly repo: Repository<Transaction>) {}

  findAll() {
    return this.repo.find();
  }

  findAllByAccount(accountId: string) {
    return this.repo.find({ where: { accountId } });
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  create(transaction: Partial<Transaction>) {
    return this.repo.save(transaction);
  }

  update(id: string, data: Partial<Transaction>) {
    return this.repo.update({ id }, data);
  }

  remove(id: string) {
    return this.repo.softDelete({ id });
  }
}
