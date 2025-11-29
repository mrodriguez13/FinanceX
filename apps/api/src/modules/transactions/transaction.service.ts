import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly repo: TransactionRepository) {}

  create(dto: CreateTransactionDto) {
    return this.repo.create({
      id: randomUUID(),
      accountId: dto.accountId,
      categoryId: dto.categoryId,
      description: dto.description,
      amount: dto.amount.toString(),
      currency: dto.currency,
      date: dto.date,
    });
  }

  findAll(accountId?: string) {
    if (accountId) return this.repo.findAllByAccount(accountId);
    return this.repo.findAll();
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateTransactionDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.remove(id);
  }
}
